"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { formationsData } from '../lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';
import { Formation, FormationDetail } from '../types';
import FormationModal from '../components/FormationModal';

interface SelectedFormation {
  category: Formation;
  formation: FormationDetail;
}

export default function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedFunding, setSelectedFunding] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedIndemnity, setSelectedIndemnity] = useState('');
  const [selectedFormation, setSelectedFormation] = useState<SelectedFormation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormationClick = (e: React.MouseEvent, category: Formation, formation: FormationDetail) => {
    e.preventDefault();
    setSelectedFormation({ category, formation });
    setIsModalOpen(true);
  };

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

        <div className="container pb-16 mx-auto px-4 py-12">
          {/* Section filtres précédente */}
          <h3 className="text-xl font-semibold text-[#2A394A] mb-4">Filtrer les formations</h3>
            <div className="grid pb-[8em] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Barre de recherche */}
              <div className="col-span-full">
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                />
              </div>

              {/* Durée */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durée
                </label>
                <select 
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                >
                  <option value="">Toutes les durées</option>
                  <option value="7">7 heures</option>
                  <option value="14">14 heures</option>
                  <option value="21">21 heures</option>
                  <option value="28">28 heures</option>
                </select>
              </div>

              {/* Prise en charge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prise en charge
                </label>
                <select 
                  value={selectedFunding}
                  onChange={(e) => setSelectedFunding(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                >
                  <option value="">Toutes les prises en charge</option>
                  <option value="100">100% prise en charge</option>
                  <option value="partial">Partiellement prise en charge</option>
                  <option value="none">Non prise en charge</option>
                </select>
              </div>

              {/* Spécialité */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Spécialité
                </label>
                <select 
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                >
                  <option value="">Toutes les spécialités</option>
                  <option value="medecine-generale">Médecine Générale</option>
                  <option value="medecine-interne">Médecine Interne</option>
                  <option value="chirurgie">Chirurgie</option>
                  <option value="pediatrie">Pédiatrie</option>
                  <option value="gynecologie">Gynécologie</option>
                  <option value="psychiatrie">Psychiatrie</option>
                </select>
              </div>

              {/* Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Format
                </label>
                <select 
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                >
                  <option value="">Tous les formats</option>
                  <option value="PRESENTIEL">Présentiel</option>
                  <option value="E-LEARNING">E-learning</option>
                  <option value="HYBRIDE">Format hybride</option>
                  <option value="DPC">DPC</option>
                </select>
              </div>

              {/* Montant d'indemnité */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Montant d'indemnité
                </label>
                <select 
                  value={selectedIndemnity}
                  onChange={(e) => setSelectedIndemnity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                >
                  <option value="">Toutes les indemnités</option>
                  <option value="450">Jusqu'à 450€</option>
                  <option value="730">Jusqu'à 730€</option>
                  <option value="950">Jusqu'à 950€</option>
                </select>
              </div>
              

              {/* Bouton de réinitialisation des filtres */}
              <div className="col-span-full flex justify-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDuration('');
                    setSelectedFunding('');
                    setSelectedSpecialty('');
                    setSelectedFormat('');
                    setSelectedIndemnity('');
                  }}
                  className="px-4 py-2 text-[#C97435] hover:bg-[#FDF5EB] rounded-md transition-colors duration-200"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>

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