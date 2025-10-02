import { useState } from 'react'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleEnroll = () => {
    alert('Iscriviti al corso! Contattaci per maggiori informazioni.')
  }

  const handleContact = () => {
    alert('Contattaci per informazioni sui corsi!')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare l'email
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
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
              <h1 className="text-3xl font-bold text-white">Academy Lash Master</h1>
              <span className="ml-3 text-sm text-white italic playwrite-signature">by Ana Maria</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#corsi" className="text-gray-300 hover:text-white transition duration-300 font-medium">Corsi</a>
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi sono</a>
              <a href="#contatti" className="text-gray-300 hover:text-white transition duration-300 font-medium">Contatti</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full font-bold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                Richiedi informazioni
              </button>
            </div>
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
              <p className="text-xl text-gray-200 mb-8 leading-relaxed elegant-quote">
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
            <p className="text-xl text-gray-300 elegant-quote">Formazione professionale per ogni livello</p>
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
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 relative">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Chi
                </span>
                <span className="ml-8 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  Sono
                </span>
              </h2>
               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-white to-white rounded-full"></div>
             </div>
             <p className="text-2xl text-gray-300 mt-12 max-w-3xl mx-auto leading-relaxed elegant-quote">
               Da una passione può nascere una professione, da un sogno può nascere la libertà.
             </p>
           </div>

          {/* Main Content - Ana Maria's Story */}
          <div className="space-y-24">
            {/* Row 1: Person1 a sinistra - Riquadro Imparare a destra */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Left - Immagine Person1 */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/person1.png"
                    alt="Ana Maria - Founder Academy Lash Master"
                    className="w-full h-[500px] object-contain transform transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                 
                 {/* Elegant Decorative Elements */}
                 <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-300"></div>
                 <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-700"></div>
                 <div className="absolute top-1/2 -left-12 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-1000"></div>
               </div>

               {/* Right - Riquadro Imparare, crescere, trasformarsi */}
               <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group">
                 <div className="flex items-center mb-8">
                     <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-6">
                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     </div>
                   <h3 className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                     Imparare, crescere, trasformarsi
                   </h3>
                 </div>
                 <p className="text-gray-300 leading-relaxed text-xl">
                   La mia storia nasce da un desiderio profondo: trasformare una passione in una vera professione e offrire ad altre donne gli strumenti per fare lo stesso. Ho viaggiato, studiato e investito tempo ed energie per raccogliere le migliori conoscenze, arricchendo il mio percorso con esperienze internazionali che mi hanno permesso di crescere e portare innovazione nel mondo delle extension ciglia.
                 </p>
               </div>
            </div>

            {/* Row 2: Riquadro Oltre le parole a sinistra - Immagine Corsi a destra */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Left - Riquadro Oltre le parole */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group">
                <div className="flex items-center mb-8">
                   <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-6">
                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 75.75 75.75 0 01-.44-.01C3.119 13.547 3 12.75 3 12c0-.75.119-1.547.95-2.603zM6.02 15.33a8.987 8.987 0 004.5-1.508 8.987 8.987 0 004.5 1.508 8.987 8.987 0 01-4.5 1.508 8.987 8.987 0 01-4.5-1.508z" />
                     </svg>
                   </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Oltre le parole: nascono i corsi
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-xl">
                  I miei corsi non sono semplici lezioni tecniche, ma percorsi di crescita personale e professionale. Ogni allieva viene accompagnata passo dopo passo: dalle basi fondamentali alle competenze avanzate, dalla precisione della tecnica alla gestione del business, fino alla pratica su modella reale. A supporto del percorso formativo, metto a disposizione manuali esclusivi, materiali professionali di alta qualità e correzioni personalizzate, perché imparare non significa solo acquisire una tecnica, ma costruire fiducia, sicurezza e indipendenza.
                </p>
              </div>

              {/* Right - Immagine Corsi */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corsi.jpg"
                    alt="Corsi Academy Lash Master"
                    className="w-full h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corsi */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-200"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-800"></div>
              </div>
            </div>

            {/* Row 3: Immagine Corso2 a sinistra - Riquadro Conoscenza a destra */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Left - Immagine Corso2 */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corso2.jpg"
                    alt="Corso2 Academy Lash Master"
                    className="w-full h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corso2 */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-600"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-900"></div>
              </div>

              {/* Right - Riquadro Conoscenza è potere */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group">
                <div className="flex items-center mb-8">
                   <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-6">
                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                     </svg>
                   </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Conoscenza è potere
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-xl">
                  Molte persone negli anni mi hanno chiesto: "Dove hai fatto i tuoi corsi?" La risposta è spesso stata all'estero, dove i programmi erano più lunghi, completi e sempre aggiornati. Non si trattava di talento, ma di opportunità. Quelle esperienze mi hanno dato accesso a tecniche innovative, strumenti concreti e materiali d'avanguardia, che oggi condivido con le mie allieve per garantire una formazione moderna e di livello internazionale.
                </p>
              </div>
            </div>
          </div>

           {/* Timeline Orizzontale Progressiva */}
           <div className="mt-24">
             <div className="text-center mb-16">
               <h3 className="text-4xl font-bold text-white mb-4">Il Mio Percorso</h3>
               <p className="text-xl text-gray-300 elegant-quote">Dalla passione alla professione, passo dopo passo</p>
             </div>

             <div className="relative">
               {/* Linea Timeline Orizzontale */}
               <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-white via-white to-white rounded-full"></div>
               
               {/* Timeline Items Orizzontali */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                 {/* Step 1 */}
                 <div className="text-center group">
                   <div className="relative mb-8">
                     <div className="w-32 h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                       <span className="text-black font-bold text-3xl">1</span>
                     </div>
                     {/* Linea di connessione */}
                     <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                   </div>
                   <h4 className="text-xl font-semibold text-white mb-4">Gli Inizi</h4>
                   <p className="text-gray-400 leading-relaxed">
                     Ho iniziato come estetista tradizionale, ma quando ho scoperto il mondo delle extension ciglia, 
                     ho capito che era la mia vera vocazione.
                   </p>
                 </div>

                 {/* Step 2 */}
                 <div className="text-center group">
                   <div className="relative mb-8">
                     <div className="w-32 h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                       <span className="text-black font-bold text-3xl">2</span>
                     </div>
                     {/* Linea di connessione */}
                     <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                   </div>
                   <h4 className="text-xl font-semibold text-white mb-4">La Formazione</h4>
                   <p className="text-gray-400 leading-relaxed">
                     Ho investito anni nella formazione, studiando nelle migliori accademie internazionali. 
                     Ho imparato tecniche innovative e materiali all'avanguardia.
                   </p>
                 </div>

                 {/* Step 3 */}
                 <div className="text-center group">
                   <div className="relative mb-8">
                     <div className="w-32 h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                       <span className="text-black font-bold text-3xl">3</span>
                     </div>
                     {/* Linea di connessione */}
                     <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                   </div>
                   <h4 className="text-xl font-semibold text-white mb-4">Academy Lash Master</h4>
                   <p className="text-gray-400 leading-relaxed">
                     Oggi condivido la mia passione insegnando ad altre donne come trasformare la loro 
                     passione in una professione di successo.
                   </p>
                 </div>
               </div>
             </div>

             {/* CTA Button */}
             <div className="text-center mt-16">
               <button className="bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                 Scopri i miei corsi
               </button>
             </div>
           </div>
         </div>
       </section>


      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Contatti</h3>
          <p className="text-xl text-gray-300 mb-12">Hai domande? Sono qui per aiutarti!</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Telefono</h4>
              <p className="text-gray-300">+39 3533165390</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300">info@academylashmaster.com</p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Indirizzo</h4>
              <p className="text-gray-300">Via Roma 123, Milano</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Richiedi Informazioni</h3>
              <p className="text-lg text-gray-300">Compila il form per ricevere tutte le informazioni sui miei corsi</p>
            </div>
            
            <div className="bg-gray-900 rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Invia un Messaggio</h4>
                <p className="text-gray-300">Compila il form per richiedere informazioni sui nostri corsi</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                      placeholder="la.tua@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Dimmi di più sui corsi che ti interessano..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors transform hover:scale-105"
                  >
                    Invia Messaggio
          </button>
                </div>
              </form>
            </div>
          </div>
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

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white elegant-quote">Richiedi Informazioni</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  placeholder="la.tua@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  placeholder="+39 123 456 7890"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Dimmi di più sui corsi che ti interessano..."
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Invia Richiesta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
