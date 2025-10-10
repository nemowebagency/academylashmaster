import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroCorsi from '../components/HeroCorsi';




const Corsi = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNavigateToAbout = () => {
    window.location.href = '/chi-sono';
  };

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

  const courses = [
    {
      id: 'base',
      title: 'Corso Base',
      subtitle: 'Per Principianti',
      duration: '2 Giorni',
      price: '€299',
      icon: '👁️',
      description: 'Impara le tecniche fondamentali per l\'applicazione delle extension ciglia. Perfetto per chi inizia da zero.',
      features: [
        'Teoria delle extension ciglia',
        'Tecniche di applicazione base',
        'Materiali e strumenti professionali',
        'Sicurezza e igiene',
        'Applicazione pratica su modelle',
        'Certificazione inclusa',
        'Manuale didattico esclusivo',
        'Kit materiali di base'
      ],
      schedule: 'Sabato e Domenica 9:00-17:00',
      maxStudents: 8
    },
    {
      id: 'avanzato',
      title: 'Corso Avanzato',
      subtitle: 'Per Professionisti',
      duration: '3 Giorni',
      price: '€599',
      icon: '✨',
      description: 'Tecniche avanzate e specializzazioni per diventare un vero professionista del settore.',
      features: [
        'Volume e Mega Volume',
        'Tecniche creative e artistiche',
        'Gestione clientela e consulenza',
        'Business nel settore beauty',
        'Marketing e social media',
        'Pricing e fatturazione',
        'Applicazione su modelle reali',
        'Certificazione avanzata'
      ],
      schedule: 'Venerdì, Sabato e Domenica 9:00-17:00',
      maxStudents: 6
    },
    {
      id: 'master',
      title: 'Master Class',
      subtitle: 'Il Corso Completo',
      duration: '5 Giorni',
      price: '€999',
      icon: '👑',
      description: 'Il corso più completo per diventare un vero Master delle extension ciglia e aprire la propria attività.',
      features: [
        'Tutte le tecniche (Base + Avanzato)',
        'Gestione completa del business',
        'Marketing beauty e social media',
        'Apertura centro estetico',
        'Gestione team e collaboratori',
        'Supporto post-corso di 6 mesi',
        'Kit completo professionale',
        'Certificazione Master Trainer'
      ],
      schedule: 'Lunedì-Venerdì 9:00-17:00',
      maxStudents: 4
    }
  ];

  const handleEnroll = (courseId: string) => {
    alert(`Iscrizione al ${courses.find(c => c.id === courseId)?.title} richiesta! Ti contatteremo presto.`);
  };

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
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">Le nostre proposte</h3>
            <p className="text-lg sm:text-xl text-black font-light">Scegli tra i corsi proposti e utilizza il pulsante corrispondente per iscriverti.</p>
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
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
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
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
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
                    className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                    <span className="relative z-10">Iscriviti</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
            {(() => {
              const course = courses.find(c => c.id === selectedCourse);
              if (!course) return null;
              
              return (
                <div>
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{course.title}</h2>
                      <p className="text-gray-400 text-base sm:text-lg">{course.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(null)}
                      className="text-gray-400 hover:text-white text-xl sm:text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                        <div className="text-gray-400 text-xs sm:text-sm">Durata</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{course.duration}</div>
                      </div>
                      <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                        <div className="text-gray-400 text-xs sm:text-sm">Prezzo</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{course.price}</div>
                      </div>
                      <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                        <div className="text-gray-400 text-xs sm:text-sm">Max Partecipanti</div>
                        <div className="text-white font-semibold text-sm sm:text-base">{course.maxStudents}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Programma del Corso</h3>
                      <ul className="space-y-1 sm:space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm sm:text-base">
                            <span className="text-white mr-2 sm:mr-3 mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <button
                        onClick={() => handleEnroll(course.id)}
                        className="flex-1 bg-white hover:bg-gray-100 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base"
                      >
                        Iscriviti Ora
                      </button>
                      <button
                        onClick={() => setSelectedCourse(null)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base"
                      >
                        Chiudi
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Perché Scegliere Academy Lash Master?</h2>
            <p className="text-lg sm:text-xl text-gray-300">Eccellenza nella formazione e supporto continuo</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-black text-xl sm:text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Insegnanti Esperti</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                I nostri istruttori sono professionisti certificati con anni di esperienza 
                nel settore e formazione internazionale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-black text-xl sm:text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Materiali Professionali</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Utilizziamo solo materiali di alta qualità e strumenti professionali 
                per garantire la migliore esperienza formativa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-black text-xl sm:text-2xl">📜</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Certificazione Riconosciuta</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Al termine del corso riceverai una certificazione riconosciuta 
                nel settore beauty che valorizzerà il tuo curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Pronto a Iniziare il Tuo Percorso?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Scegli il corso più adatto a te e trasforma la tua passione in professione.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contatti"
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
            >
              Richiedi Informazioni
            </a>
            <a
              href="tel:+393533165390"
              className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>

      {/* Manuale Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Neon Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/soggetto/neon.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Manuale Completo
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Ogni corso include un manuale dettagliato e professionale per accompagnarti nel tuo percorso di apprendimento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Cosa Include il Manuale
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Teoria completa</strong> - Tutti i concetti fondamentali spiegati in modo chiaro
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Tecniche step-by-step</strong> - Procedure dettagliate con foto illustrative
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Troubleshooting</strong> - Soluzioni ai problemi più comuni
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Materiali e strumenti</strong> - Lista completa e consigli per l'acquisto
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-base sm:text-lg">
                      <strong className="text-white">Certificato digitale</strong> - Attestato di partecipazione incluso
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20">
                <p className="text-gray-200 text-base sm:text-lg italic">
                  "Il manuale è il tuo compagno di viaggio perfetto. Potrai consultarlo sempre, anche dopo aver completato il corso, per rivedere le tecniche e migliorare costantemente."
                </p>
                <p className="text-white font-semibold mt-4 text-sm sm:text-base">- Ana Maria, Academy Lash Master</p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Manuale Digitale</h4>
                  <p className="text-gray-600 text-sm sm:text-base">PDF scaricabile e stampabile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procreate Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Strumenti Digitali
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Scopri gli strumenti digitali che le nostre alunne utilizzano per creare progetti straordinari
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Procreate App */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Procreate</h3>
                  <p className="text-gray-300 text-base sm:text-lg">App per iPad</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 text-base sm:text-lg">
                  <strong className="text-white">Procreate</strong> è l'app di disegno digitale più utilizzata dalle professioniste del settore beauty. 
                  Perfetta per creare moodboard, sketch di design e presentazioni professionali.
                </p>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Perché Procreate?</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200 text-sm sm:text-base">Interfaccia intuitiva e professionale</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200 text-sm sm:text-base">Migliaia di pennelli personalizzabili</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200 text-sm sm:text-base">Esportazione in alta risoluzione</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200 text-sm sm:text-base">Perfetto per portfolio digitali</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plugin Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Plugin Esclusivo</h4>
                <p className="text-white text-opacity-90 text-sm sm:text-base mb-4 sm:mb-6">
                  Plugin personalizzato per Procreate con pennelli e strumenti specifici per il design delle extension ciglia
                </p>
                
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <p className="text-white font-bold text-lg sm:text-xl mb-2">Codice Sconto</p>
                  <div className="bg-white rounded-lg p-3 sm:p-4">
                    <code className="text-purple-600 font-mono text-lg sm:text-xl font-bold">ACADEMY20</code>
                  </div>
                  <p className="text-white text-opacity-90 text-xs sm:text-sm mt-2">20% di sconto per le nostre alunne</p>
                </div>

                <button className="bg-white text-purple-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  Scarica Plugin
                </button>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
                <h5 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Come Ottenere il Plugin</h5>
                <ol className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span>Iscriviti a uno dei nostri corsi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span>Ricevi il codice sconto via email</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span>Scarica il plugin dal nostro store</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <span>Inizia a creare progetti straordinari!</span>
                  </li>
                </ol>
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

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      </div>
    </>
  );
};

export default Corsi;
