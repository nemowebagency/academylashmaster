function App() {
  const handleEnroll = () => {
    alert('Iscriviti al corso! Contattaci per maggiori informazioni.')
  }

  const handleContact = () => {
    alert('Contattaci per informazioni sui corsi!')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white">Academy Lash Master</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#corsi" className="text-gray-300 hover:text-white transition duration-300 font-medium">Corsi</a>
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi Siamo</a>
              <a href="#contatti" className="text-gray-300 hover:text-white transition duration-300 font-medium">Contatti</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Diventa un <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Master</span> delle Extension Ciglia
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto md:mx-0">
                Impara le tecniche professionali per l'applicazione delle extension ciglia. 
                Corsi certificati per diventare un tecnico esperto nel settore beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={handleEnroll}
                  className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
                >
                  Iscriviti Ora
                </button>
                <button
                  onClick={handleContact}
                  className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Scopri di Più
                </button>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <img 
                  src="/background/girl1.png" 
                  alt="Academy Lash Master" 
                  className="w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="corsi" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">I Nostri Corsi</h3>
            <p className="text-xl text-gray-300">Formazione professionale per ogni livello</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-white/10 border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-2xl">👁️</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Corso Base</h4>
                <p className="text-gray-300 mb-6">
                  Impara le tecniche fondamentali per l'applicazione delle extension ciglia. 
                  Perfetto per principianti.
                </p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li>• Teoria delle extension</li>
                  <li>• Tecniche di applicazione</li>
                  <li>• Materiali e strumenti</li>
                  <li>• Certificazione inclusa</li>
                </ul>
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Scopri di Più
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-white/10 border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-2xl">✨</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Corso Avanzato</h4>
                <p className="text-gray-300 mb-6">
                  Tecniche avanzate e specializzazioni per diventare un vero professionista 
                  del settore.
                </p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li>• Volume e Mega Volume</li>
                  <li>• Tecniche creative</li>
                  <li>• Gestione clientela</li>
                  <li>• Business nel beauty</li>
                </ul>
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Scopri di Più
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl hover:shadow-white/10 border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-2xl">👑</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Master Class</h4>
                <p className="text-gray-300 mb-6">
                  Il corso più completo per diventare un vero Master delle extension ciglia 
                  e aprire la propria attività.
                </p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li>• Tutte le tecniche</li>
                  <li>• Gestione business</li>
                  <li>• Marketing beauty</li>
                  <li>• Supporto continuo</li>
                </ul>
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Scopri di Più
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Section - Portrait and Quote */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="w-80 h-96 mx-auto shadow-2xl overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional portrait"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-700"></div>
              </div>
              
              <div className="text-center transform transition-all duration-700 hover:scale-105">
                <div className="relative">
                  <div className="text-6xl text-white font-serif mb-4 animate-pulse">"</div>
                  <p className="text-xl text-white font-light italic leading-relaxed px-8 transform transition-all duration-500 hover:text-purple-300">
                    Da una passione può nascere una professione, da un sogno può nascere la libertà.
                  </p>
                  <div className="text-6xl text-white font-serif mt-4 animate-pulse delay-500">"</div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="space-y-8 text-white">
              {/* Title */}
              <div className="relative transform transition-all duration-700 hover:scale-105">
                <h3 className="text-6xl font-bold mb-2 animate-fade-in">
                  About me <span className="font-serif italic text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Lashes</span>
                </h3>
                <div className="inline-block transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                  <span className="text-2xl font-light bg-white text-black px-4 py-2 rounded-full border-2 border-white hover:bg-purple-100 transition-colors duration-300">
                    Story
                  </span>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-gray-900/30 p-6 rounded-lg">
                  <h4 className="text-2xl font-semibold mb-4 text-white hover:text-purple-300 transition-colors duration-300">Imparare, crescere, trasformarsi</h4>
                  <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:text-white">
                    Il mio profondo desiderio di trasformare la passione in professione mi ha portato a condividere 
                    gli strumenti con altre donne. Dopo anni di studio internazionale e innovazione nel settore 
                    delle extension ciglia, ho deciso di creare un percorso formativo che va oltre la semplice tecnica.
                  </p>
                </div>

                <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-gray-900/30 p-6 rounded-lg">
                  <h4 className="text-2xl font-semibold mb-4 text-white hover:text-purple-300 transition-colors duration-300">Oltre le parole: nascono i corsi</h4>
                  <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:text-white">
                    I miei corsi non sono solo lezioni tecniche, ma veri e propri percorsi di crescita personale 
                    e professionale. Formazione completa dai fondamentali di base alle tecniche avanzate, 
                    gestione del business e applicazione pratica su modelle reali. Manuali esclusivi, materiali 
                    di alta qualità e correzioni personalizzate per costruire sicurezza, fiducia e indipendenza.
                  </p>
                </div>

                <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-gray-900/30 p-6 rounded-lg">
                  <h4 className="text-2xl font-semibold mb-4 text-white hover:text-purple-300 transition-colors duration-300">Conoscenza è potere</h4>
                  <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:text-white">
                    I miei studi internazionali mi hanno dato accesso a tecniche innovative, strumenti concreti 
                    e materiali all'avanguardia. Tutto questo lo condivido con le mie studentesse per una 
                    formazione moderna e di livello internazionale.
                  </p>
                </div>

                <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-gray-900/30 p-6 rounded-lg">
                  <h4 className="text-2xl font-semibold mb-4 text-white hover:text-purple-300 transition-colors duration-300">La missione</h4>
                  <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:text-white">
                    La mia missione va oltre l'insegnamento delle tecniche. Accompagno le donne in un percorso 
                    di trasformazione per diventare Lash Artists, favorendo indipendenza e libertà. Ascolto la 
                    storia unica di ogni donna, guidandola a costruire fiducia e coraggio per il suo futuro. 
                    I corsi sono trampolini di lancio per crescita, autonomia e realizzazione personale.
                  </p>
                </div>

                <div className="pt-4 transform transition-all duration-500 hover:scale-105">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white transform rotate-45 mr-4 mt-2 animate-spin"></div>
                    <p className="text-xl text-white italic font-light hover:text-purple-300 transition-colors duration-300">
                      Perché quando impari a credere in te stessa, nessun obiettivo è troppo lontano.
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex justify-end pt-8">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex flex-col items-center justify-center text-black shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-12 hover:shadow-3xl group">
                  <div className="text-sm font-bold mb-2 group-hover:animate-bounce">VIP</div>
                  <div className="text-lg font-bold mb-2 group-hover:animate-pulse">LASHES ACADEMY</div>
                  <div className="text-xs font-semibold mb-2 text-center group-hover:animate-pulse delay-100">MASTER TRAINER</div>
                  <div className="text-xs font-semibold mb-2 group-hover:animate-pulse delay-200">INTERNATIONAL</div>
                  <div className="flex space-x-1 group-hover:animate-pulse delay-300">
                    <span className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">★</span>
                    <span className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">★</span>
                    <span className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">★</span>
                    <span className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">★</span>
                    <span className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Contattaci</h3>
          <p className="text-xl text-gray-300 mb-12">Hai domande? Siamo qui per aiutarti!</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl">📞</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Telefono</h4>
              <p className="text-gray-300">+39 123 456 7890</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl">✉️</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300">info@academylashmaster.com</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl">📍</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Indirizzo</h4>
              <p className="text-gray-300">Via Roma 123, Milano</p>
            </div>
          </div>

          <button
            onClick={handleContact}
            className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
          >
            Richiedi Informazioni
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Academy Lash Master</h4>
          <p className="text-gray-300 mb-6">La tua scuola di formazione per extension ciglia</p>
          
          {/* Contact Info */}
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
  )
}

export default App
