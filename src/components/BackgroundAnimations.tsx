import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  type: 'sparkle';
  style: React.CSSProperties;
}

export const BackgroundAnimations: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate only 4 static floating gold sparkles for a calm, ultra-lightweight effect
    const initialParticles: Particle[] = [];
    
    for (let i = 0; i < 4; i++) {
      initialParticles.push({
        id: i,
        type: 'sparkle',
        style: {
          position: 'absolute',
          top: `${15 + Math.random() * 70}%`,
          left: `${10 + Math.random() * 80}%`,
          animation: `float ${12 + Math.random() * 8}s linear infinite`,
          animationDelay: `${Math.random() * 4}s`,
          transform: `scale(${0.5 + Math.random() * 0.4})`,
          color: '#dfc168',
          opacity: 0.15 + Math.random() * 0.2,
          pointerEvents: 'none',
        },
      });
    }

    setParticles(initialParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div key={p.id} style={p.style}>
          <Sparkles className="w-5 h-5" />
        </div>
      ))}
    </div>
  );
};

