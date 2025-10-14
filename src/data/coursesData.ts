import { CourseData } from '../components/ExpandableCourseCard';

export const coursesData: CourseData[] = [
  {
    id: 'classico',
    title: 'CORSO CLASSICO (BASE)',
    subtitle: 'La tua base solida per diventare una Lash Artist professionista',
    description: 'Corso completo e strutturato per apprendere la tecnica One to One dalle basi fino all\'esecuzione perfetta, con teoria approfondita e supporto continuo.',
    image: '/soggetto/one.jpg',
    imageAlt: 'Corso Classico Extension Ciglia - Tecniche One to One',
    program: {
      title: 'PROGRAMMA DEL CORSO',
      sections: [
        {
          title: 'Giorno 1 – Parte Teorica',
          description: 'La prima giornata è dedicata alla teoria e ai fondamenti professionali del mestiere di Lash Artist.',
          items: [
            'Le norme di igiene e sicurezza indispensabili nel lavoro estetico',
            'La prevenzione di allergie, irritazioni e ustioni chimiche',
            'L\'importanza del patch test e delle procedure corrette per clienti sensibili',
            'La conoscenza approfondita degli strumenti di lavoro',
            'L\'anatomia e fisiologia delle ciglia naturali'
          ]
        },
        {
          title: 'Giorno 2 – Approfondimento e Mappature',
          description: 'La seconda giornata consolida le competenze teoriche e introduce la progettazione estetica.',
          items: [
            'Studio delle forme degli occhi e proporzioni del viso',
            'Analisi delle curvature, lunghezze e spessori',
            'Introduzione agli stili classici (Natural, Doll, Cat, Squirrel, Round)',
            'Approccio consulenziale professionale'
          ]
        },
        {
          title: 'Giorno 3 – Esame Finale',
          description: 'Valutazione delle competenze teoriche e pratiche acquisite con prova su modella reale.',
          items: []
        }
      ]
    },
    benefits: {
      title: 'AL TERMINE DEL CORSO',
      items: [
        'Certificato ufficiale di partecipazione',
        'Manuale professionale completo',
        'Accesso al gruppo di supporto post-corso',
        'Possibilità di rifrequentare gratuitamente',
        'Kit professionale in omaggio'
      ]
    },
    info: {
      duration: '3 giornate',
      price: '799 €',
      modality: 'in presenza',
      participants: 'Max 6 partecipanti'
    },
    buttonText: 'Iscriviti al Corso Base',
    buttonLink: '/contatti#form'
  },
  {
    id: 'volume',
    title: 'CORSO VOLUME',
    subtitle: 'Tecniche avanzate di infoltimento e perfezionamento della manualità',
    description: 'Il Corso Volume è dedicato alle lash artist che desiderano portare le proprie competenze a un livello superiore, imparando la tecnica dell\'infoltimento tramite ventagli multipli.',
    image: '/soggetto/vol.jpg',
    imageAlt: 'Corso Volume Extension Ciglia - Tecniche Avanzate',
    program: {
      title: 'PROGRAMMA DEL CORSO',
      sections: [
        {
          title: 'Giorno 1 – Fondamenti del Volume',
          description: 'Parte teorica (mattina):',
          items: [
            'Struttura e geometria dei ciuffetti handmade',
            'Differenze tra 2D, 3D, 4D, 5D, 6D e Mega Volume',
            'Selezione delle ciglia in base a curvatura, lunghezza, spessore',
            'Bilanciamento del peso per garantire la salute delle ciglia naturali',
            'Chimica dell\'adesivo e gestione della polimerizzazione'
          ]
        },
        {
          title: 'Giorno 2 – Personalizzazione estetica e styling',
          description: 'Approfondimento dedicato alla costruzione dell\'identità stilistica della lash artist.',
          items: [
            'Analisi dei diversi tipi di occhi e forme del viso',
            'Combinazione tra curvature, lunghezze e direzioni',
            'Studio dei volumi ibridi (Hybrid Lashes)',
            'Gestione della consulenza cliente'
          ]
        },
        {
          title: 'Giorno 3 – Volume Exam',
          description: 'La giornata conclusiva è dedicata alla valutazione teorica e pratica delle competenze acquisite.',
          items: []
        }
      ]
    },
    benefits: {
      title: 'AL TERMINE DEL CORSO',
      items: [
        'Diploma ufficiale Volume Lash Artist',
        'Manuale esclusivo Volume con schemi di mappature',
        'Accesso al gruppo di supporto e mentoring post-corso',
        'Kit professionale in omaggio con strumenti selezionati'
      ]
    },
    info: {
      duration: '3 giornate',
      price: '799 €',
      modality: 'in presenza',
      participants: 'Max 6 partecipanti'
    },
    buttonText: 'Iscriviti al Corso Volume',
    buttonLink: '/contatti#form'
  },
  {
    id: 'completo',
    title: 'CORSO COMPLETO (CLASSICO + VOLUME)',
    subtitle: 'Tutte le tecniche professionali per diventare una Lash Artist completa',
    description: 'Il Corso Completo Lash Artist unisce in un unico percorso le tecniche Classiche One to One e Volume, offrendo una formazione intensiva, strutturata e professionale.',
    image: '/soggetto/completo.jpg',
    imageAlt: 'Corso Completo Extension Ciglia - Classico + Volume',
    program: {
      title: 'PROGRAMMA DEL CORSO',
      sections: [
        {
          title: 'MODULO 1 – TECNICA CLASSICA (One to One)',
          description: 'Norme di igiene, anatomia delle ciglia, strumenti e materiali, esercizi di coordinazione e applicazioni pratiche.',
          items: []
        },
        {
          title: 'MODULO 2 – TECNICA VOLUME',
          description: 'Differenze tra metodo Classico e Volume, struttura dei ciuffetti handmade, selezione delle ciglia e bilanciamento del peso.',
          items: []
        },
        {
          title: 'MODULO 3 – STYLING AVANZATO E DESIGN',
          description: 'Analisi delle forme degli occhi, combinazione tra curvature e lunghezze, studio dei look ibridi.',
          items: []
        },
        {
          title: 'MODULO 4 – ESAME FINALE',
          description: 'Esame teorico scritto e orale, prova pratica su modella reale con valutazione individuale.',
          items: []
        }
      ]
    },
    benefits: {
      title: 'AL TERMINE DEL CORSO',
      items: [
        'Due manuali illustrati professionali (Classico + Volume + Ritenzione)',
        'Certificato ufficiale "Complete Lash Artist"',
        'Accesso al gruppo di supporto post-corso',
        'Kit professionale completo in omaggio',
        'Possibilità di rifrequentare gratuitamente le lezioni'
      ]
    },
    info: {
      duration: '5 giornate',
      price: '1.499 €',
      modality: 'in presenza',
      participants: 'Max 6 partecipanti'
    },
    buttonText: 'Iscriviti al Corso Completo',
    buttonLink: '/contatti#form'
  },
  {
    id: 'vip',
    title: 'CORSO VIP INDIVIDUALE',
    subtitle: 'Formazione esclusiva one-to-one con la Master Trainer Ana Maria',
    description: 'Il Corso VIP Individuale è un\'esperienza formativa esclusiva, pensata per chi desidera un percorso personalizzato al 100%, costruito in base alle proprie esigenze tecniche.',
    image: '/soggetto/vip.jpg',
    imageAlt: 'Corso VIP Individuale - Formazione Esclusiva con Ana Maria',
    program: {
      title: 'PROGRAMMA DEL CORSO',
      sections: [
        {
          title: 'Giorno 1 – Analisi tecnica e revisione delle basi',
          description: 'Valutazione del livello tecnico attuale, correzione delle abitudini scorrette e ottimizzazione della manualità.',
          items: []
        },
        {
          title: 'Giorno 2 – Perfezionamento tecnico e styling avanzato',
          description: 'Creazione e applicazione di ventagli handmade o premade, approfondimento su curvature e effetti personalizzati.',
          items: []
        },
        {
          title: 'Giorno 3 – Business & Branding',
          description: 'Costruzione dell\'identità professionale, analisi del posizionamento sul mercato e tecniche di comunicazione.',
          items: []
        }
      ]
    },
    benefits: {
      title: 'AL TERMINE DEL CORSO',
      items: [
        'Manuale VIP personalizzato',
        'Kit professionale completo in omaggio',
        'Certificato ufficiale VIP Lash Artist',
        'Sessione di coaching privata su tecnica, branding e business',
        'Accesso esclusivo al gruppo mentoring'
      ]
    },
    info: {
      duration: '3 giornate',
      price: '1.999 €',
      modality: 'one-to-one',
      participants: '1 partecipante'
    },
    buttonText: 'Iscriviti al Corso VIP',
    buttonLink: '/contatti#form'
  },
  {
    id: 'retention',
    title: 'CORSO RETENTION & SEGRETI DELLA TENUTA',
    subtitle: 'Migliora la durata delle applicazioni e offri risultati impeccabili',
    description: 'Il Corso Retention & Segreti della Tenuta è dedicato a lash artist che vogliono comprendere in modo scientifico e pratico come migliorare la durata delle extension ciglia.',
    image: '/soggetto/tenuta.jpeg',
    imageAlt: 'Corso Retention & Segreti della Tenuta - Migliora la Durata',
    program: {
      title: 'PROGRAMMA DEL CORSO',
      sections: [
        {
          title: 'Parte Teorica',
          description: 'Comprendere la chimica dell\'adesivo e analisi approfondita dei tipi di cianoacrilato.',
          items: [
            'Comprendere la chimica dell\'adesivo: composizione e struttura molecolare',
            'Analisi approfondita dei tipi di cianoacrilato',
            'Relazione tra ambiente e performance',
            'Importanza del pH delle ciglia naturali',
            'Differenze tra adesivi rapidi e lenti'
          ]
        },
        {
          title: 'Parte Pratica',
          description: 'Test comparativi di adesivi e simulazioni di condizioni ambientali reali.',
          items: [
            'Test comparativi di adesivi',
            'Simulazioni di condizioni ambientali reali',
            'Dimostrazione sulla gestione del punto di colla',
            'Esercizi per migliorare precisione e velocità',
            'Tecniche per riconoscere la "colla secca" e la "colla satura"'
          ]
        },
        {
          title: 'Argomenti Speciali',
          description: 'Come scegliere l\'adesivo giusto e strategie per aumentare la ritenzione.',
          items: [
            'Come scegliere l\'adesivo giusto in base alla velocità di lavoro',
            'La corretta manutenzione del flacone',
            'Prevenzione di irritazioni o sensibilizzazioni',
            'Strategie per aumentare la ritenzione media fino al 40%'
          ]
        }
      ]
    },
    benefits: {
      title: 'AL TERMINE DEL CORSO',
      items: [
        'Manuale tecnico digitale con tabelle di confronto',
        'Certificato ufficiale "Retention & Glue Master"',
        'Linee guida aggiornate per ottimizzare la ritenzione',
        'Accesso a materiale di aggiornamento e consigli pratici'
      ]
    },
    info: {
      duration: '1 giornata',
      price: '199 €',
      modality: 'in presenza o online',
      participants: 'Max 8 partecipanti'
    },
    buttonText: 'Iscriviti al Corso Retention',
    buttonLink: '/contatti#form'
  }
];

export default coursesData;
