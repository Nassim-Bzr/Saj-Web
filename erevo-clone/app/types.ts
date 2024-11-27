export interface Formation {
  title: string;
  slug: string;
  icon: any; // Vous pouvez spécifier un type plus précis pour les icônes
  color: string;
  description: string;
  image?: string;
  formations: FormationDetail[];
}

export interface FormationDetail {
  title: string;
  slug: string;
  image: string;
  duration: string;
  price: string;
  funding: string;
  indemnisation: string;
  tags: string[];
  shortDescription: string;
  description?: string;
  nextSessions: string[];
} 