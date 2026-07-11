import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { WeddingRingsSvg, IslamicMandala } from './Ornaments';

const GoldenLeafCorner = ({ className, sizeClasses = "w-20 h-32 sm:w-24 sm:h-40 md:w-32 md:h-52" }: { className?: string; sizeClasses?: string }) => (
  <svg className={`absolute pointer-events-none z-40 ${sizeClasses} ${className}`} viewBox="0 0 100 160" fill="none">
    <defs>
      <linearGradient id="gold-grad-door" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbf0" />
        <stop offset="20%" stopColor="#ffd97d" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="85%" stopColor="#aa7c11" />
        <stop offset="100%" stopColor="#5c4314" />
      </linearGradient>
      <linearGradient id="leafHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#ffe49e" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Ultra-elegant fine corner border lines */}
    <path d="M 100 6 L 45 6" stroke="url(#gold-grad-door)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
    <path d="M 94 0 L 94 55" stroke="url(#gold-grad-door)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
    
    {/* Graceful flowing main stems */}
    <path d="M 94 0 C 85 40, 65 95, 30 135" stroke="url(#gold-grad-door)" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.95" />
    <path d="M 94 15 C 78 45, 60 75, 45 105" stroke="url(#gold-grad-door)" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.75" />
    
    {/* Delicate line-art leaves with elegant fine-line details and extremely soft gold shimmers */}
    {/* Leaf 1 */}
    <g>
      <path d="M 88 12 C 78 18, 64 25, 58 38 C 68 35, 82 25, 88 12 Z" fill="url(#gold-grad-door)" fillOpacity="0.15" stroke="url(#gold-grad-door)" strokeWidth="1.2" />
      <path d="M 88 12 C 78 22, 58 38, 58 38" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.7" />
      <path d="M 78 20 C 76 23, 82 24, 82 24" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
      <path d="M 70 26 C 68 29, 74 30, 74 30" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
    </g>
    
    {/* Leaf 2 */}
    <g>
      <path d="M 84 34 C 72 40, 60 52, 53 66 C 63 60, 78 48, 84 34 Z" fill="url(#gold-grad-door)" fillOpacity="0.15" stroke="url(#gold-grad-door)" strokeWidth="1.2" />
      <path d="M 84 34 C 72 44, 53 66, 53 66" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.7" />
      <path d="M 74 42 C 72 45, 78 46, 78 46" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
      <path d="M 66 49 C 64 52, 70 53, 70 53" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
    </g>
    
    {/* Leaf 3 */}
    <g>
      <path d="M 74 58 C 60 65, 48 80, 42 96 C 52 89, 68 74, 74 58 Z" fill="url(#gold-grad-door)" fillOpacity="0.15" stroke="url(#gold-grad-door)" strokeWidth="1.2" />
      <path d="M 74 58 C 60 68, 42 96, 42 96" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.7" />
      <path d="M 64 66 C 62 69, 68 70, 68 70" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
      <path d="M 55 74 C 53 77, 59 78, 59 78" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
    </g>

    {/* Leaf 4 */}
    <g>
      <path d="M 62 88 C 48 95, 38 110, 32 126 C 42 119, 56 104, 62 88 Z" fill="url(#gold-grad-door)" fillOpacity="0.15" stroke="url(#gold-grad-door)" strokeWidth="1.2" />
      <path d="M 62 88 C 48 98, 32 126, 32 126" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.7" />
      <path d="M 52 96 C 50 99, 56 100, 56 100" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.6" />
    </g>

    {/* Leaf 5 */}
    <g>
      <path d="M 48 114 C 36 120, 28 132, 24 145 C 32 138, 44 125, 48 114 Z" fill="url(#gold-grad-door)" fillOpacity="0.15" stroke="url(#gold-grad-door)" strokeWidth="1.2" />
      <path d="M 48 114 C 36 124, 24 145, 24 145" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.7" />
    </g>

    {/* Delicate outward secondary leaves */}
    <path d="M 94 25 C 92 38, 86 50, 78 58 C 84 46, 90 34, 94 25 Z" fill="url(#gold-grad-door)" fillOpacity="0.1" stroke="url(#gold-grad-door)" strokeWidth="1.0" />
    <path d="M 84 62 C 82 72, 76 82, 68 88 C 74 78, 80 68, 84 62 Z" fill="url(#gold-grad-door)" fillOpacity="0.1" stroke="url(#gold-grad-door)" strokeWidth="1.0" />
    <path d="M 68 100 C 66 108, 60 116, 52 121 C 58 112, 64 104, 68 100 Z" fill="url(#gold-grad-door)" fillOpacity="0.1" stroke="url(#gold-grad-door)" strokeWidth="1.0" />

    {/* Elegant tiny details (sparkles & pearls) */}
    <circle cx="30" cy="135" r="1.5" fill="url(#gold-grad-door)" />
    <circle cx="45" cy="105" r="1.2" fill="url(#gold-grad-door)" />
    <circle cx="58" cy="38" r="1.0" fill="url(#gold-grad-door)" />
    
    {/* Micro star sparkles */}
    <path d="M 40 50 L 41 52 L 43 52.5 L 41.5 54 L 42 56 L 40 54.5 L 38 56 L 38.5 54 L 37 52.5 L 39 52 Z" fill="url(#gold-grad-door)" />
    <path d="M 22 105 L 23 106.5 L 25 107 L 23.5 108.5 L 24 110.5 L 22 109 L 20 110.5 L 20.5 108.5 L 19 107 L 21 106.5 Z" fill="url(#gold-grad-door)" opacity="0.8" />
  </svg>
);

