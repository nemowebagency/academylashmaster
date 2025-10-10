import React from 'react';

const HeroContatti = () => {
  return (
    <>
      {/* ===========================================
          HERO CONTATTI SECTION - Sezione hero per la pagina contatti con immagine di sfondo
          =========================================== */}
      
      <section className="relative overflow-hidden h-[55vh] flex items-center" style={{marginTop: '92px'}}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/contatti.jpg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/40 to-transparent"></div>
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Contattami
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light">
              Sono qui per rispondere alle tue <span className="font-bold">domande</span> e aiutarti a iniziare il tuo <span className="font-bold">percorso</span> nel mondo delle <span className="font-bold">extension ciglia</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroContatti;
