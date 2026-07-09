import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  // Target date for the fiancé ceremony: Septembre 12, 2026
  const targetDate = new Date('2026-09-12T13:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-6 text-center relative rounded-3xl overflow-hidden bg-white/85 backdrop-blur-sm border-[3px] border-double border-gold-400 shadow-[0_20px_50px_rgba(184,141,47,0.25)]">
      {/* Background image for the chrono frame, styled to be very bright, soft, and clear */}
      <img
        src="/chrono_bg.jpg"
        alt="Chrono Background"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.32] filter brightness-[1.4] contrast-[0.9] saturate-[0.85] pointer-events-none"
      />

      {/* Subtle protective overlay to guarantee text readability and maximum brightness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/75 via-[#fefdfc]/60 to-[#ffffff]/75 pointer-events-none" />

      {/* Decorative Traditional Corner Frames inside the Chrono */}
      <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-gold-400 opacity-60" />
      <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-gold-400 opacity-60" />
      <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-gold-400 opacity-60" />
      <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-gold-400 opacity-60" />

      {/* Royal arabesque pattern background overlay */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-1 border border-gold-300/40 rounded-2xl pointer-events-none" />

      {/* Extra floating golden sparkles behind values */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-100/10 to-transparent pointer-events-none" />

      <h3 className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-700 font-extrabold mb-6 relative z-10 flex items-center justify-center space-x-2">
        <span className="text-gold-400">✦</span>
        <span>L'Union Sacrée approche</span>
        <span className="text-gold-400">✦</span>
      </h3>

      <div className="grid grid-cols-4 gap-2.5 md:gap-4 justify-center items-center relative z-10">
        {timeItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#fdfbf7] p-3 md:p-5 rounded-2xl border border-gold-300/60 shadow-[0_4px_20px_rgba(184,141,47,0.1)] relative group overflow-hidden"
          >
            {/* Elegant luxury concentric borders within boxes */}
            <div className="absolute inset-1 border border-gold-300/20 rounded-xl pointer-events-none" />
            
            {/* Shimmer effect hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-100/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="font-serif text-3xl md:text-4xl font-black text-nude-950 tracking-tight text-gold-gradient drop-shadow-xs">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="font-cinzel text-[10px] md:text-xs text-gold-600 tracking-widest uppercase mt-1 font-bold">
              {item.label}
            </div>
            
            {/* Elegant tiny line ornament below the circle value */}
            <div className="w-8 h-[1.5px] bg-gold-400 mt-2 opacity-70 group-hover:w-12 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