const StaticGoldHeart = ({ className, scale = 1, rotate = 0 }: { className?: string; scale?: number; rotate?: number }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} pointer-events-none`}
    style={{ transform: `scale(${scale}) rotate(${rotate}deg)`, transformOrigin: 'center' }}
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#luxeGoldGrad)"
      stroke="url(#luxeGoldLight)"
      strokeWidth="0.5"
    />
  </svg>
);

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardExited, setCardExited] = useState(false);



  const handleOpenClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Smooth transition directly to the main invitation after the flap opens
    setTimeout(() => {
      setCardExited(true);
      setTimeout(() => {
        onOpen();
      }, 600); 
    }, 1100); 
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between px-4 md:px-8 py-12 md:py-20 overflow-hidden relative select-none bg-[#b39572]">
      {/* Invisible global SVG gradients for luxurious golden looks */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <linearGradient id="luxeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5dfa8" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#aa7c11" />
          </linearGradient>
          <linearGradient id="luxeGoldLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff2d4" />
            <stop offset="50%" stopColor="#e7cb85" />
            <stop offset="100%" stopColor="#cda54a" />
          </linearGradient>
          <linearGradient id="waxDarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfb75c" />
            <stop offset="40%" stopColor="#bd963c" />
            <stop offset="80%" stopColor="#936f23" />
            <stop offset="100%" stopColor="#634811" />
          </linearGradient>
          <linearGradient id="waxMaroneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6e0f12" />
            <stop offset="35%" stopColor="#4f0507" />
            <stop offset="70%" stopColor="#360102" />
            <stop offset="100%" stopColor="#1c0001" />
          </linearGradient>
          <linearGradient id="waxMaroneDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#420204" />
            <stop offset="50%" stopColor="#2c0001" />
            <stop offset="100%" stopColor="#140000" />
          </linearGradient>
          <radialGradient id="waxMaroneHighlights" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="30%" stopColor="#ffa0a2" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#4f0507" stopOpacity="0" />
            <stop offset="100%" stopColor="#0f0000" stopOpacity="0.85" />
          </radialGradient>
        </defs>
      </svg>

      {/* Luxurious artistic backdrop - Luminous cool beige up, warm gold-caramel down */}
      <div className="absolute inset-0 bg-[#EFECE7] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE7] via-[#E2D9C8] to-[#BBA07A] opacity-100 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-fine-lines opacity-[0.08] z-0 pointer-events-none" />

      {/* Sophisticated display typography */}
      <motion.div 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? -35 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 space-y-4 max-w-lg mt-2 pointer-events-none"
      >
        <span className="font-cinzel text-xs md:text-sm tracking-[0.4em] text-gold-600 font-extrabold block">
          ✦ INVITATION OFFICIELLE ✦
        </span>
        <h1 className="font-royal text-4xl md:text-5xl text-gold-700 tracking-widest font-black drop-shadow-sm">
          Oumaima & Hakim
        </h1>
        <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-1" />
      </motion.div>

      {/* Simpler, extremely elegant matte nude envelope */}
      {/* Sized perfectly to look incredibly high-end and luxurious on all phones */}
      <div 
        className="relative w-[78vw] max-w-[420px] aspect-[1.48/1] my-auto z-20 cursor-pointer group" 
        onClick={handleOpenClick}
      >
        {/* Soft elegant radial glow behind the envelope */}
        <div className="absolute inset-[-15%] rounded-full bg-radial-glow opacity-25 group-hover:opacity-35 blur-2xl transition-opacity duration-700 pointer-events-none" />

        <AnimatePresence>
          {!cardExited && (
            <motion.div
              exit={{ scale: 1.15, opacity: 0, y: -25 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="relative w-full h-full transform-gpu"
              style={{ willChange: 'transform' }}
            >
              {/* Exquisite hand-drawn Golden Leaf Corners accentuating the top corners */}
              <GoldenLeafCorner className="top-1 right-1" sizeClasses="w-16 h-26 sm:w-20 sm:h-32 md:w-22 md:h-35" />
              <GoldenLeafCorner className="top-1 left-1 transform scale-x-[-1]" sizeClasses="w-16 h-26 sm:w-20 sm:h-32 md:w-22 md:h-35" />

              {/* Inside Backing Layer of the envelope: Warm Sand Nude */}
              <div className="absolute inset-0 bg-[#eddcc6] border border-[#d6c4ae] rounded-xl shadow-[0_20px_50px_rgba(152,126,95,0.15)] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#eddcc6] via-[#e5d5be] to-[#d6c4ae]" />
                <div className="absolute inset-0 bg-islamic-pattern opacity-8 mix-blend-overlay" />
                <div className="w-20 h-20 opacity-[0.08]">
                  <IslamicMandala className="w-full h-full text-gold-950" />
                </div>
              </div>

              {/* Folding Top Flap: Optimized to use ultra-smooth 2D scaleY folding to avoid mobile WebKit 3D rendering bugs */}
              <motion.div
                initial={{ scaleY: 1 }}
                animate={isOpen ? { scaleY: -1 } : { scaleY: 1 }}
                transition={{ duration: 1.0, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center', willChange: 'transform', zIndex: isOpen ? 5 : 25 }}
                className="absolute top-0 inset-x-0 h-[50%] pointer-events-none transform-gpu"
              >
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                    {/* Main solid flap shape: Matte Nude Cashmere */}
                    <path
                      d="M 0,0 L 50,42 L 100,0 Z"
                      fill="#ebd9c3"
                      stroke="#dcc8b1"
                      strokeWidth="0.3"
                    />
                    
                    {/* Delicate fine gold-line border */}
                    <path
                      d="M 3,0 L 50,39 L 97,0"
                      fill="none"
                      stroke="url(#luxeGoldGrad)"
                      strokeWidth="0.35"
                    />

                    {/* Intricate Royal Heart Crest design on the Top Flap: Fades out beautifully during folding */}
                    <motion.g 
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      transform="translate(50, 18) scale(0.15)" 
                      stroke="url(#luxeGoldGrad)" 
                      strokeWidth="1.2" 
                      fill="none"
                    >
                      {/* Left side swirly heart path */}
                      <path d="M -14,-2 C -18,-5 -21,-5 -21,-9 C -21,-14 -17,-16 -14,-20 C -11,-16 -7,-14 -7,-9 C -7,-5 -10,-5 -14,-2 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" />
                      
                      {/* Right side swirly heart path */}
                      <path d="M 14,-2 C 10,-5 7,-5 7,-9 C 7,-14 11,-16 14,-20 C 17,-16 21,-14 21,-9 C 21,-5 18,-5 14,-2 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" />

                      {/* Main Center larger gold heart */}
                      <path d="M 0,6 C -5,2 -10,2 -10,-4 C -10,-10 -4,-13 0,-18 C 4,-13 10,-10 10,-4 C 10,2 5,2 0,6 Z" fill="url(#luxeGoldLight)" strokeWidth="1.5" />
                      
                      {/* Small crown decorative dots above hearts */}
                      <circle cx="0" cy="11" r="1.5" fill="url(#luxeGoldGrad)" />
                      <circle cx="-6" cy="9" r="1.0" fill="url(#luxeGoldGrad)" />
                      <circle cx="6" cy="9" r="1.0" fill="url(#luxeGoldGrad)" />
                      <circle cx="-14" cy="-24" r="1.2" fill="url(#luxeGoldGrad)" />
                      <circle cx="14" cy="-24" r="1.2" fill="url(#luxeGoldGrad)" />
                      <circle cx="0" cy="-23" r="1.5" fill="url(#luxeGoldGrad)" />
                    </motion.g>

                    {/* Minimal seal point embellishment */}
                    <circle cx="50" cy="35" r="1.0" fill="url(#luxeGoldGrad)" />
                  </svg>
                </div>
              </motion.div>

              {/* Front static Pocket constructed with elegant matte nude flaps and thin gold accents */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  {/* Left Diagonal Flap: Matte Nude */}
                  <path
                    d="M 0,0 L 50,25 L 0,50 Z"
                    fill="#ebd9c3"
                    stroke="#dcc8b1"
                    strokeWidth="0.3"
                  />
                  
                  {/* Right Diagonal Flap: Matte Nude */}
                  <path
                    d="M 100,0 L 50,25 L 100,50 Z"
                    fill="#ebd9c3"
                    stroke="#dcc8b1"
                    strokeWidth="0.3"
                  />
                  
                  {/* Bottom Triangle Flap: Lighter Nude for beautiful subtle depth */}
                  <path
                    d="M 0,50 L 50,24 L 100,50 Z"
                    fill="#eedcc7"
                    stroke="#dcc8b1"
                    strokeWidth="0.3"
                  />

                  {/* Elegant inner gold border along the bottom flap edge */}
                  <path
                    d="M 3,50 L 50,26 L 97,50"
                    fill="none"
                    stroke="url(#luxeGoldLight)"
                    strokeWidth="0.2"
                    strokeDasharray="1.5,1.5"
                  />

                  {/* High-end gold botanical leaf illustrations in ALL FOUR CORNERS */}
                  {/* Top-Left Corner */}
                  <g transform="translate(2, 2) scale(0.18)" opacity="0.9" stroke="url(#luxeGoldGrad)" strokeWidth="1.1" fill="none">
                    <path d="M 0,0 Q 15,20 35,10" />
                    <path d="M 5,7 Q 10,15 15,10 Q 10,3 5,7 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 14,12 Q 20,22 25,15 Q 18,8 14,12 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 24,14 Q 32,22 35,12 Q 26,7 24,14 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    {/* Added a 4th leaf for more fullness */}
                    <path d="M 32,13 Q 40,18 42,8 Q 33,4 32,13 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" strokeWidth="0.8" />
                    {/* Delicate dropping dots/pearls */}
                    <circle cx="15" cy="10" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="25" cy="15" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="35" cy="12" r="1.5" fill="url(#luxeGoldGrad)" />
                  </g>

                  {/* Top-Right Corner */}
                  <g transform="translate(98, 2) scale(0.18) scale(-1, 1)" opacity="0.9" stroke="url(#luxeGoldGrad)" strokeWidth="1.1" fill="none">
                    <path d="M 0,0 Q 15,20 35,10" />
                    <path d="M 5,7 Q 10,15 15,10 Q 10,3 5,7 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 14,12 Q 20,22 25,15 Q 18,8 14,12 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 24,14 Q 32,22 35,12 Q 26,7 24,14 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 32,13 Q 40,18 42,8 Q 33,4 32,13 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" strokeWidth="0.8" />
                    <circle cx="15" cy="10" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="25" cy="15" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="35" cy="12" r="1.5" fill="url(#luxeGoldGrad)" />
                  </g>

                  {/* Bottom-Left Corner */}
                  <g transform="translate(2, 48) scale(0.18) scale(1, -1)" opacity="0.9" stroke="url(#luxeGoldGrad)" strokeWidth="1.1" fill="none">
                    <path d="M 0,0 Q 15,20 35,10" />
                    <path d="M 5,7 Q 10,15 15,10 Q 10,3 5,7 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 14,12 Q 20,22 25,15 Q 18,8 14,12 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 24,14 Q 32,22 35,12 Q 26,7 24,14 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 32,13 Q 40,18 42,8 Q 33,4 32,13 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" strokeWidth="0.8" />
                    <circle cx="15" cy="10" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="25" cy="15" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="35" cy="12" r="1.5" fill="url(#luxeGoldGrad)" />
                  </g>

                  {/* Bottom-Right Corner */}
                  <g transform="translate(98, 48) scale(0.18) scale(-1, -1)" opacity="0.9" stroke="url(#luxeGoldGrad)" strokeWidth="1.1" fill="none">
                    <path d="M 0,0 Q 15,20 35,10" />
                    <path d="M 5,7 Q 10,15 15,10 Q 10,3 5,7 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 14,12 Q 20,22 25,15 Q 18,8 14,12 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 24,14 Q 32,22 35,12 Q 26,7 24,14 Z" fill="url(#luxeGoldLight)" fillOpacity="0.3" strokeWidth="0.8" />
                    <path d="M 32,13 Q 40,18 42,8 Q 33,4 32,13 Z" fill="url(#luxeGoldLight)" fillOpacity="0.25" strokeWidth="0.8" />
                    <circle cx="15" cy="10" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="25" cy="15" r="1.5" fill="url(#luxeGoldGrad)" />
                    <circle cx="35" cy="12" r="1.5" fill="url(#luxeGoldGrad)" />
                  </g>

                  {/* Outer border for the entire pocket frame */}
                  <rect
                    x="0.3"
                    y="0.3"
                    width="99.4"
                    height="49.4"
                    rx="1.5"
                    fill="none"
                    stroke="#dcc8b1"
                    strokeWidth="0.3"
                  />
                </svg>
              </div>

              {/* Real 3D-Look Perfectly Rounded Elegant Matte Beige & Gold Monogram Seal Button - Optimized to remove all lag */}
              <motion.div
                initial={{ scale: 1, opacity: 1, y: 0 }}
                animate={isOpen ? { scale: 0, opacity: 0, y: 15 } : { scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                style={{ willChange: 'transform, opacity' }}
                className="absolute top-[46%] left-[50%] -translate-x-[50%] -translate-y-[46%] z-30 flex items-center justify-center transform-gpu"
              >
                {/* Minimalist Maroon Wax Seal Button */}
                <motion.button
                  whileHover={{ scale: 1.08, y: -0.5 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleOpenClick}
                  className="relative w-12 h-12 flex items-center justify-center pointer-events-auto group z-30 cursor-pointer focus:outline-none shadow-[0_4px_12px_rgba(74,44,17,0.35)] rounded-full bg-[#4a2c11] border-2 border-gold-400/70 transform-gpu"
                  aria-label="Ouvrir l'invitation"
                >
                  {/* Centered Embossed Monogram content overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
                    {/* Elegant Embossed Wedding Rings - beautifully centered and sized */}
                    <div className="scale-95 opacity-90 transition-transform duration-300 group-hover:scale-100">
                      <WeddingRingsSvg className="w-5 h-5 text-gold-200/90" />
                    </div>
                  </div>

                  {/* Gentle shine/shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/5 to-white/15 pointer-events-none rounded-full" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Elegant Action Message with beautiful designs & color matching */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 35 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="text-center z-30 mb-8 flex flex-col items-center pointer-events-none"
      >
        <div className="flex flex-col items-center max-w-sm sm:max-w-md mx-auto">
          {/* A small line with elegant gold design above the message */}
          <div className="w-64 h-8 flex items-center justify-center opacity-100 mb-2">
            <svg viewBox="0 0 160 20" className="w-full h-full text-[#b88d2f]" fill="none" stroke="currentColor">
              {/* Very fine elegant symmetrical horizontal paths and flourishes */}
              <path d="M 10,10 C 25,10 35,7 48,10 C 53,11 55,7 57,10" strokeWidth="1.0" strokeLinecap="round" />
              <path d="M 150,10 C 135,10 125,7 112,10 C 107,11 105,7 103,10" strokeWidth="1.0" strokeLinecap="round" />
              {/* Refined elegant central flourish loops */}
              <path d="M 57,10 Q 68,16 80,10 Q 92,16 103,10" strokeWidth="1.0" strokeLinecap="round" />
              <path d="M 62,10 Q 80,3 98,10" strokeWidth="0.7" opacity="0.6" strokeLinecap="round" />
              {/* Central Diamond and micro-dots */}
              <path d="M 80,7.5 L 82.5,10 L 80,12.5 L 77.5,10 Z" fill="#b88d2f" stroke="none" />
              <circle cx="68" cy="10" r="1.2" fill="#b88d2f" stroke="none" />
              <circle cx="92" cy="10" r="1.2" fill="#b88d2f" stroke="none" />
              <circle cx="35" cy="10" r="0.8" fill="#b88d2f" stroke="none" />
              <circle cx="125" cy="10" r="0.8" fill="#b88d2f" stroke="none" />
            </svg>
          </div>

          {/* The main text in elegant calligraphic royal script font */}
          <p className="font-royal text-3xl sm:text-4xl text-[#51390e] animate-pulse text-center drop-shadow-[0_0.5px_1.5px_rgba(255,255,255,0.85)] px-4 leading-relaxed tracking-wide">
            Veuillez cliquer sur le sceau doré pour ouvrir...
          </p>
          
          {/* Symmetrical fine gold line with a luxurious pulsing heart in the middle */}
          <div className="w-64 h-10 flex items-center justify-center mt-3 pointer-events-none">
            <svg viewBox="0 0 160 24" className="w-full h-full text-[#b88d2f]" fill="none" stroke="currentColor">
              {/* Extremely fine gold elegant curves flanking the center */}
              <path d="M 15,12 C 32,12 42,9 56,12 C 60,13 62,9 65,12" strokeWidth="0.9" strokeLinecap="round" />
              <path d="M 145,12 C 128,12 118,9 104,12 C 100,13 98,9 95,12" strokeWidth="0.9" strokeLinecap="round" />
              {/* Delicate flourish curves under/over */}
              <path d="M 45,12 Q 55,16 65,12" strokeWidth="0.7" opacity="0.7" strokeLinecap="round" />
              <path d="M 115,12 Q 105,16 95,12" strokeWidth="0.7" opacity="0.7" strokeLinecap="round" />
              {/* Subtle accent beads */}
              <circle cx="32" cy="12" r="1.0" fill="#b88d2f" stroke="none" />
              <circle cx="128" cy="12" r="1.0" fill="#b88d2f" stroke="none" />
              {/* Beautiful glowing crimson heart with gold border in the center */}
              <g transform="translate(80, 16.5) scale(0.5)" className="animate-pulse">
                <path d="M 0,10 C -12,2 -18,-2 -18,-11 C -18,-21 -9,-25 0,-15 C 9,-25 18,-21 18,-11 C 18,-2 -12,2 0,10 Z" fill="#991b1b" stroke="#b88d2f" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
