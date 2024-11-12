"use client";

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { formationsData } from '../lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';

export default function FormationsPage() {
  // Ajout des états pour les filtres
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDuration, setSelectedDuration] = React.useState('');
  const [selectedFunding, setSelectedFunding] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('');
  const [selectedFormat, setSelectedFormat] = React.useState('');
  const [selectedIndemnity, setSelectedIndemnity] = React.useState('');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Hero Section améliorée */}
        <div className="bg-[#2A394A] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Développez vos <span className="text-[#C97435]">compétences</span>
              </h1>
              <p className="text-xl mb-8">
                Des formations médicales innovantes, 100% prises en charge et indemnisées
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#C97435]">100%</div>
                  <div className="text-sm">Prise en charge</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#C97435]">950€</div>
                  <div className="text-sm">Indemnisation max.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#C97435]">4.8/5</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Section filtres précédente */}
          
          {/* Liste des formations par catégorie */}
          {formationsData.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-8">
                <category.icon className="text-4xl text-[#C97435] mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-[#2A394A]">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.formations.map((formation, fIndex) => (
                  <div key={fIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={formation.image}
                        alt={formation.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {formation.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 bg-[#FDF5EB] text-[#C97435] text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-[#2A394A] mb-3">
                        {formation.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {formation.shortDescription}
                      </p>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-center">
                          <span className="w-5 h-5 mr-2">⏱️</span>
                          Durée: {formation.duration}
                        </p>
                        <p className="flex items-center">
                          <span className="w-5 h-5 mr-2">💰</span>
                          Prix: {formation.price}
                        </p>
                        <p className="text-green-600 flex items-center">
                          <span className="w-5 h-5 mr-2">✅</span>
                          {formation.funding}
                        </p>
                        <p className="text-[#C97435] flex items-center">
                          <span className="w-5 h-5 mr-2">🎯</span>
                          {formation.indemnisation}
                        </p>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-600 mb-2">Prochaines sessions :</p>
                        <div className="flex flex-wrap gap-2">
                          {formation.nextSessions.map((session, sIndex) => (
                            <span key={sIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                              {session}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        href={`/formation/${formation.title.toLowerCase().replace(/ /g, '-')}`}
                        className="mt-6 block w-full bg-[#C97435] text-white py-3 rounded-lg text-center hover:bg-[#A65E2A] transition-colors duration-200"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
} 