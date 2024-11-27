"use client";
import FormationClient from './FormationClient';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { formationsData } from '@/app/lib/data/formations';
import { notFound } from 'next/navigation';
import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

// Définir le type FormationData pour correspondre à la structure attendue
interface FormationData {
  title: string;
  slug: string;
  icon: IconType;
  color: string;
  description: string;
  image: StaticImageData;
  formations: {
    title: string;
    slug: string;
    image: string;
    duration: string;
    price: string;
    funding: string;
    indemnisation: string;
    tags: string[];
    shortDescription: string;
    nextSessions: string[];
  }[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const searchParamsResolved = searchParams ? await searchParams : undefined;
  
  const formation = formationsData.find(category => category.slug === slug);

  if (!formation) return notFound();

  // Assurez-vous que formation a une image valide
  if (!formation.image) {
    return notFound();
  }

  return (
    <div>
      <Navbar />
      <FormationClient formation={formation as FormationData} />
      <Footer />
    </div>
  );
} 