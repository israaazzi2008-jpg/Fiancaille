import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Calendar } from 'lucide-react';

export const HotelLocation: React.FC = () => {
  // 4 Hotel pictures with states initialized to the uploaded hotel_pic_i.jpg
  const [pic1, setPic1] = useState('/hotel_pic_1.jpg');
  const [pic2, setPic2] = useState('/hotel_pic_2.jpg');
  const [pic3, setPic3] = useState('/hotel_pic_3.jpg');
  const [pic4, setPic4] = useState('/hotel_pic_4.jpg');

  const hotelPics = [pic1, pic2, pic3, pic4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic transition every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hotelPics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hotelPics.length]);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
          Le Lieu de Célébration
        </span>
        <h3 className="font-serif text-3xl text-nude-900 font-bold mt-2">
          Le Palace d'Exception
        </h3>
        <p className="font-sans italic text-sm text-nude-500 mt-2 max-w-md mx-auto">
          C'est dans un cadre féerique et raffiné que nous aurons le bonheur de vous accueillir pour fêter nos fiançailles.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gold-300/30 overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left Side: Venue Image Slideshow */}
        <div className="md:col-span-5 h-[280px] md:h-full min-h-[280px] relative overflow-hidden group">
          {hotelPics.map((picUrl, idx) => (
            <img
              key={idx}
              src={picUrl}
              alt={`Hôtel Le Napolitain ${idx + 1}`}
              referrerPolicy="no-referrer"
              onError={() => {
                // Smoothly fallback to a high-quality luxury hotel image from Unsplash if the local file is missing
                const fallbackUrl = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80";
                if (idx === 0) setPic1(fallbackUrl);
                if (idx === 1) setPic2(fallbackUrl);
                if (idx === 2) setPic3(fallbackUrl);
                if (idx === 3) setPic4(fallbackUrl);
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none'
              } group-hover:scale-105 transition-transform duration-700`}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-nude-900/60 via-transparent to-transparent pointer-events-none z-20" />
          
          {/* Navigation Dots for the Slideshow */}
          <div className="absolute top-4 right-4 flex space-x-1.5 z-30 bg-black/20 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/10">
            {hotelPics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-gold-400 w-3.5' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Elegant gold foil label on the photo */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-gold-300/40 text-center shadow-md z-30">
            <span className="font-cinzel text-[10px] tracking-widest text-gold-600 block">Lieu Sacré</span>
            <span className="font-serif text-sm font-bold text-nude-900 block mt-0.5">Hôtel Le Napolitain</span>
          </div>
        </div>

        {/* Right Side: Details & Interactive Mock Map */}
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-gold-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-cinzel text-xs tracking-wider uppercase font-semibold">Adresse Prestige</span>
            </div>
            
            <h4 className="font-serif text-2xl font-bold text-nude-900 mb-2">
              Hôtel Le Napolitain
            </h4>
            
            <p className="font-sans text-sm text-nude-600 leading-relaxed mb-4">
              Route de Corniche Stora, Placette Casino
            </p>

            <div className="space-y-2.5 border-t border-b border-nude-200 py-4 mb-6">
              <div className="flex items-center text-sm text-nude-600 space-x-3">
                <Calendar className="w-4 h-4 text-gold-500" />
                <span>Samedi, 17 Octobre 2026 à partir de 13:00</span>
              </div>
            </div>
          </div>

          {/* Clean Mock Map Interface */}
          <div className="bg-nude-50 rounded-2xl border border-gold-300/20 p-4 relative overflow-hidden">
            {/* Background design representation of map */}
            <div className="absolute inset-0 opacity-15 bg-fine-lines" />
            <div className="absolute inset-0 pointer-events-none bg-islamic-pattern opacity-5" />

            {/* Stylized lines representing roads */}
            <svg className="absolute inset-0 w-full h-full opacity-30 stroke-gold-400 stroke-[1.5]" viewBox="0 0 300 120">
              <path d="M 0,40 C 80,40 120,80 300,80" fill="none" />
              <path d="M 120,0 L 120,120" fill="none" />
              <path d="M 220,0 L 180,120" fill="none" strokeDasharray="3 3" />
              <circle cx="120" cy="65" r="4" fill="red" className="animate-ping" />
            </svg>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="font-cinzel text-[9px] tracking-wider text-gold-600 block uppercase">
                  Itinéraire GPS
                </span>
                <span className="text-xs text-nude-700 font-semibold block mt-0.5">
                  Visualiser sur Google Maps
                </span>
              </div>
              
              <a
                href="https://maps.app.goo.gl/otxsNatC7SSDR4MG9?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 px-4 py-2 bg-gold-foil text-gold-900 rounded-xl font-cinzel text-[10px] font-bold tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-md"
              >
                <Navigation className="w-3 h-3" />
                <span>Naviguer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

