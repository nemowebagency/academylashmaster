import React from 'react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';

const CookiePolicy = () => {
  return (
    <>
      <NeonCursor />
      <PromoScroll />
      
      <div className="min-h-screen bg-black">
        <Navbar setShowContactForm={() => {}} />
        
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden" style={{
          marginTop: 'calc(32px + 48px)', // 32px promo + navbar height
        }}>
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Cookie Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light px-4">
                Informativa sui cookie di Academy Lash Master
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">1. Cosa sono i Cookie</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Vengono utilizzati per migliorare l'esperienza di navigazione, ricordare le preferenze dell'utente e fornire funzionalità personalizzate.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">2. Tipi di Cookie Utilizzati</h2>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Cookie Tecnici (Necessari)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Cookie di sessione per mantenere l'utente connesso</li>
                  <li>Cookie di sicurezza per proteggere da attacchi</li>
                  <li>Cookie di funzionalità per ricordare le preferenze</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Cookie di Prestazioni</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Questi cookie ci aiutano a capire come gli utenti interagiscono con il sito:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Google Analytics per analisi del traffico</li>
                  <li>Cookie di monitoraggio delle prestazioni</li>
                  <li>Cookie di test A/B per ottimizzazione</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Cookie di Marketing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Questi cookie vengono utilizzati per mostrare annunci pertinenti:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Facebook Pixel per remarketing</li>
                  <li>Google Ads per pubblicità mirata</li>
                  <li>Cookie di social media per condivisione</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">3. Cookie di Terze Parti</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Il nostro sito utilizza servizi di terze parti che possono impostare cookie:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li><strong>Google Analytics:</strong> Per analizzare il traffico del sito</li>
                  <li><strong>Facebook:</strong> Per funzionalità social e pubblicità</li>
                  <li><strong>Instagram:</strong> Per integrazione social</li>
                  <li><strong>YouTube:</strong> Per video incorporati</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">4. Durata dei Cookie</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I cookie hanno diverse durate:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li><strong>Cookie di sessione:</strong> Si cancellano quando chiudi il browser</li>
                  <li><strong>Cookie persistenti:</strong> Rimangono per un periodo specificato (da 1 mese a 2 anni)</li>
                  <li><strong>Cookie di terze parti:</strong> Seguono le politiche dei rispettivi servizi</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">5. Gestione dei Cookie</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Puoi gestire i cookie in diversi modi:
                </p>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Impostazioni del Browser</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La maggior parte dei browser permette di:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Visualizzare i cookie memorizzati</li>
                  <li>Eliminare i cookie esistenti</li>
                  <li>Bloccare i cookie di terze parti</li>
                  <li>Ricevere notifiche prima dell'installazione di nuovi cookie</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Banner di Consenso</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Al primo accesso al sito, apparirà un banner che ti permetterà di:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Personalizzare le tue preferenze</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">6. Impatto della Disabilitazione</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Disabilitare alcuni cookie potrebbe limitare la funzionalità del sito:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Impossibilità di salvare le preferenze</li>
                  <li>Perdita di funzionalità personalizzate</li>
                  <li>Esperienza di navigazione meno fluida</li>
                  <li>Impossibilità di utilizzare alcune funzionalità social</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">7. Cookie Specifici Utilizzati</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Nome Cookie</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Scopo</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Durata</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_ga</td>
                        <td className="border border-gray-300 px-4 py-2">Analisi traffico</td>
                        <td className="border border-gray-300 px-4 py-2">2 anni</td>
                        <td className="border border-gray-300 px-4 py-2">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_fbp</td>
                        <td className="border border-gray-300 px-4 py-2">Facebook Pixel</td>
                        <td className="border border-gray-300 px-4 py-2">3 mesi</td>
                        <td className="border border-gray-300 px-4 py-2">Marketing</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">session_id</td>
                        <td className="border border-gray-300 px-4 py-2">Sessione utente</td>
                        <td className="border border-gray-300 px-4 py-2">Sessione</td>
                        <td className="border border-gray-300 px-4 py-2">Tecnico</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">8. Aggiornamenti</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Questa Cookie Policy può essere aggiornata periodicamente per riflettere cambiamenti nelle nostre pratiche o per altri motivi operativi, legali o normativi. Ti consigliamo di rivedere regolarmente questa pagina per rimanere informato sui nostri utilizzi dei cookie.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">9. Contatti</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Per domande sui cookie o per esercitare i tuoi diritti, contattaci:
                </p>
                <ul className="list-none text-gray-700 leading-relaxed mb-6">
                  <li>Email: academylashmaster@gmail.com</li>
                  <li>Telefono: +39 3533165390</li>
                  <li>Indirizzo: Via Roma 123, Milano</li>
                </ul>

                <p className="text-gray-500 text-sm mt-8">
                  Ultima modifica: {new Date().toLocaleDateString('it-IT')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
