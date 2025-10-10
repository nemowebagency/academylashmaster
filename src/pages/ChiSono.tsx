import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroChiSono from '../components/HeroChiSono';

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
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroChiSono />

        

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

      </div>
    </>
  );
};

export default ChiSono;
