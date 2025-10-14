// Configurazione EmailJS
// Per configurare EmailJS:
// 1. Vai su https://www.emailjs.com/
// 2. Crea un account gratuito
// 3. Crea un servizio email (Gmail, Outlook, etc.)
// 4. Crea un template email
// 5. Sostituisci i valori qui sotto con i tuoi

export const EMAILJS_CONFIG = {
  // Sostituisci con il tuo Service ID
  serviceId: 'service_70jjniw',
  
  // Sostituisci con il tuo Template ID
  templateId: 'template_td3l8eb',
  
  // Sostituisci con la tua Public Key
  publicKey: 'bcsaPBPL0aVWaLhFj',
  
  // Template parameters che verranno inviati
  templateParams: {
    to_name: 'Ana Maria - Academy Lash Master',
    from_name: '',
    from_email: '',
    phone: '',
    message: '',
    reply_to: ''
  }
};

// Template email suggerito per EmailJS:
/*
Oggetto: Nuova richiesta da {{from_name}} - Academy Lash Master

Ciao Ana Maria,

Hai ricevuto una nuova richiesta di informazioni sui corsi:

Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}

Messaggio:
{{message}}

Puoi rispondere direttamente a: {{reply_to}}

Cordiali saluti,
Sistema Academy Lash Master
*/
