// Admin 페이지는 항상 동적으로 렌더링 (인증, 실시간 데이터)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
