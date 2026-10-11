"use client";

import React from "react";

/**
 * High-detail romantic floral SVG illustrations designed for the
 * soft pink and sage green romantic aesthetic.
 */

// Elegant Blooming Rose SVG
export function RoseIllustration({ className = "w-10 h-10", petalColor = "#FFB3C1", leafColor = "#A7CCA9" }: { className?: string; petalColor?: string; leafColor?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Stem and Leaves */}
      <path d="M50 55 C48 70 52 85 50 95" stroke={leafColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 70 C38 66 32 75 30 78 C38 82 46 76 50 72" fill={leafColor} opacity="0.85" />
      <path d="M50 63 C62 60 68 68 70 72 C62 75 54 69 50 65" fill={leafColor} opacity="0.85" />
      
      {/* Outer Rose Petals */}
      <path d="M50 18 C30 18 20 35 24 50 C28 62 45 66 50 66 C55 66 72 62 76 50 C80 35 70 18 50 18 Z" fill={petalColor} opacity="0.9" />
      
      {/* Mid Layer Petals */}
      <path d="M35 32 C32 44 40 56 50 56 C60 56 68 44 65 32 C60 25 40 25 35 32 Z" fill="#FFA3B5" />
      <path d="M42 26 C36 34 38 46 50 48 C62 46 64 34 58 26 C53 22 47 22 42 26 Z" fill="#F472B6" />
      
      {/* Inner Petal Swirl */}
      <path d="M46 34 C44 38 46 42 50 42 C54 42 56 38 54 34 C52 32 48 32 46 34 Z" fill="#E11D48" opacity="0.8" />
      <circle cx="50" cy="36" r="3" fill="#FFE4E8" />
    </svg>
  );
}

// Blooming Tulip SVG
export function TulipIllustration({ className = "w-8 h-8", petalColor = "#FDA4AF", leafColor = "#9BC49E" }: { className?: string; petalColor?: string; leafColor?: string }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Stem */}
      <path d="M40 45 C41 62 39 75 40 85" stroke={leafColor} strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M40 70 C25 65 18 50 20 40 C28 52 35 62 40 68" fill={leafColor} opacity="0.8" />
      <path d="M40 65 C55 60 62 46 60 36 C52 48 45 58 40 63" fill={leafColor} opacity="0.8" />
      {/* Tulip Petals */}
      <path d="M40 12 C28 20 22 36 28 48 C34 44 38 32 40 20 C42 32 46 44 52 48 C58 36 52 20 40 12 Z" fill={petalColor} />
      <path d="M26 26 C22 34 24 45 32 47 C28 40 28 32 26 26 Z" fill="#F472B6" />
      <path d="M54 26 C58 34 56 45 48 47 C52 40 52 32 54 26 Z" fill="#F472B6" />
    </svg>
  );
}

// Floating Butterfly SVG with fluttering wing motion
export function ButterflyIllustration({ className = "w-6 h-6", color = "#FDA4AF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate-butterfly`}>
      {/* Left Wings */}
      <path d="M30 30 C20 15 5 18 6 28 C7 38 20 36 30 32 Z" fill={color} opacity="0.88" />
      <path d="M30 32 C20 36 10 44 14 50 C18 54 26 46 30 35 Z" fill="#F472B6" opacity="0.75" />
      
      {/* Right Wings */}
      <path d="M30 30 C40 15 55 18 54 28 C53 38 40 36 30 32 Z" fill={color} opacity="0.88" />
      <path d="M30 32 C40 36 50 44 46 50 C42 54 34 46 30 35 Z" fill="#F472B6" opacity="0.75" />
      
      {/* Body & Antennae */}
      <path d="M30 22 C31 28 31 36 30 40" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      <path d="M29 22 C26 17 23 16 22 17" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M31 22 C34 17 37 16 38 17" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="30" cy="22" r="1.5" fill="#78350F" />
    </svg>
  );
}

// Delicate Leaf Vine Branch SVG
export function LeafVine({ className = "w-24 h-12", color = "#9BC49E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 25 C45 20 95 30 155 25" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaves along vine */}
      <path d="M30 23 C25 12 35 6 42 12 C44 18 38 22 30 23 Z" fill={color} opacity="0.85" />
      <path d="M55 26 C50 36 60 42 67 36 C69 30 63 26 55 26 Z" fill={color} opacity="0.85" />
      <path d="M85 24 C80 13 90 7 97 13 C99 19 93 23 85 24 Z" fill={color} opacity="0.85" />
      <path d="M115 26 C110 37 120 43 127 37 C129 31 123 27 115 26 Z" fill={color} opacity="0.85" />
      <path d="M140 25 C136 16 145 11 150 16 C152 21 147 24 140 25 Z" fill={color} opacity="0.85" />
    </svg>
  );
}

