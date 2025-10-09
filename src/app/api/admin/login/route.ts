import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const SESSION_SECRET = process.env.JWT_ADMIN_SECRET || 'your-admin-secret-key';

// 비밀번호 해싱 (SHA-256)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// 세션 토큰 생성
function createSessionToken(username: string): string {
  const payload = JSON.stringify({
    username,
    role: 'admin',
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24시간
  });
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  return Buffer.from(JSON.stringify({ payload, signature })).toString('base64');
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    await connectDB();

    // DB에서 관리자 찾기
    let admin = await Admin.findOne({ username });

    // 없으면 환경변수로 체크 (초기 관리자)
    if (!admin) {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // 초기 관리자 생성
        admin = await Admin.create({
          username,
          password: hashPassword(password),
          role: 'admin',
        });
      } else {
        return NextResponse.json(
          {
            success: false,
            error: '아이디 또는 비밀번호가 일치하지 않습니다.',
          },
          { status: 401 },
        );
      }
    }

    // 비밀번호 확인
    const hashedPassword = hashPassword(password);
    if (admin.password !== hashedPassword) {
      return NextResponse.json(
        {
          success: false,
          error: '아이디 또는 비밀번호가 일치하지 않습니다.',
        },
        { status: 401 },
      );
    }

    // 세션 토큰 생성
    const token = createSessionToken(username);

    const response = NextResponse.json({
      success: true,
      message: '로그인 성공',
    });

    // 쿠키에 토큰 저장
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24시간
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('[로그인 에러]:', error);
    return NextResponse.json(
      {
        success: false,
        error: '로그인 중 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
