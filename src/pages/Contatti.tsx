import { useState, useEffect } from 'react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroContatti from '../components/HeroContatti';
import ContactForm from '../components/ContactForm';

const Contatti = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    alert('Messaggio inviato! Ti contatteremo presto.');
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

  return (
    <>
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroContatti />

        {/* ===========================================
            CARD CONTATTI SECTION - Sezione con card dei contatti in tre colonne
            =========================================== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">Rimani in contatto</h2>
              <p className="text-lg sm:text-xl text-gray-600 font-light">Scegli il modo che preferisci per metterti in contatto con me</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card Telefono */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Telefono</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Chiamaci per informazioni immediate sui nostri corsi</p>
                <a 
                  href="tel:+393533165390" 
                  className="text-black font-medium text-sm sm:text-base hover:text-gray-600 transition-colors duration-300"
                >
                  +39 3533165390
                </a>
              </div>

              {/* Card Email */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Scrivici per ricevere informazioni dettagliate</p>
                <a 
                  href="mailto:info@academylashmaster.com" 
                  className="text-black font-medium text-sm sm:text-base hover:text-gray-600 transition-colors duration-300"
                >
                  info@academylashmaster.com
                </a>
              </div>

              {/* Card Indirizzo */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:scale-105 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Indirizzo</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Vieni a trovarci nella nostra sede</p>
                <div className="text-black font-medium text-sm sm:text-base">
                  Via Roma 123, Milano
                </div>
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
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">Vuoi iscriverti a un corso?</h3>
                <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed text-justify" style={{textAlignLast: 'left'}}>Compila il modulo per richiedere informazioni sui corsi o per qualsiasi altro tipo di domanda</p>
              </div>
              
              {/* Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src="/soggetto/contciglia.jpg"
                    alt="Contatto Academy Lash Master"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover transform transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <ContactForm variant="default" theme="light" onSubmit={handleFormSubmit} />
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
