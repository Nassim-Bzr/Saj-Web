import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function FormationPage({ params }: PageProps) {
  // Ici vous pourrez ajouter la logique pour récupérer les détails de la formation
  // en fonction du slug reçu dans les params

  // Si la formation n'existe pas, on renvoie vers la page 404
  if (!params.slug) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">
        Détails de la formation: {params.slug}
      </h1>
      {/* Ajoutez ici le contenu de votre page de détails */}
    </div>
  );
} 