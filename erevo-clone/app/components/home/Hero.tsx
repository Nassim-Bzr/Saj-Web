"use client";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center p-6">
      <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Des formations innovantes, gratuites et accessibles en vidéo pour améliorer vos compétences
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Accédez à des formations conçues spécifiquement pour vous permettre de développer vos compétences, tout en offrant à vos patients une prise en charge optimale. Entièrement en ligne et accessibles en illimité, nos programmes sont <span className="font-bold">100% financés</span> et peuvent même être indemnisés.
        </p>
        <p className="text-gray-600 font-medium">
          Une satisfaction approuvée
        </p>
        <p className="text-gray-600">
          Avec une note moyenne de <span className="font-bold">4,7/5</span> sur plus de <span className="font-bold">500 avis</span>.
        </p>
      </div>
    </div>
  );
} 