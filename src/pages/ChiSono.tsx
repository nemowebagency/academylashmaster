import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import NeonCursor from '../components/NeonCursor';

const ChiSono = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <NeonCursor />
      <div className="min-h-screen bg-black">
        {/* Header */}
        <header className="bg-black border-b border-gray-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 sm:py-6">
              <div className="flex items-center">
                <a href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-gray-300 transition duration-300">
                  Academy Lash Master
                </a>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300 font-medium">Home</Link>
                <Link to="/corsi" className="text-gray-300 hover:text-white transition duration-300 font-medium">Corsi</Link>
                <Link to="/chi-sono" className="text-white font-medium">Chi sono</Link>
                <Link to="/contatti" className="text-gray-300 hover:text-white transition duration-300 font-medium">Contatti</Link>
              </nav>
              
              {/* Desktop CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                >
                  Richiedi informazioni
                </button>
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
                    className="text-gray-300 hover:text-white transition duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/corsi" 
                    className="text-gray-300 hover:text-white transition duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Corsi
                  </Link>
                  <Link 
                    to="/chi-sono" 
                    className="text-white font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Chi sono
                  </Link>
                  <Link 
                    to="/contatti" 
                    className="text-gray-300 hover:text-white transition duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contatti
                  </Link>
                  <button
                    onClick={() => {
                      setShowContactForm(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full font-bold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 text-center mt-4"
                  >
                    Richiedi informazioni
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Chi Sono
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Scopri la mia storia e la passione che mi ha portato a creare Academy Lash Master
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - Empty for now */}
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Contenuto in arrivo
              </h2>
              <p className="text-gray-300 text-lg">
                Questa pagina sarà presto arricchita con contenuti dettagliati.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 sm:py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Academy Lash Master</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">La tua scuola di formazione per extension ciglia</p>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-300 mb-2 text-sm sm:text-base">
                <span className="text-white font-semibold">Telefono:</span> +39 3533165390
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="text-white font-semibold">P.IVA:</span> 03338640802
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm sm:text-base">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm sm:text-base">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm sm:text-base">TikTok</a>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">&copy; 2024 Academy Lash Master. Tutti i diritti riservati.</p>
          </div>
        </footer>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white elegant-quote">Richiedi Informazioni</h3>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-white text-xl sm:text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Il tuo nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="la.tua@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Dimmi di più sui corsi che ti interessano..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg sm:rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm sm:text-base"
                  >
                    Invia Richiesta
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
};

export default ChiSono;
