# Configurazione EmailJS per Academy Lash Master

## Passaggi per configurare l'invio email

### 1. Crea un account EmailJS
- Vai su https://www.emailjs.com/
- Clicca su "Sign Up" e crea un account gratuito
- Conferma la tua email

### 2. Crea un servizio email
- Nel dashboard, vai su "Email Services"
- Clicca su "Add New Service"
- Scegli il tuo provider email (Gmail, Outlook, Yahoo, etc.)
- Segui le istruzioni per collegare il tuo account email
- Prendi nota del **Service ID** (es. `service_xxxxxxx`)

### 3. Crea un template email
- Vai su "Email Templates"
- Clicca su "Create New Template"
- Usa questo template:

**Oggetto:**
```
Nuova richiesta da {{from_name}} - Academy Lash Master
```

**Contenuto:**
```
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
```

- Salva il template e prendi nota del **Template ID** (es. `template_xxxxxxx`)

### 4. Ottieni la Public Key
- Vai su "Account" > "General"
- Copia la **Public Key** (es. `xxxxxxxxxxxxxxxx`)

### 5. Aggiorna la configurazione
- Apri il file `src/config/emailjs.ts`
- Sostituisci i valori con i tuoi:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_tuoid', // Il tuo Service ID
  templateId: 'template_tuoid', // Il tuo Template ID
  publicKey: 'tua_public_key', // La tua Public Key
  // ... resto della configurazione
};
```

### 6. Testa il form
- Avvia il server di sviluppo: `npm run dev`
- Vai alla pagina Chi Sono
- Compila e invia il form di contatto
- Controlla la tua email per ricevere il messaggio

## Note importanti

- Il piano gratuito di EmailJS permette 200 email al mese
- Le email vengono inviate dal tuo account email collegato
- Puoi personalizzare il template email come preferisci
- Assicurati che i nomi delle variabili nel template corrispondano a quelli nel codice

## Risoluzione problemi

**Errore "Invalid public key":**
- Verifica che la Public Key sia corretta
- Assicurati che l'account EmailJS sia attivo

**Errore "Invalid service ID":**
- Verifica che il Service ID sia corretto
- Assicurati che il servizio email sia attivo

**Errore "Invalid template ID":**
- Verifica che il Template ID sia corretto
- Assicurati che il template sia pubblicato

**Email non ricevute:**
- Controlla la cartella spam
- Verifica che l'account email collegato funzioni
- Controlla i log di EmailJS nel dashboard
