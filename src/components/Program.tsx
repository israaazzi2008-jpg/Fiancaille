import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, Gift, Heart, Coffee, Moon } from 'lucide-react';

interface EventItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const programEvents: EventItem[] = [
  {
    time: '13:00',
    title: 'Accueil & Douce Ambiance',
    description: 'Ouverture des portes et accueil chaleureux de nos honorables invités. Une délicate ambiance musicale accompagne vos premiers pas.',
    icon: <Music className="w-5 h-5 text-gold-500" />,
  },
  {
    time: '15:00',
    title: 'Les Salles & Les Secrets',
    description: 'Une immersion dans la tradition et la magie des préparatifs. Partage des rituels familiaux et secrets bienveillants de fiançailles.',
    icon: <Gift className="w-5 h-5 text-gold-500" />,
  },
  {
    time: '16:30',
    title: 'Entrée Solennelle d\'Oumaima & Hakim',
    description: 'Entrée triomphale de notre couple sous des mélodies majestueuses, suivie de l\'échange de nos magnifiques alliances.',
    icon: <Heart className="w-5 h-5 text-gold-500 fill-gold-200/50" />,
  },
  {
    time: '18:00',
    title: 'Partage de Douceurs',
    description: 'Découpe du gâteau d\'honneur. Dégustation conviviale de thés parfumés, cafés d\'exception et pâtisseries raffinées.',
    icon: <Coffee className="w-5 h-5 text-gold-500" />,
  },
  {
    time: '19:00',
    title: 'Clôture & Gratitude',
    description: 'Fin de la merveilleuse cérémonie des fiançailles. Nous vous remercions infiniment pour votre présence et vos bénédictions.',
    icon: <Moon className="w-5 h-5 text-gold-500" />,
  },
];

export const Program: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -70, y: 30, scale: 0.92, rotate: -2 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 70, damping: 12, mass: 0.8 },
    },
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 70, y: 30, scale: 0.92, rotate: 2 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 70, damping: 12, mass: 0.8 },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block">
          Le Déroulement du Jour J
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-nude-900 font-bold mt-2">
          Le Programme de la Fête
        </h3>
        <p className="font-sans italic text-sm text-nude-500 mt-2 max-w-sm mx-auto">
          Découvrez la chronologie de cette journée mémorable célébrant l'amour et l'harmonie.
        </p>
      </div>

      {/* Main Timeline Wrapper */}
      <div className="relative">
        {/* Center Vertical Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gold-400/50" />

        {/* Mobile Left Vertical Line (Mobile only) */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gold-400/50" />

        <div className="space-y-12 relative">
          {programEvents.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={isEven ? itemLeftVariants : itemRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col md:flex-row items-stretch ${
                  isEven ? 'md:flex-row-reverse' : ''
                } relative`}
              >
                {/* Timeline Dot (Desktop & Mobile positions) */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-nude-50 border-2 border-gold-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(209,168,61,0.5)]">
                  {event.icon}
                </div>

                {/* Left/Right empty filler for Desktop spacing */}
                <div className="hidden md:block w-1/2" />

                {/* Content Box (Appears Alternating) */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-[#fefcf8] p-7 rounded-2xl border-2 border-gold-300/60 hover:border-gold-500 shadow-[0_10px_30px_rgba(184,141,47,0.15)] hover:shadow-[0_20px_40px_rgba(184,141,47,0.3)] transition-all duration-500 relative overflow-hidden group">
                    {/* Concentric gold borders inside cards for luxurious charged look */}
                    <div className="absolute inset-1.5 border border-gold-300/30 rounded-xl pointer-events-none" />
                    <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />

                    {/* Corner decorative golden triangle */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-400/30 to-transparent pointer-events-none" />
                    <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-gold-400/50" />
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-gold-400/50" />
                    
                    {/* Staggered time display */}
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span className="font-cinzel text-xs font-black text-gold-700 tracking-widest bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                        🕒 {event.time}
                      </span>
                      <div className="w-12 h-[1px] bg-gradient-to-r from-gold-300 to-transparent" />
                    </div>

                    <h4 className="font-serif text-xl md:text-2xl font-extrabold text-nude-950 tracking-wide group-hover:text-gold-600 transition-colors duration-300 relative z-10">
                      {event.title}
                    </h4>

                    <p className="font-sans text-sm text-nude-800 mt-2.5 leading-relaxed font-semibold relative z-10">
                      {event.description}
                    </p>

                    {/* Luxurious glowing sparkle element */}
                    <span className="absolute bottom-3 right-3 text-gold-400/30 group-hover:text-gold-500 transition-all duration-300 group-hover:scale-125">
                      <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
