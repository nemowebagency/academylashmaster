import React, { useState } from 'react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });

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
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300">
                Academy Lash Master
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/corsi" className="text-gray-300 hover:text-white transition duration-300 font-medium">Corsi</a>
              <a href="/about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi Siamo</a>
              <a href="/contatti" className="text-white font-medium">Contatti</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Siamo qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso 
              nel mondo delle extension ciglia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Informazioni di Contatto</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Non esitare a contattarci per qualsiasi domanda sui nostri corsi o per 
                  prenotare una consulenza personalizzata.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Telefono</h3>
                    <p className="text-gray-300 text-lg">+39 3533165390</p>
                    <p className="text-gray-400 text-sm">Lun-Ven: 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 text-lg">info@academylashmaster.com</p>
                    <p className="text-gray-400 text-sm">Rispondiamo entro 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Indirizzo</h3>
                    <p className="text-gray-300 text-lg">Via Roma 123, Milano</p>
                    <p className="text-gray-400 text-sm">Metro: Duomo (5 min a piedi)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Orari</h3>
                    <p className="text-gray-300 text-lg">Lunedì - Venerdì: 9:00 - 18:00</p>
                    <p className="text-gray-300 text-lg">Sabato: 9:00 - 13:00</p>
                    <p className="text-gray-400 text-sm">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Seguici sui Social</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-xl">📘</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-xl">📷</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                    <span className="text-white hover:text-black text-xl">🎵</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Invia un Messaggio</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300"
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300"
                    placeholder="la.tua@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-300 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300 resize-none"
                    placeholder="Raccontaci come possiamo aiutarti..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Dove Siamo</h2>
            <p className="text-gray-300 text-lg">Vieni a trovarci nel cuore di Milano</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-300 text-lg">Via Roma 123, Milano</p>
                <p className="text-gray-400">Metro: Duomo (5 minuti a piedi)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Academy Lash Master</h4>
          <p className="text-gray-300 mb-6">La tua scuola di formazione per extension ciglia</p>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-2">
              <span className="text-white font-semibold">Telefono:</span> +39 3533165390
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">P.IVA:</span> 03338640802
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">TikTok</a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2024 Academy Lash Master. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contatti;
