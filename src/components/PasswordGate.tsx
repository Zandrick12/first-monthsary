"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Lock, KeyRound, Flower2 } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";
import { PetalCanvas } from "./PetalCanvas";
import {
  RoseIllustration,
  TulipIllustration,
  ButterflyIllustration,
  LeafVine,
} from "./FloralIllustrations";

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const trimmed = passwordInput.trim();
    if (trimmed === monthsaryConfig.password) {
      setErrorMessage("");
      setIsUnlocking(true);
      // Romantic delay for the blooming petal and heart unlock animation
      setTimeout(() => {
        onUnlock();
      }, 1200);
    } else {
      setErrorMessage(monthsaryConfig.gate.errorMessage);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 600);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF0F3] via-[#FDE8ED] to-[#EBF5EE] text-[#4A1525] px-4 selection:bg-pink-300 selection:text-pink-950">
      {/* Background Animated Floating Petals & Sparkles */}
      <PetalCanvas density={isUnlocking ? "celebrate" : "normal"} />

      {/* Decorative Corner Flowers & Vines */}
      <div className="pointer-events-none absolute -top-8 -left-8 md:top-2 md:left-2 opacity-80 transform -rotate-12 transition-transform duration-700">
        <RoseIllustration className="w-24 h-24 md:w-32 md:h-32 drop-shadow-sm" />
      </div>
      <div className="pointer-events-none absolute top-4 left-24 hidden sm:block opacity-75">
        <ButterflyIllustration className="w-8 h-8" color="#FDA4AF" />
      </div>
      <div className="pointer-events-none absolute -top-4 -right-6 md:top-3 md:right-4 opacity-85 transform rotate-45">
        <TulipIllustration className="w-20 h-24 md:w-28 md:h-32" />
      </div>
      <div className="pointer-events-none absolute bottom-4 -left-6 md:bottom-6 md:left-6 opacity-75">
        <LeafVine className="w-32 h-16 md:w-44 md:h-20" />
      </div>
      <div className="pointer-events-none absolute -bottom-6 -right-6 md:bottom-2 md:right-2 opacity-80 transform -rotate-45">
        <RoseIllustration className="w-24 h-24 md:w-32 md:h-32" />
      </div>
      <div className="pointer-events-none absolute bottom-24 right-16 hidden sm:block opacity-80">
        <ButterflyIllustration className="w-7 h-7" color="#A7CCA9" />
      </div>

      {/* Soft Ambient Background Blur Circles */}
      <div className="pointer-events-none absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl" />

      {/* Centered Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{
          opacity: 1,
          scale: isUnlocking ? 1.05 : 1,
          y: isUnlocking ? -10 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-20 w-full max-w-md p-8 md:p-10 rounded-3xl romantic-glass border border-pink-200/80 shadow-[0_20px_50px_rgba(244,114,182,0.15)] text-center transition-all duration-300 ${
          isShaking ? "animate-shake-error" : ""
        }`}
      >
        {/* Glowing Heart Crest */}
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-100 via-rose-100 to-emerald-100 border border-pink-200/80 flex items-center justify-center shadow-inner relative">
            <motion.div
              animate={
                isUnlocking
                  ? { scale: [1, 1.4, 2], rotate: [0, 15, -15, 0], opacity: [1, 1, 0] }
                  : { scale: [1, 1.15, 1] }
              }
              transition={
                isUnlocking
                  ? { duration: 1.1 }
                  : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
              }
              className="flex items-center justify-center"
            >
              {isUnlocking ? (
                <Sparkles className="w-9 h-9 text-rose-500 fill-rose-300 drop-shadow-md" />
              ) : (
                <Heart className="w-9 h-9 text-rose-500 fill-rose-400 drop-shadow-md" />
              )}
            </motion.div>

            {/* Orbiting Sparkle */}
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-5 h-5 text-amber-400 fill-amber-300 animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Flower2 className="w-4 h-4 text-emerald-500 opacity-80" />
            </div>
          </div>
        </div>

        {/* Romantic Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-rose-900 mb-2 leading-snug"
        >
          {monthsaryConfig.gate.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-base text-rose-800/80 mb-7 font-sans"
        >
          {monthsaryConfig.gate.subtitle}
        </motion.p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label
              htmlFor="monthsary-password"
              className="block text-xs md:text-sm font-medium text-rose-900/90 mb-1.5 flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-rose-500" />
                {monthsaryConfig.gate.passwordLabel}
              </span>
              <span className="text-[11px] text-emerald-700/80 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                Hint: A special date 🌷
              </span>
            </label>

            <div className="relative group">
              <input
                id="monthsary-password"
                type="text"
                autoComplete="off"
                disabled={isUnlocking}
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                placeholder={monthsaryConfig.gate.placeholder}
                className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-white/80 border-2 border-pink-200/90 text-rose-950 placeholder-rose-300 font-medium text-base shadow-sm focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-200/40 transition-all duration-200"
              />
              <Heart className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-400 fill-rose-200/60 transition-transform group-focus-within:scale-110 group-focus-within:text-rose-500" />
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50/90 border border-rose-200 text-rose-700 text-xs font-medium"
              >
                <span className="text-sm">🌸</span>
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isUnlocking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3.5 px-6 rounded-2xl font-serif text-base md:text-lg font-semibold tracking-wide text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 ${
              isUnlocking
                ? "bg-gradient-to-r from-emerald-500 to-rose-400 shadow-emerald-200/50"
                : "bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 hover:from-rose-500 hover:to-pink-600 shadow-rose-300/40 hover:shadow-rose-400/50"
            }`}
          >
            {isUnlocking ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Opening Our Garden... 🌸</span>
              </>
            ) : (
              <>
                <span>{monthsaryConfig.gate.buttonText}</span>
                <Heart className="w-4 h-4 fill-white/80" />
              </>
            )}
          </motion.button>
        </form>

        {/* Small Footer */}
        <div className="mt-8 pt-5 border-t border-pink-100/80 flex items-center justify-center gap-2 text-xs text-rose-700/70">
          <Flower2 className="w-3.5 h-3.5 text-pink-400" />
          <span className="font-sans italic">{monthsaryConfig.gate.footer}</span>
          <Flower2 className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </motion.div>

      {/* Romantic Floating Transition Overlay when Unlocking */}
      <AnimatePresence>
        {isUnlocking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-b from-rose-100/80 via-white/80 to-emerald-50/80 backdrop-blur-sm flex flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: [0.4, 1.2, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative">
                <Heart className="w-24 h-24 text-rose-500 fill-rose-400 drop-shadow-xl animate-pulse" />
                <Sparkles className="w-10 h-10 text-amber-300 fill-amber-200 absolute -top-2 -right-2 animate-bounce" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-rose-900">
                Welcome, My Love 💗
              </h2>
              <p className="font-script text-2xl text-rose-700">
                Opening our little garden of love... 🌷
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
