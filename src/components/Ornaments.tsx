import React from 'react';

// Elegant Gold Gradient Definitions to be used across SVGs
export const GoldGradientDefs: React.FC = () => (
  <svg className="absolute w-0 h-0" aria-hidden="true">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#85610b" />
        <stop offset="30%" stopColor="#cda224" />
        <stop offset="50%" stopColor="#f5eccd" />
        <stop offset="70%" stopColor="#b88d2f" />
        <stop offset="100%" stopColor="#51390e" />
      </linearGradient>
      <linearGradient id="gold-light" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f5eccd" />
        <stop offset="50%" stopColor="#b88d2f" />
        <stop offset="100%" stopColor="#ebd89b" />
      </linearGradient>
    </defs>
  </svg>
);

// Traditional Islamic Arch Border / Frame - Redesigned as an elegant card
export const IslamicArchFrame: React.FC<{ children: React.ReactNode; id?: string; bgImage?: string }> = ({ children, id }) => {
  return (
    <div id={id} className="relative py-14 px-8 sm:px-12 md:px-14 rounded-[80px_160px] md:rounded-[110px_220px] overflow-hidden bg-[#FAF7F2] border-[4px] border-double border-gold-500/80 shadow-[0_25px_60px_rgba(184,141,47,0.25)] max-w-xl mx-auto">
      {/* Background is solid luxury creamy ivory (normal color, no image) */}

      {/* Decorative Golden Corner SVGs - Top Left */}
      <div className="absolute top-5 left-5 w-16 h-16 pointer-events-none text-gold-500 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[url(#gold)] stroke-[3]">
          <path d="M 0,0 L 50,0 C 50,25 25,50 0,50 L 0,0 Z" />
          <path d="M 12,12 L 38,12 C 38,25 25,38 12,38 L 12,12 Z" />
          <circle cx="25" cy="25" r="3" fill="url(#gold)" />
          <line x1="0" y1="0" x2="60" y2="0" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="60" strokeWidth="2" />
        </svg>
      </div>
      {/* Decorative Golden Corner SVGs - Top Right */}
      <div className="absolute top-5 right-5 w-16 h-16 pointer-events-none transform rotate-90 text-gold-500 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[url(#gold)] stroke-[3]">
          <path d="M 0,0 L 50,0 C 50,25 25,50 0,50 L 0,0 Z" />
          <path d="M 12,12 L 38,12 C 38,25 25,38 12,38 L 12,12 Z" />
          <circle cx="25" cy="25" r="3" fill="url(#gold)" />
          <line x1="0" y1="0" x2="60" y2="0" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="60" strokeWidth="2" />
        </svg>
      </div>
      {/* Decorative Golden Corner SVGs - Bottom Left */}
      <div className="absolute bottom-5 left-5 w-16 h-16 pointer-events-none transform -rotate-90 text-gold-500 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[url(#gold)] stroke-[3]">
          <path d="M 0,0 L 50,0 C 50,25 25,50 0,50 L 0,0 Z" />
          <path d="M 12,12 L 38,12 C 38,25 25,38 12,38 L 12,12 Z" />
          <circle cx="25" cy="25" r="3" fill="url(#gold)" />
          <line x1="0" y1="0" x2="60" y2="0" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="60" strokeWidth="2" />
        </svg>
      </div>
      {/* Decorative Golden Corner SVGs - Bottom Right */}
      <div className="absolute bottom-5 right-5 w-16 h-16 pointer-events-none transform rotate-180 text-gold-500 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[url(#gold)] stroke-[3]">
          <path d="M 0,0 L 50,0 C 50,25 25,50 0,50 L 0,0 Z" />
          <path d="M 12,12 L 38,12 C 38,25 25,38 12,38 L 12,12 Z" />
          <circle cx="25" cy="25" r="3" fill="url(#gold)" />
          <line x1="0" y1="0" x2="60" y2="0" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="60" strokeWidth="2" />
        </svg>
      </div>

      {/* Exquisite Falling Golden Leaves from each corner */}
      {/* Top Left Corner */}
      <div className="absolute top-5 left-5 w-14 h-14 pointer-events-none select-none z-30">
        <svg viewBox="0 0 20 20" className="absolute top-12 left-12 w-4 h-4 text-gold-500 fill-[url(#gold)] animate-leaf-tl">
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
        <svg viewBox="0 0 20 20" className="absolute top-5 left-16 w-3 h-3 text-gold-400 fill-[url(#gold-light)] animate-leaf-tl" style={{ animationDelay: '1.5s' }}>
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-5 right-5 w-14 h-14 pointer-events-none select-none z-30">
        <svg viewBox="0 0 20 20" className="absolute top-12 right-12 w-4 h-4 text-gold-500 fill-[url(#gold)] animate-leaf-tr">
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
        <svg viewBox="0 0 20 20" className="absolute top-5 right-16 w-3 h-3 text-gold-400 fill-[url(#gold-light)] animate-leaf-tr" style={{ animationDelay: '2s' }}>
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-5 left-5 w-14 h-14 pointer-events-none select-none z-30">
        <svg viewBox="0 0 20 20" className="absolute bottom-12 left-12 w-4 h-4 text-gold-500 fill-[url(#gold)] animate-leaf-bl">
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
        <svg viewBox="0 0 20 20" className="absolute bottom-5 left-16 w-3 h-3 text-gold-400 fill-[url(#gold-light)] animate-leaf-bl" style={{ animationDelay: '0.8s' }}>
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-5 right-5 w-14 h-14 pointer-events-none select-none z-30">
        <svg viewBox="0 0 20 20" className="absolute bottom-12 right-12 w-4 h-4 text-gold-500 fill-[url(#gold)] animate-leaf-br">
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
        <svg viewBox="0 0 20 20" className="absolute bottom-5 right-16 w-3 h-3 text-gold-400 fill-[url(#gold-light)] animate-leaf-br" style={{ animationDelay: '1.2s' }}>
          <path d="M 10,0 C 18,5 15,15 10,20 C 5,15 2,5 10,0 Z" />
        </svg>
      </div>

      {/* Traditional Oval Inner Borders (Mathematically scaled to fit the oval cadre perfectly) */}
      <div className="absolute inset-4 border-2 border-gold-400/40 pointer-events-none rounded-[72px_152px] md:rounded-[102px_212px]" />
      <div className="absolute inset-[18px] border border-gold-300/25 pointer-events-none rounded-[68px_148px] md:rounded-[98px_208px]" />
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.04] pointer-events-none" />

      {/* Floral motif at the top center */}
      <div className="flex justify-center mb-6 relative z-10">
        <svg className="w-32 h-10 fill-none stroke-[url(#gold)] stroke-[2]" viewBox="0 0 120 40">
          <path d="M 10,20 Q 30,5 60,20 Q 90,5 110,20" />
          <path d="M 20,20 C 40,30 50,10 60,20 C 70,30 80,10 100,20" />
          <path d="M 60,5 L 60,35" strokeWidth="1" />
          <circle cx="60" cy="20" r="5" className="fill-[url(#gold)]" />
          <circle cx="35" cy="15" r="3" className="fill-[url(#gold)]" />
          <circle cx="85" cy="15" r="3" className="fill-[url(#gold)]" />
        </svg>
      </div>

      <div className="relative z-10">
        {children}
      </div>

      {/* Floral motif at the bottom center */}
      <div className="flex justify-center mt-8 relative z-10">
        <svg className="w-32 h-10 fill-none stroke-[url(#gold)] stroke-[2] rotate-180" viewBox="0 0 120 40">
          <path d="M 10,20 Q 30,5 60,20 Q 90,5 110,20" />
          <path d="M 20,20 C 40,30 50,10 60,20 C 70,30 80,10 100,20" />
          <circle cx="60" cy="20" r="5" className="fill-[url(#gold)]" />
        </svg>
      </div>
    </div>
  );
};

