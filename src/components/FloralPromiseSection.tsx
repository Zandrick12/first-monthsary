"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";
import {
  FloralHeartWreath,
  RoseIllustration,
  TulipIllustration,
  ButterflyIllustration,
} from "./FloralIllustrations";

export function FloralPromiseSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-t from-pink-100/70 via-rose-50/50 to-transparent">
      {/* Decorative Butterflies & Flowers */}
      <div className="absolute top-10 left-10 opacity-70 pointer-events-none">
        <ButterflyIllustration className="w-8 h-8" color="#FDA4AF" />
      </div>
      <div className="absolute top-16 right-12 opacity-80 pointer-events-none">
        <ButterflyIllustration className="w-9 h-9" color="#A7CCA9" />
      </div>
      <div className="absolute bottom-16 left-6 opacity-75 pointer-events-none">
        <RoseIllustration className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="absolute bottom-16 right-6 opacity-75 pointer-events-none">
        <TulipIllustration className="w-16 h-20 md:w-20 md:h-24" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Glowing Floral Heart Wreath Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center">
            <FloralHeartWreath className="w-full h-full drop-shadow-md animate-pulse-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="w-12 h-12 text-rose-500 fill-rose-400 drop-shadow animate-heart-glow" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-4 tracking-tight"
        >
          {monthsaryConfig.closing.heading}
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-rose-900/85 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {monthsaryConfig.closing.text}
        </motion.p>

        {/* "One More Time? 💕" Button */}
        <motion.button
          onClick={scrollToGallery}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 text-white font-serif text-lg font-semibold shadow-lg shadow-rose-300/40 hover:shadow-xl hover:shadow-rose-400/50 transition-all flex items-center gap-2.5 mb-14"
        >
          <Sparkles className="w-4 h-4 text-amber-200 fill-amber-100" />
          <span>{monthsaryConfig.closing.buttonText}</span>
          <ArrowUp className="w-4 h-4" />
        </motion.button>

        {/* Footer Note */}
        <div className="pt-8 border-t border-pink-200/70 w-full flex flex-col items-center gap-2">
          <p className="font-script text-2xl text-rose-800">
            {monthsaryConfig.closing.footerText}
          </p>
          <p className="font-sans text-xs text-rose-600/70">
            Our First Monthsary &bull; Every 11th &bull; Celebrating Us
          </p>
        </div>
      </div>
    </footer>
  );
}
