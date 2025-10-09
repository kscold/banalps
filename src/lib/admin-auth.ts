import { NextRequest } from 'next/server';
import crypto from 'crypto';

const SESSION_SECRET = process.env.JWT_ADMIN_SECRET;

if (!SESSION_SECRET) {
  throw new Error('JWT_ADMIN_SECRET 환경 변수가 설정되지 않았습니다.');
}

export async function verifyAdminToken(request: NextRequest): Promise<boolean> {
  try {
    if (!SESSION_SECRET) {
      console.error('[토큰 검증 에러] SESSION_SECRET이 설정되지 않음');
      return false;
    }

    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return false;
    }

    // Base64 디코딩
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const { payload: payloadStr, signature } = decoded;

    // 서명 검증
    const expectedSignature = crypto.createHmac('sha256', SESSION_SECRET).update(payloadStr).digest('hex');

    if (signature !== expectedSignature) {
      return false;
    }

    // Payload 파싱
    const payload = JSON.parse(payloadStr);

    // 만료 시간 확인
    if (payload.exp < Date.now()) {
      return false;
    }

    return payload.role === 'admin';
  } catch (error) {
    console.error('[토큰 검증 에러]:', error);
    return false;
  }
}
