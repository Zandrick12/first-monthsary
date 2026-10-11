"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Sparkles, ZoomIn } from "lucide-react";
import { monthsaryConfig, GalleryPhoto } from "@/config/monthsary.config";
import { PhotoLightbox } from "./PhotoLightbox";
import {
  WashiTape,
  RoseIllustration,
  TulipIllustration,
  ButterflyIllustration,
} from "./FloralIllustrations";

export function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 px-4 max-w-7xl mx-auto scroll-mt-10">
      {/* Decorative Garden Accents */}
      <div className="absolute top-10 left-4 md:left-8 opacity-75 pointer-events-none">
        <RoseIllustration className="w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute top-12 right-6 md:right-12 opacity-80 pointer-events-none">
        <ButterflyIllustration className="w-8 h-8" color="#FDA4AF" />
      </div>
      <div className="absolute bottom-16 right-4 md:right-10 opacity-70 pointer-events-none">
        <TulipIllustration className="w-20 h-24" />
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-pink-200/90 text-xs md:text-sm font-medium text-rose-800 shadow-sm mb-3 backdrop-blur-sm">
          <Camera className="w-3.5 h-3.5 text-rose-500" />
          <span>Our Little Scrapbook</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3 tracking-tight">
          Every Picture, A Piece of My Heart 📸
        </h2>
        <p className="font-sans text-base text-rose-800/80">
          Click any photo to open it in full view. Every single moment with you is my favorite memory.
        </p>
      </div>

      {/* Responsive Scrapbook Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-9">
        {monthsaryConfig.gallery.map((photo: GalleryPhoto, index: number) => {
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Scrapbook Polaroid Card */}
              <div
                onClick={() => setSelectedPhotoIndex(index)}
                style={{
                  transform: `rotate(${photo.rotation}deg)`,
                }}
                className="relative w-full cursor-pointer group bg-white rounded-2xl p-3.5 pb-5 shadow-[0_12px_28px_rgba(74,21,37,0.09)] border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(244,63,94,0.18)] hover:scale-[1.03] hover:rotate-0"
              >
                {/* Washi Tape Header */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape styleType={photo.tapeStyle} className="w-24 h-5" />
                </div>

                {/* Corner Floral Sticker Accent on Selected Cards */}
                {index % 3 === 0 && (
                  <div className="absolute -bottom-2 -right-2 z-20 pointer-events-none">
                    <Heart className="w-5 h-5 text-rose-400 fill-rose-300 drop-shadow" />
                  </div>
                )}
                {index % 4 === 1 && (
                  <div className="absolute -top-2 -left-2 z-20 pointer-events-none">
                    <Sparkles className="w-4 h-4 text-amber-400 fill-amber-300" />
                  </div>
                )}

                {/* Photo Image Frame */}
                <div
                  className={`relative w-full rounded-xl overflow-hidden bg-rose-50/60 border border-pink-100/80 ${
                    photo.aspectRatio === "portrait"
                      ? "h-72 sm:h-80"
                      : photo.aspectRatio === "landscape"
                      ? "h-56 sm:h-64"
                      : "h-64 sm:h-72"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      objectPosition: photo.objectPosition || "center 20%",
                    }}
                  />

                  {/* Gentle hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-rose-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/80 text-rose-600 backdrop-blur-sm shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Handwritten Memory Caption */}
                <div className="pt-3.5 px-1 text-center">
                  <p className="font-handwriting text-xl text-rose-900 leading-snug tracking-wide group-hover:text-rose-600 transition-colors">
                    {photo.caption}
                  </p>
                  {photo.memoryTag && (
                    <span className="inline-block mt-1 text-[11px] font-sans font-medium text-emerald-800/80 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {photo.memoryTag}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photos={monthsaryConfig.gallery}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </section>
  );
}
