// Casos destacados. Cada texto va en español (es) e inglés (en).
// Montos en pesos chilenos. Lo que va entre [corchetes] es un pendiente y se resalta en la página.

import type { Texto } from './perfil';

export interface Barra {
  etiqueta: Texto;
  valor: number; // define el largo de la barra
  texto: string | Texto; // lo que se lee al lado de la barra
  destacada?: boolean; // el "después": azul fuerte; el resto queda tenue
}

export interface Grafico {
  titulo: Texto;
  nota?: Texto;
  barras: Barra[];
}

export interface Caso {
  slug: string;
  marca: string;
  tipo: 'ecommerce' | 'leads';
  enCurso?: boolean;
  rubro: Texto;
  periodo: Texto;
  plataformas: string;
  inversion: Texto;
  titular: Texto;
  resumen: Texto;
  metrica: { valor: string | Texto; etiqueta: Texto };
  metricas: { valor: string | Texto; etiqueta: Texto }[];
  contexto: Texto;
  problema: Texto;
  estrategia: Texto[];
  resultados: Texto[];
  aprendizaje: Texto;
  graficos: Grafico[];
}

export const casos: Caso[] = [
  {
    slug: 'clinica-dr-carrasco',
    marca: 'Clínica Dr. Carrasco',
    tipo: 'leads',
    rubro: { es: 'Clínica de cirugía estética', en: 'Aesthetic surgery clinic' },
    periodo: { es: '2024 – 2026', en: '2024 – 2026' },
    plataformas: 'Meta Ads · Google Ads · Meta CAPI',
    inversion: { es: '~$1,8 millones', en: '~CLP 1.8M' },
    titular: {
      es: 'De 2% a 7% de cierre: agenda llena con leads a un tercio del costo',
      en: 'From 2% to 7% close rate: a full calendar with leads at a third of the cost',
    },
    resumen: {
      es: 'Leads más baratos y, sobre todo, mejores: más pacientes llegaron hasta la cirugía.',
      en: 'Cheaper leads and, above all, better ones: more patients made it all the way to surgery.',
    },
    metrica: { valor: '2% → 7%', etiqueta: { es: 'tasa de cierre', en: 'close rate' } },
    metricas: [
      { valor: '2% → 7%', etiqueta: { es: 'tasa de cierre (cita → cirugía pagada)', en: 'close rate (booking → paid surgery)' } },
      { valor: '$3.000 → $1.000', etiqueta: { es: 'costo por lead, aprox.', en: 'cost per lead, approx. (CLP)' } },
      { valor: '~1.500', etiqueta: { es: 'conversiones al mes (prom. may–oct 2026)', en: 'conversions per month (avg. May–Oct 2026)' } },
    ],
    contexto: {
      es: 'Clínica de cirugía estética que capta pacientes con Meta Ads y Google Ads, y agenda las evaluaciones por sus canales de atención.',
      en: 'An aesthetic surgery clinic that acquires patients through Meta Ads and Google Ads and books consultations through its own contact channels.',
    },
    problema: {
      es: 'Llegaban pocos leads y de mala calidad. Los anuncios no convertían y el sistema de agendamiento perdía pacientes en el camino: solo 2 de cada 100 personas que agendaban terminaban pagando su cirugía.',
      en: 'Leads were few and low quality. Ads were not converting and the booking process was leaking patients: only 2 out of every 100 people who booked ended up paying for surgery.',
    },
    estrategia: [
      {
        es: 'Reordené los canales de adquisición en Meta y Google para priorizar la calidad del lead, no solo el volumen.',
        en: 'Restructured acquisition channels on Meta and Google to prioritize lead quality, not just volume.',
      },
      {
        es: 'Implementé la API de Conversiones de Meta (CAPI) para enviarle al algoritmo señales de pacientes reales y que optimizara hacia ellos.',
        en: 'Implemented the Meta Conversions API (CAPI) to feed the algorithm signals from real patients so it would optimize toward them.',
      },
      {
        es: 'Trabajé el funnel completo con la clínica: el primer contacto, el seguimiento y el agendamiento.',
        en: 'Worked the full funnel with the clinic team: first contact, follow-up and booking.',
      },
    ],
    resultados: [
      { es: 'El costo por lead bajó de ~$3.000 a ~$1.000.', en: 'Cost per lead dropped from ~CLP 3,000 to ~CLP 1,000.' },
      { es: 'La tasa de cierre, de la cita a la cirugía pagada, subió de 2% a 7%: 3,5 veces más pacientes por cada cita.', en: 'Close rate, from booking to paid surgery, went from 2% to 7%: 3.5 times more patients per booking.' },
      { es: 'Agendas semanales llenas, con un promedio de ~1.500 conversiones al mes entre mayo y octubre de 2026.', en: 'Weekly calendars filled up, averaging ~1,500 conversions a month between May and October 2026.' },
    ],
    aprendizaje: {
      es: 'El costo por lead importa, pero lo que paga las cuentas es la tasa de cierre. Mejorar el primer contacto y las señales que recibe el algoritmo cambió el negocio más que cualquier ajuste de puja.',
      en: 'Cost per lead matters, but close rate is what pays the bills. Improving first contact and the signals the algorithm receives changed the business more than any bid tweak.',
    },
    graficos: [
      {
        titulo: { es: 'Tasa de cierre: cita → cirugía pagada', en: 'Close rate: booking → paid surgery' },
        barras: [
          { etiqueta: { es: 'Antes', en: 'Before' }, valor: 2, texto: '2%' },
          { etiqueta: { es: 'Después', en: 'After' }, valor: 7, texto: '7%', destacada: true },
        ],
      },
      {
        titulo: { es: 'Costo por lead (menos es mejor)', en: 'Cost per lead (lower is better)' },
        barras: [
          { etiqueta: { es: 'Antes', en: 'Before' }, valor: 3000, texto: '~$3.000' },
          { etiqueta: { es: 'Después', en: 'After' }, valor: 1000, texto: '~$1.000', destacada: true },
        ],
      },
    ],
  },
  {
    slug: 'franquicias-gastronomicas',
    marca: 'Club Gordos · GRDS · Fast no Junk',
    tipo: 'leads',
    rubro: { es: 'Franquicias gastronómicas', en: 'Restaurant franchising' },
    periodo: { es: '[año] · 4 meses', en: '[year] · 4 months' },
    plataformas: 'Meta Ads · Zapier',
    inversion: { es: '[inversión mensual]', en: '[monthly spend]' },
    titular: {
      es: '~150 reuniones de venta y ~6 franquicias vendidas con formularios de Meta',
      en: '~150 sales meetings and ~6 franchises sold through Meta lead forms',
    },
    resumen: {
      es: 'Tres marcas, inversionistas con $75 a $150 millones y leads a menos de $2.000.',
      en: 'Three brands, investors with CLP 75–150M to deploy, and leads under CLP 2,000.',
    },
    metrica: { valor: '~6', etiqueta: { es: 'franquicias vendidas', en: 'franchises sold' } },
    metricas: [
      { valor: '$1.400–1.900', etiqueta: { es: 'costo por lead según la marca', en: 'cost per lead by brand (CLP)' } },
      { valor: { es: '3+ / semana', en: '3+ / week' }, etiqueta: { es: 'reuniones por marca durante 4 meses', en: 'meetings per brand for 4 months' } },
      { valor: '~6', etiqueta: { es: 'franquicias cerradas (2 por marca), según los clientes', en: 'franchises closed (2 per brand), per the clients' } },
    ],
    contexto: {
      es: 'Tres marcas gastronómicas chilenas querían crecer vendiendo franquicias: Club Gordos, un bar de estética street food (inversión mínima de $150 millones); GRDS, hamburguesería smash, y Fast no Junk, comida rápida saludable (ambas con inversión mínima cercana a $75 millones).',
      en: 'Three Chilean restaurant brands wanted to grow by selling franchises: Club Gordos, a street-food style bar (minimum investment CLP 150M); GRDS, a smash burger joint; and Fast no Junk, healthy fast food (both around CLP 75M minimum).',
    },
    problema: {
      es: 'El público objetivo es muy chico: personas con decenas de millones disponibles para invertir. En redes sociales, la mayoría de quienes muestran interés son curiosos sin capital, y el equipo comercial necesitaba reuniones con inversionistas reales, no volumen.',
      en: 'The target audience is tiny: people with tens of millions of pesos ready to invest. On social media most of the interest comes from curious people with no capital, and the sales team needed meetings with real investors, not volume.',
    },
    estrategia: [
      {
        es: 'Formularios instantáneos de Meta con preguntas filtro: experiencia previa en franquicias y monto que la persona quería invertir.',
        en: 'Meta instant forms with qualifying questions: previous franchise experience and how much the person wanted to invest.',
      },
      {
        es: 'Ángulo creativo centrado en sumarse a una franquicia probada y con altas tasas de éxito, no en "emprender".',
        en: 'Creative angle focused on joining a proven franchise with a high success rate, not on "starting a business".',
      },
      {
        es: 'Automatización con Zapier: cada lead llegaba al instante a una planilla para que el equipo comercial lo contactara rápido.',
        en: 'Zapier automation: every lead landed instantly in a spreadsheet so the sales team could reach out fast.',
      },
      {
        es: 'Prueba de expansión internacional con una campaña de GRDS en Miami.',
        en: 'An international expansion test with a GRDS campaign in Miami.',
      },
    ],
    resultados: [
      { es: 'Costo por lead de ~$1.400 (GRDS), ~$1.700 (Fast no Junk) y ~$1.900 (Club Gordos).', en: 'Cost per lead of ~CLP 1,400 (GRDS), ~1,700 (Fast no Junk) and ~1,900 (Club Gordos).' },
      { es: 'Al menos 3 reuniones de venta por semana por marca durante 4 meses: unas 150 en total.', en: 'At least 3 sales meetings per week per brand for 4 months: around 150 in total.' },
      { es: 'Según lo informado por los clientes, cada marca cerró 2 franquicias: unas 6 en total, con tickets de $75 a $150 millones.', en: 'According to the clients, each brand closed 2 franchises: about 6 in total, with tickets from CLP 75M to 150M.' },
      { es: 'Miami no funcionó: llegaron algunos leads, pero ningún cierre.', en: 'Miami did not work: a few leads came in, but no deals closed.' },
    ],
    aprendizaje: {
      es: 'En leads de ticket alto, filtrar en el formulario vale más que bajar el costo por lead: un lead caro que llega a reunión rinde más que diez baratos. Y Miami dejó una lección: en un mercado donde la marca no es conocida, el formulario por sí solo no alcanza.',
      en: 'For high-ticket leads, qualifying in the form is worth more than a lower cost per lead: one pricier lead that books a meeting beats ten cheap ones. Miami taught another lesson: in a market where the brand is unknown, a lead form alone is not enough.',
    },
    graficos: [
      {
        titulo: { es: 'Costo por lead por marca', en: 'Cost per lead by brand (CLP)' },
        barras: [
          { etiqueta: { es: 'Club Gordos', en: 'Club Gordos' }, valor: 1900, texto: '~$1.900' },
          { etiqueta: { es: 'Fast no Junk', en: 'Fast no Junk' }, valor: 1700, texto: '~$1.700' },
          { etiqueta: { es: 'GRDS', en: 'GRDS' }, valor: 1400, texto: '~$1.400', destacada: true },
        ],
      },
    ],
  },
  {
    slug: 'skystore',
    marca: 'SkyStore',
    tipo: 'ecommerce',
    rubro: { es: 'Vaporizadores', en: 'Vaporizers' },
    periodo: { es: '2025', en: '2025' },
    plataformas: 'Meta Ads',
    inversion: { es: '~$500 mil', en: '~CLP 500K' },
    titular: {
      es: 'Lanzar una marca de vaporizadores con las restricciones de Meta: ROAS ~10x en 3 meses',
      en: 'Launching a vaporizer brand under Meta’s ad restrictions: ~10x ROAS in 3 months',
    },
    resumen: {
      es: 'Una marca que no existía, en una categoría restringida, rentable en tres meses.',
      en: 'A brand that did not exist, in a restricted category, profitable within three months.',
    },
    metrica: { valor: '~10x', etiqueta: { es: 'ROAS', en: 'ROAS' } },
    metricas: [
      { valor: '~10x', etiqueta: { es: 'ROAS', en: 'ROAS' } },
      { valor: '~$1.200', etiqueta: { es: 'costo por compra', en: 'cost per purchase (CLP)' } },
      { valor: { es: '3 meses', en: '3 months' }, etiqueta: { es: 'desde el lanzamiento', en: 'from launch' } },
    ],
    contexto: {
      es: 'SkyStore partió desde cero: la marca no existía. Primero trabajamos el lanzamiento en orgánico y luego encendimos la pauta en Meta.',
      en: 'SkyStore started from scratch: the brand did not exist. We launched it organically first and then turned on Meta ads.',
    },
    problema: {
      es: 'Meta restringe la publicidad de productos de vapeo: anunciar el producto de forma directa implica rechazos y riesgo para la cuenta. Además, una marca nueva no tiene historial ni reconocimiento.',
      en: 'Meta restricts advertising for vaping products: promoting the product directly leads to rejected ads and account risk. On top of that, a new brand has no history and no awareness.',
    },
    estrategia: [
      {
        es: 'Lanzamiento orgánico para construir audiencia y contenido antes de invertir en pauta.',
        en: 'An organic launch to build an audience and content before spending on ads.',
      },
      {
        es: 'Anuncios centrados en la experiencia y el contexto de uso, no en el producto: se reconoce qué es, pero no es el protagonista.',
        en: 'Ads built around the experience and context of use rather than the product: you can tell what it is, but it is not the hero of the ad.',
      },
    ],
    resultados: [
      { es: 'Costo por compra de ~$1.200 con un ticket promedio de ~$12.000: ROAS ~10x.', en: 'Cost per purchase of ~CLP 1,200 with an average order of ~CLP 12,000: ~10x ROAS.' },
      { es: 'Rentable en 3 meses desde el lanzamiento.', en: 'Profitable within 3 months of launch.' },
    ],
    aprendizaje: {
      es: 'Cuando no puedes mostrar el producto, vende el momento. Las restricciones obligan a pensar fuera de la caja, y muchas veces el resultado es una comunicación más memorable.',
      en: "When you can't show the product, sell the moment. Restrictions force out-of-the-box thinking, and the result is often more memorable communication.",
    },
    graficos: [
      {
        titulo: { es: 'Costo por compra vs. ticket promedio', en: 'Cost per purchase vs. average order value (CLP)' },
        barras: [
          { etiqueta: { es: 'Costo por compra', en: 'Cost per purchase' }, valor: 1200, texto: '~$1.200' },
          { etiqueta: { es: 'Ticket promedio', en: 'Average order' }, valor: 12000, texto: '~$12.000', destacada: true },
        ],
      },
    ],
  },
  {
    slug: 'herramientas-express',
    marca: 'Herramientas Express',
    tipo: 'ecommerce',
    rubro: { es: 'Ferretería online', en: 'Online hardware store' },
    periodo: { es: '2023', en: '2023' },
    plataformas: 'Meta Ads · Google Ads',
    inversion: { es: '~$2 millones', en: '~CLP 2M' },
    titular: {
      es: 'De un Cyber sin ventas a $17 millones en el siguiente',
      en: 'From a Cyber sale with zero revenue to CLP 17M the next one',
    },
    resumen: {
      es: 'Catálogos optimizados y campañas apuntadas al cliente ideal en un rubro sin glamour.',
      en: 'Optimized catalogs and campaigns aimed at the ideal customer in an unglamorous category.',
    },
    metrica: { valor: '$0 → $17M', etiqueta: { es: 'ventas en Cyber', en: 'Cyber sales (CLP)' } },
    metricas: [
      { valor: '~$17M', etiqueta: { es: 'ventas en el Cyber de mayo 2023', en: 'sales in the May 2023 Cyber event (CLP)' } },
      { valor: '~8,5x', etiqueta: { es: 'ROAS en el Cyber', en: 'ROAS during Cyber' } },
      { valor: '$8–10M', etiqueta: { es: 'ventas mensuales estables después (ROAS 4–5x)', en: 'steady monthly sales afterwards (4–5x ROAS)' } },
    ],
    contexto: {
      es: 'Herramientas Express es una ferretería online que vende con Meta Ads y Google Ads.',
      en: 'Herramientas Express is an online hardware store selling through Meta Ads and Google Ads.',
    },
    problema: {
      es: 'Las ventas eran bajas: el Cyber de 2022 pasó prácticamente sin ventas. Los productos se veían iguales a los de la competencia y los anuncios no le hablaban a nadie en particular.',
      en: 'Sales were low: the 2022 Cyber event went by with practically no sales. Products looked the same as the competition and the ads were not speaking to anyone in particular.',
    },
    estrategia: [
      {
        es: 'Optimicé el catálogo de productos según rubro, precio y uso, para que cada producto se mostrara a quien lo necesita.',
        en: 'Optimized the product catalog by category, price and use case, so each product reached the people who need it.',
      },
      {
        es: 'Ajusté los anuncios y las creatividades para apuntar al cliente ideal.',
        en: 'Reworked ads and creatives to target the ideal customer.',
      },
      {
        es: 'Reestructuré campañas y pujas en Meta y Google.',
        en: 'Restructured campaigns and bidding on Meta and Google.',
      },
    ],
    resultados: [
      { es: 'Cyber de mayo 2023: ~$17 millones en ventas, con un ROAS de ~8,5x.', en: 'May 2023 Cyber event: ~CLP 17M in sales at ~8.5x ROAS.' },
      { es: 'Después del Cyber, la venta se estabilizó en $8 a $10 millones mensuales, con ROAS de 4 a 5x.', en: 'After Cyber, sales stabilized at CLP 8–10M a month, at 4–5x ROAS.' },
    ],
    aprendizaje: {
      es: 'En retail con catálogos grandes, el feed es la estrategia. Ordenar el catálogo según cómo compra la gente rindió más que cualquier anuncio aislado.',
      en: 'In retail with large catalogs, the feed is the strategy. Organizing the catalog around how people actually shop paid off more than any single ad.',
    },
    graficos: [
      {
        titulo: { es: 'Ventas (millones de pesos)', en: 'Sales (millions of CLP)' },
        barras: [
          { etiqueta: { es: 'Cyber 2022', en: 'Cyber 2022' }, valor: 0, texto: '~$0' },
          { etiqueta: { es: 'Cyber 2023', en: 'Cyber 2023' }, valor: 17, texto: '~$17M', destacada: true },
          { etiqueta: { es: 'Mes promedio después', en: 'Average month after' }, valor: 9, texto: '$8–10M' },
        ],
      },
    ],
  },
  {
    slug: 'underfive',
    marca: 'Underfive',
    tipo: 'ecommerce',
    enCurso: true,
    rubro: { es: 'Snacks saludables', en: 'Healthy snacks' },
    periodo: { es: 'Sept. 2025 – hoy', en: 'Sept. 2025 – present' },
    plataformas: 'Meta Ads · Klaviyo',
    inversion: { es: '[inversión mensual]', en: '[monthly spend]' },
    titular: {
      es: 'Remarketing a 16x y email marketing para recuperar clientes',
      en: '16x remarketing and email marketing to win customers back',
    },
    resumen: {
      es: 'Pauta y email trabajando juntos para que el que compra una vez vuelva a comprar.',
      en: 'Ads and email working together so one-time buyers come back.',
    },
    metrica: { valor: '16,4x', etiqueta: { es: 'ROAS en remarketing', en: 'remarketing ROAS' } },
    metricas: [
      { valor: '16,4x', etiqueta: { es: 'ROAS del remarketing con catálogo dinámico', en: 'dynamic catalog remarketing ROAS' } },
      { valor: '~$600', etiqueta: { es: 'costo por lead en captación', en: 'cost per lead (CLP)' } },
      { valor: '8', etiqueta: { es: 'segmentos de clientes para email', en: 'customer segments for email' } },
    ],
    contexto: {
      es: 'Underfive es una marca chilena de snacks saludables con un máximo de 5 ingredientes, presente en supermercados y con tienda online propia.',
      en: 'Underfive is a Chilean healthy snack brand made with five ingredients or fewer, sold in supermarkets and through its own online store.',
    },
    problema: {
      es: '[Cómo estaba la cuenta cuando llegaste en septiembre de 2025]. La recompra era la gran oportunidad: la 4ª compra duplica el valor de vida del cliente.',
      en: '[What the account looked like when you joined in September 2025]. Repeat purchase was the big opportunity: the 4th order doubles customer lifetime value.',
    },
    estrategia: [
      {
        es: 'Campaña de remarketing con catálogo dinámico, que muestra a cada persona los productos que vio.',
        en: 'Dynamic catalog remarketing that shows each person the products they viewed.',
      },
      {
        es: 'Campaña de captación de leads para hacer crecer la base de email a bajo costo.',
        en: 'A lead generation campaign to grow the email list at a low cost.',
      },
      {
        es: 'Plan de email en Klaviyo con 8 segmentos de clientes según su frecuencia y su última compra, y flows para llevar a cada cliente a su siguiente compra.',
        en: 'A Klaviyo email plan with 8 customer segments based on purchase frequency and recency, plus flows that move each customer toward their next order.',
      },
    ],
    resultados: [
      { es: 'Remarketing con ROAS de 16,4x.', en: 'Remarketing at 16.4x ROAS.' },
      { es: 'Leads a ~$600 cada uno.', en: 'Leads at ~CLP 600 each.' },
      { es: '[Resultados del email marketing: ventas atribuidas, recompra, etc.]', en: '[Email marketing results: attributed revenue, repeat rate, etc.]' },
    ],
    aprendizaje: {
      es: '[Tu aprendizaje en Underfive]',
      en: '[Your takeaway from Underfive]',
    },
    graficos: [],
  },
  {
    slug: 'c-del-pilar',
    marca: 'C. del Pilar',
    tipo: 'ecommerce',
    enCurso: true,
    rubro: { es: 'Moda', en: 'Fashion' },
    periodo: { es: 'Jul. 2026 – hoy', en: 'Jul. 2026 – present' },
    plataformas: 'Meta Ads',
    inversion: { es: '~$400 mil', en: '~CLP 400K' },
    titular: {
      es: 'Una cuenta muy eficiente, pero chica: el diagnóstico para escalar',
      en: 'A highly efficient but small account: the diagnosis for scaling',
    },
    resumen: {
      es: 'ROAS de 22,5x de partida y todo el espacio para crecer.',
      en: 'A 22.5x starting ROAS and plenty of room to grow.',
    },
    metrica: { valor: '22,5x', etiqueta: { es: 'ROAS de partida', en: 'starting ROAS' } },
    metricas: [
      { valor: '22,5x', etiqueta: { es: 'ROAS al llegar (julio 2026)', en: 'ROAS when I joined (July 2026)' } },
      { valor: '~$3.200', etiqueta: { es: 'costo por compra', en: 'cost per purchase (CLP)' } },
      { valor: '3,5%', etiqueta: { es: 'CTR', en: 'CTR' } },
    ],
    contexto: {
      es: 'C. del Pilar es una marca de moda que vende online con Meta Ads.',
      en: 'C. del Pilar is a fashion brand that sells online through Meta Ads.',
    },
    problema: {
      es: 'La cuenta era muy eficiente pero pequeña: invertía ~$400 mil al mes, todo en prospección en frío, con el remarketing pausado. Las mujeres de 35 a 44 años generaban la mitad de las compras, mientras los hombres se llevaban parte del presupuesto casi sin convertir.',
      en: 'The account was very efficient but small: about CLP 400K a month, all on cold prospecting, with remarketing paused. Women aged 35–44 drove half of all purchases, while men took part of the budget with almost no conversions.',
    },
    estrategia: [
      { es: '[Qué hiciste después del diagnóstico]', en: '[What you did after the diagnosis]' },
    ],
    resultados: [
      { es: '[Resultados desde julio 2026]', en: '[Results since July 2026]' },
    ],
    aprendizaje: {
      es: '[Tu aprendizaje en C. del Pilar]',
      en: '[Your takeaway from C. del Pilar]',
    },
    graficos: [],
  },
];
