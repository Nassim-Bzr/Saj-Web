export const formations = [
  { id: 'medecine-generale', slug: 'medecine-generale', title: 'Médecine Générale', description: 'Description de la médecine générale...', bannerImage: '/path/to/banner-image.jpg' },
  // Ajoutez d'autres formations ici
];

export function getFormationById(id) {
  return formations.find(formation => formation.id === id);
}

export function getFormationBySlug(slug) {
  return formations.find(formation => formation.slug === slug);
} 