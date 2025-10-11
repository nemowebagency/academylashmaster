import React, { useState, useEffect } from 'react';

const HeroChiSono = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ===========================================
          HERO CHI SONO SECTION - Sezione hero per la pagina chi sono con immagine di sfondo
          =========================================== */}
      
      <section className="relative overflow-hidden h-[55vh] flex items-center" style={{
        marginTop: 'calc(32px + 48px)', // 32px promo + navbar height (h-8 logo = 32px + py-1 = 8px = 40px, plus some buffer)
        height: 'calc(55vh - calc(32px + 48px))'
      }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/chisono.jpg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/40 to-transparent"></div>
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Chi Sono
            </h2>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light transition-all duration-1000 ease-out px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: isVisible ? '0.3s' : '0s'}}>
              Scopri la mia <span className="font-bold">storia</span> e la <span className="font-bold">passione</span> che mi ha portato a creare <span className="font-bold">Academy Lash Master</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroChiSono;
