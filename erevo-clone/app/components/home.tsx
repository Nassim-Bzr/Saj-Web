"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import FormationSteps from "./FormationSteps";
import Testimonials from "./Testimonials";

import Design_sans_titre from "../../public/images/Design_sans_titre.png";
import Design_sans_titre_5 from "../../public/images/formation_groupe_presentiel.png";
import formation_groupe_presentiel from "../../public/images/formation_online_medcin.png";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FormationsGrid from "../FormationsGrid";

export default function Home() {

  const images = [ 
    Design_sans_titre.src,
    Design_sans_titre_5.src,
    formation_groupe_presentiel.src
  ]



  const testimonials = [
    {
      name: "Les meilleures formations DPC en e-learning et presentiel pour les PS.",
      review: "Suivez les formations recommandées par vos confrères.",
    
    },
    {
      name: "Un service client de qualité et à votre écoute. 7 j / 7.",
      review: "Notre équipe de conseillers est disponible par telephone et par mail.",
    },
    {
      name: "Choisissez votre organisme de formation agréé.",
      review: "Choisissez parmis les formations les plus recommandées dispensées par des experts.",
    }
  ];

  const TextCallToAction = [
    {
      title: "Formation 100% prise en charge et indemnisée jusqu'à 950€",
      description: "Accédez à des formations conçues spécifiquement pour vous permettre de développer vos compétences, tout en offrant à vos patients une prise en charge optimale. Entièrement en ligne et accessibles en illimité, nos programmes sont 100% financés et peuvent même être indemnisés.",
      button: "Je m'inscris"
      
    },
    {
      title: "95% de nos apprenants recommandent Metadeal",
      description: "Avec une note moyenne de 4,7/5 sur plus de 500 avis.",
      button: "Lire les avis"
    },
    {
      title: "Un service client de qualité et à votre écoute. 7 jours sur 7.",
      description: "Notre équipe de conseillers est disponible par telephone et par mail.",
      button: "Contactez-nous"
    }

  ]
  

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

        

        <div className="py-12 hcontainer mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView="auto"
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            className="h-[400px] md:h-[550px] w-full"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
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
                  className="flex flex-col justify-center items-center bg-white p-6 pb-12 rounded-lg shadow-md mx-4 relative"
                  style={{
                    backgroundImage: `url(${images[index % images.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '600px'
                  }}
                >
                  {/* Overlay semi-transparent */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex ml-[-10px]"></div>

                  <div className="absolute left-8 top-8 z-20 flex flex-col items-start gap-4 max-w-sm">
                    <h3 className="text-4xl font-bold py-12 relative flex bottom-[-190px] right-[-200px] text-white leading-tight">
Formation 100% prise en charge et indemnisée jusqu'à <span className="text-[#D88941] font-bold flex relative bottom-[-90px]">950€</span>                  </h3>
                    
                  </div>
                  <button className="bg-[#C97435] hover:bg-[#b8612a] px-6 py-3 flex relative bottom-[-300px] w-[350px] text-center items-center justify-center right-64 rounded-full text-white font-semibold transition duration-200 shadow-lg">
                  ÊTES VOUS ELIGIBLE
                      </button>
                  {/* Contenu avec z-index pour apparaître au-dessus de l'overlay */}
                  <div className="relative z-10 bg-white bg-opacity-60 p-4 md:p-8 flex flex-col 
                    mx-auto md:mr-[-5em] 
                    h-auto md:h-[300px] 
                    w-[80%] md:w-[345px] 
                    bottom-[1em] md:top-[5em] 
                    right-[0em] md:right-[5em]
                    items-center rounded-lg">
                  
                  <p className="text-2xl md:text-2xl font-bold mb-4 items-center text-black text-center tracking-wide">{testimonial.name}</p>

                  <p className="text-base md:text-2xl  font-normal mb-8 items-center text-black text-center leading-relaxed ">{testimonial.review}</p>
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
      
      </div>
    </>
  );
}
