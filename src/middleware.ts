import { NextRequest, NextResponse } from 'next/server';

// Web Crypto API를 사용한 HMAC 생성 (Edge Runtime 호환)
async function createHmacSignature(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(message);

  const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);

  const signature = await crypto.subtle.sign('HMAC', key, messageData);
  const hashArray = Array.from(new Uint8Array(signature));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// Admin 토큰 검증 (Edge Runtime 호환 버전)
async function verifyAdminToken(request: NextRequest): Promise<boolean> {
  try {
    const SESSION_SECRET = process.env.JWT_ADMIN_SECRET;

    if (!SESSION_SECRET) {
      return false;
    }

    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return false;
    }

    // Base64 디코딩
    const decodedToken = atob(token);
    const decoded = JSON.parse(decodedToken);
    const { payload: payloadStr, signature } = decoded;

    // 서명 검증 (Web Crypto API 사용)
    const expectedSignature = await createHmacSignature(payloadStr, SESSION_SECRET);

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
    console.error('[Middleware 토큰 검증 에러]:', error);
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin 경로 보호 (로그인 페이지는 제외)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin') {
    const isAdmin = await verifyAdminToken(request);

    if (!isAdmin) {
      // Admin 토큰이 없으면 로그인 페이지로 리다이렉트
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname); // 로그인 후 원래 페이지로 돌아가기
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Middleware가 실행될 경로 설정
export const config = {
  matcher: [
    '/admin/:path*', // 모든 /admin 하위 경로
  ],
};
