import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';
import HeroCorsi from '../components/HeroCorsi';
import SEO from '../components/SEO';




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
    <div className="overflow-x-hidden">
      <SEO
        title="Corsi Extension Ciglia - Academy Lash Master"
        description="Scopri tutti i corsi di extension ciglia di Academy Lash Master: corso base, avanzato e master class. Formazione professionale con certificazione inclusa. Materiali e manuali professionali."
        keywords={[
          "corsi extension ciglia",
          "corso base extension ciglia",
          "corso avanzato extension ciglia",
          "master class extension ciglia",
          "formazione extension ciglia Milano",
          "certificazione extension ciglia",
          "tecnica volume ciglia",
          "mega volume ciglia",
          "manuale extension ciglia",
          "procreate extension ciglia",
          "corso estetista extension ciglia",
          "beauty academy Milano",
          "formazione beauty professionale",
          "corso extension ciglia certificato",
          "Ana Maria extension ciglia"
        ]}
        canonicalUrl="/corsi"
        ogImage="/soggetto/corsi.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Corsi Extension Ciglia - Academy Lash Master",
          "description": "Corsi professionali di extension ciglia con certificazione inclusa. Formazione completa dal livello base al master class.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Academy Lash Master",
            "url": "https://academylashmaster.com"
          },
          "courseMode": "Blended",
          "educationalLevel": "Professional",
          "inLanguage": "it",
          "offers": [
            {
              "@type": "Course",
              "name": "Corso Base Extension Ciglia",
              "description": "Impara le tecniche fondamentali per l'applicazione delle extension ciglia. Perfetto per principianti.",
              "coursePrerequisites": "Nessun prerequisito richiesto",
              "educationalCredentialAwarded": "Certificato di Partecipazione"
            },
            {
              "@type": "Course",
              "name": "Corso Avanzato Extension Ciglia",
              "description": "Tecniche avanzate e specializzazioni per diventare un vero professionista del settore.",
              "coursePrerequisites": "Corso Base Extension Ciglia o esperienza equivalente",
              "educationalCredentialAwarded": "Certificato Avanzato"
            },
            {
              "@type": "Course",
              "name": "Master Class Extension Ciglia",
              "description": "Il corso più completo per diventare un vero Master delle extension ciglia e aprire la propria attività.",
              "coursePrerequisites": "Corso Avanzato Extension Ciglia",
              "educationalCredentialAwarded": "Certificato Master"
            }
          ]
        }}
      />
      <NeonCursor />
      <PromoScroll />
      <Navbar setShowContactForm={setShowContactForm} />
      <HeroCorsi />
    <div className="min-h-screen bg-black overflow-x-hidden">
        
      
      {/* ===========================================
          CORSI SECTION - Sezione con i corsi professionali dettagliati
          =========================================== */}
      <section id="corsi" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>I nostri corsi professionali</h3>
            <p className={`text-lg sm:text-xl text-black font-light transition-all duration-1000 ease-out ${coursesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{transitionDelay: coursesVisible ? '0.2s' : '0s'}}>Formazione completa e certificata per ogni livello di esperienza</p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* CORSO CLASSICO (BASE) */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-black mb-4">CORSO CLASSICO (BASE)</h4>
                    <p className="text-xl text-gray-700 font-medium mb-6">La tua base solida per diventare una Lash Artist professionista</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Il Corso Classico (Base) è il primo passo fondamentale nel percorso di formazione di una Lash Artist. Un corso completo e strutturato, pensato per chi desidera apprendere la tecnica One to One dalle basi fino all'esecuzione perfetta, unendo teoria approfondita, esercitazioni pratiche e supporto continuo post-corso.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">PROGRAMMA DEL CORSO</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 1 – Parte Teorica</h6>
                          <p className="text-sm text-gray-700 mb-2">La prima giornata è dedicata alla teoria e ai fondamenti professionali del mestiere di Lash Artist.</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Le norme di igiene e sicurezza indispensabili nel lavoro estetico</li>
                            <li>• La prevenzione di allergie, irritazioni e ustioni chimiche</li>
                            <li>• L'importanza del patch test e delle procedure corrette per clienti sensibili</li>
                            <li>• La conoscenza approfondita degli strumenti di lavoro</li>
                            <li>• L'anatomia e fisiologia delle ciglia naturali</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 2 – Approfondimento e Mappature</h6>
                          <p className="text-sm text-gray-700 mb-2">La seconda giornata consolida le competenze teoriche e introduce la progettazione estetica.</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Studio delle forme degli occhi e proporzioni del viso</li>
                            <li>• Analisi delle curvature, lunghezze e spessori</li>
                            <li>• Introduzione agli stili classici (Natural, Doll, Cat, Squirrel, Round)</li>
                            <li>• Approccio consulenziale professionale</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 3 – Esame Finale</h6>
                          <p className="text-sm text-gray-700">Valutazione delle competenze teoriche e pratiche acquisite con prova su modella reale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">AL TERMINE DEL CORSO</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Certificato ufficiale di partecipazione</li>
                        <li>• Manuale professionale completo</li>
                        <li>• Accesso al gruppo di supporto post-corso</li>
                        <li>• Possibilità di rifrequentare gratuitamente</li>
                        <li>• Kit professionale in omaggio</li>
                </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-black text-white px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Durata: 3 giornate</p>
                        <p className="text-lg font-bold">Prezzo: 799 €</p>
                      </div>
                      <div className="bg-gray-100 text-black px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Modalità: in presenza</p>
                        <p className="text-sm">Max 6 partecipanti</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link 
                      to="/contatti#form"
                      className="w-full bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                    >
                      <span className="relative z-10">Iscriviti al Corso Base</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CORSO VOLUME */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-black mb-4">CORSO VOLUME</h4>
                    <p className="text-xl text-gray-700 font-medium mb-6">Tecniche avanzate di infoltimento e perfezionamento della manualità</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Il Corso Volume è dedicato alle lash artist che desiderano portare le proprie competenze a un livello superiore, imparando la tecnica dell'infoltimento tramite ventagli multipli handmade o premade, con focus su precisione, equilibrio e armonia visiva.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">PROGRAMMA DEL CORSO</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 1 – Fondamenti del Volume</h6>
                          <p className="text-sm text-gray-700 mb-2">Parte teorica (mattina):</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Struttura e geometria dei ciuffetti handmade</li>
                            <li>• Differenze tra 2D, 3D, 4D, 5D, 6D e Mega Volume</li>
                            <li>• Selezione delle ciglia in base a curvatura, lunghezza, spessore</li>
                            <li>• Bilanciamento del peso per garantire la salute delle ciglia naturali</li>
                            <li>• Chimica dell'adesivo e gestione della polimerizzazione</li>
                          </ul>
                          <p className="text-sm text-gray-700 mb-2 mt-3">Parte pratica (pomeriggio):</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Creazione dei ventagli perfetti con pinzette professionali</li>
                            <li>• Applicazioni su strisce di ciglia per esercitare apertura e stabilità</li>
                            <li>• Gestione della quantità di colla e controllo del punto di contatto</li>
                            <li>• Isolamento e posizionamento del ventaglio per effetti Natural, Cat, Doll o Squirrel</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 2 – Personalizzazione estetica e styling</h6>
                          <p className="text-sm text-gray-700 mb-2">Approfondimento dedicato alla costruzione dell'identità stilistica della lash artist.</p>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Analisi dei diversi tipi di occhi e forme del viso</li>
                            <li>• Combinazione tra curvature, lunghezze e direzioni</li>
                            <li>• Studio dei volumi ibridi (Hybrid Lashes)</li>
                            <li>• Gestione della consulenza cliente</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 3 – Volume Exam</h6>
                          <p className="text-sm text-gray-700">Valutazione teorica e pratica delle competenze acquisite con prova su modella reale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">AL TERMINE DEL CORSO</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Diploma ufficiale Volume Lash Artist</li>
                        <li>• Manuale esclusivo Volume con schemi di mappature</li>
                        <li>• Accesso al gruppo di supporto e mentoring post-corso</li>
                        <li>• Kit professionale in omaggio</li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-black text-white px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Durata: 3 giornate</p>
                        <p className="text-lg font-bold">Prezzo: 799 €</p>
                      </div>
                      <div className="bg-gray-100 text-black px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Modalità: in presenza</p>
                        <p className="text-sm">Max 6 partecipanti</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                  <Link 
                    to="/contatti#form"
                      className="w-full bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                      <span className="relative z-10">Iscriviti al Corso Volume</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
                  </div>
                </div>
                  </div>
                </div>

            {/* CORSO COMPLETO (CLASSICO + VOLUME) */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-black mb-4">CORSO COMPLETO (CLASSICO + VOLUME)</h4>
                    <p className="text-xl text-gray-700 font-medium mb-6">Tutte le tecniche professionali per diventare una Lash Artist completa</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Il Corso Completo Lash Artist unisce in un unico percorso le tecniche Classiche One to One e Volume (2D, 3D, 4D, 5D, 6D, Mega Volume), offrendo una formazione intensiva, strutturata e professionale. È il corso ideale per chi desidera partire da zero e raggiungere in poco tempo un livello avanzato.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">PROGRAMMA DEL CORSO</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-black mb-2">MODULO 1 – TECNICA CLASSICA (One to One)</h6>
                          <p className="text-sm text-gray-700">Norme di igiene, anatomia delle ciglia, strumenti e materiali, esercizi di coordinazione e applicazioni pratiche.</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">MODULO 2 – TECNICA VOLUME</h6>
                          <p className="text-sm text-gray-700">Differenze tra metodo Classico e Volume, struttura dei ciuffetti handmade, creazione e applicazione dei ventagli.</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">MODULO 3 – STYLING AVANZATO E DESIGN</h6>
                          <p className="text-sm text-gray-700">Analisi delle forme degli occhi, combinazione di curvature e lunghezze, look ibridi e approccio consulenziale.</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">MODULO 4 – ESAME FINALE</h6>
                          <p className="text-sm text-gray-700">Esame teorico e prova pratica su modella reale con valutazione individuale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">AL TERMINE DEL CORSO</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Due manuali illustrati professionali (Classico + Volume + Ritenzione)</li>
                        <li>• Certificato ufficiale "Complete Lash Artist"</li>
                        <li>• Accesso al gruppo di supporto post-corso</li>
                        <li>• Kit professionale completo in omaggio</li>
                        <li>• Possibilità di rifrequentare gratuitamente le lezioni</li>
                  </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-black text-white px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Durata: 5 giornate</p>
                        <p className="text-lg font-bold">Prezzo: 1.499 €</p>
                      </div>
                      <div className="bg-gray-100 text-black px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Modalità: in presenza</p>
                        <p className="text-sm">Max 6 partecipanti</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link 
                      to="/contatti#form"
                      className="w-full bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                    >
                      <span className="relative z-10">Iscriviti al Corso Completo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CORSO VIP INDIVIDUALE */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-black mb-4">CORSO VIP INDIVIDUALE</h4>
                    <p className="text-xl text-gray-700 font-medium mb-6">Formazione esclusiva one-to-one con la Master Trainer Ana Maria</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Il Corso VIP Individuale è un'esperienza formativa esclusiva, pensata per chi desidera un percorso personalizzato al 100%, costruito in base alle proprie esigenze tecniche, ai propri obiettivi professionali e al livello di partenza.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">PROGRAMMA DEL CORSO</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 1 – Analisi tecnica e revisione delle basi</h6>
                          <p className="text-sm text-gray-700">Valutazione del livello tecnico attuale, correzione delle abitudini scorrette, approfondimento personalizzato su teoria e igiene.</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 2 – Perfezionamento tecnico e styling avanzato</h6>
                          <p className="text-sm text-gray-700">Creazione e applicazione di ventagli handmade, approfondimento su curvature e effetti personalizzati, bilanciamento del peso.</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Giorno 3 – Business & Branding</h6>
                          <p className="text-sm text-gray-700">Costruzione dell'identità professionale, analisi del posizionamento sul mercato, tecniche di comunicazione e vendita.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">AL TERMINE DEL CORSO</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Manuale VIP personalizzato</li>
                        <li>• Kit professionale completo in omaggio</li>
                        <li>• Certificato ufficiale VIP Lash Artist</li>
                        <li>• Sessione di coaching privata su tecnica, branding e business</li>
                        <li>• Accesso esclusivo al gruppo mentoring</li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-black text-white px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Durata: 3 giornate</p>
                        <p className="text-lg font-bold">Prezzo: 1.999 €</p>
                      </div>
                      <div className="bg-gray-100 text-black px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Modalità: one-to-one</p>
                        <p className="text-sm">1 partecipante</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">CORSO VIP ITINERANTE</p>
                      <p className="text-sm text-blue-700">Per le partecipanti che desiderano organizzare la formazione presso il proprio centro: 2.899 € (tutte le spese di trasferimento incluse)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                  <Link
                    to="/contatti#form"
                      className="w-full bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                      <span className="relative z-10">Iscriviti al Corso VIP</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
                  </div>
                </div>
              </div>
                  </div>

            {/* CORSO RETENTION & SEGRETI DELLA TENUTA */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-black mb-4">CORSO RETENTION & SEGRETI DELLA TENUTA</h4>
                    <p className="text-xl text-gray-700 font-medium mb-6">Migliora la durata delle applicazioni e offri risultati impeccabili</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Il Corso Retention & Segreti della Tenuta è dedicato a lash artist che vogliono comprendere in modo scientifico e pratico come migliorare la durata delle extension ciglia, analizzando in profondità i fattori che influenzano l'adesione, la stabilità e la resistenza del trattamento.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">PROGRAMMA DEL CORSO</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-black mb-2">Parte Teorica</h6>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Comprendere la chimica dell'adesivo: composizione e struttura molecolare</li>
                            <li>• Analisi approfondita dei tipi di cianoacrilato</li>
                            <li>• Relazione tra ambiente e performance</li>
                            <li>• Importanza del pH delle ciglia naturali</li>
                            <li>• Differenze tra adesivi rapidi e lenti</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Parte Pratica</h6>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Test comparativi di adesivi</li>
                            <li>• Simulazioni di condizioni ambientali reali</li>
                            <li>• Dimostrazione sulla gestione del punto di colla</li>
                            <li>• Esercizi per migliorare precisione e velocità</li>
                            <li>• Tecniche per riconoscere la "colla secca" e la "colla satura"</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-black mb-2">Argomenti Speciali</h6>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• Come scegliere l'adesivo giusto in base alla velocità di lavoro</li>
                            <li>• La corretta manutenzione del flacone</li>
                            <li>• Prevenzione di irritazioni o sensibilizzazioni</li>
                            <li>• Strategie per aumentare la ritenzione media fino al 40%</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                      <h5 className="font-bold text-black mb-3">AL TERMINE DEL CORSO</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Manuale tecnico digitale con tabelle di confronto</li>
                        <li>• Certificato ufficiale "Retention & Glue Master"</li>
                        <li>• Linee guida aggiornate per ottimizzare la ritenzione</li>
                        <li>• Accesso a materiale di aggiornamento</li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-black text-white px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Durata: 1 giornata</p>
                        <p className="text-lg font-bold">Prezzo: 199 €</p>
                      </div>
                      <div className="bg-gray-100 text-black px-6 py-3 rounded-lg">
                        <p className="text-sm font-medium">Modalità: in presenza o online</p>
                        <p className="text-sm">Max 8 partecipanti</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                  <Link
                    to="/contatti#form"
                      className="w-full bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                  >
                      <span className="relative z-10">Iscriviti al Corso Retention</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Link>
                  </div>
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
                  <p className="text-gray-200 mb-6 text-left">Clicca il pulsante qui sotto per scaricare il PDF completo</p>
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
      <section id="procreate" className="py-16 sm:py-20 lg:py-24 bg-white overflow-x-hidden">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default Corsi;
