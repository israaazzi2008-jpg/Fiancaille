import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { WeddingRingsSvg, IslamicMandala, EngagementRingsDivider } from './Ornaments';

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
    <div className="min-h-screen w-full flex flex-col items-center justify-between px-4 md:px-8 py-12 md:py-20 overflow-hidden relative select-none bg-[#280102]">
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
            <stop offset="0%" stopColor="#480306" />
            <stop offset="35%" stopColor="#380204" />
            <stop offset="70%" stopColor="#250001" />
            <stop offset="100%" stopColor="#0d0000" />
          </linearGradient>
          <linearGradient id="waxMaroneDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#280102" />
            <stop offset="50%" stopColor="#1d0001" />
            <stop offset="100%" stopColor="#0d0000" />
          </linearGradient>
          <radialGradient id="waxMaroneHighlights" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="30%" stopColor="#ffa0a2" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#380204" opacity="0" />
            <stop offset="100%" stopColor="#0d0000" stopOpacity="0.85" />
          </radialGradient>
        </defs>
      </svg>

      {/* Uploaded Background Picture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/aistudio/back_57405b33.jpg" 
          alt="Introduction Background" 
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "/luxury_sanctuary_backdrop.png";
          }}
          className="w-full h-full object-cover opacity-85 sm:opacity-90 filter brightness-100 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/35" />
      </div>

      {/* Sophisticated display typography in beige foncé */}
      <motion.div 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? -35 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 space-y-3 max-w-lg mt-2 pointer-events-none"
      >
        <span className="font-cinzel text-xs md:text-sm tracking-[0.4em] text-[#ebd9c3] font-light block drop-shadow-sm">
          ✦ INVITATION OFFICIELLE ✦
        </span>
        <h1 className="font-royal text-5xl md:text-6xl text-[#f5dfa8] tracking-widest font-light drop-shadow-md">
          Oumaima & Hakim
        </h1>
        <div className="pt-1">
          <EngagementRingsDivider className="w-64 h-12 text-gold-400 mx-auto" />
        </div>
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
              {/* Inside Backing Layer of the envelope: Bordeaux Foncé */}
              <div className="absolute inset-0 bg-[#480306] border border-[#d4af37] rounded-xl shadow-[0_20px_50px_rgba(37,1,2,0.5)] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#480306] via-[#380204] to-[#250001]" />
                <div className="absolute inset-0 bg-islamic-pattern opacity-5 mix-blend-overlay" />
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
                    {/* Main solid flap shape: Bordeaux Foncé without stroke */}
                    <path
                      d="M 0,0 L 50,42 L 100,0 Z"
                      fill="#480306"
                      stroke="none"
                    />

                    {/* Minimal seal point embellishment removed */}
                  </svg>
                </div>
              </motion.div>

              {/* Front static Pocket constructed with bordeaux foncé flaps and gold accents */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  {/* Left Diagonal Flap */}
                  <path
                    d="M 0,0 L 50,25 L 0,50 Z"
                    fill="#380204"
                    stroke="#d4af37"
                    strokeWidth="0.3"
                  />
                  
                  {/* Right Diagonal Flap */}
                  <path
                    d="M 100,0 L 50,25 L 100,50 Z"
                    fill="#380204"
                    stroke="#d4af37"
                    strokeWidth="0.3"
                  />
                  
                  {/* Bottom Triangle Flap */}
                  <path
                    d="M 0,50 L 50,24 L 100,50 Z"
                    fill="#2c0102"
                    stroke="#d4af37"
                    strokeWidth="0.3"
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
                {/* Golden Wax Seal Button */}
                <motion.button
                  whileHover={{ scale: 1.08, y: -0.5 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleOpenClick}
                  className="relative w-12 h-12 flex items-center justify-center pointer-events-auto group z-30 cursor-pointer focus:outline-none shadow-[0_4px_20px_rgba(212,175,55,0.45)] rounded-full bg-gradient-to-br from-[#f5dfa8] via-[#d4af37] to-[#aa7c11] border-2 border-[#fff2d4] transform-gpu"
                  aria-label="Ouvrir l'invitation"
                >
                  {/* Centered Embossed Monogram content overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
                    {/* Elegant Embossed Wedding Rings - beautifully centered and sized */}
                    <div className="scale-95 opacity-90 transition-transform duration-300 group-hover:scale-100 text-[#420204]">
                      <WeddingRingsSvg className="w-5 h-5 text-[#5c090c]" />
                    </div>
                  </div>

                  {/* Gentle shine/shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/40 to-white/20 pointer-events-none rounded-full" />
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
            <svg viewBox="0 0 160 20" className="w-full h-full text-[#d4af37]" fill="none" stroke="currentColor">
              {/* Very fine elegant symmetrical horizontal paths and flourishes */}
              <path d="M 10,10 C 25,10 35,7 48,10 C 53,11 55,7 57,10" strokeWidth="1.0" strokeLinecap="round" />
              <path d="M 150,10 C 135,10 125,7 112,10 C 107,11 105,7 103,10" strokeWidth="1.0" strokeLinecap="round" />
              {/* Refined elegant central flourish loops */}
              <path d="M 57,10 Q 68,16 80,10 Q 92,16 103,10" strokeWidth="1.0" strokeLinecap="round" />
              <path d="M 62,10 Q 80,3 98,10" strokeWidth="0.7" opacity="0.6" strokeLinecap="round" />
              {/* Central Diamond and micro-dots */}
              <path d="M 80,7.5 L 82.5,10 L 80,12.5 L 77.5,10 Z" fill="#d4af37" stroke="none" />
              <circle cx="68" cy="10" r="1.2" fill="#d4af37" stroke="none" />
              <circle cx="92" cy="10" r="1.2" fill="#d4af37" stroke="none" />
              <circle cx="35" cy="10" r="0.8" fill="#d4af37" stroke="none" />
              <circle cx="125" cy="10" r="0.8" fill="#d4af37" stroke="none" />
            </svg>
          </div>

          {/* The main text in elegant calligraphic royal script font in beige foncé */}
          <p className="font-royal text-3xl sm:text-4xl text-[#ebd9c3] animate-pulse text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] px-4 leading-relaxed tracking-wide">
            Veuillez cliquer sur le sceau doré pour ouvrir...
          </p>
        </div>
      </motion.div>
    </div>
  );
};
