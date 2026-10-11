"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordGate } from "@/components/PasswordGate";
import { HeroSection } from "@/components/HeroSection";
import { LoveLetter } from "@/components/LoveLetter";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MonthsaryCounter } from "@/components/MonthsaryCounter";
import { FloralPromiseSection } from "@/components/FloralPromiseSection";
import { PetalCanvas } from "@/components/PetalCanvas";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Heart, Sparkles } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";

export default function MonthsaryApp() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-[#4A1525] selection:bg-pink-300 selection:text-rose-950 font-sans relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="password-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <PasswordGate onUnlock={() => setIsUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="garden-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient Background Petals & Shimmer */}
            <PetalCanvas density="gentle" />

            {/* Romantic Top Navigation Bar */}
            <header className="fixed top-0 left-0 right-0 z-30 px-4 py-3 flex items-center justify-between backdrop-blur-md bg-white/70 border-b border-pink-200/50 shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-400 animate-pulse" />
                <span className="font-serif font-bold text-rose-950 text-base md:text-lg tracking-tight">
                  Our First Monthsary
                </span>
                <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-sans hidden sm:inline-block">
                  Every 11th 💗
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-rose-800">
                <a
                  href="#gallery"
                  className="hover:text-rose-600 transition-colors hidden sm:inline-block"
                >
                  Scrapbook
                </a>
                <span className="text-rose-300 hidden sm:inline-block">•</span>
                <div className="flex items-center gap-1.5 bg-rose-50 px-2.5 py-1 rounded-full border border-pink-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-serif">For {monthsaryConfig.couple.girlfriendName}</span>
                </div>
              </div>
            </header>

            {/* Section 1: Hero Section */}
            <HeroSection />

            {/* Subtle Divider Vine */}
            <div className="w-full flex justify-center py-4 text-pink-300 select-none">
              <span className="text-sm tracking-widest">🌸 &bull; 🌷 &bull; 🌸</span>
            </div>

            {/* Section 2: Love Letter Section */}
            <LoveLetter />

            {/* Section 3: Photo Gallery & Lightbox */}
            <PhotoGallery />

            {/* Section 4: Monthsary Counter */}
            <MonthsaryCounter />

            {/* Section 5: Closing Promise & Floral Heart */}
            <FloralPromiseSection />

            {/* Optional Floating Music Box Synthesizer */}
            <MusicPlayer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
