import React from 'react';

const HeroCorsi = () => {
  return (
    <>
      {/* ===========================================
          HERO CORSI SECTION - Sezione hero per la pagina corsi con immagine di sfondo
          =========================================== */}
      <section className="relative overflow-hidden h-screen flex items-center" style={{marginTop: '32px'}}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/girl1.png')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/40 to-transparent"></div>
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight">
              I nostri corsi <span className="font-bold">professionali</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light">
              Formazione <span className="font-bold">professionale</span> per ogni livello. Scegli il <span className="font-bold">percorso</span> giusto per te e inizia la tua <span className="font-bold">carriera</span> nel mondo delle <span className="font-bold">extension ciglia</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCorsi;
