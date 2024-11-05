"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import Navbar from "./navbar";
import Testimonials from "./Testimonials";
import Trainings from "./Trainings";
import Design_sans_titre from "../../public/images/Design_sans_titre.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FormationsGrid from "../FormationsGrid";

export default function Home() {
  const testimonials = [
    {
      name: "Dr Laetitia C.",
      location: "Lyon (69)",
      review: "Formation idéale. Je me sens bien mieux armée pour prendre en charge mes patientes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsOHR3LlgQx5PQo3A&s"
    },
    {
      name: "Carla M.",
      location: "Toulouse",
      review: "Super plateforme, j'ai pu apprendre énormément de nouvelles choses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgF5G4wF_cT2YXwkG&s"
    },
    {
      name: "Jean L.",
      location: "Paris",
      review: "Merci pour cette formation, j'ai pu valider tous mes acquis sans stress.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u0v_C9TWX3vlvV8GQ&s"
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

      <div className="bg-[#FDF5EB] min-h-screen">
        {/* Bandeau de Présentation */}
        
        {/* Nouveau Carrousel Témoignages */}
        <div className="py-12 hcontainer mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView="auto"
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            className="h-[550px] w-full"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} style={{ width: '80%' }}>
                <div 
                  className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md mx-4 relative"
                  style={{
                    backgroundImage: `url(${Design_sans_titre.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '600px'
                  }}
                >
                  {/* Overlay semi-transparent */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                  
                  {/* Contenu avec z-index pour apparaître au-dessus de l'overlay */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-200 mb-4">{testimonial.location}</p>
                    <p className="text-white text-center">{testimonial.review}</p>
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

        <FormationsGrid />
        <Testimonials />

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
