import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroContatti from '../components/HeroContatti';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNavigateToAbout = () => {
    window.location.href = '/chi-sono';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
  };

  const handleModalFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Modal form submitted:', modalFormData);
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    setShowContactForm(false);
    setModalFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setModalFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroContatti />

        <section id="contatti" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Left - Contact Info */}
            <div>
              {/* Section Header */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">Rimani in contatto con me</h3>
                <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed text-justify" style={{textAlignLast: 'left'}}>Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso nel mondo delle extension ciglia.</p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mr-4 sm:mr-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-1">Telefono</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+39 3533165390</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mr-4 sm:mr-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-1">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base">info@academylashmaster.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mr-4 sm:mr-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-1">Indirizzo</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Via Roma 123, Milano</p>
                </div>
              </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Richiedi Informazioni</h3>
                <p className="text-base sm:text-lg text-black font-light">Compila il form per ricevere tutte le informazioni sui miei corsi</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative z-10">
                    <label className="block text-black text-sm font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <label className="block text-black text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                      placeholder="la.tua@email.com"
                    />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <label className="block text-black text-sm font-medium mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div className="relative z-10">
                  <label className="block text-black text-sm font-medium mb-2">Messaggio *</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors resize-none text-sm sm:text-base"
                    placeholder="Dimmi di più sui corsi che ti interessano..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                  >
                    <span className="relative z-10">Invia Messaggio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </form>
            </div>
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
      <Footer />

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
            
            <form onSubmit={handleModalFormSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={modalFormData.name}
                  onChange={handleModalInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Il tuo nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={modalFormData.email}
                  onChange={handleModalInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="la.tua@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={modalFormData.phone}
                  onChange={handleModalInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="+39 123 456 7890"
                />
              </div>
              
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  value={modalFormData.message}
                  onChange={handleModalInputChange}
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

      </div>
    </>
  );
};

export default Contatti;
