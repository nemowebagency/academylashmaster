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
              <span className="ml-3 text-sm text-white italic playwrite-signature">by Ana Maria</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#corsi" className="text-gray-300 hover:text-white transition duration-300 font-medium">Corsi</a>
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi sono</a>
              <a href="#contatti" className="text-gray-300 hover:text-white transition duration-300 font-medium">Contatti</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/girl1.png')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Diventa un <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Master</span> delle Extension Ciglia
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Impara le tecniche professionali per l'applicazione delle extension ciglia. 
                Corsi certificati per diventare un tecnico esperto nel settore beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
          <button
                  onClick={handleEnroll}
                  className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
                >
                  Iscriviti Ora
                </button>
                <a
                  href="#about"
                  className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Chi sono
                </a>
              </div>
            </div>
            
            {/* Right Side - Empty for now, image is background */}
            <div className="hidden lg:block"></div>
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

       {/* Chi Sono Section - Ana Maria's Story */}
       <section id="about" className="py-32 bg-black relative overflow-hidden">
         {/* Elegant Background */}
         <div className="absolute inset-0">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/6 rounded-full blur-2xl animate-pulse delay-500"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           {/* Hero Title */}
           <div className="text-center mb-24">
             <div className="inline-block relative">
               <h2 className="text-8xl md:text-9xl font-bold text-white mb-6 relative">
                 <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                   Chi
                 </span>
                 <span className="ml-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                   Sono
                 </span>
               </h2>
               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-white to-white rounded-full"></div>
             </div>
             <p className="text-2xl text-gray-300 mt-12 max-w-3xl mx-auto leading-relaxed">
               La mia storia, la mia passione, la mia missione di trasformare sogni in realtà
             </p>
           </div>

           {/* Main Content - Ana Maria's Story */}
           <div className="grid lg:grid-cols-2 gap-24 items-start">
             {/* Left - Image */}
             <div className="relative group">
               <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                 <img 
                   src="/soggetto/person1.png"
                   alt="Ana Maria - Founder Academy Lash Master"
                   className="w-full h-[600px] object-contain transform transition-all duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               
               {/* Elegant Decorative Elements */}
               <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-300"></div>
               <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-700"></div>
               <div className="absolute top-1/2 -left-12 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"></div>
             </div>

             {/* Right - Ana Maria's Story */}
             <div className="space-y-12">
               {/* Introduction */}
               <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group">
                 <div className="flex items-center mb-8">
                   <div className="w-16 h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mr-6">
                     <span className="text-black text-2xl">👋</span>
                   </div>
                   <h3 className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                     Ciao, sono Ana Maria
                   </h3>
                 </div>
                 <p className="text-gray-300 leading-relaxed text-xl">
                   Sono una Lash Artist professionista con oltre 5 anni di esperienza nel settore beauty. 
                   La mia passione per le extension ciglia è nata da un sogno: aiutare le donne a sentirsi 
                   più belle e sicure di sé attraverso un tocco di eleganza naturale.
                 </p>
               </div>

             </div>
           </div>
         </div>
       </section>

       {/* About Section - Elegant & Spacious */}
       <section className="py-32 bg-black relative overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-24">
            <div className="inline-block relative">
              <h2 className="text-8xl md:text-9xl font-bold text-white mb-6 relative">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  About
                </span>
                <span className="ml-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-white to-white rounded-full"></div>
            </div>
            <p className="text-2xl text-gray-300 mt-12 max-w-3xl mx-auto leading-relaxed">
              La mia storia, la mia passione, la mia missione di trasformare sogni in realtà
            </p>
          </div>

          {/* Main Content - Better Spaced */}
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Left - Image & Quote */}
            <div className="space-y-16">
              {/* Image Container */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/person1.png"
                    alt="Professional portrait"
                    className="w-full h-[600px] object-contain transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Elegant Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"></div>
              </div>

              {/* Quote Section */}
              <div className="relative">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-white"></div>
                  <div className="text-7xl text-white absolute top-6 left-8">"</div>
                  <p className="text-2xl text-white italic leading-relaxed pl-12 pr-6 pt-6">
                    Da una passione può nascere una professione, da un sogno può nascere la libertà.
                  </p>
                  <div className="text-7xl text-white absolute bottom-6 right-8">"</div>
                </div>
              </div>
            </div>

            {/* Right - Content with Better Spacing */}
            <div className="space-y-12">
              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mr-6">
                    <span className="text-black text-2xl">✨</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    La Mia Missione
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-xl">
                  Trasformo la passione in professione. Accompagno le donne in un percorso di crescita 
                  per diventare Lash Artists indipendenti e di successo, creando opportunità di libertà 
                  economica e realizzazione personale.
                </p>
              </div>

              {/* Journey Timeline */}
              <div className="space-y-8">
                <h4 className="text-2xl font-semibold text-white mb-8">Il Mio Percorso</h4>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-white rounded-full"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-12">
                    <div className="flex items-start group">
                      <div className="w-16 h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-black font-bold text-lg">1</span>
                      </div>
                      <div className="ml-8 flex-1">
                        <h5 className="text-xl font-semibold text-white mb-3">Studi Internazionali</h5>
                        <p className="text-gray-400 text-lg leading-relaxed">Formazione avanzata nelle migliori accademie del mondo, specializzandomi in tecniche innovative e materiali all'avanguardia</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-16 h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-black font-bold text-lg">2</span>
                      </div>
                      <div className="ml-8 flex-1">
                        <h5 className="text-xl font-semibold text-white mb-3">Innovazione Tecnica</h5>
                        <p className="text-gray-400 text-lg leading-relaxed">Sviluppo di tecniche innovative e materiali all'avanguardia, sempre al passo con le ultime tendenze del settore beauty</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-16 h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-black font-bold text-lg">3</span>
                      </div>
                      <div className="ml-8 flex-1">
                        <h5 className="text-xl font-semibold text-white mb-3">Academy Lash Master</h5>
                        <p className="text-gray-400 text-lg leading-relaxed">Creazione di un percorso formativo completo e personalizzato, dedicato alla crescita professionale e personale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats - Better Spaced */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-white/30 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">500+</div>
                  <div className="text-gray-400 text-base">Studentesse Formate</div>
                </div>
                <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-white/30 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">5</div>
                  <div className="text-gray-400 text-base">Anni di Esperienza</div>
                </div>
                <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-white/30 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">100%</div>
                  <div className="text-gray-400 text-base">Soddisfazione</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button className="w-full bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Scopri i Miei Corsi
          </button>
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
