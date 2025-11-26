import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroCorsi from '../components/HeroCorsi';
import SEO from '../components/SEO';
import ExpandableCourseCard from '../components/ExpandableCourseCard';
import { coursesData } from '../data/coursesData';

const Corsi = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [manualVisible, setManualVisible] = useState(false);
  const [procreateVisible, setProcreateVisible] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState<{ [key: string]: boolean }>({});
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleCourseExpansion = (courseId: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('data-section');
          switch (targetId) {
            case 'corsi':
              setCoursesVisible(true);
              break;
            case 'manual':
              setManualVisible(true);
              break;
            case 'procreate':
              setProcreateVisible(true);
              break;
            case 'why-choose':
              setWhyChooseVisible(true);
              break;
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const structuredData = {
          "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Academy Lash Master",
    "description": "Corsi professionali per extension ciglia con Ana Maria - Master Trainer Internazionale",
    "url": "https://academylashmaster.com",
    "logo": "https://academylashmaster.com/logo/LogoBianco.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-353-316-5390",
      "contactType": "customer service",
      "email": "academylashmaster@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "sameAs": [
      "https://www.instagram.com/academy_lash_master_anamaria/",
      "https://www.facebook.com/academylashmaster"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
              "@type": "Course",
        "name": "Corsi Extension Ciglia",
        "description": "Formazione professionale per diventare Lash Artist certificata"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Corsi Extension Ciglia Professionali | Academy Lash Master"
        description="Scopri i nostri corsi professionali per extension ciglia con Ana Maria, Master Trainer Internazionale. Formazione completa e certificata per ogni livello di esperienza."
        keywords={["corsi extension ciglia", "formazione lash artist", "corsi professionali", "Ana Maria", "Academy Lash Master", "certificazione", "volume", "classico", "retention"]}
        structuredData={structuredData}
      />
      <NeonCursor />
      <PromoScroll />
      <Navbar setShowContactForm={setShowContactForm} />
      <HeroCorsi />

      {/* CORSI SECTION - Sezione con i corsi professionali dettagliati */}
      <section id="corsi" data-section="corsi" className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-2 sm:mb-3">
            <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-2 transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>Le nostre proposte</h3>
            <p className={`text-lg sm:text-xl text-black font-normal transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: coursesVisible ? '0.2s' : '0s'}}>Formazione completa e certificata per ogni livello di esperienza</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {coursesData.map((course) => (
              <ExpandableCourseCard
                key={course.id}
                course={course}
                isExpanded={expandedCourses[course.id] || false}
                onToggle={() => toggleCourseExpansion(course.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Manuale Section */}
      <section id="manual" className="py-16 sm:py-20 lg:py-24 bg-black" data-section="manual">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Manuale Completo
            </h2>
            <p className={`text-lg sm:text-xl text-gray-200 font-normal max-w-lg mx-auto transition-all duration-1000 ease-out ${manualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: manualVisible ? '0.2s' : '0s'}}>
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
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
                  I nostri manuali
                </h3>
                
                {/* Grid dei manuali */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {/* Manuale Classic */}
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img 
                      src="/soggetto/classic.jpg" 
                      alt="Manuale Classic - Extension Ciglia Base"
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h4 className="text-white font-bold text-lg mb-2">Classic</h4>
                        <p className="text-gray-200 text-sm">Tecniche base</p>
                      </div>
                    </div>
                  </div>

                  {/* Manuale Retention */}
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img 
                      src="/soggetto/retention.jpg" 
                      alt="Manuale Retention - Segreti della Tenuta"
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h4 className="text-white font-bold text-lg mb-2">Retention</h4>
                        <p className="text-gray-200 text-sm">Segreti della tenuta</p>
                      </div>
                    </div>
                  </div>

                  {/* Manuale Volume */}
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img 
                      src="/soggetto/volume.jpg" 
                      alt="Manuale Volume - Tecniche Avanzate"
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h4 className="text-white font-bold text-lg mb-2">Volume</h4>
                        <p className="text-gray-200 text-sm">Tecniche avanzate</p>
                      </div>
                    </div>
                  </div>
            </div>

                {/* Quote */}
                <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <p className="text-gray-200 text-base italic text-center">
                    "I manuali sono i tuoi compagni di viaggio perfetti. Potrai consultarli sempre, anche dopo aver completato il corso, per rivedere le tecniche e migliorare costantemente."
                  </p>
                  <p className="text-white font-semibold mt-4 text-sm text-center">- Ana Maria, Academy Lash Master</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procreate Section */}
      <section id="procreate" className="py-16 sm:py-20 lg:py-24 bg-white overflow-x-hidden" data-section="procreate">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
              <div className="flex-1">
                <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  Strumenti Digitali in Sconto!
            </h2>
                <p className={`text-lg sm:text-xl text-black font-normal transition-all duration-1000 ease-out ${procreateVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: procreateVisible ? '0.2s' : '0s'}}>
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
                    alt="Procreate App Icon - Strumento digitale per design extension ciglia Academy Lash Master"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
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
                      <span className="text-black text-sm sm:text-base">Scarica l'app col nostro Codice Sconto</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span className="text-black text-sm sm:text-base">Inserisci il codice sconto <strong className="text-black font-bold">"PETREAANAMARIA"</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span className="text-black text-sm sm:text-base">Scarica il plugin dall'Apple Store</span>
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
              <div className="relative overflow-x-hidden">
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-[430px]">
                  <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    <div className="w-full flex-shrink-0 h-full">
                      <img
                        src="/soggetto/procreate.avif"
                        alt="Procreate App Interface - Design extension ciglia con strumenti digitali Academy Lash Master"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div className="w-full flex-shrink-0 h-full">
                      <img
                        src="/soggetto/procreate2.avif"
                        alt="Procreate App Interface 2 - Strumenti digitali avanzati per design extension ciglia Academy Lash Master"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
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

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 sm:py-20 lg:py-24 bg-black" data-section="why-choose">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Perché scegliere Academy Lash Master?</h2>
            <p className={`text-lg sm:text-xl text-white font-normal transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: whyChooseVisible ? '0.2s' : '0s'}}>Eccellenza nella formazione e supporto continuo</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className={`text-center transition-all duration-1000 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: whyChooseVisible ? '0.4s' : '0s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Insegnanti Esperti</h3>
              <p className="text-white font-normal text-sm sm:text-base">
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
              <p className="text-white font-normal text-sm sm:text-base">
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
              <p className="text-white font-normal text-sm sm:text-base">
                Al termine del corso riceverai una certificazione riconosciuta 
                nel settore beauty che valorizzerà il tuo curriculum.
              </p>
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
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
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
                <button
                  type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:from-purple-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Invia Richiesta
                </button>
            </form>
    </div>
    </div>
      )}

      <Footer />
    </>
  );
};

export default Corsi;
