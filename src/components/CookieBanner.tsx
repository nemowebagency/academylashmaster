import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, XCircle } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Enable all cookies
    enableAnalytics();
    enableMarketing();
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Disable non-necessary cookies
    disableAnalytics();
    disableMarketing();
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    setShowSettings(false);
    
    // Apply preferences
    if (preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    
    if (preferences.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
  };

  // const handleClose = () => {
  //   setIsVisible(false);
  // };

  const enableAnalytics = () => {
    // Enable Google Analytics or other analytics cookies
    console.log('Analytics cookies enabled');
    // Add your analytics initialization code here
  };

  const disableAnalytics = () => {
    // Disable analytics cookies
    console.log('Analytics cookies disabled');
    // Add your analytics disable code here
  };

  const enableMarketing = () => {
    // Enable marketing cookies (Facebook Pixel, etc.)
    console.log('Marketing cookies enabled');
    // Add your marketing cookies initialization code here
  };

  const disableMarketing = () => {
    // Disable marketing cookies
    console.log('Marketing cookies disabled');
    // Add your marketing cookies disable code here
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {!showSettings ? (
          // Main banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
                Utilizziamo i cookie
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Utilizziamo cookie per migliorare la tua esperienza di navigazione, personalizzare contenuti e annunci, 
                fornire funzionalità dei social media e analizzare il nostro traffico. 
                <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-800 underline ml-1">
                  Scopri di più
                </Link>
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-blue-600 hover:text-blue-800 underline ml-2"
                >
                  Impostazioni
                </button>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={handleAcceptAll}
                className="bg-black text-white px-4 py-2 rounded-full font-medium text-xs flex items-center gap-1 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
              >
                <Check className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500 ease-out relative z-10" />
                <span className="relative z-10">Accetta tutto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
              
              <button
                onClick={handleRejectAll}
                className="bg-transparent text-gray-700 px-4 py-2 rounded-full text-xs border border-gray-300 flex items-center gap-1 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:border-transparent hover:text-black"
              >
                <XCircle className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500 ease-out relative z-10" />
                <span className="relative z-10">Rifiuta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
            </div>
          </div>
        ) : (
          // Settings panel
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-semibold text-black">
                Impostazioni Cookie
              </h3>
            </div>
            
            <div className="space-y-3">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex-1">
                  <h4 className="text-xs font-medium text-black">Cookie Necessari</h4>
                  <p className="text-xs text-gray-600">
                    Questi cookie sono essenziali per il funzionamento del sito web.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-gray-300 rounded-full flex items-center justify-end px-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">Sempre attivi</span>
                </div>
              </div>
              
              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex-1">
                  <h4 className="text-xs font-medium text-black">Cookie di Analisi</h4>
                  <p className="text-xs text-gray-600">
                    Ci aiutano a capire come gli utenti interagiscono con il sito web.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-8 h-5 rounded-full flex items-center transition-colors duration-200 ${
                    preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
                    preferences.analytics ? 'translate-x-4' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
              
              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex-1">
                  <h4 className="text-xs font-medium text-black">Cookie di Marketing</h4>
                  <p className="text-xs text-gray-600">
                    Utilizzati per mostrare annunci pertinenti e misurare l'efficacia delle campagne.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-8 h-5 rounded-full flex items-center transition-colors duration-200 ${
                    preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
                    preferences.marketing ? 'translate-x-4' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-3">
              <button
                onClick={handleSavePreferences}
                className="bg-black text-white px-4 py-2 rounded-full font-medium text-xs flex items-center gap-1 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black flex-1"
              >
                <Check className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500 ease-out relative z-10" />
                <span className="relative z-10">Salva preferenze</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
              
              <button
                onClick={handleRejectAll}
                className="bg-transparent text-gray-700 px-4 py-2 rounded-full text-xs border border-gray-300 flex items-center gap-1 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:border-transparent hover:text-black"
              >
                <XCircle className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500 ease-out relative z-10" />
                <span className="relative z-10">Rifiuta tutto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
