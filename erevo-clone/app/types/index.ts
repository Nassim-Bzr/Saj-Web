// types.ts ou un fichier similaire

import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface FormationDetail {
  title: string;
  slug: string;
  image: string; // Ou StaticImageData si nécessaire
  duration: string;
  price: string;
  funding: string;
  indemnisation: string;
  tags: string[];
  shortDescription: string;
  nextSessions: string[];
}

export interface Formation {
  title: string;
  slug: string;
  icon: IconType;
  color: string;
  description: string;
  image?: StaticImageData; // Déclarez cette propriété comme optionnelle
  formations: FormationDetail[];
}
