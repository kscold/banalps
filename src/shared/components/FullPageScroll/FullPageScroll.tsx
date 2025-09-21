"use client";

import React from "react";
import HeroSection from "../../../widgets/Hero/HeroSection";
import { VideoSection } from "../../../widgets/Hero/VideoSection";
import BlueSection from "../../../widgets/BlueSection";
import WhiteSection from "../../../widgets/WhiteSection/WhiteSection";

interface FullPageScrollProps {
  onVideoEnd?: () => void;
}

export function FullPageScroll({ onVideoEnd }: FullPageScrollProps) {
  return (
    <div className="fullpage-container">
      {/* Hero Section */}
      <div className="section hero-section">
        <HeroSection />
      </div>

      {/* Video Section */}
      <div className="section video-section">
        <VideoSection showVideoSection={true} onVideoEnd={onVideoEnd} />
      </div>

      {/* Blue Section */}
      <div className="section blue-section">
        <BlueSection isActive={true} />
        <WhiteSection />
      </div>
    </div>
  );
}
