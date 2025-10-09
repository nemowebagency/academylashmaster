import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import NeonCursor from '../components/NeonCursor'

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare l'email
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

  // Gestisce lo scroll automatico quando si arriva con l'hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Gestisce la trasparenza della barra di navigazione durante lo scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <NeonCursor />
      {/* Promo Banner */}
      <div className="bg-white text-black py-1 px-0 overflow-hidden fixed top-0 left-0 right-0 z-50" style={{height: '32px', paddingTop: '4px', paddingBottom: '4px'}}>
        <div className="flex animate-scroll-infinite">
          <div className="flex items-center space-x-8 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-sm font-medium">
                  PROMO: Per i primi clienti è disponibile un 10% di sconto!
                </span>
                <span className="text-sm font-medium">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Scia Magica del Cursore - TEMPORANEAMENTE DISABILITATA */}
      {/* {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length;
        const size = 8 + (index * 0.8);
        const blur = index * 0.3;
        
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${opacity * 0.8}) 0%, rgba(255,255,255,${opacity * 0.4}) 50%, transparent 70%)`,
              borderRadius: '50%',
              filter: `blur(${blur}px)`,
              transition: 'all 0.1s ease-out',
              boxShadow: `0 0 ${10 + index * 2}px rgba(255,255,255,${opacity * 0.5})`,
            }}
          />
        );
      })} */}
      
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
              <a href="#about" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Chi sono
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <Link to="/contatti" className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium text-sm relative group">
                Contatti
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/contatti' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
              </Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-medium text-sm flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
              >
                <span className="relative z-10">Richiedi informazioni</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
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
                <a 
                  href="#about" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chi sono
                  <span className="absolute -bottom-1 left-0 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <Link 
                  to="/contatti" 
                  className="text-white hover:text-yellow-400 transition-all duration-500 ease-out font-medium py-2 text-sm relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contatti
                  <span className={`absolute -bottom-1 left-0 w-1 h-1 rounded-full transition-opacity duration-300 ${location.pathname === '/contatti' ? 'bg-white opacity-100' : 'bg-yellow-400 opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
                <button 
                  onClick={() => {
                    setShowContactForm(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-white text-black px-6 py-3 rounded-full font-medium text-center mt-4 text-sm flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                >
                  <span className="relative z-10">Richiedi informazioni</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center" style={{marginTop: '32px'}}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/girl1.png')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/40 to-transparent"></div>
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight">
              Diventa un <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">master</span> delle <span className="font-bold">extension ciglia</span>
            </h2>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span className="text-white font-light text-lg sm:text-xl">corsi</span>
              <span className="text-white/60">•</span>
              <span className="text-white font-light text-lg sm:text-xl">professionali</span>
              <span className="text-white/60">•</span>
              <span className="text-white font-light text-lg sm:text-xl">certificati</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light">
              Impara le tecniche <span className="font-bold">professionali</span> per l'applicazione delle <span className="font-bold">extension ciglia</span>. 
              Corsi <span className="font-bold">certificati</span> per diventare un <span className="font-bold">tecnico esperto</span> nel settore beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                to="/corsi"
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
              >
                <span className="relative z-10">Scopri di più</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Link>
              <a
                href="#about"
                className="bg-transparent text-white px-8 py-4 rounded-full text-base border border-white flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:border-transparent"
              >
                <span className="relative z-10">Chi sono</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="corsi" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4">I nostri corsi <span className="font-bold text-black">professionali</span></h3>
            <p className="text-lg sm:text-xl text-black font-light">Formazione professionale per ogni livello</p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105">
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4 text-left">Corso Base</h4>
                <p className="text-black font-light mb-4 sm:mb-6 text-sm sm:text-base">
                  Impara le tecniche fondamentali per l'applicazione delle extension ciglia. 
                  Perfetto per principianti.
                </p>
                <ul className="text-left text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Teoria delle extension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Tecniche di applicazione</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Materiali e strumenti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Certificazione inclusa</span>
                  </li>
                </ul>
                <div 
                  className="mt-4 w-full h-80 rounded-lg relative bg-cover bg-center bg-no-repeat flex items-end justify-start p-4"
                  style={{ backgroundImage: 'url(/soggetto/c1.jpg)' }}
                >
                  <button 
                    onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                  >
                    <span className="relative z-10">Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105">
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4 text-left">Corso Avanzato</h4>
                <p className="text-black font-light mb-4 sm:mb-6 text-sm sm:text-base">
                  Tecniche avanzate e specializzazioni per diventare un vero professionista 
                  del settore.
                </p>
                <ul className="text-left text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Volume e Mega Volume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Tecniche creative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Gestione clientela</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Business nel beauty</span>
                  </li>
                </ul>
                <div 
                  className="mt-4 w-full h-80 rounded-lg relative bg-cover bg-center bg-no-repeat flex items-end justify-start p-4"
                  style={{ backgroundImage: 'url(/soggetto/c2.jpg)' }}
                >
                  <button 
                    onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                  >
                    <span className="relative z-10">Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105">
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4 text-left">Master Class</h4>
                <p className="text-black font-light mb-4 sm:mb-6 text-sm sm:text-base">
                  Il corso più completo per diventare un vero Master delle extension ciglia 
                  e aprire la propria attività.
                </p>
                <ul className="text-left text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Tutte le tecniche</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Gestione business</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Marketing beauty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>Supporto continuo</span>
                  </li>
                </ul>
                <div 
                  className="mt-4 w-full h-80 rounded-lg relative bg-cover bg-center bg-no-repeat flex items-end justify-start p-4"
                  style={{ backgroundImage: 'url(/soggetto/c3.jpg)' }}
                >
                  <button 
                    onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
                  >
                    <span className="relative z-10">Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
                  <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <p 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight transform transition-transform duration-75 ease-out"
                        style={{
                          transform: `translateY(${scrollY * -0.1 + 120}px)`,
                          opacity: Math.max(0, 1 - (scrollY - 1400) / 600),
                        }}
                      >
                        "Da una passione può nascere una <span className="font-bold">professione</span>, da un sogno può nascere la <span className="font-bold">libertà"</span>.
                      </p>
                    </div>
                  </div>
                </section>

      {/* Chi Sono Section - Ana Maria's Story */}
      <section id="about" className="bg-black relative min-h-[80vh]">
        {/* Immagine attaccata al bottom */}
        <div className="absolute bottom-0 left-0 w-1/2 -mt-24 sm:-mt-32 lg:-mt-56 xl:-mt-64">
          {/* Palla bianca dietro l'immagine */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full opacity-20"></div>
          <img 
            src="/soggetto/person1.png"
            alt="Ana Maria - Founder Academy Lash Master"
            className="w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] object-contain relative z-10"
          />
        </div>
        
        {/* Testo centrato verticalmente */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-1/2 pr-16 lg:pr-24 xl:pr-32 flex flex-col justify-center">
            <p className="text-sm uppercase text-white font-medium mb-4 tracking-wider">
              CHI SONO
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Imparare, crescere, trasformarsi
            </h2>
            <p className="text-lg sm:text-xl text-white font-light leading-relaxed text-justify" style={{textAlignLast: 'left'}}>
              La mia storia nasce da un desiderio profondo: trasformare una passione in una vera professione e offrire ad altre donne gli strumenti per fare lo stesso. Ho viaggiato, studiato e investito tempo ed energie per raccogliere le migliori conoscenze, arricchendo il mio percorso con esperienze internazionali che mi hanno permesso di crescere e portare innovazione nel mondo delle extension ciglia.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione vuota bianca */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
      </section>

      {/* Chi Sono Section - Ana Maria's Story */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">

        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Ana Maria's Story */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Row 2: Riquadro Oltre le parole a sinistra - Immagine Corsi a destra */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Left - Riquadro Oltre le parole */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group order-2 lg:order-1">
                <div className="flex items-center mb-6 sm:mb-8">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                     <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 75.75 75.75 0 01-.44-.01C3.119 13.547 3 12.75 3 12c0-.75.119-1.547.95-2.603zM6.02 15.33a8.987 8.987 0 004.5-1.508 8.987 8.987 0 004.5 1.508 8.987 8.987 0 01-4.5 1.508 8.987 8.987 0 01-4.5-1.508z" />
                     </svg>
                   </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Oltre le parole: nascono i corsi
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                  I miei corsi non sono semplici lezioni tecniche, ma percorsi di crescita personale e professionale. Ogni allieva viene accompagnata passo dopo passo: dalle basi fondamentali alle competenze avanzate, dalla precisione della tecnica alla gestione del business, fino alla pratica su modella reale. A supporto del percorso formativo, metto a disposizione manuali esclusivi, materiali professionali di alta qualità e correzioni personalizzate, perché imparare non significa solo acquisire una tecnica, ma costruire fiducia, sicurezza e indipendenza.
                </p>
              </div>

              {/* Right - Immagine Corsi */}
              <div className="relative group order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corsi.jpg"
                    alt="Corsi Academy Lash Master"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corsi */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-200"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 sm:w-5 lg:w-6 h-3 sm:h-5 lg:h-6 bg-white/30 rounded-full animate-pulse delay-800"></div>
              </div>
            </div>

            {/* Row 3: Immagine Corso2 a sinistra - Riquadro Conoscenza a destra */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Left - Immagine Corso2 */}
              <div className="relative group order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corso2.jpg"
                    alt="Corso2 Academy Lash Master"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corso2 */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-white to-white rounded-full animate-bounce delay-600"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 sm:w-5 lg:w-6 h-3 sm:h-5 lg:h-6 bg-white/30 rounded-full animate-pulse delay-900"></div>
              </div>

              {/* Right - Riquadro Conoscenza è potere */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-700 hover:border-white/30 transition-all duration-500 group order-1 lg:order-2">
                <div className="flex items-center mb-6 sm:mb-8">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                     <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                     </svg>
                   </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Conoscenza è potere
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                  Molte persone negli anni mi hanno chiesto: "Dove hai fatto i tuoi corsi?" La risposta è spesso stata all'estero, dove i programmi erano più lunghi, completi e sempre aggiornati. Non si trattava di talento, ma di opportunità. Quelle esperienze mi hanno dato accesso a tecniche innovative, strumenti concreti e materiali d'avanguardia, che oggi condivido con le mie allieve per garantire una formazione moderna e di livello internazionale.
                </p>
              </div>
            </div>
          </div>

         </div>
       </section>

      {/* Il Mio Percorso Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Il Mio Percorso</h3>
            <p className="text-lg sm:text-xl text-gray-300 elegant-quote">Dalla passione alla professione, passo dopo passo</p>
          </div>

          <div className="relative">
            {/* Linea Timeline Orizzontale - Hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-white via-white to-white rounded-full"></div>
            
            {/* Timeline Items Orizzontali */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <span className="text-black font-bold text-xl sm:text-2xl lg:text-3xl">1</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Gli Inizi</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Ho iniziato come estetista tradizionale, ma quando ho scoperto il mondo delle extension ciglia, 
                  ho capito che era la mia vera vocazione.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <span className="text-black font-bold text-xl sm:text-2xl lg:text-3xl">2</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">La Formazione</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Ho investito anni nella formazione, studiando nelle migliori accademie internazionali. 
                  Ho imparato tecniche innovative e materiali all'avanguardia.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <span className="text-black font-bold text-xl sm:text-2xl lg:text-3xl">3</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-white to-transparent"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Academy Lash Master</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Oggi condivido la mia passione insegnando ad altre donne come trasformare la loro 
                  passione in una professione di successo.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <button 
              onClick={() => document.getElementById('corsi')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black font-bold py-3 sm:py-4 lg:py-5 px-8 sm:px-10 lg:px-12 rounded-2xl text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Scopri i miei corsi
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Contattami</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12">Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso nel mondo delle extension ciglia.</p>
          
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

          {/* Contact Form */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Richiedi Informazioni</h3>
              <p className="text-base sm:text-lg text-gray-300">Compila il form per ricevere tutte le informazioni sui miei corsi</p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Invia un Messaggio</h4>
                <p className="text-gray-300 text-sm sm:text-base">Compila il form per richiedere informazioni sui nostri corsi</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative z-10">
                    <label className="block text-white text-sm font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                      placeholder="la.tua@email.com"
                    />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <label className="block text-white text-sm font-medium mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div className="relative z-10">
                  <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
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

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Academy Lash Master</h4>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">La tua scuola di formazione per extension ciglia</p>
          
          {/* Contact Info */}
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
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white elegant-quote">Richiedi Informazioni</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-white text-xl sm:text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
              <div className="relative z-10">
                <label className="block text-white text-sm font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div className="relative z-10">
                <label className="block text-white text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  placeholder="la.tua@email.com"
                />
              </div>
              
              <div className="relative z-10">
                <label className="block text-white text-sm font-medium mb-2">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  placeholder="+39 123 456 7890"
                />
              </div>
              
              <div className="relative z-10">
                <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none text-sm sm:text-base"
                  placeholder="Dimmi di più sui corsi che ti interessano..."
                />
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg sm:rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  Invia Richiesta
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

export default Home;
