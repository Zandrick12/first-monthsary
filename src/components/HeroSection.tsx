"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Heart } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";
import {
  RoseIllustration,
  TulipIllustration,
  ButterflyIllustration,
  LeafVine,
  WashiTape,
} from "./FloralIllustrations";

export function HeroSection() {
  const scrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative Garden Accents */}
      <div className="absolute top-10 left-4 md:left-12 opacity-80 pointer-events-none">
        <RoseIllustration className="w-16 h-16 md:w-24 md:h-24 animate-gentle-sway" />
      </div>
      <div className="absolute top-16 left-28 hidden md:block opacity-75 pointer-events-none">
        <ButterflyIllustration className="w-8 h-8" color="#FDA4AF" />
      </div>
      <div className="absolute top-8 right-6 md:right-16 opacity-80 pointer-events-none">
        <TulipIllustration className="w-16 h-20 md:w-20 md:h-24" />
      </div>
      <div className="absolute top-28 right-28 hidden md:block opacity-85 pointer-events-none">
        <ButterflyIllustration className="w-7 h-7" color="#A7CCA9" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Monthsary Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/90 shadow-sm text-xs md:text-sm font-medium text-rose-800 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
          <span>{monthsaryConfig.hero.badge}</span>
          <Sparkles className="w-3.5 h-3.5 text-rose-400 fill-rose-300" />
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-950 tracking-tight leading-tight md:leading-snug max-w-3xl mb-4"
        >
          {monthsaryConfig.hero.heading}
        </motion.h1>

        {/* Romantic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-script text-2xl sm:text-3xl md:text-3xl text-rose-700/90 max-w-2xl mb-10 leading-relaxed"
        >
          {monthsaryConfig.hero.subtitle}
        </motion.p>

        {/* Featured Photo with Romantic Scrapbook & Floral Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-10 group"
        >
          {/* Floral Vine Behind & Framing Photo */}
          <div className="absolute -top-7 -left-7 -right-7 -bottom-7 pointer-events-none rounded-3xl border-2 border-dashed border-pink-200/60 hidden sm:block" />

          {/* Corner Flowers Framing Photo */}
          <div className="absolute -top-6 -left-6 z-20 pointer-events-none transform -rotate-12">
            <RoseIllustration className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" />
          </div>
          <div className="absolute -bottom-6 -right-6 z-20 pointer-events-none transform rotate-12">
            <TulipIllustration className="w-16 h-20 md:w-20 md:h-24 drop-shadow-md" />
          </div>
          <div className="absolute -top-5 right-6 z-20 pointer-events-none">
            <ButterflyIllustration className="w-7 h-7" color="#A7CCA9" />
          </div>

          {/* Washi Tape Accent at Top Center */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <WashiTape styleType="pink" className="w-28 h-6 rotate-1" />
          </div>

          {/* Photo Polaroid Card */}
          <div className="relative p-3.5 sm:p-4 bg-white rounded-2xl shadow-[0_16px_40px_rgba(224,83,117,0.18)] border border-pink-100/90 max-w-xs sm:max-w-sm mx-auto transform -rotate-1 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-xl overflow-hidden bg-rose-50 border border-pink-100">
              <img
                src={monthsaryConfig.hero.featuredPhoto}
                alt={monthsaryConfig.hero.featuredPhotoAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: monthsaryConfig.hero.featuredObjectPosition || "center 20%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Handwritten Caption Under Photo */}
            <div className="pt-3 pb-1 text-center">
              <p className="font-handwriting text-lg sm:text-xl text-rose-800 tracking-wide">
                {monthsaryConfig.hero.featuredCaption}
              </p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400 mt-0.5">
                <Heart className="w-3 h-3 fill-rose-300 text-rose-400" />
                <span>My favorite person</span>
                <Heart className="w-3 h-3 fill-rose-300 text-rose-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Explore Memories CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <button
            onClick={scrollToGallery}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-emerald-400 text-white font-serif text-lg font-semibold shadow-lg shadow-rose-300/30 hover:shadow-xl hover:shadow-rose-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
          >
            <span>{monthsaryConfig.hero.exploreButtonText}</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <span className="text-xs text-rose-800/60 font-sans flex items-center gap-1">
            <span>Scroll down to walk through our garden</span>
            <span>🌷</span>
          </span>
        </motion.div>
      </div>

      {/* Decorative Bottom Leaf Vine */}
      <div className="w-full flex justify-center mt-12 opacity-60 pointer-events-none">
        <LeafVine className="w-48 h-12" color="#A7CCA9" />
      </div>
    </section>
  );
}
