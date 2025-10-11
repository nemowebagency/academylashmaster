import React, { useState, useEffect } from 'react';
import { ArrowRight, Facebook, Instagram, BookOpen, Users, Star } from 'lucide-react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroChiSono from '../components/HeroChiSono';
import SEO from '../components/SEO';

const ChiSono = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [storyVisible, setStoryVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  // Intersection Observer per le animazioni
  useEffect(() => {
    const observers = [
      { id: 'story', setter: setStoryVisible },
      { id: 'mission', setter: setMissionVisible },
      { id: 'social', setter: setSocialVisible }
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
      <SEO
        title="Chi Sono - Ana Maria Academy Lash Master"
        description="Conosci Ana Maria, fondatrice di Academy Lash Master. Esperta di extension ciglia con formazione internazionale. Da estetista a professionista del settore beauty. La sua storia e missione."
        keywords={[
          "Ana Maria extension ciglia",
          "chi è Ana Maria",
          "fondatrice Academy Lash Master",
          "esperta extension ciglia",
          "formazione internazionale extension ciglia",
          "storia Academy Lash Master",
          "missione extension ciglia",
          "professionista beauty",
          "estetista extension ciglia",
          "Ana Maria Milano",
          "insegnante extension ciglia",
          "esperienza extension ciglia",
          "Ana Maria corsi",
          "beauty expert Milano"
        ]}
        canonicalUrl="/chi-sono"
        ogImage="/soggetto/person1.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ana Maria",
          "jobTitle": "Esperta Extension Ciglia e Fondatrice Academy Lash Master",
          "description": "Ana Maria è un'esperta di extension ciglia con formazione internazionale. Fondatrice di Academy Lash Master, offre corsi professionali per trasformare passioni in professioni.",
          "url": "https://academylashmaster.com/chi-sono",
          "image": "https://academylashmaster.com/soggetto/person1.png",
          "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Academy Lash Master"
          },
          "knowsAbout": [
            "Extension Ciglia",
            "Volume Ciglia",
            "Mega Volume Ciglia",
            "Formazione Beauty",
            "Tecniche Extension Ciglia",
            "Corsi Professionali"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Esperta Extension Ciglia",
            "description": "Specialista in tecniche di extension ciglia e formazione professionale nel settore beauty"
          }
        }}
      />
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={setShowContactForm} />
        <HeroChiSono />

        {/* ===========================================
            LA MIA STORIA SECTION - Storia personale di Ana Maria
            =========================================== */}
        <section id="story" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Left - Immagine Ana Maria */}
              <div className={`relative group order-2 lg:order-1 transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img 
                    src="/soggetto/person1.png"
                    alt="Ana Maria fondatrice Academy Lash Master - Esperta extension ciglia con formazione internazionale"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-contain transform transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                
                {/* Elegant Decorative Elements */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gradient-to-br from-black to-black rounded-full"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-black to-black rounded-full"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 sm:w-5 lg:w-6 h-3 sm:h-5 lg:h-6 bg-black/30 rounded-full"></div>
              </div>

              {/* Right - Testo La Mia Storia */}
              <div className="order-1 lg:order-2">
                <div className="mb-6 sm:mb-8">
                  <p className={`text-sm uppercase text-black font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    LA MIA STORIA
                  </p>
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: storyVisible ? '0.2s' : '0s'}}>
                    Da estetista a <span className="text-black">esperta</span> in extension ciglia
                  </h2>
                </div>
                <p className={`text-lg sm:text-xl text-gray-700 font-light leading-relaxed text-justify transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: storyVisible ? '0.4s' : '0s'}}>
                  La mia passione per il mondo della bellezza è nata molti anni fa, quando ho iniziato come estetista tradizionale. Ma è stato quando ho scoperto l'arte delle extension ciglia che ho capito di aver trovato la mia vera vocazione. Ho dedicato anni alla formazione, studiando nelle migliori accademie internazionali, perfezionando tecniche innovative e acquisendo competenze che oggi mi permettono di offrire un servizio di altissima qualità.
                </p>
                <p className={`text-lg sm:text-xl text-gray-700 font-light leading-relaxed text-justify mt-6 transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{textAlignLast: 'left', transitionDelay: storyVisible ? '0.6s' : '0s'}}>
                  Ogni giorno che passa, la mia dedizione per questo mestiere cresce sempre di più. Non si tratta solo di applicare delle ciglia, ma di regalare alle mie clienti un'esperienza unica, di farle sentire belle e sicure di sé. È questa la magia che mi spinge a continuare a migliorarmi e a condividere la mia conoscenza con altre donne che vogliono intraprendere questo meraviglioso percorso professionale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===========================================
            LA MIA MISSIONE SECTION - Missione e filosofia di Ana Maria
            =========================================== */}
        <section id="mission" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <p className={`text-sm uppercase text-white font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                LA MIA MISSIONE
              </p>
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: missionVisible ? '0.2s' : '0s'}}>
                Trasformare <span className="text-white">passioni</span> in <span className="text-white">professioni</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {/* Card 1 - Formazione */}
              <div className={`text-center group transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: missionVisible ? '0.4s' : '0s'}}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Formazione di Qualità</h3>
                <p className="text-gray-200 leading-relaxed">
                  Offro corsi professionali che combinano teoria e pratica, garantendo alle mie allieve una preparazione completa e aggiornata con le ultime tecniche del settore.
                </p>
              </div>

              {/* Card 2 - Supporto */}
              <div className={`text-center group transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: missionVisible ? '0.6s' : '0s'}}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Supporto Continuo</h3>
                <p className="text-gray-200 leading-relaxed">
                  Il mio impegno non finisce con il corso. Offro supporto continuo, correzioni personalizzate e consigli per aiutare le mie allieve a crescere professionalmente.
                </p>
              </div>

              {/* Card 3 - Eccellenza */}
              <div className={`text-center group transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: missionVisible ? '0.8s' : '0s'}}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Eccellenza</h3>
                <p className="text-gray-200 leading-relaxed">
                  Mi impegno ogni giorno per mantenere alti standard qualitativi, utilizzando solo materiali professionali e tecniche all'avanguardia per garantire risultati eccellenti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===========================================
            SOCIAL SECTION - Call to action per i social
            =========================================== */}
        <section id="social" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <p className={`text-sm uppercase text-black font-medium mb-4 tracking-wider transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                SEGUIMI
              </p>
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: socialVisible ? '0.2s' : '0s'}}>
                Resta aggiornato sui <span className="text-black">miei lavori</span>
              </h2>
              <p className={`text-lg sm:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto mt-6 transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: socialVisible ? '0.4s' : '0s'}}>
                Seguimi sui social per vedere i miei lavori, i tutorial, i consigli e rimanere sempre aggiornato sulle ultime novità del mondo delle extension ciglia.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Facebook */}
              <div className={`text-center group transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: socialVisible ? '0.6s' : '0s'}}>
                <div className="bg-black p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105">
                  <Facebook className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" fill="currentColor" stroke="none" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Facebook</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Condivido tutorial, consigli e aggiornamenti sulla mia attività professionale.
                  </p>
                  <a 
                    href="https://facebook.com/academylashmaster" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
                  >
                    <span>Segui su Facebook</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className={`text-center group transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: socialVisible ? '0.8s' : '0s'}}>
                <div className="bg-black p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105">
                  <Instagram className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Instagram</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Scopri i miei lavori più belli e i risultati delle mie allieve in tempo reale.
                  </p>
                  <a 
                    href="https://instagram.com/academylashmaster" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-fuchsia-600 px-6 py-3 rounded-full font-medium hover:bg-fuchsia-50 transition-colors duration-300"
                  >
                    <span>Segui su Instagram</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className={`text-center group transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: socialVisible ? '1.0s' : '0s'}}>
                <div className="bg-black p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">TikTok</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Video tutorial rapidi e consigli pratici per imparare le tecniche più efficaci.
                  </p>
                  <a 
                    href="https://tiktok.com/@academylashmaster" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span>Segui su TikTok</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />

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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
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

      </div>
    </>
  );
};

export default ChiSono;
