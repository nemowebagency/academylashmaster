import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import NeonCursor from '../components/NeonCursor'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PromoScroll from '../components/PromoScroll'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [contactsVisible, setContactsVisible] = useState(false);

  const handleFormSubmit = (formData: any) => {
    // Qui puoi aggiungere la logica per inviare l'email
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo interesse! Ti contatteremo presto.');
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

  // Gestisce l'effetto parallax per la sezione quote
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestisce il rilevamento della dimensione dello schermo per il parallax
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Desktop only (lg breakpoint)
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Intersection Observer per l'animazione della sezione corsi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoursesVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
        rootMargin: '0px 0px -100px 0px' // Trigger 100px prima che la sezione sia completamente visibile
      }
    );

    const coursesSection = document.getElementById('corsi');
    if (coursesSection) {
      observer.observe(coursesSection);
    }

    return () => {
      if (coursesSection) {
        observer.unobserve(coursesSection);
      }
    };
  }, []);

  // Intersection Observer per l'animazione della sezione Chi Sono
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger quando il 30% della sezione è visibile
        rootMargin: '0px 0px -50px 0px' // Trigger 50px prima che la sezione sia completamente visibile
      }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Intersection Observer per l'animazione della sezione Il Mio Percorso
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
        rootMargin: '0px 0px -100px 0px' // Trigger 100px prima che la sezione sia completamente visibile
      }
    );

    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      observer.observe(timelineSection);
    }

    return () => {
      if (timelineSection) {
        observer.unobserve(timelineSection);
      }
    };
  }, []);

  // Intersection Observer per l'animazione della sezione INFO
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInfoVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
        rootMargin: '0px 0px -100px 0px' // Trigger 100px prima che la sezione sia completamente visibile
      }
    );

    const infoSection = document.getElementById('info');
    if (infoSection) {
      observer.observe(infoSection);
    }

    return () => {
      if (infoSection) {
        observer.unobserve(infoSection);
      }
    };
  }, []);

  // Intersection Observer per l'animazione della sezione CONTATTI
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
        rootMargin: '0px 0px -100px 0px' // Trigger 100px prima che la sezione sia completamente visibile
      }
    );

    const contactsSection = document.getElementById('contatti');
    if (contactsSection) {
      observer.observe(contactsSection);
    }

    return () => {
      if (contactsSection) {
        observer.unobserve(contactsSection);
      }
    };
  }, []);


  return (
    <>
      <SEO
        title="Academy Lash Master - Corsi Professionali Extension Ciglia"
        description="Scopri i corsi professionali di extension ciglia di Academy Lash Master. Formazione completa con Ana Maria, esperta del settore. Corso base, avanzato e master class per diventare professionista."
        keywords={[
          "corsi extension ciglia",
          "formazione extension ciglia",
          "corso extension ciglia Milano",
          "Academy Lash Master",
          "Ana Maria extension ciglia",
          "corso base extension ciglia",
          "corso avanzato extension ciglia",
          "master class extension ciglia",
          "certificazione extension ciglia",
          "tecnica extension ciglia",
          "volume ciglia",
          "mega volume ciglia",
          "beauty academy",
          "corso estetista",
          "formazione beauty",
          "extension ciglia professionali",
          "corso extension ciglia certificato"
        ]}
        canonicalUrl="/"
        ogImage="/soggetto/corsi.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Academy Lash Master",
          "description": "Academy Lash Master offre corsi professionali di extension ciglia certificati. Formazione completa per diventare professionista del settore beauty.",
          "url": "https://academylashmaster.com",
          "logo": "https://academylashmaster.com/logo/LogoBianco.png",
          "image": "https://academylashmaster.com/soggetto/corsi.jpg",
          "telephone": "+393533165390",
          "email": "info@academylashmaster.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Roma 123",
            "addressLocality": "Milano",
            "addressCountry": "IT"
          },
          "founder": {
            "@type": "Person",
            "name": "Ana Maria",
            "jobTitle": "Esperta Extension Ciglia"
          },
          "offers": [
            {
              "@type": "Course",
              "name": "Corso Base Extension Ciglia",
              "description": "Impara le tecniche fondamentali per l'applicazione delle extension ciglia. Perfetto per principianti.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Academy Lash Master"
              }
            },
            {
              "@type": "Course",
              "name": "Corso Avanzato Extension Ciglia",
              "description": "Tecniche avanzate e specializzazioni per diventare un vero professionista del settore.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Academy Lash Master"
              }
            },
            {
              "@type": "Course",
              "name": "Master Class Extension Ciglia",
              "description": "Il corso più completo per diventare un vero Master delle extension ciglia e aprire la propria attività.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Academy Lash Master"
              }
            }
          ]
        }}
      />
      <NeonCursor />
      <PromoScroll />

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
      
      <Navbar setShowContactForm={setShowContactForm} />

      <HeroSection />

      {/* ===========================================
          CORSI SECTION - Sezione con i corsi professionali
          =========================================== */}
      <section id="corsi" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <h3 className={`text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>I nostri corsi <span className="font-bold text-black">professionali</span></h3>
            <p className={`text-lg sm:text-xl text-black font-light transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: coursesVisible ? '0.3s' : '0s'}}>Formazione professionale per ogni livello</p>
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
                    <span className="relative z-10">Scopri di più</span>
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
                    <span className="relative z-10">Scopri di più</span>
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
                    <span className="relative z-10">Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          QUOTE SECTION - Sezione con frase motivazionale e effetto parallax
          =========================================== */}
                <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
                  <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <p 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight transform transition-transform duration-75 ease-out"
                        style={{
                          transform: isDesktop ? `translateY(${scrollY * -0.1 + 120}px)` : 'translateY(0px)',
                          opacity: isDesktop ? Math.max(0, 1 - (scrollY - 1400) / 600) : 1,
                        }}
                      >
                        "Da una passione può nascere una <span className="font-bold">professione</span>, da un sogno può nascere la <span className="font-bold">libertà"</span>.
                      </p>
                    </div>
                  </div>
                </section>

      {/* ===========================================
          CHI SONO SECTION - Sezione con immagine e testo di Ana Maria
          =========================================== */}
      <section id="about" className="bg-black relative min-h-[80vh]">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden flex flex-col">
          {/* Top Row - Text Content */}
          <div className="w-full px-4 py-8 sm:py-12 flex flex-col justify-center order-1">
            <p className={`text-sm uppercase text-white font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              CHI SONO
            </p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: aboutVisible ? '0.2s' : '0s'}}>
              Imparare, crescere, trasformarsi
            </h2>
            <p className={`text-base sm:text-lg text-white font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: aboutVisible ? '0.4s' : '0s'}}>
              La mia storia nasce da un desiderio profondo: trasformare una passione in una vera professione e offrire ad altre donne gli strumenti per fare lo stesso. Ho viaggiato, studiato e investito tempo ed energie per raccogliere le migliori conoscenze, arricchendo il mio percorso con esperienze internazionali che mi hanno permesso di crescere e portare innovazione nel mondo delle extension ciglia.
            </p>
          </div>
          
          {/* Bottom Row - Image */}
          <div className={`relative group order-2 transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: aboutVisible ? '0.6s' : '0s'}}>
            <div className="relative overflow-hidden">
              <img 
                src="/soggetto/person1.png"
                alt="Ana Maria fondatrice Academy Lash Master - Esperta extension ciglia con formazione internazionale"
                className="w-full h-[300px] sm:h-[400px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:block">
          {/* Immagine attaccata al bottom */}
          <div className="absolute bottom-0 left-0 w-1/2 -mt-24 sm:-mt-32 lg:-mt-56 xl:-mt-64">
            {/* Palla bianca dietro l'immagine */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full opacity-20"></div>
            <img 
              src="/soggetto/person1.png"
              alt="Ana Maria fondatrice Academy Lash Master - Esperta extension ciglia con formazione internazionale"
              className="w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] object-contain relative z-10"
            />
          </div>
          
          {/* Testo centrato verticalmente */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-1/2 pr-16 lg:pr-24 xl:pr-32 flex flex-col justify-center">
              <p className={`text-sm uppercase text-white font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                CHI SONO
              </p>
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: aboutVisible ? '0.2s' : '0s'}}>
                Imparare, crescere, trasformarsi
              </h2>
              <p className={`text-lg sm:text-xl text-white font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: aboutVisible ? '0.4s' : '0s'}}>
                La mia storia nasce da un desiderio profondo: trasformare una passione in una vera professione e offrire ad altre donne gli strumenti per fare lo stesso. Ho viaggiato, studiato e investito tempo ed energie per raccogliere le migliori conoscenze, arricchendo il mio percorso con esperienze internazionali che mi hanno permesso di crescere e portare innovazione nel mondo delle extension ciglia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          IL MIO PERCORSO SECTION - Timeline del percorso di Ana Maria
          =========================================== */}
      <section id="timeline" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className={`text-sm uppercase text-black font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              IL MIO PERCORSO
            </p>
            <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 transition-all duration-1000 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '0.2s' : '0s'}}>Dalla passione alla professione, passo dopo passo</h3>
          </div>

          <div className="relative">
            {/* Linea Timeline Orizzontale - Hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-black via-black to-black rounded-full"></div>
            
            {/* Timeline Items Orizzontali */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-500 ease-out mx-auto ${timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{transitionDelay: timelineVisible ? '0.2s' : '0s'}}>
                    <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">1</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-black to-transparent"></div>
                </div>
                <h4 className={`text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4 transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '0.4s' : '0s'}}>Gli Inizi</h4>
                <p className={`text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '0.6s' : '0s'}}>
                  Ho iniziato come estetista tradizionale, ma quando ho scoperto il mondo delle extension ciglia, 
                  ho capito che era la mia vera vocazione.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-500 ease-out mx-auto ${timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{transitionDelay: timelineVisible ? '0.8s' : '0s'}}>
                    <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">2</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-black to-transparent"></div>
                </div>
                <h4 className={`text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4 transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '1.0s' : '0s'}}>La Formazione</h4>
                <p className={`text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '1.2s' : '0s'}}>
                  Ho investito anni nella formazione, studiando nelle migliori accademie internazionali. 
                  Ho imparato tecniche innovative e materiali all'avanguardia.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-500 ease-out mx-auto ${timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{transitionDelay: timelineVisible ? '1.4s' : '0s'}}>
                    <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">3</span>
                  </div>
                  {/* Linea di connessione - Hidden on mobile */}
                  <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-black to-transparent"></div>
                </div>
                <h4 className={`text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4 transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '1.6s' : '0s'}}>Academy Lash Master</h4>
                <p className={`text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-500 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '1.8s' : '0s'}}>
                  Oggi condivido la mia passione insegnando ad altre donne come trasformare la loro 
                  passione in una professione di successo.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ease-out ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: timelineVisible ? '2.0s' : '0s'}}>
            <Link 
              to="/corsi"
              className="inline-flex bg-black text-white px-8 py-4 rounded-full font-medium text-base items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
            >
              <span className="relative z-10">Scopri i miei corsi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Link>
          </div>
        </div>
      </section>

      

      {/* ===========================================
          INFO SECTION - Sezione con storia e filosofia di Ana Maria
          =========================================== */}
      <section id="info" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Ana Maria's Story */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Row 1: Testo Oltre le parole a sinistra - Immagine Corsi a destra */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Left - Testo Oltre le parole */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 sm:mb-8">
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    Oltre le parole: nascono i corsi
                  </h2>
                </div>
                <p className={`text-lg sm:text-xl text-white font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: infoVisible ? '0.2s' : '0s'}}>
                  I miei corsi non sono semplici lezioni tecniche, ma percorsi di crescita personale e professionale. Ogni allieva viene accompagnata passo dopo passo: dalle basi fondamentali alle competenze avanzate, dalla precisione della tecnica alla gestione del business, fino alla pratica su modella reale. A supporto del percorso formativo, metto a disposizione manuali esclusivi, materiali professionali di alta qualità e correzioni personalizzate, perché imparare non significa solo acquisire una tecnica, ma costruire fiducia, sicurezza e indipendenza.
                </p>
              </div>

              {/* Right - Immagine Corsi */}
              <div className={`relative group order-1 lg:order-2 transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: infoVisible ? '0.4s' : '0s'}}>
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corsi.jpg"
                    alt="Corsi Academy Lash Master - Formazione professionale extension ciglia con Ana Maria"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corsi */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gradient-to-br from-white to-white rounded-full"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-white to-white rounded-full"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 sm:w-5 lg:w-6 h-3 sm:h-5 lg:h-6 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Row 2: Immagine Corso2 a sinistra - Testo Conoscenza a destra */}
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Left - Immagine Corso2 */}
              <div className={`relative group order-2 lg:order-1 transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: infoVisible ? '0.6s' : '0s'}}>
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corso2.jpg"
                    alt="Corso avanzato extension ciglia Academy Lash Master - Tecniche professionali e formazione completa"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Sfocatura bordi */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                </div>
                
                {/* Elegant Decorative Elements per corso2 */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gradient-to-br from-white to-white rounded-full"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-white to-white rounded-full"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 sm:w-5 lg:w-6 h-3 sm:h-5 lg:h-6 bg-white/30 rounded-full"></div>
              </div>

              {/* Right - Testo Conoscenza è potere */}
              <div className="order-1 lg:order-2">
                <div className="mb-6 sm:mb-8">
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{transitionDelay: infoVisible ? '0.8s' : '0s'}}>
                    Conoscenza è potere
                  </h2>
                </div>
                <p className={`text-lg sm:text-xl text-white font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: infoVisible ? '1.0s' : '0s'}}>
                  Molte persone negli anni mi hanno chiesto: "Dove hai fatto i tuoi corsi?" La risposta è spesso stata all'estero, dove i programmi erano più lunghi, completi e sempre aggiornati. Non si trattava di talento, ma di opportunità. Quelle esperienze mi hanno dato accesso a tecniche innovative, strumenti concreti e materiali d'avanguardia, che oggi condivido con le mie allieve per garantire una formazione moderna e di livello internazionale.
                </p>
              </div>
            </div>
          </div>

         </div>
       </section>


      {/* ===========================================
          CONTATTI SECTION - Sezione contatti con form e informazioni
          =========================================== */}
      <section id="contatti" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Left - Contact Info */}
            <div>
              {/* Section Header */}
              <div className="mb-8 sm:mb-12">
                <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6 transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>Rimani in contatto con me</h3>
                <p className={`text-lg sm:text-xl text-gray-600 font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: contactsVisible ? '0.2s' : '0s'}}>Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso nel mondo delle extension ciglia.</p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
              <div className={`flex items-center transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: contactsVisible ? '0.4s' : '0s'}}>
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

              <div className={`flex items-center transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: contactsVisible ? '0.6s' : '0s'}}>
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

              <div className={`flex items-center transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: contactsVisible ? '0.8s' : '0s'}}>
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
            <div className={`transition-all duration-1000 ease-out ${contactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: contactsVisible ? '1.0s' : '0s'}}>
              <ContactForm variant="default" onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          FOOTER SECTION - Footer con informazioni aziendali e social
          =========================================== */}
      <Footer />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <ContactForm 
            variant="modal" 
            onClose={() => setShowContactForm(false)}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
      </div>
    </>
  );
};

export default Home;
