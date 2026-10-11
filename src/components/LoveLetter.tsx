"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";
import {
  RoseIllustration,
  TulipIllustration,
  LeafVine,
  WaxSeal,
  WashiTape,
} from "./FloralIllustrations";

export function LoveLetter() {
  return (
    <section className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Floating Garden Plants */}
      <div className="absolute top-12 left-6 md:left-20 opacity-70 pointer-events-none">
        <LeafVine className="w-32 h-14 md:w-44 md:h-18" color="#A7CCA9" />
      </div>
      <div className="absolute bottom-10 right-6 md:right-20 opacity-70 pointer-events-none">
        <RoseIllustration className="w-20 h-20 md:w-28 md:h-28" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-medium mb-3 border border-pink-200">
            <Sparkles className="w-3 h-3 text-rose-500" />
            <span>From My Heart to Yours</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rose-950">
            {monthsaryConfig.loveLetter.title}
          </h2>
        </div>

        {/* The Letter Card (Deckle edge stationery styling) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-12 rounded-3xl bg-[#FFFDF9] border border-pink-200/90 shadow-[0_20px_50px_rgba(74,21,37,0.08)] text-rose-950"
          style={{
            backgroundImage:
              "radial-gradient(#FFE3E8 0.75px, transparent 0.75px), radial-gradient(#E8F5EE 0.75px, #FFFDF9 0.75px)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        >
          {/* Washi Tape Header */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape styleType="sage" className="w-32 h-6 -rotate-1" />
          </div>

          {/* Corner Floral Stamps */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-80">
            <TulipIllustration className="w-12 h-14" />
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none opacity-70">
            <RoseIllustration className="w-14 h-14" />
          </div>

          {/* Inner Content */}
          <div className="relative z-10 space-y-6 text-base md:text-lg leading-relaxed text-rose-900/90 font-sans">
            {/* Greeting */}
            <p className="font-serif text-xl md:text-2xl font-bold text-rose-950 pb-1 border-b border-pink-200/60 inline-block">
              {monthsaryConfig.loveLetter.greeting}
            </p>

            {/* Letter Body Paragraphs */}
            {monthsaryConfig.loveLetter.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans leading-relaxed text-rose-900/90">
                {para}
              </p>
            ))}

            {/* Signature & Wax Seal */}
            <div className="pt-8 mt-6 border-t border-pink-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-500 font-semibold mb-1">
                  With all my affection
                </p>
                <p className="font-script text-3xl md:text-4xl text-rose-800 leading-none">
                  {monthsaryConfig.loveLetter.signature}
                </p>
              </div>

              {/* Romantic Wax Seal Badge */}
              <div className="self-end sm:self-center">
                <WaxSeal className="w-14 h-14 shadow-md hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
