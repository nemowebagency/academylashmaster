// Funzione di test per simulare l'invio email senza EmailJS
export const sendTestEmail = async (_formData: any) => {
  try {
    // Simula un delay di invio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simula sempre successo per test (100% successo)
    console.log('✅ Email di test inviata con successo!');
    
    return { success: true, message: 'Email inviata con successo!' };
  } catch (error) {
    console.error('❌ Errore in sendTestEmail:', error);
    return { success: false, message: 'Errore simulato per test' };
  }
};

import emailjs from '@emailjs/browser';

// Funzione per inviare email reale con EmailJS
export const sendRealEmail = async (formData: any, config: any) => {
  try {
    const { serviceId, templateId, publicKey, templateParams } = config;
    
    const params = {
      ...templateParams,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email
    };
    
    console.log('📧 Invio email con EmailJS...', { serviceId, templateId, params });
    
    const result = await emailjs.send(serviceId, templateId, params, publicKey);
    
    console.log('✅ Email inviata con successo!', result);
    
    return { success: true, message: 'Email inviata con successo!' };
  } catch (error) {
    console.error('❌ Errore EmailJS:', error);
    return { success: false, message: 'Errore nell\'invio email' };
  }
};
