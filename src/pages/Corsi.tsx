import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroCorsi from '../components/HeroCorsi';




const Corsi = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [manualVisible, setManualVisible] = useState(false);
  const [procreateVisible, setProcreateVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Intersection Observer per le animazioni
  useEffect(() => {
    const observers = [
      { id: 'corsi', setter: setCoursesVisible },
      { id: 'manual', setter: setManualVisible },
      { id: 'procreate', setter: setProcreateVisible },
      { id: 'why-choose', setter: setWhyChooseVisible },
      { id: 'cta-section', setter: setCtaVisible }
    ];

    const observerInstances = observers.map(({ id, setter }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }

      return { observer, element };
    });

    return () => {
      observerInstances.forEach(({ observer, element }) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <NeonCursor />
      <PromoScroll />
      <Navbar setShowContactForm={setShowContactForm} />
      <HeroCorsi />
    <div className="min-h-screen bg-black">
        
      
      {/* ===========================================
          CORSI SECTION - Sezione con i corsi professionali
          =========================================== */}
      <section id="corsi" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>Le nostre proposte</h3>
            <p className={`text-lg sm:text-xl text-black font-light transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: coursesVisible ? '0.2s' : '0s'}}>Scegli tra i corsi proposti e utilizza il pulsante corrispondente per iscriverti.</p>
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
                  <Link 
                    to="/contatti#form"
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
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
                  <Link
                    to="/contatti#form"
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
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
                  <Link
                    to="/contatti#form"
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
                </div>
                  </div>
            </div>
          </div>
        </div>
      </section>


      {/* Manuale Section */}
      <section id="manual" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Manuale Completo
            </h2>
            <p className={`text-lg sm:text-xl text-gray-200 font-light max-w-lg mx-auto transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: manualVisible ? '0.2s' : '0s'}}>
              Ogni corso include un manuale dettagliato e professionale per accompagnarti nel tuo percorso di apprendimento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: manualVisible ? '0.4s' : '0s'}}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Cosa include
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Teoria completa</strong> - Tutti i concetti fondamentali spiegati in modo chiaro
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Tecniche step-by-step</strong> - Procedure dettagliate con foto illustrative
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Troubleshooting</strong> - Soluzioni ai problemi più comuni
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Materiali e strumenti</strong> - Lista completa e consigli per l'acquisto
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Certificato digitale</strong> - Attestato di partecipazione incluso
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Element - Simple Document Style */}
            <div className={`relative transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: manualVisible ? '0.6s' : '0s'}}>
              <div 
                className="bg-cover bg-center bg-no-repeat rounded-lg p-8 text-center relative"
                style={{
                  backgroundImage: "url('/soggetto/manual.jpg')"
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                
                {/* Content with relative positioning */}
                <div className="relative z-10">
                  {/* Quote moved here */}
                  <div className="mb-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                    <p className="text-gray-200 text-base italic">
                      "Il manuale è il tuo compagno di viaggio perfetto. Potrai consultarlo sempre, anche dopo aver completato il corso, per rivedere le tecniche e migliorare costantemente."
                    </p>
                    <p className="text-white font-semibold mt-4 text-sm">- Ana Maria, Academy Lash Master</p>
            </div>

                  <h4 className="text-3xl font-bold text-white mb-2 text-left">Scarica il Manuale</h4>
                  <p className="text-gray-300 mb-6 text-left">Clicca il pulsante qui sotto per scaricare il PDF completo</p>
                  <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black">
                    <span className="relative z-10">Scarica adesso</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section id="cta-section" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/soggetto/cta.jpg')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Pronto a iniziare il tuo percorso?</h2>
          <p className={`text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: ctaVisible ? '0.2s' : '0s'}}>
            Scegli il corso più adatto a te e trasforma la tua passione in professione.
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: ctaVisible ? '0.4s' : '0s'}}>
            <Link
              to="/contatti#form"
              className="bg-white text-black px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
            >
              <span className="relative z-10">Richiedi Informazioni</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Link>
            <a
              href="tel:+393533165390"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black hover:border-transparent"
            >
              <span className="relative z-10">Chiama Ora</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Procreate Section */}
      <section id="procreate" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
              <div className="flex-1">
                <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              Strumenti Digitali
            </h2>
                <p className={`text-lg sm:text-xl text-black font-light transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: procreateVisible ? '0.2s' : '0s'}}>
              Scopri gli strumenti digitali che le nostre alunne utilizzano per creare progetti straordinari
            </p>
              </div>
              <div className={`flex-shrink-0 transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: procreateVisible ? '0.4s' : '0s'}}>
                <a
                  href="https://apps.apple.com/it/app/procreate/id425073498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                >
                  <span className="relative z-10">Scarica l'App</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Procreate App */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: procreateVisible ? '0.6s' : '0s'}}>
              <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden">
                  <img
                    src="/soggetto/Procreate_icon.png"
                    alt="Procreate Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">Procreate</h3>
                  <p className="text-black text-base sm:text-lg">App per iPad</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-black text-base sm:text-lg">
                  <strong className="text-black">Procreate</strong> è l'app di disegno digitale più utilizzata dalle professioniste del settore beauty.
                  Perfetta per creare moodboard, sketch di design e presentazioni professionali.
                </p>
                
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h4 className="text-black font-bold text-lg sm:text-xl mb-3 sm:mb-4">Come Ottenere il Plugin</h4>
                  <ol className="space-y-2 sm:space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span className="text-black text-sm sm:text-base">Iscriviti a uno dei nostri corsi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span className="text-black text-sm sm:text-base">Ricevi il codice sconto via email</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span className="text-black text-sm sm:text-base">Scarica il plugin dal nostro store</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      <span className="text-black text-sm sm:text-base">Inizia a creare progetti straordinari!</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Plugin Section */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: procreateVisible ? '0.8s' : '0s'}}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-[430px]">
                  <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    <div className="w-full flex-shrink-0 h-full">
                      <img
                        src="/soggetto/procreate.avif"
                        alt="Procreate App Interface"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full flex-shrink-0 h-full">
                      <img
                        src="/soggetto/procreate2.avif"
                        alt="Procreate App Interface 2"
                        className="w-full h-full object-cover"
                      />
                </div>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <button
                      onClick={() => setCurrentImage(0)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentImage === 0 ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                    <button
                      onClick={() => setCurrentImage(1)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentImage === 1 ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentImage(currentImage === 0 ? 1 : 0)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setCurrentImage(currentImage === 0 ? 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Perché scegliere Academy Lash Master?</h2>
            <p className={`text-lg sm:text-xl text-white font-light transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: whyChooseVisible ? '0.2s' : '0s'}}>Eccellenza nella formazione e supporto continuo</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className={`text-center transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: whyChooseVisible ? '0.4s' : '0s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Insegnanti Esperti</h3>
              <p className="text-white font-light text-sm sm:text-base">
                I nostri istruttori sono professionisti certificati con anni di esperienza 
                nel settore e formazione internazionale.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: whyChooseVisible ? '0.6s' : '0s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Materiali Professionali</h3>
              <p className="text-white font-light text-sm sm:text-base">
                Utilizziamo solo materiali di alta qualità e strumenti professionali 
                per garantire la migliore esperienza formativa.
            </p>
          </div>
          
            <div className={`text-center transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: whyChooseVisible ? '0.8s' : '0s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Certificazione Riconosciuta</h3>
              <p className="text-white font-light text-sm sm:text-base">
                Al termine del corso riceverai una certificazione riconosciuta 
                nel settore beauty che valorizzerà il tuo curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default Corsi;
