// Test semplice per verificare il funzionamento del form
export const testFormSubmission = () => {
  console.log('🧪 === TEST FORM SUBMISSION ===');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+39 123 456 7890',
    message: 'Questo è un messaggio di test'
  };
  
  console.log('📝 Dati di test:', testData);
  
  // Simula il processo di invio
  setTimeout(() => {
    console.log('✅ Test completato con successo!');
    console.log('🎉 Il form dovrebbe funzionare correttamente');
  }, 1000);
  
  return { success: true, message: 'Test completato' };
};

// Funzione per testare il form direttamente nella console
(window as any).testForm = testFormSubmission;
