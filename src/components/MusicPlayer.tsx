"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Music,
  Heart,
  Sparkles,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { monthsaryConfig } from "@/config/monthsary.config";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(monthsaryConfig.music.defaultVolume ?? 0.7);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play audio helper with safety
  const startPlayback = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = isMuted ? 0 : volume;
      await audioRef.current.play();
      setIsPlaying(true);
      setIsAutoplayBlocked(false);
    } catch (err) {
      console.warn("Autoplay blocked by browser policy:", err);
      setIsAutoplayBlocked(true);
      setIsPlaying(false);
    }
  }, [isMuted, volume]);

  // Attempt auto-start on mount (when transitioned to the main page)
  useEffect(() => {
    if (monthsaryConfig.music.autoPlay) {
      startPlayback();
    }
  }, [startPlayback]);

  // Handle Play / Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      startPlayback();
    }
  };

  // Handle Mute / Unmute Toggle
  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
    if (!nextMuted) {
      audioRef.current.volume = volume;
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  // Time update listener
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (!isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  // Format seconds to mm:ss
  const formatTime = (sec: number) => {
    if (isNaN(sec) || sec === 0) return "0:00";
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={monthsaryConfig.music.primarySrc} type="audio/mpeg" />
        <source src={monthsaryConfig.music.fallbackSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Prominent "Tap to play our song" Banner if browser blocks initial autoplay */}
      <AnimatePresence>
        {isAutoplayBlocked && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50"
          >
            <button
              onClick={startPlayback}
              className="group relative px-5 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 text-white font-serif font-bold text-sm shadow-[0_12px_28px_rgba(244,63,94,0.4)] border border-pink-200/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 animate-bounce"
            >
              <Sparkles className="w-4 h-4 text-amber-200 fill-amber-100 animate-spin" style={{ animationDuration: "4s" }} />
              <span>Tap to play our song 💗🎶</span>
              <Music className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Floating Romantic Music Player */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40"
      >
        <div className="relative rounded-2xl sm:rounded-3xl romantic-glass border border-pink-200/90 shadow-[0_12px_36px_rgba(224,83,117,0.18)] p-2.5 sm:p-3 transition-all duration-300">
          {/* Main Player Row */}
          <div className="flex items-center gap-3">
            {/* Spinning Heart Vinyl Art */}
            <div
              onClick={togglePlay}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer group flex items-center justify-center bg-gradient-to-tr from-rose-900 via-rose-800 to-pink-900 border-2 border-pink-200 shadow-md flex-shrink-0"
            >
              {/* Spinning Record Grooves */}
              <div
                className={`absolute inset-1 rounded-full border border-rose-700/50 flex items-center justify-center transition-transform ${
                  isPlaying ? "animate-spin" : ""
                }`}
                style={{ animationDuration: "6s" }}
              >
                <div className="w-4 h-4 rounded-full bg-pink-100 flex items-center justify-center shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-900" />
                </div>
              </div>

              {/* Center Heart Emblem / Play Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-rose-950/40 rounded-full transition-colors">
                {isPlaying ? (
                  <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300 group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                )}
              </div>
            </div>

            {/* Song Information & Equalizer */}
            <div className="flex flex-col min-w-0 pr-1">
              <div className="flex items-center gap-1.5">
                {/* Title */}
                <span className="font-serif font-bold text-rose-950 text-xs sm:text-sm tracking-tight truncate max-w-[140px] sm:max-w-[190px]">
                  {monthsaryConfig.music.songTitle}
                </span>

                {/* Animated Equalizer Waves */}
                <div className="flex items-end gap-0.5 h-3.5 flex-shrink-0">
                  <span
                    className={`w-0.5 rounded-full bg-rose-500 transition-all ${
                      isPlaying
                        ? "h-3 animate-pulse"
                        : "h-1 opacity-50"
                    }`}
                  />
                  <span
                    className={`w-0.5 rounded-full bg-pink-500 transition-all ${
                      isPlaying
                        ? "h-2.5 animate-pulse"
                        : "h-1.5 opacity-50"
                    }`}
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span
                    className={`w-0.5 rounded-full bg-rose-400 transition-all ${
                      isPlaying
                        ? "h-3.5 animate-pulse"
                        : "h-1 opacity-50"
                    }`}
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>

              {/* Artist */}
              <div className="flex items-center gap-1 text-[11px] text-rose-600/90 font-sans">
                <span>{monthsaryConfig.music.artist}</span>
                <span className="text-pink-300">•</span>
                <span className="text-[10px] text-emerald-700/80 font-medium">Our Song 💗</span>
              </div>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-1 sm:gap-1.5 pl-1 border-l border-pink-100 flex-shrink-0">
              {/* Play / Pause Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="p-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-800 transition-all hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-rose-600" />
                ) : (
                  <Play className="w-4 h-4 fill-rose-600 ml-0.5" />
                )}
              </button>

              {/* Mute / Unmute Button */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="p-2 rounded-full hover:bg-rose-50 text-rose-600/80 hover:text-rose-900 transition-all"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Expand / Minimize Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Collapse volume control" : "Expand volume control"}
                className="p-1 rounded-full text-rose-400 hover:text-rose-600 transition-colors hidden sm:block"
              >
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <ChevronUp className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Expandable Volume Slider & Progress Bar */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="pt-2.5 mt-2 border-t border-pink-100/80 flex items-center justify-between gap-3 text-xs"
              >
                {/* Volume slider */}
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[10px] text-rose-500/80 font-medium select-none">
                    Vol
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume slider"
                    className="w-20 sm:w-28 h-1.5 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-500 focus:outline-none"
                  />
                  <span className="text-[10px] text-rose-500/80 select-none">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </span>
                </div>

                {/* Playing Duration Time */}
                {duration > 0 && (
                  <span className="text-[10px] text-rose-400 font-mono select-none">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>
    </>
  );
}
