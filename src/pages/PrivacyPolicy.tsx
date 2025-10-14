import React from 'react';
import NeonCursor from '../components/NeonCursor';
import Footer from '../components/Footer';
import PromoScroll from '../components/PromoScroll';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl font-light px-4">
                Informativa sulla privacy di Academy Lash Master
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">1. Titolare del Trattamento</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Il Titolare del trattamento dei dati personali è Academy Lash Master di Ana Maria, con sede in Via Roma 123, Milano, P.IVA: 03338640802, email: academylashmaster@gmail.com.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">2. Tipi di Dati Raccolti</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Raccogliamo i seguenti tipi di dati personali:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Dati di identificazione (nome, cognome, email, telefono)</li>
                  <li>Dati di navigazione (indirizzo IP, cookie, dati di utilizzo)</li>
                  <li>Dati di contatto (messaggi inviati tramite form di contatto)</li>
                  <li>Dati di iscrizione ai corsi (informazioni necessarie per la formazione)</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">3. Finalità del Trattamento</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I dati personali vengono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Fornire i servizi richiesti (corsi di formazione, consulenze)</li>
                  <li>Rispondere alle richieste di informazioni</li>
                  <li>Gestire le iscrizioni ai corsi</li>
                  <li>Inviare comunicazioni relative ai servizi</li>
                  <li>Rispettare obblighi di legge</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">4. Base Giuridica</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Il trattamento dei dati personali si basa su:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Consenso dell'interessato (art. 6, par. 1, lett. a GDPR)</li>
                  <li>Esecuzione di un contratto (art. 6, par. 1, lett. b GDPR)</li>
                  <li>Interesse legittimo (art. 6, par. 1, lett. f GDPR)</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">5. Conservazione dei Dati</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I dati personali vengono conservati per il tempo necessario al perseguimento delle finalità per cui sono stati raccolti e comunque non oltre i termini previsti dalla legge. I dati di contatto vengono conservati per 2 anni dall'ultimo contatto, mentre i dati relativi ai corsi vengono conservati per 10 anni per finalità fiscali.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">6. Diritti dell'Interessato</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'interessato ha il diritto di:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
                  <li>Accedere ai propri dati personali</li>
                  <li>Richiedere la rettifica o la cancellazione</li>
                  <li>Opporsi al trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                  <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">7. Sicurezza</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali contro l'accesso non autorizzato, la modifica, la divulgazione o la distruzione. Utilizziamo protocolli di crittografia e controlli di accesso per garantire la sicurezza dei dati.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">8. Modifiche alla Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina e, se significative, verranno comunicate agli interessati via email.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">9. Contatti</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Per qualsiasi domanda relativa a questa Privacy Policy o per esercitare i propri diritti, è possibile contattarci:
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

export default PrivacyPolicy;
