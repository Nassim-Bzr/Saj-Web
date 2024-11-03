"use client";
import { useState } from 'react';
import Image from 'next/image';

type Platform = "facebook" | "google";

export default function Testimonials() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("facebook");

  const testimonials = {
    facebook: [
      {
        name: "Dr. Marie Laurent",
        role: "Médecin généraliste",
        content: "Une formation exceptionnelle qui m'a permis d'améliorer ma pratique quotidienne.",
        rating: 5,
        date: "15 janvier 2024"
      }
    ],
    google: [
      {
        name: "Dr. Thomas Dubois",
        role: "Chirurgien",
        content: "Excellente formation, très pratique et applicable immédiatement.",
        rating: 5,
        date: "20 janvier 2024"
      }
    ]
  };

  const handlePlatformChange = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="bg-[#FDF5EB] py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Plus de 31.000 professionnels de santé formés
        </h2>
        <p className="text-lg text-gray-600">
          du 1er janvier 2019 au 31 août 2024.
        </p>
      </div>

      {/* Boutons pour Choisir les Avis */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handlePlatformChange("facebook")}
          className={`px-6 py-2 rounded-lg transition duration-200 ${
            selectedPlatform === "facebook"
              ? "bg-[#FF7E5F] text-white hover:bg-[#e66f4e]"
              : "border border-gray-500 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Avis Facebook
        </button>
        <button
          onClick={() => handlePlatformChange("google")}
          className={`px-6 py-2 rounded-lg transition duration-200 ${
            selectedPlatform === "google"
              ? "bg-[#FF7E5F] text-white hover:bg-[#e66f4e]"
              : "border border-gray-500 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Avis Google
        </button>
      </div>

      {/* Affichage des témoignages */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials[selectedPlatform].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
