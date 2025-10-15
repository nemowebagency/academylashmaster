import { useEffect, useState } from 'react';

const DebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      cookieEnabled: navigator.cookieEnabled,
      localStorageAvailable: (() => {
        try {
          localStorage.setItem('test', 'test');
          localStorage.removeItem('test');
          return true;
        } catch {
          return false;
        }
      })(),
      sessionStorageAvailable: (() => {
        try {
          sessionStorage.setItem('test', 'test');
          sessionStorage.removeItem('test');
          return true;
        } catch {
          return false;
        }
      })(),
      location: window.location.href,
      protocol: window.location.protocol,
      host: window.location.host,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      documentReadyState: document.readyState,
      windowLoaded: document.readyState === 'complete',
      reactVersion: (window as any).React?.version || 'Not found',
      errors: []
    };

    // Capture any errors
    const originalError = console.error;
    console.error = (...args: any[]) => {
      (info.errors as string[]).push(args.join(' '));
      originalError.apply(console, args);
    };

    setDebugInfo(info);

    // Restore original console.error after a delay
    setTimeout(() => {
      console.error = originalError;
    }, 5000);

  }, []);

  if (import.meta.env.PROD) {
    return null; // Don't show in production
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      maxHeight: '50vh',
      overflow: 'auto'
    }}>
      <h3>Debug Info:</h3>
      <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
    </div>
  );
};

export default DebugInfo;
