export interface Formation {
  title: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
}

export interface FormationDetail {
  id: string;
  title: string;
  specialty: string;
  imageUrl: string;
  duration: string;
  price: string;
  tags: string[];
  shortDescription: string;
} 