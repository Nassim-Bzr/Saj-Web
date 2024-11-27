"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Formation } from '@/app/types';
import FormationCard from '@/app/components/FormationCard';

interface FormationClientProps {
  formation: Formation;
}

export default function FormationClient({ formation }: FormationClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-cover bg-center h-[20em] relative">
        {formation.image && (
          <Image 
            src={formation.image}
            alt={formation.title}
            fill
            className="object-inherit h-1/2"
          />
        )}
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{formation.title}</h1>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-[#2A394A] mb-4">À propos de la formation</h2>
        <p className="text-gray-700">{formation.description}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formation.formations.map((specificFormation, index) => (
          <FormationCard
            key={index}
            formation={specificFormation}
            categorySlug={formation.slug}
          />
        ))}
      </div>
    </div>
  );
} 