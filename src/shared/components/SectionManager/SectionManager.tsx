"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSectionManager, SectionType } from "../../hooks/useSectionManager";
import HeroSection from "../../../widgets/Hero/HeroSection";
import { VideoSection } from "../../../widgets/Hero/VideoSection";
import BlueSection from "../../../widgets/BlueSection";
import WhiteSection from "../../../widgets/WhiteSection/WhiteSection";

interface SectionManagerProps {
  onVideoEnd?: () => void;
}

export function SectionManager({ onVideoEnd }: SectionManagerProps) {
  const { sectionState, goToSection } = useSectionManager();

  const renderSection = (section: SectionType) => {
    switch (section) {
      case "hero":
        return <HeroSection />;
      case "video":
        return <VideoSection showVideoSection={true} onVideoEnd={onVideoEnd} />;
      case "blue":
        return (
          <div className="fixed inset-0 z-50">
            <BlueSection
              isActive={true}
              onTransitionToVideo={() => goToSection("video")}
            />
            <WhiteSection />
          </div>
        );
      case "white":
        return <WhiteSection />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={sectionState.currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderSection(sectionState.currentSection)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
