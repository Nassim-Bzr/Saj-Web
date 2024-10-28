"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Trainings() {
  const trainingsData = [
    {
      title: "Le patient Alzheimer",
      label: "Programme intégré",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      tags: ["DPC", "PERSO"],
    },
    {
      title: "Rôle de l'IDE dans la vaccination",
      label: "Programme intégré",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      tags: ["DPC", "PERSO"],
    },
    {
      title: "La douleur aiguë chez l'enfant",
      label: "Programme intégré",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      tags: ["DPC", "PERSO"],
    },
    {
      title: "Devenir et être IDEL",
      label: "Formation continue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      tags: ["FIFPL", "PERSO"],
    },
    {
      title: "NGAP Module Initiation",
      label: "Formation continue",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      tags: ["FIFPL", "PERSO"],
    },
  ];

  return (
    <div className="bg-[#FDF5EB] py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Formations Infirmiers</h2>
        <p className="text-lg text-gray-600">
          Jusqu'à 14 heures financées par l'ANDPC sous réserve d'agrément et dans la limite de votre budget disponible.
        </p>
        <p className="text-2xl text-[#2a394a] font-bold mt-2">Vous recevez jusqu'à 441,8 €.</p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={5}
        slidesPerView={4}
        className="container mx-auto px-4"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {trainingsData.map((training, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white rounded-lg shadow-md text-left">
              <div className="relative">
                <img
                  src={training.imageUrl}
                  alt={training.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#2a394a] text-white text-xs font-bold px-3 py-1 rounded-md">
                  {training.label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#2a394a] font-nunito">{training.title}</h3>
                <div className="flex gap-2 mt-2">
                  {training.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
