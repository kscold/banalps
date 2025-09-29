"use client";

import dynamic from 'next/dynamic';

// 하이드레이션 오류 방지를 위해 SSR 비활성화
const HairTransplantLayout = dynamic(
  () => import('./HairTransplantLayout'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFDF7"
      }}>
        <div style={{
          fontSize: "18px",
          color: "#272727",
          fontFamily: "'S-Core Dream', sans-serif"
        }}>
          Loading...
        </div>
      </div>
    )
  }
);

export default HairTransplantLayout;