// Elegant Arabesque Mandala Pattern
export const IslamicMandala: React.FC<{ className?: string }> = ({ className = 'w-32 h-32' }) => {
  return (
    <svg className={`${className} animate-[spin_120s_linear_infinite]`} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" stroke="url(#gold)" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="38" stroke="url(#gold)" strokeWidth="1" />
      <circle cx="50" cy="50" r="12" stroke="url(#gold)" strokeWidth="1" />
      
      {/* Outer intricate stars */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path d="M 50,5 L 53,25 L 50,30 L 47,25 Z" fill="url(#gold)" opacity="0.6" />
            <circle cx="50" cy="38" r="1.5" fill="url(#gold)" />
            <path d="M 50,12 C 45,20 40,25 50,34 C 60,25 55,20 50,12" stroke="url(#gold)" strokeWidth="0.5" />
          </g>
        );
      })}

      {/* Inner geometric star */}
      <path
        d="M 50,38 L 58,50 L 50,62 L 42,50 Z M 44,44 L 56,44 L 56,56 L 44,56 Z"
        stroke="url(#gold)"
        strokeWidth="0.75"
        fill="url(#gold)"
        fillOpacity="0.1"
      />
    </svg>
  );
};

// Elegant luxurious divider with interlocking rings, sparkles, leaves, and flourishes
export const EngagementRingsDivider: React.FC<{ className?: string }> = ({ className = 'w-72 h-14' }) => {
  return (
    <svg className={`${className} mx-auto text-gold-500`} viewBox="0 0 280 40" fill="none">
      {/* Fine gold horizontal lines extending from the sides towards the center */}
      <path d="M 15,20 C 40,20 50,16 75,20 Q 92,23 108,20" stroke="url(#gold)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 60,20 C 65,12 75,12 80,20" stroke="url(#gold)" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
      <circle cx="25" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="50" cy="20" r="2" fill="url(#gold)" />
      <circle cx="75" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="100" cy="20" r="2.5" fill="url(#gold)" />

      <path d="M 265,20 C 240,20 230,16 205,20 Q 188,23 172,20" stroke="url(#gold)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 220,20 C 215,12 205,12 200,20" stroke="url(#gold)" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
      <circle cx="255" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="230" cy="20" r="2" fill="url(#gold)" />
      <circle cx="205" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="180" cy="20" r="2.5" fill="url(#gold)" />

      {/* Symmetrical leaves and floral flourishes framing the center */}
      <path d="M 108,20 C 112,12 120,10 124,18" stroke="url(#gold)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 104,20 C 108,26 116,28 120,22" stroke="url(#gold)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 112,14 Q 116,11 115,15 Z" fill="url(#gold-light)" />
      <path d="M 108,24 Q 112,27 111,23 Z" fill="url(#gold-light)" />

      <path d="M 172,20 C 168,12 160,10 156,18" stroke="url(#gold)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 176,20 C 172,26 164,28 160,22" stroke="url(#gold)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 168,14 Q 164,11 165,15 Z" fill="url(#gold-light)" />
      <path d="M 172,24 Q 168,27 169,23 Z" fill="url(#gold-light)" />

      {/* Elegant interlocking rings in the center */}
      <g>
        {/* Left Ring */}
        <circle cx="134" cy="20" r="8.5" stroke="url(#gold)" strokeWidth="1.8" fill="none" />
        {/* Right Ring */}
        <circle cx="146" cy="20" r="8.5" stroke="url(#gold)" strokeWidth="1.8" fill="none" />
      </g>
    </svg>
  );
};

