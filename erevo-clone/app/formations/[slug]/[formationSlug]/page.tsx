"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import { formationsData } from '@/app/lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import FormationSteps from '@/app/components/FormationSteps';

type PageProps = {
  params: {
    slug: string;
    formationSlug: string;
  };
}

export default function FormationDetailsPage({ params }: PageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formation = formationsData.find(category => category.slug === params.slug);
  const specificFormation = formation?.formations.find(
    f => f.slug.toLowerCase().replace(/ /g, '-') === params.formationSlug
  );

  if (!formation || !specificFormation) {
    notFound();
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src={specificFormation.image}
            alt={specificFormation.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {specificFormation.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {specificFormation.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-[#C97435] text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Description de la formation</h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {specificFormation.shortDescription}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Informations clés */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Informations clés</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 mr-3">⏱️</span>
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-gray-600">{specificFormation.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 mr-3">💰</span>
                    <div>
                      <p className="font-medium">Tarif</p>
                      <p className="text-gray-600">{specificFormation.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="w-8 h-8 mr-3">✅</span>
                    <p>{specificFormation.funding}</p>
                  </div>
                  <div className="flex items-center text-[#C97435]">
                    <span className="w-8 h-8 mr-3">🎯</span>
                    <p>{specificFormation.indemnisation}</p>
                  </div>
                </div>
              </div>

              {/* Prochaines sessions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Prochaines sessions</h2>
                <div className="flex flex-wrap gap-4">
                  {specificFormation.nextSessions.map((session, index) => (
                    <div key={index} className="px-6 py-3 bg-[#FDF5EB] text-[#2A394A] rounded-lg font-medium">
                      {session}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Étapes d'inscription */}
          <FormationSteps />

          {/* Bouton d'inscription */}
          <div className="text-center mt-12">
            <button className="bg-[#C97435] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-[#A65E2A] transition-colors duration-200">
              Je m'inscris à cette formation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 