import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface FallingParticle {
  id: number;
  type: 'sparkle' | 'heart';
  x: number; // horizontal starting percentage (0 - 100)
  size: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  drift: number;
}

export const FallingSparklesAndHearts: React.FC = () => {
  const [particles, setParticles] = useState<FallingParticle[]>([]);

  useEffect(() => {
    // Generate a beautiful, balanced mixture of 15 slow-falling particles (sparkles and hearts)
    // for a rich, magical look that remains extremely smooth and lag-free
    const list: FallingParticle[] = Array.from({ length: 16 }).map((_, i) => {
      const type = i % 2 === 0 ? 'sparkle' : 'heart';
      
      // Warm elegant color palette matching our nude and gold theme
      const sparkleColors = ['#f5eccd', '#ebd89b', '#dfc168', '#b88d2f'];
      const heartColors = ['#b91c1c', '#dc2626', '#dfc168', '#b88d2f']; // rich crimson and gold hearts
      
      const colors = type === 'sparkle' ? sparkleColors : heartColors;
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        type,
        x: Math.random() * 100,
        size: type === 'sparkle' ? (8 + Math.random() * 8) : (6 + Math.random() * 6),
        delay: Math.random() * 8, // staggered start
        duration: 9 + Math.random() * 6, // slow elegant fall
        color,
        rotation: Math.random() * 360,
        drift: -15 + Math.random() * 30, // horizontal swaying
      };
    });

    setParticles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => {
        return (
          <motion.div
            key={p.id}
            initial={{ 
              y: '-10vh', 
              x: 0, 
              opacity: 0, 
              rotate: p.rotation,
              scale: 0.3 
            }}
            animate={{
              y: '110vh',
              x: [0, p.drift, 0, -p.drift, 0], // sway left and right beautifully
              opacity: [0, 0.8, 0.8, 0],
              rotate: p.rotation + 360,
              scale: [0.6, 1, 0.6]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'linear',
            }}
            className="absolute"
            style={{ left: `${p.x}%`, top: 0 }}
          >
            {p.type === 'sparkle' ? (
              <Sparkles 
                className="drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]" 
                style={{ width: p.size, height: p.size, color: p.color }} 
              />
            ) : (
              <Heart 
                className="drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" 
                style={{ 
                  width: p.size, 
                  height: p.size, 
                  color: p.color,
                  fill: p.color,
                  opacity: 0.85
                }} 
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
