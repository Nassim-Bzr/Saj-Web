"use client";

import { formationsData } from '@/app/lib/data/formations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
    formationSlug: string;
  };
}

export default function FormationDetailPage({ params }: PageProps) {
  // Trouver la catégorie correspondante
  const category = formationsData.find(
    (cat) => cat.slug.toLowerCase() === params.slug
  );

  if (!category) {
    return notFound();
  }

  // Trouver la formation spécifique
  const formation = category.formations.find(
    (f) => f.slug === params.formationSlug
  );

  if (!formation) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-[400px]">
              {formation.image && (
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#2A394A] mb-6">
                {formation.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {formation.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#FDF5EB] text-[#C97435] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[#2A394A] mb-4">
                    Description
                  </h2>
                  <p className="text-gray-600">{formation.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FDF5EB] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#2A394A] mb-4">
                      Informations pratiques
                    </h3>
                    <div className="space-y-3">
                      <p className="flex items-center">
                        <span className="w-6 h-6 mr-3">⏱️</span>
                        <span className="font-medium">Durée:</span>
                        <span className="ml-2">{formation.duration}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="w-6 h-6 mr-3">💰</span>
                        <span className="font-medium">Prix:</span>
                        <span className="ml-2">{formation.price}</span>
                      </p>
                      <p className="flex items-center text-green-600">
                        <span className="w-6 h-6 mr-3">✅</span>
                        <span>{formation.funding}</span>
                      </p>
                      <p className="flex items-center text-[#C97435]">
                        <span className="w-6 h-6 mr-3">🎯</span>
                        <span>{formation.indemnisation}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FDF5EB] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#2A394A] mb-4">
                      Prochaines sessions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {formation.nextSessions.map((session, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white text-gray-700 rounded-full"
                        >
                          {session}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href={`/formations/${params.slug}/${params.formationSlug}/inscription`}
                className="w-full md:w-auto px-8 py-4 bg-[#C97435] text-white rounded-lg hover:bg-[#A65E2A] transition-colors duration-200"
              >
                S'inscrire à cette formation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 