import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface Formation {
  title: string;
  icon: ReactNode;
  color: string;
  slug: string;
  image: string | StaticImageData;
  description: string;
  formations: FormationDetail[];
}

export interface FormationDetail {
  title: string;
  slug: string;
  image: string | StaticImageData;
  duration: string;
  price: string;
  funding: string;
  indemnisation: string;
  tags: string[];
  shortDescription: string;
  nextSessions: string[];
} 