"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import Navbar from "./components/navbar";
import Testimonials from "./components/Testimonials";
import Trainings from "./components/Trainings";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function Home() {
  const slides = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTWWa77gg43-C_F6hggWUmy7PJ-rM4UW3bg&s",
      title: "Formation DPC",
      description: "Des formations adaptées à vos besoins"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsOHR3LlgQx5PQo3A&s",
      title: "Expertise médicale",
      description: "Développez vos compétences"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u0v_C9TWX3vlvV8GQ&s",
      title: "100% Pris en charge",
      description: "Formations financées et indemnisées"
    }
  ];

  useEffect(() => {
    // Ajoute le script du chatbot une fois le composant monté
    const script = document.createElement("script");
    script.src = "https://cdn.chatsimple.ai/chat-bot-loader.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyage du script si nécessaire
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#FDF5EB] min-h-screen">
        {/* Bandeau de Présentation */}
        <div className="bg-[#2A394A] text-white p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Des formations 100% prises en charge et indemnisées
          </h2>
          <p className="text-lg">
            Profitez de formations spécialisées dans le secteur médical pour vous perfectionner et bénéficier de la prise en charge totale des frais.
          </p>
        </div>

        {/* Nouveau Carrousel */}
        <div className="py-4 container mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1.5}  // Affiche une slide entière et la moitié de la suivante
            spaceBetween={20}  // Espace entre les slides
            centeredSlides={true} // Centrer les slides pour avoir un effet "vue partielle"
            loop={true}  // Carrousel en boucle
            className="h-[500px] md:h-[530px] w-full rounded-[20px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div
                  className="w-full h-full bg-cover bg-center rounded-md"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center p-6 text-white">
                    <div className="text-center">
                      <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-md md:text-lg">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Reste de votre contenu... */}
        <div className="container mx-auto flex flex-col md:flex-row items-center p-6">
          {/* Section de Gauche - Texte d'Introduction */}
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

          {/* Section de Droite - Formulaire d'Inscription */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-10 p-6 bg-[#2A394A] rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Je souhaite me former !</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="profession">
                Votre profession
              </label>
              <select id="profession" className="w-full p-3 border rounded-lg text-black">
                <option value="medecin">Médecin</option>
                <option value="infirmier">Infirmier</option>
                <option value="pharmacien">Pharmacien</option>
              </select>
            </div>
            <button className="w-full bg-[#C97435] text-white font-bold py-3 rounded-lg hover:bg-[#b8612a] transition duration-200">
              Je m'inscris
            </button>
            <p className="text-sm mt-4">
              95% de nos apprenants recommandent Metadeal.
              <br />
              <span className="text-xs">(Étude du 1/1/23 au 31/08/24)</span>
            </p>
          </div>
        </div>

        <Testimonials />
        <Trainings />

        {/* Intégration du Chatbot */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <chat-bot platform_id="909e3b89-45ce-4bef-89b3-adede8f2b19d" 
              user_id="4a6ed246-8bed-477d-9fe6-6036f3084060" 
              chatbot_id="441096f8-51ef-4eac-b5b5-7a188a5af4e3">
              <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a>
            </chat-bot>
            `,
          }}
        />
      </div>
    </>
  );
}
