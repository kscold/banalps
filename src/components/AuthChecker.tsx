"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/stores/useAuthStore";

export default function AuthChecker() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openLoginModal, showSignupSuccess, showLoginSuccess } = useAuthStore();
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    // localStorage에서 로그인 진행 중 플래그 확인
    const loginInProgress = localStorage.getItem("loginInProgress");

    // 세션이 있고 로그인 진행 중이었다면
    if (status === "authenticated" && session && loginInProgress && !hasCheckedRef.current) {
      hasCheckedRef.current = true;
      localStorage.removeItem("loginInProgress");

      // 로그인 성공 모달 표시
      openLoginModal();
      setTimeout(() => {
        // 여기서 신규 가입 여부 체크 가능
        // 일단은 로그인 완료로 표시
        showLoginSuccess();
      }, 100);
    }

    // 에러 처리
    const error = searchParams.get("error");
    if (error === "AccessDenied") {
      localStorage.removeItem("loginInProgress");
      openLoginModal();
    }
  }, [session, status, searchParams, openLoginModal, showSignupSuccess, showLoginSuccess]);

  return null;
}