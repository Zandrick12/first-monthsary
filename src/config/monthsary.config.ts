/**
 * ==============================================================================
 * OUR FIRST MONTHSARY 💗 — CONFIGURATION FILE
 * ==============================================================================
 * 
 * Welcome! This is the central control panel for your romantic website.
 * You can customize the password, photos, captions, love letter, and your
 * anniversary / relationship start date right here without touching any complex code.
 *
 * HOW TO CUSTOMIZE:
 * 1. PASSWORD: Change `password` below (Default is "11").
 * 2. YOUR PHOTOS: Place your girlfriend's photos in the `public/images/monthsary/` folder.
 *    Name them according to `src` below (or update the file paths here).
 * 3. RELATIONSHIP DATE: Set `relationshipStartDate` to your anniversary (e.g. "2024-09-11").
 *    If you don't know the exact date yet, leave it as null to show a romantic static message.
 * 4. LOVE LETTER & CAPTIONS: Edit any text below freely!
 * ==============================================================================
 */

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  memoryTag?: string;
  tapeStyle: "pink" | "sage" | "gold";
  rotation: number; // e.g. -2, 2.5 for natural scrapbook tilt
  objectPosition?: string; // CSS object-position to ensure her face is perfectly visible!
  aspectRatio?: "square" | "portrait" | "landscape";
}

