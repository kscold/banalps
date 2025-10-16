/**
 * 관리자 API 호출 래퍼 함수
 * 401/403 에러 발생 시 자동으로 로그인 페이지로 리다이렉트
 */
export async function adminFetch(url: string, options?: RequestInit): Promise<Response> {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include', // 쿠키 포함
    });

    // 401 (Unauthorized) 또는 403 (Forbidden) 에러 처리
    if (response.status === 401 || response.status === 403) {
      console.warn(`[인증 에러] ${response.status}: 토큰이 만료되었거나 유효하지 않습니다.`);

      // 로그인 페이지로 리다이렉트
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }

      throw new Error('인증이 필요합니다. 로그인 페이지로 이동합니다.');
    }

    return response;
  } catch (error) {
    // 네트워크 에러 등 다른 에러는 그대로 throw
    if (error instanceof Error && error.message.includes('인증이 필요합니다')) {
      throw error;
    }

    console.error('[API 호출 에러]:', error);
    throw error;
  }
}

/**
 * JSON 응답을 기대하는 관리자 API 호출 래퍼
 */
export async function adminFetchJSON<T = any>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await adminFetch(url, options);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `API 요청 실패: ${response.status}`);
  }

  return response.json();
}
