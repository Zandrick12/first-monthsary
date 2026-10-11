"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, Clock, Sparkles } from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";
import { RoseIllustration, TulipIllustration } from "./FloralIllustrations";

interface TimeStats {
  days: number;
  months: number;
  hours: number;
  minutes: number;
  seconds: number;
  isTodayMonthsary: boolean;
  daysToNext11th: number;
}

export function MonthsaryCounter() {
  const [stats, setStats] = useState<TimeStats | null>(null);
  const startDateStr = monthsaryConfig.couple.relationshipStartDate;

  useEffect(() => {
    if (!startDateStr) return;

    const startDate = new Date(startDateStr);
    if (isNaN(startDate.getTime())) return;

    const updateTimer = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();

      if (diffMs < 0) {
        setStats(null);
        return;
      }

      // Calculate total days
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      // Calculate approximate months
      let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
      if (now.getDate() < startDate.getDate()) {
        months = Math.max(0, months - 1);
      }

      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      const isTodayMonthsary = now.getDate() === monthsaryConfig.couple.monthsaryDay;

      // Next 11th calculation
      let nextTarget = new Date(now.getFullYear(), now.getMonth(), monthsaryConfig.couple.monthsaryDay);
      if (now.getDate() > monthsaryConfig.couple.monthsaryDay) {
        nextTarget = new Date(now.getFullYear(), now.getMonth() + 1, monthsaryConfig.couple.monthsaryDay);
      }
      const daysToNext11th = Math.ceil((nextTarget.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      setStats({
        days: totalDays,
        months,
        hours,
        minutes,
        seconds,
        isTodayMonthsary,
        daysToNext11th,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [startDateStr]);

  const hasConfiguredDate = Boolean(startDateStr && stats !== null);

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Decorative floral accents */}
      <div className="absolute top-6 left-4 opacity-70 pointer-events-none">
        <TulipIllustration className="w-16 h-20" />
      </div>
      <div className="absolute bottom-6 right-4 opacity-75 pointer-events-none">
        <RoseIllustration className="w-20 h-20" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs md:text-sm font-medium mb-3 border border-pink-200">
          <Calendar className="w-3.5 h-3.5 text-rose-500" />
          <span>Every Moment Counts</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3 tracking-tight">
          {monthsaryConfig.counter.sectionTitle}
        </h2>
        <p className="font-sans text-base text-rose-800/80 mb-10">
          {monthsaryConfig.counter.sectionSubtitle}
        </p>

        {hasConfiguredDate && stats ? (
          <div className="space-y-8">
            {/* Monthsary Special Day Notification */}
            {stats.isTodayMonthsary && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-pink-200 via-rose-200 to-emerald-200 border border-pink-300 shadow-md text-rose-950 font-serif font-bold text-lg sm:text-xl flex items-center justify-center gap-2.5"
              >
                <span>🎉</span>
                <span>Happy First Monthsary, My Love! Today is our special 11th!</span>
                <span>💗</span>
              </motion.div>
            )}

            {/* Counter Number Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Months Together */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-pink-200/90 shadow-[0_10px_25px_rgba(74,21,37,0.06)] flex flex-col items-center"
              >
                <div className="p-2.5 rounded-2xl bg-pink-100/80 text-rose-600 mb-2">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-rose-900">
                  {stats.months}
                </span>
                <span className="text-xs sm:text-sm font-medium text-rose-700/80 mt-1">
                  Months Together
                </span>
              </motion.div>

              {/* Days Together */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-pink-200/90 shadow-[0_10px_25px_rgba(74,21,37,0.06)] flex flex-col items-center"
              >
                <div className="p-2.5 rounded-2xl bg-rose-100/80 text-rose-600 mb-2">
                  <Heart className="w-6 h-6 fill-rose-300" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-rose-900">
                  {stats.days}
                </span>
                <span className="text-xs sm:text-sm font-medium text-rose-700/80 mt-1">
                  Days of Loving You
                </span>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-pink-200/90 shadow-[0_10px_25px_rgba(74,21,37,0.06)] flex flex-col items-center"
              >
                <div className="p-2.5 rounded-2xl bg-emerald-100/80 text-emerald-700 mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-rose-900">
                  {stats.hours}
                </span>
                <span className="text-xs sm:text-sm font-medium text-rose-700/80 mt-1">
                  Hours Cherished
                </span>
              </motion.div>

              {/* Seconds (live pulsing) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-pink-200/90 shadow-[0_10px_25px_rgba(74,21,37,0.06)] flex flex-col items-center"
              >
                <div className="p-2.5 rounded-2xl bg-amber-100/80 text-amber-600 mb-2">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-rose-900">
                  {stats.seconds}
                </span>
                <span className="text-xs sm:text-sm font-medium text-rose-700/80 mt-1">
                  Seconds & Counting
                </span>
              </motion.div>
            </div>

            {/* Romantic Sub-message */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-pink-200/80 shadow-sm max-w-xl mx-auto">
              <p className="font-handwriting text-2xl text-rose-900">
                &ldquo;{monthsaryConfig.counter.message}&rdquo;
              </p>
            </div>
          </div>
        ) : (
          /* Beautiful Static Card when Date is unconfigured */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-10 rounded-3xl bg-white/85 border border-pink-200/90 shadow-md max-w-xl mx-auto flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-rose-100/80 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-300 animate-pulse" />
            </div>
            <p className="font-serif text-2xl font-bold text-rose-950 mb-3">
              Every 11th Is Our Special Day 💗
            </p>
            <p className="font-handwriting text-2xl text-rose-800 leading-relaxed">
              &ldquo;{monthsaryConfig.counter.fallbackMessage}&rdquo;
            </p>
            <span className="mt-4 text-xs text-rose-500/70 font-sans">
              (You can set your exact anniversary date anytime in src/config/monthsary.config.ts)
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
