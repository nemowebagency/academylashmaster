import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          
          {/* Column 1 - Logo and Social */}
          <div className="text-center md:text-left">
            <img 
              src="/logo/LogoBianco.png" 
              alt="Academy Lash Master - Logo scuola formazione extension ciglia professionali" 
              className="h-12 sm:h-16 lg:h-20 w-auto mx-auto md:mx-0 mb-4 sm:mb-6"
              loading="eager"
              decoding="async"
            />
            <p className="text-white font-light text-sm sm:text-base mb-6 sm:mb-8">
              La tua scuola di formazione per extension ciglia
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6">
              <a href="https://facebook.com/academylashmaster" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300" aria-label="Segui Academy Lash Master su Facebook">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/academylashmaster" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300" aria-label="Segui Academy Lash Master su Instagram">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@academylashmaster" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300" aria-label="Segui Academy Lash Master su TikTok">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Menu di Navigazione</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link to="/" className="block text-gray-200 hover:text-yellow-400 transition duration-300 text-sm sm:text-base" aria-label="Vai alla pagina Home - Academy Lash Master">
                Home
              </Link>
              <Link to="/corsi" className="block text-gray-200 hover:text-yellow-400 transition duration-300 text-sm sm:text-base" aria-label="Scopri i corsi di extension ciglia Academy Lash Master">
                Corsi
              </Link>
              <Link to="/chi-sono" className="block text-gray-200 hover:text-yellow-400 transition duration-300 text-sm sm:text-base" aria-label="Conosci Ana Maria fondatrice Academy Lash Master">
                Chi sono
              </Link>
              <Link to="/contatti" className="block text-gray-200 hover:text-yellow-400 transition duration-300 text-sm sm:text-base" aria-label="Contatta Academy Lash Master per informazioni">
                Contatti
              </Link>
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Contatti</h4>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-200 text-sm sm:text-base">
                <span className="text-white font-semibold">Telefono:</span> +39 3533165390
              </p>
              <p className="text-gray-200 text-sm sm:text-base">
                <span className="text-white font-semibold">Email:</span> info@academylashmaster.com
              </p>
              <p className="text-gray-200 text-sm sm:text-base">
                <span className="text-white font-semibold">Indirizzo:</span> Via Roma 123, Milano
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left - Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-300 text-xs sm:text-sm">
                © 2025 Academy Lash Master di Ana Maria. Tutti i diritti riservati.
              </p>
            </div>
            
            {/* Right - P.IVA and Policies */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-300 text-xs sm:text-sm">
                P.IVA: 03338640802
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition duration-300 text-xs sm:text-sm" aria-label="Leggi la Privacy Policy di Academy Lash Master">
                  Privacy Policy
                </Link>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-white transition duration-300 text-xs sm:text-sm" aria-label="Leggi la Cookie Policy di Academy Lash Master">
                  Cookie Policy
                </Link>
                <a href="/sitemap.xml" className="text-gray-300 hover:text-white transition duration-300 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer" aria-label="Visualizza la Sitemap di Academy Lash Master">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
