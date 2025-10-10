import { useState } from 'react';
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

  return (
    <>
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroContatti />

        <section id="contatti" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Left - Contact Info */}
            <div>
              {/* Section Header */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">Rimani in contatto con me</h3>
                <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed text-justify" style={{textAlignLast: 'left'}}>Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso nel mondo delle extension ciglia.</p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
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

              <div className="flex items-center">
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

              <div className="flex items-center">
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
            <ContactForm variant="default" onSubmit={handleFormSubmit} />
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
