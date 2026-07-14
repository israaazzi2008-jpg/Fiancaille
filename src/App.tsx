import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Heart, Sparkles, Navigation } from 'lucide-react';
import { Envelope } from './components/Envelope';
import {
  IslamicArchFrame,
  IslamicMandala,
  EngagementRingsDivider,
  ElegantHeartDivider,
  WeddingRingsSvg,
  FloralDivider,
  GoldGradientDefs,
  CornerPattern
} from './components/Ornaments';
import { Countdown } from './components/Countdown';
import { Program } from './components/Program';
import { HotelLocation } from './components/HotelLocation';
import { BackgroundAnimations } from './components/BackgroundAnimations';
import { FallingSparklesAndHearts } from './components/FallingSparklesAndHearts';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Reference images from the public folder for easy user replacement and customization
  const ringsImageUrl = '/engagement_rings.jpg';
  const sanctuaryBackdropImg = '/luxury_sanctuary_backdro.png';

  return (
    <div className={`min-h-screen text-nude-900 relative selection:bg-gold-200 selection:text-gold-900 transition-colors duration-1000 ${isOpened ? 'bg-transparent overflow-y-auto scroll-smooth' : 'bg-nude-50 overflow-hidden'}`}>
      {/* Global SVG Gradients Provider */}
      <GoldGradientDefs />

      {/* Luxurious Nude Background with fine overlay patterns and a simple, subtle background image - visible on the main invitation screen */}
      {isOpened && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#faf8f6] via-[#f4efe9] to-[#e8decb]"
        >
          {/* Elegant simple background image with soft opacity and natural color reproduction, optimized for phones */}
          <img 
            src={sanctuaryBackdropImg} 
            alt="Scenic Sanctuary Backdrop" 
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              const currentSrc = img.getAttribute('src') || '';
              if (currentSrc.endsWith('.png')) {
                img.src = '/luxury_sanctuary_backdro.jpg';
              } else if (currentSrc.endsWith('.jpg')) {
                img.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80";
              }
            }}
            className="w-full h-full object-cover opacity-85 sm:opacity-90 filter brightness-100 contrast-100 saturate-100"
          />
          {/* Subtle light protective overlay to guarantee superb readability and phone optimization */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f6]/30 via-[#f4efe9]/20 to-[#e8decb]/35" />
          {/* Subtle elegant line overlays to add sophisticated texture */}
          <div className="absolute inset-0 bg-fine-lines opacity-[0.05]" />
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {!isOpened ? (
          // ENTRANCE SCREEN: Luxurious virtual openable envelope
          <motion.div
            key="envelope-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <Envelope onOpen={() => setIsOpened(true)} />
          </motion.div>
        ) : (
          // MAIN PAGE: Luxurious Invitation content (Transparent with z-10 to render perfectly on top of the fixed z-0 background)
          <motion.div
            key="invitation-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full relative z-10 pt-8 pb-12 md:pt-16 md:pb-20 px-4 flex flex-col items-center"
          >
            {/* Subtle Back / Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 10px 25px rgba(184, 141, 47, 0.3)',
                borderColor: '#d1a83d'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
                setIsOpened(false);
              }}
              className="fixed top-3 right-3 md:top-8 md:right-8 z-50 bg-[#faf6f0]/95 hover:bg-white backdrop-blur-md px-3 py-2 md:px-5 md:py-2.5 rounded-full border-2 border-gold-300/60 text-gold-700 font-cinzel text-[9px] md:text-[10px] tracking-[0.18em] font-black shadow-lg transition-all duration-300 flex items-center gap-1.5 md:gap-2 group cursor-pointer"
            >
              <Heart className="w-3 h-3 md:w-3.5 md:h-3.5 text-gold-500 fill-gold-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline">RE-SCELLER L'INVITATION</span>
              <span className="sm:hidden">RE-SCELLER</span>
            </motion.button>
            {/* Global immersive falling sparkles & hearts inside the main invitation */}
            <FallingSparklesAndHearts />

            {/* Elegant Background Particles (Birds, Sparkles, Hearts) */}
            <BackgroundAnimations />

            {/* Traditional Corner Ornaments for absolute top corners of the screen */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-100">
              <CornerPattern className="w-full h-full" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-100 transform rotate-90">
              <CornerPattern className="w-full h-full" />
            </div>

            {/* Inside Content Wrapper - Restricted max width so it aligns perfectly inside the palace doorway */}
            <div className="w-full max-w-xl mx-auto space-y-8 md:space-y-12 relative z-10 px-2 sm:px-4">
              
              {/* SECTION 1: Islamic Calligraphy Header & Mandala - Frameless Floating Layout */}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1.2, type: 'spring' }}
                className="text-center flex flex-col items-center space-y-4 max-w-3xl mx-auto w-full relative"
              >
                {/* بسم الله الرحمن الرحيم */}
                <div className="py-2 space-y-4">
                  <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-2xl md:text-3xl tracking-normal text-gold-gradient font-amiri font-normal" 
                    style={{ textShadow: '0 1px 3px rgba(184, 141, 47, 0.15)', paddingBottom: '7px', paddingTop: '-4px', marginTop: '-4px' }}
                  >
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </motion.h1>
                  <p className="font-serif italic text-xs sm:text-sm tracking-[0.18em] text-[#543b10] uppercase mt-5 font-bold leading-relaxed drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.7)] px-4 max-w-md mx-auto">
                    C’est avec un amour immense et la promesse d'une vie de bonheur partagé que nos deux âmes s’unissent aujourd'hui pour l’éternité.
                  </p>
                </div>
              </motion.div>

              {/* SECTION 2: The Main Names and Rings Photo - Elegant Floating Layout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-center space-y-6 max-w-3xl mx-auto w-full relative"
              >
                <div className="w-full flex items-center justify-center relative mb-3">
                  <div className="absolute inset-0 bg-gold-100/30 rounded-full blur-xl w-48 h-10 mx-auto" />
                  <EngagementRingsDivider className="w-80 h-16 relative z-10" />
                </div>

                <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.3em] text-gold-600 font-bold block drop-shadow-sm">
                  CÉLÉBRATION DE L'ENGAGEMENT
                </span>

                {/* Grand Calligraphy Names with Gold foil gradients & staggered slide animation */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 py-2">
                  <motion.h2 
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
                    className="font-royal text-6xl md:text-8xl text-nude-950 font-normal tracking-wide text-gold-gradient py-2"
                  >
                    Oumaima
                  </motion.h2>
                  <motion.span 
                    initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
                    whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="font-luxury-script text-5xl md:text-6xl text-gold-500 py-1 md:py-0"
                  >
                    &
                  </motion.span>
                  <motion.h2 
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
                    className="font-royal text-6xl md:text-8xl text-nude-950 font-normal tracking-wide text-gold-gradient py-2"
                  >
                    Hakim
                  </motion.h2>
                </div>

                <div className="flex justify-center py-2">
                  <FloralDivider className="w-56 h-10 text-gold-400" />
                </div>

                {/* Rings Image cropped elegantly in a circular gold frame - optimized for phones to never collapse */}
                <div className="flex justify-center">
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="relative p-2.5 rounded-full border-2 border-gold-400 bg-white shadow-2xl w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] flex-shrink-0 overflow-hidden group"
                  >
                    <div className="absolute inset-0 border-2 border-gold-300 rounded-full z-10 pointer-events-none" />
                    <img
                      src={ringsImageUrl}
                      alt="Alliances en Or d'Oumaima & Hakim"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Tiny golden sparkles over rings photo */}
                    <div className="absolute top-6 right-8 text-gold-200 z-20 animate-pulse pointer-events-none">
                      <Sparkles className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* SECTION 3: The Honored Luxurious Words Frame (Cadre Parfait) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, type: 'spring' }}
                className="px-2"
              >
                <IslamicArchFrame id="cadre-invitation">
                  <div className="text-center space-y-6 py-6 px-2 md:px-8">
                    <span className="font-cinzel text-xs tracking-[0.25em] text-gold-600 font-extrabold uppercase">
                      ✦ L'Invitation d'Honneur ✦
                    </span>
                    
                    <h4 className="font-serif text-3xl md:text-4xl text-nude-950 font-black italic tracking-wide text-gold-gradient">
                      Un Amour Béni
                    </h4>
                    
                    <p className="font-serif text-lg md:text-xl text-nude-900 leading-relaxed max-w-2xl mx-auto italic font-bold">
                      Avec la bénédiction de Dieu le Très-Haut, nous avons l’immense privilège et le bonheur infini de vous convier à la célébration de nos fiançailles.
                    </p>
                    
                    <div className="w-16 h-[1px] bg-gold-400 mx-auto" />
                    
                    <p className="font-serif italic text-base md:text-lg text-nude-800 leading-relaxed max-w-xl mx-auto font-medium tracking-wide">
                      Nos cœurs s’unissent pour écrire les premières notes de notre destin commun sous le regard bienveillant de nos familles respectives. Votre présence chaleureuse à nos côtés illuminera notre joie et rendra cette journée éternelle.
                    </p>

                    <div className="flex items-center justify-center space-x-3 text-gold-600 pt-4">
                      <span className="font-cinzel text-xs tracking-[0.25em] uppercase font-bold text-gold-700">Oumaima & Hakim</span>
                    </div>
                  </div>
                </IslamicArchFrame>
              </motion.div>

              {/* SECTION 4: The CountDown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-4"
              >
                <Countdown />
              </motion.div>

              {/* SECTION 6: The Venue (Impérial Palace) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <HotelLocation />
              </motion.div>

              {/* SECTION 5: The Chronological Program */}
              <div className="border-t border-b border-gold-300/30 py-6">
                <Program />
              </div>

              {/* SECTION 7: Arabic and French Gratitude Ending */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="text-center space-y-6 pt-10 pb-10 bg-white/92 backdrop-blur-md rounded-3xl p-6 md:p-10 border-2 border-gold-300/40 shadow-[0_20px_50px_rgba(184,141,47,0.25)] max-w-3xl mx-auto w-full relative overflow-hidden"
              >
                {/* Traditional geometric corners inside the card */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-gold-400/50" />
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-gold-400/50" />
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-gold-400/50" />
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-gold-400/50" />
                <div className="flex flex-col items-center justify-center py-2">
                  <WeddingRingsSvg className="w-16 h-16 text-gold-500 mb-2" />
                  <div className="w-40 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-1" />
                </div>

                {/* Arabic Ending text */}
                <h3 className="font-serif text-3.5xl md:text-4xl text-gold-600 font-bold italic tracking-wide leading-relaxed">
                  يُشَرِّفُنَا حُضُورُكُمْ فَالْمَقَامُ لَا يَحْلُو إِلَّا بِكُمْ
                </h3>

                <p className="font-sans italic text-base text-nude-600 max-w-lg mx-auto leading-relaxed px-4 font-semibold">
                  “Du fond du cœur, nous vous remercions d'avance pour votre bienveillance, vos vœux les plus précieux et votre précieuse présence lors de cette union sacrée.”
                </p>

                <div className="flex justify-center py-2">
                  <div className="w-24 h-[2px] bg-gold-400" />
                </div>

                <p className="font-cinzel text-xs tracking-[0.3em] text-gold-600 uppercase font-bold">
                  Oumaima & Hakim • Samedi 17 Octobre 2026
                </p>
              </motion.div>

              {/* SECTION 8: Majestic Ending Divider with Wedding Rings & Falling Sparkles & Hearts */}
              <div className="relative pt-8 pb-40 text-center">
                {/* Elegant separator line with rings in the middle */}
                <div className="flex items-center justify-center w-full max-w-2xl mx-auto my-10 relative z-20">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-gold-400/80" />
                  <div className="mx-6 p-4 bg-white border-2 border-gold-400 rounded-full shadow-[0_8px_25px_rgba(184,141,47,0.3)] relative group z-20 hover:scale-110 transition-transform duration-500">
                    <WeddingRingsSvg className="w-12 h-12 text-gold-500" />
                    <span className="absolute -top-1 -right-1 text-gold-400"><Sparkles className="w-5 h-5 animate-ping" /></span>
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-gold-400 to-gold-400/80" />
                </div>

                {/* Falling sparkles & hearts container */}
                <div className="relative h-[220px] w-full mt-4">
                  
                  {/* Cozy final floating message with frosted card for pristine readability */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: [0, 1, 1, 0.8, 1] }}
                    viewport={{ once: false }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-x-4 md:left-[25%] md:right-[25%] top-4 flex flex-col items-center justify-center pointer-events-none z-10 bg-white/90 backdrop-blur-md py-6 px-4 rounded-2xl border border-gold-400/30 shadow-lg"
                  >
                    <span className="font-script text-5xl md:text-6xl text-gold-600 font-extrabold drop-shadow-md">
                      Pour l'Éternité...
                    </span>
                    <p className="font-cinzel text-xs tracking-[0.25em] text-gold-700/90 uppercase mt-3 font-black text-center">
                      Que l'Amour soit notre guide béni
                    </p>
                  </motion.div>
                </div>

                {/* Back to Envelope button at the bottom of the page */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 12px 30px rgba(184, 141, 47, 0.45)',
                    backgroundImage: 'linear-gradient(135deg, #b88d2f 0%, #ebd89b 50%, #b88d2f 100%)',
                    color: '#302107'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      setIsOpened(false);
                    }, 500);
                  }}
                  className="relative z-20 mt-12 px-8 py-3.5 rounded-full border-2 border-gold-400/80 bg-gradient-to-r from-[#b88d2f] via-[#ebd89b] to-[#b88d2f] text-gold-950 font-cinzel text-xs tracking-[0.2em] font-black shadow-xl transition-all duration-300 flex items-center gap-2.5 mx-auto cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-gold-950 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                  RE-SCELLER L'INVITATION
                </motion.button>
              </div>

            </div>

            {/* Decorative Corner Ornaments for absolute bottom corners of the screen */}
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-100 transform -rotate-90">
              <CornerPattern className="w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-100 transform rotate-180">
              <CornerPattern className="w-full h-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
