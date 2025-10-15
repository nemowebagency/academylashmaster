import { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { sendTestEmail, sendRealEmail } from '../utils/emailTest';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroContatti from '../components/HeroContatti';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contatti = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactCardsVisible, setContactCardsVisible] = useState(false);
  const [formSectionVisible, setFormSectionVisible] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    try {
      // Verifica se EmailJS è configurato
      const isEmailJSConfigured = EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY_HERE';
      
      let result;
      
      if (isEmailJSConfigured) {
        // Usa EmailJS reale
        console.log('📧 Invio email reale con EmailJS...');
        result = await sendRealEmail(formData, EMAILJS_CONFIG);
      } else {
        // Usa versione di test
        console.log('🧪 Modalità test - simulazione invio email...');
        result = await sendTestEmail(formData);
      }
      
      // Il ContactForm gestisce i messaggi di successo/errore internamente
      console.log('Risultato invio:', result);
    } catch (error) {
      console.error('Errore nell\'invio email:', error);
    }
  };

  // Gestisce lo scroll automatico quando si arriva con l'hash #form
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#form') {
      // Aspetta che il componente sia montato e poi scorre al form
      setTimeout(() => {
        const formElement = document.getElementById('form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Intersection Observer per le animazioni delle card contatti
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactCardsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const element = document.getElementById('contact-cards');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Intersection Observer per la sezione del form
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFormSectionVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const element = document.getElementById('form');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Contatti - Academy Lash Master"
        description="Contatta Academy Lash Master per informazioni sui corsi di extension ciglia. Telefono, email e modulo di contatto. Ana Maria ti aiuterà a scegliere il corso più adatto a te."
        keywords={[
          "contatti Academy Lash Master",
          "contatto extension ciglia",
          "informazioni corsi extension ciglia",
          "telefono Academy Lash Master",
          "email Academy Lash Master",
          "contattare Ana Maria",
          "richiesta informazioni corsi",
          "prenotazione corso extension ciglia",
          "Academy Lash Master Milano",
          "contatto beauty academy",
          "form contatto extension ciglia"
        ]}
        canonicalUrl="/contatti"
        ogImage="/soggetto/contciglia.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contatti Academy Lash Master",
          "description": "Pagina contatti per informazioni sui corsi di extension ciglia. Telefono, email e modulo di contatto disponibili.",
          "url": "https://academylashmaster.com/contatti",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Academy Lash Master",
            "telephone": "+393533165390",
            "email": "academylashmaster@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+393533165390",
              "contactType": "customer service",
              "availableLanguage": "Italian"
            }
          }
        }}
      />
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroContatti />

        {/* ===========================================
            CARD CONTATTI SECTION - Sezione con card dei contatti in tre colonne
            =========================================== */}
        <section id="contact-cards" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          {/* Palline decorative di sfondo */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-black/10 rounded-full"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-black/20 rounded-full"></div>
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-black/15 rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-5 h-5 bg-black/10 rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-4 h-4 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-32 right-12 w-6 h-6 bg-black/15 rounded-full"></div>
          <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-black/10 rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-5 h-5 bg-black/20 rounded-full"></div>
          
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6 transition-all duration-1000 ease-out ${contactCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Rimani in contatto</h2>
              <p className={`text-lg sm:text-xl text-gray-700 font-light transition-all duration-1000 ease-out ${contactCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: contactCardsVisible ? '0.2s' : '0s'}}>Scegli il modo che preferisci per metterti in contatto con me</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Card Telefono */}
              <div className={`bg-black p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-1000 ease-out hover:scale-105 text-center ${contactCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: contactCardsVisible ? '0.4s' : '0s'}}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Telefono</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">Chiamaci per informazioni sui nostri corsi</p>
                <a 
                  href="tel:+393533165390" 
                  className="text-white font-medium text-sm sm:text-base hover:text-gray-300 transition-colors duration-300"
                >
                  +39 3533165390
                </a>
              </div>

              {/* Card Email */}
              <div className={`bg-black p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-1000 ease-out hover:scale-105 text-center ${contactCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: contactCardsVisible ? '0.6s' : '0s'}}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Email</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">Scrivici per ricevere informazioni dettagliate</p>
                <a 
                  href="mailto:academylashmaster@gmail.com" 
                  className="text-white font-medium text-sm sm:text-base hover:text-gray-300 transition-colors duration-300"
                >
                  academylashmaster@gmail.com
                </a>
              </div>

            </div>
          </div>
        </section>

        <section id="form" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Left - Image */}
            <div>
              {/* Section Header */}
              <div className="mb-8 sm:mb-12">
                <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1000 ease-out ${formSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>Vuoi iscriverti a un corso?</h3>
                <p className={`text-lg sm:text-xl text-gray-300 font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${formSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: formSectionVisible ? '0.2s' : '0s'}}>Compila il modulo per richiedere informazioni sui corsi o per qualsiasi altro tipo di domanda</p>
              </div>
              
              {/* Image */}
              <div className={`relative group transition-all duration-1000 ease-out ${formSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: formSectionVisible ? '0.4s' : '0s'}}>
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/corso2.jpg"
                    alt="Corso Academy Lash Master - Richiedi informazioni sui corsi extension ciglia professionali"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className={`transition-all duration-1000 ease-out ${formSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: formSectionVisible ? '0.6s' : '0s'}}>
              <ContactForm variant="default" theme="light" onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>


      

     

      

      {/* Footer */}
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

export default Contatti;
