import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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
              <a href="/#about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi sono</a>
              <Link to="/contatti" className="text-white font-medium">Contatti</Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => window.scrollTo({ top: document.getElementById('contact-form')?.offsetTop || 0, behavior: 'smooth' })}
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
                <a 
                  href="/#about" 
                  className="text-gray-300 hover:text-white transition duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chi sono
                </a>
                <Link 
                  to="/contatti" 
                  className="text-white font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contatti
                </Link>
                <button 
                  onClick={() => {
                    window.scrollTo({ top: document.getElementById('contact-form')?.offsetTop || 0, behavior: 'smooth' });
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
      <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/soggetto/neon.jpeg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contattami
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso 
              nel mondo delle extension ciglia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Contatti</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12">Hai domande? Sono qui per aiutarti!</p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Telefono</h4>
              <p className="text-gray-300 text-sm sm:text-base">+39 3533165390</p>
            </div>
            <div className="text-center bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300 text-sm sm:text-base">info@academylashmaster.com</p>
            </div>
            <div className="text-center bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Indirizzo</h4>
              <p className="text-gray-300 text-sm sm:text-base">Via Roma 123, Milano</p>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Contact Info & Additional Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Informazioni Dettagliate</h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                  Non esitare a contattarci per qualsiasi domanda sui nostri corsi o per 
                  prenotare una consulenza personalizzata.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-lg sm:text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Telefono</h3>
                    <p className="text-gray-300 text-base sm:text-lg">+39 3533165390</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Lun-Ven: 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-lg sm:text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Email</h3>
                    <p className="text-gray-300 text-base sm:text-lg">info@academylashmaster.com</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Rispondiamo entro 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-lg sm:text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Indirizzo</h3>
                    <p className="text-gray-300 text-base sm:text-lg">Via Roma 123, Milano</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Metro: Duomo (5 min a piedi)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-lg sm:text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Orari</h3>
                    <p className="text-gray-300 text-base sm:text-lg">Lunedì - Venerdì: 9:00 - 18:00</p>
                    <p className="text-gray-300 text-base sm:text-lg">Sabato: 9:00 - 13:00</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 sm:pt-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Seguici sui Social</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-lg sm:text-xl">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-lg sm:text-xl">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-lg sm:text-xl">🎵</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Richiedi Informazioni</h2>
                <p className="text-gray-300 text-sm sm:text-base">Compila il form per ricevere tutte le informazioni sui miei corsi</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                      placeholder="la.tua@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none text-sm sm:text-base"
                    placeholder="Dimmi di più sui corsi che ti interessano..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm sm:text-base"
                  >
                    Invia Messaggio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Dove Siamo</h2>
            <p className="text-gray-300 text-base sm:text-lg">Vieni a trovarci nel cuore di Milano</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl sm:text-6xl mb-3 sm:mb-4 block">🗺️</span>
                <p className="text-gray-300 text-base sm:text-lg">Via Roma 123, Milano</p>
                <p className="text-gray-400 text-sm sm:text-base">Metro: Duomo (5 minuti a piedi)</p>
              </div>
            </div>
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
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Contatti;
