"use client";

import { notFound } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { formationsData } from '@/app/lib/data/formations';
import Image from 'next/image';
import FormationSteps from '@/app/components/FormationSteps';

export default function FormationDetailsPage({ 
  params 
}: { 
  params: { slug: string; formationSlug: string } 
}) {
  // Trouver la catégorie
  const category = formationsData.find(cat => cat.slug === params.slug);
  if (!category) {
    notFound();
  }

  // Trouver la formation spécifique
  const formation = category.formations.find(f => f.slug === params.formationSlug);
  if (!formation) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src={formation.image}
            alt={formation.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{formation.title}</h1>
              <div className="flex justify-center gap-4">
                {formation.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-[#C97435] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Informations principales */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Description de la formation</h2>
            <p className="text-gray-600 mb-8">{formation.shortDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-[#FDF5EB] rounded-lg">
                <p className="flex items-center text-[#2A394A]">
                  <span className="w-6 h-6 mr-2">⏱️</span>
                  <span className="font-bold">Durée:</span> {formation.duration}
                </p>
              </div>
              <div className="p-4 bg-[#FDF5EB] rounded-lg">
                <p className="flex items-center text-[#2A394A]">
                  <span className="w-6 h-6 mr-2">💰</span>
                  <span className="font-bold">Prix:</span> {formation.price}
                </p>
              </div>
              <div className="p-4 bg-[#FDF5EB] rounded-lg">
                <p className="flex items-center text-green-600">
                  <span className="w-6 h-6 mr-2">✅</span>
                  {formation.funding}
                </p>
              </div>
              <div className="p-4 bg-[#FDF5EB] rounded-lg">
                <p className="flex items-center text-[#C97435]">
                  <span className="w-6 h-6 mr-2">🎯</span>
                  {formation.indemnisation}
                </p>
              </div>
            </div>
          </div>

          {/* Prochaines sessions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Prochaines sessions</h2>
            <div className="flex flex-wrap gap-4">
              {formation.nextSessions.map((session, index) => (
                <div key={index} className="px-6 py-3 bg-[#FDF5EB] text-[#2A394A] rounded-lg font-medium">
                  {session}
                </div>
              ))}
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