"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import { formationsData } from '@/app/lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/footer';

type PageProps = {
  params: {
    slug: string;
  };
}

export default function FormationPage({ params }: PageProps) {
  const [mounted, setMounted] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formation = formationsData.find(category => category.slug === params.slug);

  if (!formation) {
    notFound();
  }

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Navbar />
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
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={specificFormation.image}
                  alt={specificFormation.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {specificFormation.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 bg-[#FDF5EB] text-[#C97435] text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#2A394A] mb-3">
                  {specificFormation.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {specificFormation.shortDescription}
                </p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">⏱️</span>
                    Durée: {specificFormation.duration}
                  </p>
                  <p className="flex items-center">
                    <span className="w-5 h-5 mr-2">💰</span>
                    Prix: {specificFormation.price}
                  </p>
                  <p className="text-green-600 flex items-center">
                    <span className="w-5 h-5 mr-2">✅</span>
                    {specificFormation.funding}
                  </p>
                  <p className="text-[#C97435] flex items-center">
                    <span className="w-5 h-5 mr-2">🎯</span>
                    {specificFormation.indemnisation}
                  </p>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">Prochaines sessions :</p>
                  <div className="flex flex-wrap gap-2">
                    {specificFormation.nextSessions.map((session, sIndex) => (
                      <span key={sIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {session}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/formations/${formation.slug}/${specificFormation.slug.toLowerCase().replace(/ /g, '-')}`}
                  className="mt-6 block w-full bg-[#C97435] text-white py-3 rounded-lg text-center hover:bg-[#A65E2A] transition-colors duration-200"
                >
                  En savoir pluss
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showInfoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {/* Réutilisez le même formulaire de demande d'informations ici */}
        </div>
      )}
      <Footer />
    </div>
  );
} 
