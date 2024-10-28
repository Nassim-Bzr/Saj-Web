"use client";
import React, { useState } from "react";

export default function Testimonials() {
  const [selectedPlatform, setSelectedPlatform] = useState("facebook");

  const reviews = {
    facebook: [
      {
        name: "Anne-Sophie M.",
        date: "05/02/2024",
        comment: "2ème formation avec cet organisme de formation ! Une bonne piqûre de rappel, tout en allant à mon rythme. Je recommande !",
      },
      {
        name: "Claire A.",
        date: "12/03/2024",
        comment: "Personnel très agréable qui sait se rappeler gentiment à nous quand on oublie d'avancer sur la formation ! Très conciliant avec les difficultés d'avancer sur la formation.",
      },
      {
        name: "Delphine M.",
        date: "12/02/2024",
        comment: "Contenu complet, très bon suivi de l'équipe, et une formation pertinente !",
      },
    ],
    google: [
      {
        name: "Fred D.",
        date: "11/05/2024",
        comment: "Super formation très intéressante, je recommande cet organisme !",
      },
      {
        name: "Jules P.",
        date: "20/06/2024",
        comment: "Très bon accompagnement tout au long de la formation. Équipe disponible et à l'écoute.",
      },
      {
        name: "Sophie L.",
        date: "03/07/2024",
        comment: "Formation bien organisée et facile à suivre. J'ai beaucoup apprécié les ressources en ligne.",
      },
    ],
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="bg-[#FDF5EB] py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Plus de 31.000 professionnels de santé formés</h2>
        <p className="text-lg text-gray-600">du 1er janvier 2019 au 31 août 2024.</p>
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

      {/* Liste des Avis */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
        {reviews[selectedPlatform].map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-left">
            <h3 className="text-lg font-bold text-gray-700 mb-2">{review.name}</h3>
            <div className="text-yellow-500 flex mb-2">
              {"★★★★★".split("").map((star, idx) => (
                <span key={idx}>{star}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-2">{review.date}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