export const monthsaryConfig = {
  // ---------------------------------------------------------------------------
  // 🔐 1. PASSWORD GATE SETTINGS
  // ---------------------------------------------------------------------------
  // The secret passcode to unlock the website. Enter "11" by default.
  password: "11",

  gate: {
    heading: "A Little Surprise for You, My Love 💗",
    subtitle: "A special place made just for you.",
    passwordLabel: "When is our monthsary?",
    placeholder: "Enter the day (e.g. 11)... 🌸",
    buttonText: "Unlock My Heart 💕",
    footer: "Made with love, just for you.",
    errorMessage: "Oops, my love! Try again. 🌸",
  },

  // ---------------------------------------------------------------------------
  // ⏳ 2. COUPLE & MONTHSARY DETAILS
  // ---------------------------------------------------------------------------
  couple: {
    girlfriendName: "My Love",
    nickname: "Prettiest Girl",
    monthsaryDay: 11, // The 11th of every month
    
    /**
     * RELATIONSHIP START DATE (Format: "YYYY-MM-DD" e.g., "2024-09-11")
     * 
     * - If set to a valid date: The live counter calculates days & months together.
     * - If set to null: Displays a beautiful static message ("Another day loving you...")
     *   without displaying an unverified number.
     */
    relationshipStartDate: "2024-09-11" as string | null,
  },

  // ---------------------------------------------------------------------------
  // 🌷 3. HERO SECTION
  // ---------------------------------------------------------------------------
  hero: {
    badge: "Our First Monthsary • Every 11th Is Special",
    heading: "To My Favorite Person in the World 💗",
    subtitle: "Every picture holds a little piece of my heart.",
    exploreButtonText: "Explore Our Memories 🌸",
    featuredPhoto: "/images/monthsary/featured-love.jpg",
    featuredPhotoAlt: "My gorgeous girlfriend",
    featuredCaption: "The reason behind all my happiest smiles 🌷",
    featuredObjectPosition: "center 20%", // keeps face in focus
  },

  // ---------------------------------------------------------------------------
  // 💌 4. LOVE LETTER
  // ---------------------------------------------------------------------------
  loveLetter: {
    title: "A Little Letter for You",
    greeting: "My love, happy first monthsary! 💗",
    paragraphs: [
      "Thank you for becoming a beautiful part of my life. Even the simplest moments feel special because I get to share them with you. Every photo reminds me of how lucky I am to have you, and every day gives me another reason to appreciate you.",
      "This little website is my small way of showing you how special you are to me. No matter how simple this gift may be, every part of it was made with love, just for you.",
      "Happy first monthsary, my love. Here's to more memories, more laughter, more hugs, and many more months together. I love you! 🌷💚",
    ],
    signature: "Forever yours, with love 💗",
  },

  // ---------------------------------------------------------------------------
  // 📸 5. PHOTO GALLERY (SCRAPBOOK)
  // ---------------------------------------------------------------------------
  // Replace placeholder image paths with her pictures in `public/images/monthsary/`
  // Adjust objectPosition (e.g. "center 20%" or "center top") so her face is never cropped!
  gallery: [
    {
      id: "photo-1",
      src: "/images/monthsary/photo-1.jpg",
      alt: "My favorite smile",
      caption: "My favorite smile 🌸",
      memoryTag: "Sweet Smile",
      tapeStyle: "pink",
      rotation: -2,
      objectPosition: "center 25%",
      aspectRatio: "portrait",
    },
    {
      id: "photo-2",
      src: "/images/monthsary/photo-2.jpg",
      alt: "The prettiest girl in my world",
      caption: "The prettiest girl in my world 💗",
      memoryTag: "Pure Elegance",
      tapeStyle: "sage",
      rotation: 2.2,
      objectPosition: "center 20%",
      aspectRatio: "square",
    },
    {
      id: "photo-3",
      src: "/images/monthsary/photo-3.jpg",
      alt: "My happiness, in one picture",
      caption: "My happiness, in one picture.",
      memoryTag: "Golden Hour",
      tapeStyle: "gold",
      rotation: -1.2,
      objectPosition: "center 30%",
      aspectRatio: "portrait",
    },
    {
      id: "photo-4",
      src: "/images/monthsary/photo-4.jpg",
      alt: "A face I'll never get tired of seeing",
      caption: "A face I'll never get tired of seeing.",
      memoryTag: "Cute Moments",
      tapeStyle: "pink",
      rotation: 1.8,
      objectPosition: "center 20%",
      aspectRatio: "square",
    },
    {
      id: "photo-5",
      src: "/images/monthsary/photo-5.jpg",
      alt: "My favorite person, always",
      caption: "My favorite person, always.",
      memoryTag: "Favorite Memory",
      tapeStyle: "sage",
      rotation: -2.5,
      objectPosition: "center 25%",
      aspectRatio: "portrait",
    },
    {
      id: "photo-6",
      src: "/images/monthsary/photo-6.jpg",
      alt: "And somehow, I keep falling for you",
      caption: "And somehow, I keep falling for you. 💚",
      memoryTag: "Heart & Soul",
      tapeStyle: "gold",
      rotation: 1.5,
      objectPosition: "center 30%",
      aspectRatio: "landscape",
    },
    {
      id: "photo-7",
      src: "/images/monthsary/photo-7.jpg",
      alt: "Every moment with you is magic",
      caption: "Every gentle moment with you is magic ✨",
      memoryTag: "Pure Joy",
      tapeStyle: "pink",
      rotation: -1.8,
      objectPosition: "center 20%",
      aspectRatio: "square",
    },
    {
      id: "photo-8",
      src: "/images/monthsary/photo-8.jpg",
      alt: "Here's to a lifetime of memories",
      caption: "My heart found its favorite home in you 🌷",
      memoryTag: "Forever Us",
      tapeStyle: "sage",
      rotation: 2,
      objectPosition: "center 25%",
      aspectRatio: "portrait",
    },
  ] as GalleryPhoto[],

  // ---------------------------------------------------------------------------
  // ⏳ 6. MONTHSARY COUNTER
  // ---------------------------------------------------------------------------
  counter: {
    sectionTitle: "Counting Every Beautiful Second ⏳",
    sectionSubtitle: "Time flies, but every moment with you is timeless.",
    message: "Another day loving you is another day worth celebrating.",
    fallbackMessage: "Another day loving you is another day worth celebrating. 💗",
  },

  // ---------------------------------------------------------------------------
  // 🌹 7. FINAL SECTION — A PROMISE OF MORE MEMORIES
  // ---------------------------------------------------------------------------
  closing: {
    heading: "This Is Just the Beginning...",
    text: "More memories, more smiles, and more months with you. I can't wait to see what our love story becomes.",
    buttonText: "One More Time? 💕",
    footerText: "Made with all my love, just for you. 🌷",
  },

  // ---------------------------------------------------------------------------
  // 🎶 8. BACKGROUND MUSIC ("Passenger Seat" by Stephen Speaks)
  // ---------------------------------------------------------------------------
  music: {
    songTitle: "Passenger Seat",
    artist: "Stephen Speaks",
    // Primary audio file (Place your licensed MP3 in public/music/passenger-seat.mp3)
    primarySrc: "/music/passenger-seat.mp3",
    // Acoustic chords fallback audio file
    fallbackSrc: "/music/passenger-seat.wav",
    autoPlay: true,
    defaultVolume: 0.7, // 0.0 to 1.0
  },
};
