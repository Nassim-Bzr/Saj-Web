// types.ts ou un fichier similaire

import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Categorie {
  title: string;
  slug: string;
  icon: any;
  color: string;
  description: string;
  image?: string;
  formations: Formation[];
}

export interface Formation {
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