// Elegant rings icon using SVG with golden gradient
export const WeddingRingsSvg: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Left Ring */}
      <circle cx="26" cy="36" r="16" stroke="url(#gold)" strokeWidth="4" />
      {/* Right Ring */}
      <circle cx="38" cy="28" r="16" stroke="url(#gold)" strokeWidth="4" />
      {/* Sparkles */}
      <path d="M 46,12 L 48,18 L 54,20 L 48,22 L 46,28 L 44,22 L 38,20 L 44,18 Z" fill="url(#gold-light)" />
      <path d="M 16,20 L 17,23 L 20,24 L 17,25 L 16,28 L 15,25 L 12,24 L 15,23 Z" fill="url(#gold-light)" />
    </svg>
  );
};

// Fine Calligraphy Floral Dividers
export const FloralDivider: React.FC<{ className?: string }> = ({ className = 'w-48 h-8' }) => {
  return (
    <svg className={`${className} mx-auto text-gold-500`} viewBox="0 0 200 40" fill="none">
      <path d="M 10,20 Q 50,10 100,20 Q 150,30 190,20" stroke="url(#gold)" strokeWidth="1.5" />
      <path d="M 70,20 C 80,5 90,5 100,20 C 110,35 120,35 130,20" stroke="url(#gold)" strokeWidth="1" />
      {/* Center Flower / Leaf */}
      <path d="M 100,10 C 95,15 95,25 100,30 C 105,25 105,15 100,10 Z" fill="url(#gold)" />
      <circle cx="100" cy="20" r="2.5" fill="#faf8f6" stroke="url(#gold)" strokeWidth="1.5" />
      <circle cx="82" cy="18" r="1.5" fill="url(#gold)" />
      <circle cx="118" cy="22" r="1.5" fill="url(#gold)" />
    </svg>
  );
};

