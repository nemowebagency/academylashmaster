import React, { useState } from 'react';

const Corsi = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300">
                Academy Lash Master
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/corsi" className="text-white font-medium">Corsi</a>
              <a href="/about" className="text-gray-300 hover:text-white transition duration-300 font-medium">Chi Siamo</a>
              <a href="/contatti" className="text-gray-300 hover:text-white transition duration-300 font-medium">Contatti</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              I Nostri Corsi
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Formazione professionale per ogni livello. Scegli il percorso giusto per te 
              e inizia la tua carriera nel mondo delle extension ciglia.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border transition-all duration-300 hover:shadow-white/10 ${
                  selectedCourse === course.id 
                    ? 'border-white scale-105' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black text-3xl">{course.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-lg">{course.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">{course.price}</span>
                    <span className="text-gray-400 ml-2">/corso</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 text-center mb-4">{course.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Durata:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Orario:</span>
                      <span className="text-white">{course.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max partecipanti:</span>
                      <span className="text-white">{course.maxStudents}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Cosa imparerai:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <span className="text-white mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {selectedCourse === course.id ? 'Nascondi Dettagli' : 'Mostra Dettagli'}
                  </button>
                  
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Iscriviti Ora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
            {(() => {
              const course = courses.find(c => c.id === selectedCourse);
              if (!course) return null;
              
              return (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
                      <p className="text-gray-400 text-lg">{course.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-gray-400 text-sm">Durata</div>
                        <div className="text-white font-semibold">{course.duration}</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-gray-400 text-sm">Prezzo</div>
                        <div className="text-white font-semibold">{course.price}</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-gray-400 text-sm">Max Partecipanti</div>
                        <div className="text-white font-semibold">{course.maxStudents}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Programma del Corso</h3>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <span className="text-white mr-3 mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEnroll(course.id)}
                        className="flex-1 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
                      >
                        Iscriviti Ora
                      </button>
                      <button
                        onClick={() => setSelectedCourse(null)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
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
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Perché Scegliere Academy Lash Master?</h2>
            <p className="text-xl text-gray-300">Eccellenza nella formazione e supporto continuo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Insegnanti Esperti</h3>
              <p className="text-gray-300">
                I nostri istruttori sono professionisti certificati con anni di esperienza 
                nel settore e formazione internazionale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Materiali Professionali</h3>
              <p className="text-gray-300">
                Utilizziamo solo materiali di alta qualità e strumenti professionali 
                per garantire la migliore esperienza formativa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Certificazione Riconosciuta</h3>
              <p className="text-gray-300">
                Al termine del corso riceverai una certificazione riconosciuta 
                nel settore beauty che valorizzerà il tuo curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto a Iniziare il Tuo Percorso?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Scegli il corso più adatto a te e trasforma la tua passione in professione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contatti"
              className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
            >
              Richiedi Informazioni
            </a>
            <a
              href="tel:+393533165390"
              className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg border-2 border-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Academy Lash Master</h4>
          <p className="text-gray-300 mb-6">La tua scuola di formazione per extension ciglia</p>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-2">
              <span className="text-white font-semibold">Telefono:</span> +39 3533165390
            </p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">P.IVA:</span> 03338640802
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">TikTok</a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2024 Academy Lash Master. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default Corsi;
