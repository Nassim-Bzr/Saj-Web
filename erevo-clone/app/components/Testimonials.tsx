"use client";
import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. F.R",
      role: "Médecin Généraliste",
      content: "Passionnant pour tout médecin, complet, clair, bien présenté",
      rating: 5,
      date: "avril 2024",
      specialty: "Addictions aux substances licites"
    },
    {
      name: "Dr Dominique.C",
      role: "Pédiatre",
      content: "Excellente formation sur l'obésité de l'enfant",
      rating: 4,
      date: "mars 2024",
      specialty: "Obésité chez l'enfant & l'adolescent"
    },
    {
      name: "Dr. Catherine.E",
      role: "Sages-femmes",
      content: "Formation à distance faite d'excellent niveau.",
      rating: 5,
      date: "mai 2024",
      specialty: "Mélanomes"
    },
    {
      name: "Dr. D.C",
      role: "Médecin Généraliste",
      content: "Formation passionnante efficace et pratique comme toujours",
      rating: 5,
      date: "janvier 2024",
      specialty: "P.Endocriniens"
    }
  ];

  return (
    <div className="bg-[#2A394A] pt-16 mb-8 mr-8 ml-8 rounded-lg pb-16 pl-8 pr-8">
      <div className="container mx-auto text-center px-4 mb-8">
        <h2 className="text-3xl text-[#D88941]  font-bold text-white mb-2">Témoignages</h2>
        <p className="text-lg text-white">
          Plus de 10.000 professionnels de santé formés.
        </p>
      </div>

      {/* Affichage des témoignages */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white pt-6 pb-6 pl-6 pr-6 rounded-lg shadow-md relative flex flex-col items-center"
            >
              {/* Étoiles */}
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Contenu du témoignage */}
              <p className="text-lg font-semibold mb-2 text-center text-gray-800">« {testimonial.content} »</p>

              {/* Informations sur le médecin */}
              <div className="text-center">
                <p className="text-sm text-gray-500">{testimonial.name} – {testimonial.specialty}, {testimonial.date}</p>
                <p className="text-sm font-medium text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
