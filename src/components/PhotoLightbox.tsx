"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import { GalleryPhoto } from "@/config/monthsary.config";

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation: Escape to close, Arrow Left/Right to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Soft Blurred Romantic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#35101C]/80 backdrop-blur-md"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 transition-all hover:scale-110 active:scale-95 shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation - Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Photo"
          className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 transition-all hover:scale-110 active:scale-95 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation - Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Photo"
          className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 transition-all hover:scale-110 active:scale-95 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Lightbox Content Container */}
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-40 max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
        >
          {/* Framed Image Card */}
          <div className="relative w-full bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-pink-100 flex flex-col items-center">
            {/* Top Indicator & Memory Tag */}
            <div className="w-full flex items-center justify-between px-2 pb-2 text-xs text-rose-800 font-medium">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-300" />
                {currentPhoto.memoryTag || "Special Moment"}
              </span>
              <span className="bg-rose-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                {currentIndex + 1} of {photos.length}
              </span>
            </div>

            {/* The Photo Container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden bg-rose-50/50 flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-w-full max-h-full object-contain"
                style={{
                  objectPosition: currentPhoto.objectPosition || "center center",
                }}
              />
            </div>

            {/* Caption & Romantic Footer */}
            <div className="w-full pt-3 pb-1 text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-rose-950 tracking-wide">
                {currentPhoto.caption}
              </p>
              <div className="flex items-center justify-center gap-2 mt-1 text-xs text-rose-500 font-sans">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Our First Monthsary Memory</span>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
