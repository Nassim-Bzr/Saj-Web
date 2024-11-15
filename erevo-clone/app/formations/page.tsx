"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { formationsData } from '../lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';
import FormationModal from '../components/FormationModal';
import { Formation, FormationDetail } from '../types';

interface SelectedFormation {
  category: Formation;
  formation: FormationDetail;
}

export default function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFormation, setSelectedFormation] = useState<SelectedFormation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormationClick = (
    e: React.MouseEvent,
    category: Formation,
    formation: FormationDetail
  ) => {
    e.preventDefault();
    setSelectedFormation({ category, formation });
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Votre section d'en-tête */}
        <div className="container pb-16 mx-auto px-4 py-12">
          {formationsData.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-8">
                <category.icon className="text-4xl text-[#C97435] mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-[#2A394A]">
                    {category.title}
                  </h2>
                  <Link href={`/formations/${category.slug.toLowerCase().replace(/ /g, '-')}`} className="text-xl flex absolute right-5 text-[#C97435] hover:underline">
                    Catalogue de formations {category.title}
                  </Link>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.formations.map((formation, fIndex) => (
                  <div 
                    key={fIndex} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={(e) => handleFormationClick(e, category, formation)}
                  >
                    <div className="relative h-48">
                      {/* Vérifiez si l'image est définie avant de l'utiliser */}
                      {formation.image && (
                        <Image
                          src={formation.image}
                          alt={formation.title}
                          fill
                          className="object-cover"
                        />
                      )}
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
                      <button 
                        className="mt-6 block w-full bg-[#C97435] text-white py-3 rounded-lg text-center hover:bg-[#A65E2A] transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFormationClick(e, category, formation);
                        }}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher les détails de la formation */}
      {isModalOpen && selectedFormation && (
        <FormationModal
          formation={selectedFormation.formation}
          category={selectedFormation.category}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      
      <Footer />
    </>
  );
}