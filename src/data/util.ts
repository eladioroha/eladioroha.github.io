// Escapa el texto y resalta los pendientes [entre corchetes] para que se vean al revisar.
// En el sitio publicado (build) los pendientes no se muestran: se quitan del texto.
export function marcar(texto: string): string {
  const seguro = texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  if (!import.meta.env.DEV) return seguro.replace(/\[[^\]]+\]\.?\s*/g, '').trim();
  return seguro.replace(/\[([^\]]+)\]/g, '<mark class="pendiente">[$1]</mark>');
}

// Un texto que es solo un pendiente: en el sitio publicado se oculta completo.
export function visible(texto: string): boolean {
  return import.meta.env.DEV || !/^\s*\[[^\]]*\]\s*$/.test(texto);
}

// Ruta con el base de Astro (útil si el sitio termina en un subdirectorio de GitHub Pages).
export function ruta(camino: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${camino}`;
}

// Cifras: en inglés se invierten los separadores (1.500 → 1,500 · 16,4x → 16.4x).
export function cifra(valor: string | Record<'es' | 'en', string>, idioma: 'es' | 'en'): string {
  if (typeof valor !== 'string') return valor[idioma];
  if (idioma === 'es') return valor;
  return valor.replace(/(\d)([.,])(?=\d)/g, (_, d, sep) => d + (sep === '.' ? ',' : '.'));
}
