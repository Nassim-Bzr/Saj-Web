"use client";

import React from 'react';
import Image from 'next/image';
import FormationSteps from './FormationSteps';
import { Formation, FormationDetail } from '../types';

interface FormationModalProps {
  formation: FormationDetail;
  category: Formation;
  isOpen: boolean;
  onClose: () => void;
}

export default function FormationModal({ formation, category, isOpen, onClose }: FormationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative">
          {/* Bouton de fermeture */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Hero Image */}
          <div className="relative h-[400px]">
            <Image
              src={formation.image}
              alt={formation.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {formation.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {formation.tags.map((tag: string, index: number) => (
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

          <div className="p-8">
            {/* Contenu de la formation */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Description de la formation</h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {formation.shortDescription}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Informations clés */}
                <div className="bg-[#FDF5EB] rounded-xl p-6">
                  <h2 className="text-xl font-bold text-[#2A394A] mb-4">Informations clés</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-8 h-8 mr-3">⏱️</span>
                      <div>
                        <p className="font-medium">Durée</p>
                        <p className="text-gray-600">{formation.duration}</p>
                      </div>
                    </div>
                    {/* Autres informations... */}
                  </div>
                </div>

                {/* Bouton d'inscription */}
                <button 
                  className="w-full bg-[#C97435] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#A65E2A] transition-colors duration-200"
                >
                  Je m'inscris à cette formation
                </button>
              </div>
            </div>

            {/* Étapes d'inscription */}
            <FormationSteps />
          </div>
        </div>
      </div>
    </div>
  );
} 