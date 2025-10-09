'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // /admin 접근 시 로그인 페이지로 리다이렉트
    router.push('/admin/login');
  }, [router]);

  return null;
}
