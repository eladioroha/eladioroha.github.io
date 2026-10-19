// Datos personales y textos de la interfaz en ambos idiomas.
// Lo que va entre [corchetes] es un pendiente: se resalta en amarillo en la página.

export type Idioma = 'es' | 'en';
export type Texto = Record<Idioma, string>;

export const perfil = {
  nombre: 'Eladio Rojas Harasic',
  cargo: 'Paid Media & Growth Specialist',
  email: 'eladioroha@gmail.com',
  whatsapp: '56968962976',
  whatsappVisible: '+56 9 6896 2976',
  linkedin: 'https://www.linkedin.com/in/eladiorojash',
  github: 'https://github.com/eladioroha',
  url: 'https://eladioroha.github.io',
};

export const ui = {
  es: {
    metaTitulo: 'Eladio Rojas Harasic · Paid Media & Growth Specialist',
    metaDescripcion:
      'Casos reales de Meta Ads y Google Ads en ecommerce y generación de leads: franquicias, clínicas, moda y retail en Chile.',
    nav: { casos: 'Casos', proceso: 'Cómo trabajo', prisma: 'Método PRISMA', contacto: 'Contacto' },
    heroEtiqueta: 'Meta Ads · Google Ads · Email marketing',
    heroTitulo: 'Convierto inversión en pauta en ventas y leads que cierran.',
    heroBajada:
      'Trabajo el funnel completo, desde el anuncio hasta la venta, para ecommerce y empresas que generan leads en Chile. Abajo están los resultados, con nombre y apellido.',
    verCasos: 'Ver casos',
    contactar: 'Contactar',
    cifras: [
      { valor: '~6', etiqueta: 'franquicias vendidas con formularios de Meta' },
      { valor: '50x', etiqueta: 'ROAS en moda con anuncios centrados en las prendas' },
      { valor: '2% → 7%', etiqueta: 'tasa de cierre de una clínica, de cita a cirugía pagada' },
      { valor: '14', etiqueta: 'marcas de ecommerce y leads' },
    ],
    marcasTitulo: 'Marcas con las que he trabajado',
    ecommerce: 'Ecommerce',
    leads: 'Generación de leads',
    casosTitulo: 'Casos destacados',
    casosBajada: 'Cada caso cuenta el problema, lo que hice y lo que pasó con el negocio.',
    verCaso: 'Ver caso',
    procesoTitulo: 'Cómo trabajo',
    proceso: [
      { titulo: 'Diagnóstico', texto: 'Reviso cuentas, tracking y el negocio antes de tocar una campaña. Qué vende, a quién y con qué margen.' },
      { titulo: 'Estrategia', texto: 'Estructura de campañas, audiencias y ángulos creativos alineados a un objetivo de negocio, no a una métrica suelta.' },
      { titulo: 'Ejecución', texto: 'Campañas en Meta y Google, catálogos, formularios y automatizaciones para que ningún lead se enfríe.' },
      { titulo: 'Funnel completo', texto: 'Mido hasta la venta: calidad del lead, tasa de cierre, recompra. Ahí es donde se gana o se pierde la plata.' },
    ],
    herramientasTitulo: 'Herramientas',
    prismaEtiqueta: 'Herramienta propia',
    prismaTitulo: 'Método PRISMA',
    prismaTexto:
      'Un diagnóstico de marca que creé para ecommerce y empresas de leads. Evalúa seis pilares — Público, Rentabilidad, Identidad, Salud de marca, Mercado y Adquisición — y ubica a la marca en una matriz de fuerza de marca vs. eficiencia comercial. A partir de eso propone una estrategia con plan a 30, 60 y 90 días.',
    prismaPilares: ['Público', 'Rentabilidad', 'Identidad', 'Salud de marca', 'Mercado', 'Adquisición'],
    prismaCuadrantes: ['Marca líder', 'Marca dormida', 'Dependiente de la pauta', 'En construcción'],
    contactoTitulo: '¿Conversamos?',
    contactoBajada: 'Si buscas a alguien para tu equipo o para hacer crecer tu marca, escríbeme.',
    mensajeWhatsapp: 'Hola Eladio, vi tu portafolio y me gustaría conversar.',
    notaCifras: 'Cifras aproximadas, reconstruidas a partir de los reportes de cada cuenta.',
    volver: '← Volver a los casos',
    ficha: { rubro: 'Rubro', periodo: 'Periodo', plataformas: 'Plataformas', inversion: 'Inversión mensual' },
    secciones: { contexto: 'Contexto', problema: 'El problema', estrategia: 'Qué hice', resultados: 'Resultados', aprendizaje: 'Aprendizaje' },
    otroIdioma: 'English',
  },
  en: {
    metaTitulo: 'Eladio Rojas Harasic · Paid Media & Growth Specialist',
    metaDescripcion:
      'Real Meta Ads and Google Ads case studies in ecommerce and lead generation: franchising, clinics, fashion and retail in Chile.',
    nav: { casos: 'Case studies', proceso: 'How I work', prisma: 'PRISMA Method', contacto: 'Contact' },
    heroEtiqueta: 'Meta Ads · Google Ads · Email marketing',
    heroTitulo: 'I turn ad spend into sales and leads that close.',
    heroBajada:
      'I work the whole funnel, from the ad to the sale, for ecommerce brands and lead-driven businesses in Chile. The results are below, with real brand names.',
    verCasos: 'See case studies',
    contactar: 'Get in touch',
    cifras: [
      { valor: '~6', etiqueta: 'franchises sold through Meta lead forms' },
      { valor: '50x', etiqueta: 'ROAS in fashion with garment-focused ads' },
      { valor: '2% → 7%', etiqueta: 'clinic close rate, from booking to paid surgery' },
      { valor: '14', etiqueta: 'ecommerce and lead-gen brands' },
    ],
    marcasTitulo: "Brands I've worked with",
    ecommerce: 'Ecommerce',
    leads: 'Lead generation',
    casosTitulo: 'Featured case studies',
    casosBajada: 'Each case covers the problem, what I did and what happened to the business.',
    verCaso: 'Read case',
    procesoTitulo: 'How I work',
    proceso: [
      { titulo: 'Diagnosis', texto: 'I review accounts, tracking and the business before touching a campaign: what it sells, to whom and at what margin.' },
      { titulo: 'Strategy', texto: 'Campaign structure, audiences and creative angles tied to a business goal, not to a single metric.' },
      { titulo: 'Execution', texto: 'Meta and Google campaigns, catalogs, lead forms and automations so no lead goes cold.' },
      { titulo: 'Full funnel', texto: "I measure all the way to the sale: lead quality, close rate, repeat purchase. That's where money is made or lost." },
    ],
    herramientasTitulo: 'Tools',
    prismaEtiqueta: 'My own tool',
    prismaTitulo: 'PRISMA Method',
    prismaTexto:
      'A brand diagnosis I built for ecommerce and lead-gen businesses. It scores six pillars — Audience, Profitability, Identity, Brand health, Market and Acquisition — and places the brand on a brand strength vs. commercial efficiency matrix. From there it proposes a strategy with a 30/60/90-day plan.',
    prismaPilares: ['Audience', 'Profitability', 'Identity', 'Brand health', 'Market', 'Acquisition'],
    prismaCuadrantes: ['Leading brand', 'Dormant brand', 'Ad-dependent', 'Under construction'],
    contactoTitulo: "Let's talk",
    contactoBajada: "Hiring for your team or looking to grow your brand? Drop me a line.",
    mensajeWhatsapp: "Hi Eladio, I saw your portfolio and I'd like to talk.",
    notaCifras: 'Approximate figures, rebuilt from each account’s reports. Amounts in Chilean pesos (CLP).',
    volver: '← Back to case studies',
    ficha: { rubro: 'Industry', periodo: 'Period', plataformas: 'Platforms', inversion: 'Monthly spend' },
    secciones: { contexto: 'Context', problema: 'The problem', estrategia: 'What I did', resultados: 'Results', aprendizaje: 'Takeaway' },
    otroIdioma: 'Español',
  },
} as const;

export const marcas = {
  ecommerce: ['Underfive', 'C. del Pilar', 'SkyStore', 'Herramientas Express', 'Construplaza', 'BeCookies', 'Music Hall', 'Lamy'],
  leads: ['Clínica Dr. Carrasco', 'AndesMaq', 'Club Gordos', 'GRDS', 'Fast no Junk', 'Parque Cousiño Macul'],
};

export const herramientas = ['Meta Ads', 'Google Ads', 'Meta CAPI', 'Klaviyo', 'Zapier', 'Claude AI'];
