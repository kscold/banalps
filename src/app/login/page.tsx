'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/shared/stores/useAuthStore';

export default function LoginPage() {
  const router = useRouter();
  const { openLoginModal } = useAuthStore();

  useEffect(() => {
    openLoginModal();
    router.push('/');
  }, [openLoginModal, router]);

  return null;
}
