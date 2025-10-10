import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  setShowContactForm: (show: boolean) => void;
}

const Navbar = ({ setShowContactForm }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Gestisce la trasparenza della barra di navigazione durante lo scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`fixed left-0 right-0 z-40 bg-black border-b border-gray-800 shadow-2xl transition-all duration-300 ${isScrolled ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-100'}`} style={{top: '32px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1 sm:py-1.5">
            <div className="flex items-center">
              <img 
                src="/logo/LogoBianco.png" 
                alt="Academy Lash Master" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Home
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
              </Link>
              <Link to="/corsi" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Corsi
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/corsi' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
              </Link>
              <Link to="/chi-sono" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Chi sono
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/chi-sono' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
              </Link>
              <Link to="/contatti" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Contatti
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/contatti' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
              </Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/contatti#form"
                className="bg-white text-black px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-medium text-sm flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
              >
                <span className="relative z-10">Richiedi informazioni</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                  <span className={`absolute -bottom-1 left-0 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
                <Link 
                  to="/corsi" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corsi
                  <span className={`absolute -bottom-1 left-0 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/corsi' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
                <Link 
                  to="/chi-sono" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chi sono
                  <span className={`absolute -bottom-1 left-0 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/chi-sono' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
                <Link 
                  to="/contatti" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contatti
                  <span className={`absolute -bottom-1 left-0 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/contatti' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
                <Link 
                  to="/contatti#form"
                  className="bg-white text-black px-6 py-3 rounded-full font-medium text-center mt-4 text-sm flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Richiedi informazioni</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