// Traditional corners - Just a simple soft radial shadow in the corner with no shapes
export const CornerPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="corner-shadow" cx="0%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#4e3b16" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#695123" stopOpacity="0.5" />
          <stop offset="75%" stopColor="#8d713a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#8d713a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#corner-shadow)" />
    </svg>
  );
};

// Elegant luxurious line with a glowing heart in the middle and gold sparkles
export const ElegantHeartDivider: React.FC<{ className?: string }> = ({ className = 'w-64 h-10' }) => {
  return (
    <svg className={`${className} mx-auto text-gold-500`} viewBox="0 0 200 40" fill="none">
      {/* Golden horizontal lines from left and right with elegant curves towards the center */}
      <path d="M 10,20 C 40,20 50,17 75,20 L 85,20" stroke="url(#gold)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 190,20 C 160,20 150,17 125,20 L 115,20" stroke="url(#gold)" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Little accent dots */}
      <circle cx="20" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="50" cy="20" r="2" fill="url(#gold)" />
      <circle cx="180" cy="20" r="1.5" fill="url(#gold)" />
      <circle cx="150" cy="20" r="2" fill="url(#gold)" />

      {/* Exquisite leafy scrolls leading to the heart */}
      <path d="M 70,20 C 73,14 80,12 84,18" stroke="url(#gold)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M 130,20 C 127,14 120,12 116,18" stroke="url(#gold)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Beautiful interlocking rings in the center */}
      <g transform="translate(100, 20) scale(0.65)" className="animate-pulse">
        {/* Left Ring */}
        <ellipse cx="-5" cy="0" rx="8.5" ry="7.5" stroke="url(#gold)" strokeWidth="1.8" transform="rotate(-12 -5 0)" fill="none" />
        {/* Right Ring */}
        <ellipse cx="5" cy="0" rx="8.5" ry="7.5" stroke="url(#gold)" strokeWidth="1.8" transform="rotate(12 5 0)" fill="none" />
        {/* Tiny sparkling center gem */}
        <circle cx="0" cy="-6" r="1.2" fill="#ffffff" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="0" cy="-6" r="1" fill="#ffffff" />
      </g>
      
      {/* Elegant side leaf accents */}
      <path d="M 82,15 Q 85,12 84,16 Z" fill="url(#gold)" />
      <path d="M 118,15 Q 115,12 116,16 Z" fill="url(#gold)" />
    </svg>
  );
};
