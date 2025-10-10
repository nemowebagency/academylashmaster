import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* ===========================================
          HERO SECTION - Sezione principale con immagine di sfondo
          =========================================== */}
      <section className="relative overflow-hidden flex items-center" style={{marginTop: '92px', height: 'calc(100vh - 92px)'}}>
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
              Diventa un <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">master</span> delle <span className="font-bold">extension ciglia</span>
            </h2>
            <div className="flex items-center gap-4 mb-4 sm:mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <span className="text-white font-light text-lg sm:text-xl">corsi</span>
              <span className="text-white/60">•</span>
              <span className="text-white font-light text-lg sm:text-xl">professionali</span>
              <span className="text-white/60">•</span>
              <span className="text-white font-light text-lg sm:text-xl">certificati</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light animate-fade-in" style={{animationDelay: '0.9s'}}>
              Impara le tecniche <span className="font-bold">professionali</span> per l'applicazione delle <span className="font-bold">extension ciglia</span>. 
              Corsi <span className="font-bold">certificati</span> per diventare un <span className="font-bold">tecnico esperto</span> nel settore beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Link
                to="/corsi"
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
              >
                <span className="relative z-10">Scopri di più</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Link>
              <Link
                to="/chi-sono"
                className="bg-transparent text-white px-8 py-4 rounded-full text-base border border-white flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:border-transparent hover:text-black"
              >
                <span className="relative z-10">Chi sono</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
