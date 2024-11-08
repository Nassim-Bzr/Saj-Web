"use client";
import React from 'react';

export default function FormationSteps() {
  const steps = [
    {
      number: 1,
      title: "Préinscription",
      description: "Une fois sur la page de la formation qui vous intéresse, cliquez sur le bouton 'JE M'INSCRIS'."
    },
    {
      number: 2,
      title: "Éligibilité au financement",
      description: "Remplissez le formulaire d'inscription proposé. En fonction de vos réponses, vous saurez immédiatement si vous êtes éligible à la prise en charge à 100% ainsi qu'aux indemnités."
    },
    {
      number: 3,
      title: "Différentes modalités d'inscription",
      description: `Vous aurez alors 3 choix possibles :
      - vous inscrire vous même sur le site l'ANDPC
      - demander à être rappelé immédiatement par un téléconseiller qui vous aidera dans vos démarches
      - bloquer un rendez-vous avec un téléconseiller à une date de votre choix (recommandé)`
    },
    {
      number: 4,
      title: "Démarrage",
      description: "Vous recevrez un email vous invitant à vous connecter à notre plateforme d’e-learning ou à vous rendre sur le lieu de la conférence."
    },
    {
      number: 5,
      title: "Indemnisation et attestation",
      description: "Une fois la formation terminée, vous pourrez télécharger votre attestation de suivi de formation. Vos indemnités compensatoires seront directement versées par l'ANDPC entre 4 et 8 semaines après la fin de votre session."
    }
  ];

  return (
    <div className="bg-[#FDF5EB] py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Ma formation en <span className="text-[#C97435]">5 étapes</span></h2>
      </div>

      {/* Affichage des étapes */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-white border border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDF5EB] flex items-center justify-center border border-[#C97435] text-xl font-bold text-[#C97435] mr-4">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#C97435]">{step.title}</h3>
                <p className="text-gray-600 whitespace-pre-line mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton d'information supplémentaire */}
        <div className="text-center mt-8">
          <button className="bg-[#FF7E5F] text-white px-6 py-3 rounded-full font-bold hover:bg-[#e66f4e] transition duration-200">
            LES FORMATIONS SONT 100% PRISES EN CHARGE ET INDEMNISÉES.
          </button>
        </div>
      </div>
    </div>
  );
}
