"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getFormationById } from '@/app/lib/data/formations';
import Navbar from '@/app/components/navbar';

export default function FormationPage() {
  const router = useRouter();
  const { id } = router.query;
  const [formation, setFormation] = useState(null);
  const [showInfoForm, setShowInfoForm] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchedFormation = getFormationById(id);
      console.log('Fetched Formation:', fetchedFormation);
      setFormation(fetchedFormation);
    }
  }, [id]);

  if (!formation) {
    return <p>Formation non trouvée</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Image de bannière */}
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(/path/to/banner-image.jpg)' }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{formation.title}</h1>
          </div>
        </div>

        {/* Contenu de la formation */}
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-[#2A394A] mb-4">À propos de la formation</h2>
          <p className="text-gray-700">{formation.description}</p>
        </div>

        {/* Bouton de demande d'informations */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => setShowInfoForm(true)}
            className="px-6 py-3 bg-[#C97435] text-white hover:bg-[#A65E2A] rounded-full transition-colors duration-200"
          >
            Demande d'informations
          </button>
        </div>
      </div>

      {showInfoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {/* Réutilisez le même formulaire de demande d'informations ici */}
        </div>
      )}
    </div>
  );
}