// Romantic Floral Heart Wreath SVG (For Closing Promise and Hero)
export function FloralHeartWreath({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Heart Vine Guides */}
      <path
        d="M100 165 C85 145 35 105 35 65 C35 38 58 20 85 32 C95 36 100 48 100 48 C100 48 105 36 115 32 C142 20 165 38 165 65 C165 105 115 145 100 165 Z"
        stroke="#A7CCA9"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />

      {/* Decorative Pastel Green Leaves along the heart */}
      <path d="M45 45 C36 40 38 32 46 34 C50 38 48 43 45 45 Z" fill="#9BC49E" />
      <path d="M155 45 C164 40 162 32 154 34 C150 38 152 43 155 45 Z" fill="#9BC49E" />
      <path d="M28 75 C22 72 23 64 30 65 C34 68 32 73 28 75 Z" fill="#88B88C" />
      <path d="M172 75 C178 72 177 64 170 65 C166 68 168 73 172 75 Z" fill="#88B88C" />
      <path d="M45 115 C38 118 36 110 42 108 C46 110 47 114 45 115 Z" fill="#9BC49E" />
      <path d="M155 115 C162 118 164 110 158 108 C154 110 153 114 155 115 Z" fill="#9BC49E" />
      <path d="M75 145 C68 148 68 140 74 138 C77 140 77 144 75 145 Z" fill="#88B88C" />
      <path d="M125 145 C132 148 132 140 126 138 C123 140 123 144 125 145 Z" fill="#88B88C" />

      {/* Pink Roses & Blossoms nestled on the heart */}
      {/* Top Center Blossom */}
      <circle cx="100" cy="50" r="10" fill="#FFB3C1" />
      <circle cx="100" cy="50" r="6" fill="#F472B6" />
      <circle cx="100" cy="50" r="2.5" fill="#FFE4E8" />

      {/* Top Left Rose */}
      <circle cx="65" cy="35" r="12" fill="#FFA3B5" />
      <circle cx="65" cy="35" r="7" fill="#E11D48" opacity="0.75" />
      <circle cx="65" cy="35" r="3" fill="#FFF0F3" />

      {/* Top Right Rose */}
      <circle cx="135" cy="35" r="12" fill="#FFA3B5" />
      <circle cx="135" cy="35" r="7" fill="#E11D48" opacity="0.75" />
      <circle cx="135" cy="35" r="3" fill="#FFF0F3" />

      {/* Mid Left Blossom */}
      <circle cx="34" cy="85" r="10" fill="#FFC2D1" />
      <circle cx="34" cy="85" r="5" fill="#F472B6" />

      {/* Mid Right Blossom */}
      <circle cx="166" cy="85" r="10" fill="#FFC2D1" />
      <circle cx="166" cy="85" r="5" fill="#F472B6" />

      {/* Lower Left Rose */}
      <circle cx="58" cy="128" r="9" fill="#FDA4AF" />
      <circle cx="58" cy="128" r="4.5" fill="#E11D48" opacity="0.65" />

      {/* Lower Right Rose */}
      <circle cx="142" cy="128" r="9" fill="#FDA4AF" />
      <circle cx="142" cy="128" r="4.5" fill="#E11D48" opacity="0.65" />

      {/* Bottom Tip Blossom */}
      <circle cx="100" cy="165" r="11" fill="#FFB3C1" />
      <circle cx="100" cy="165" r="6" fill="#F472B6" />
      <circle cx="100" cy="165" r="2.5" fill="#FFE4E8" />

      {/* Tiny Sparkles */}
      <path d="M100 22 L101 26 L105 27 L101 28 L100 32 L99 28 L95 27 L99 26 Z" fill="#FBBF24" opacity="0.9" />
      <path d="M25 50 L26 53 L29 54 L26 55 L25 58 L24 55 L21 54 L24 53 Z" fill="#FBBF24" opacity="0.9" />
      <path d="M175 50 L176 53 L179 54 L176 55 L175 58 L174 55 L171 54 L174 53 Z" fill="#FBBF24" opacity="0.9" />
    </svg>
  );
}

// Decorative Scrapbook Washi Tape
export function WashiTape({ styleType = "pink", className = "w-24 h-6" }: { styleType?: "pink" | "sage" | "gold"; className?: string }) {
  const tapeClass =
    styleType === "pink"
      ? "washi-tape-pink"
      : styleType === "sage"
      ? "washi-tape-sage"
      : "washi-tape-gold";

  return (
    <div
      className={`rounded-sm pointer-events-none ${tapeClass} ${className}`}
      style={{
        clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
      }}
    />
  );
}

// Romantic Wax Seal Stamp
export function WaxSeal({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 shadow-lg text-white font-serif border-2 border-rose-400/60 ${className}`}>
      <div className="absolute inset-1 rounded-full border border-dashed border-rose-300/40" />
      <span className="text-xl select-none">💗</span>
    </div>
  );
}
