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

    Design_sans_titre_5.src,
    formation_groupe_presentiel.src,
    Design_sans_titre
  ]



  const testimonials = [
    {
      name: "Les meilleures formations DPC en e-learning et presentiel pour les PS.",
      review: "Suivez les formations recommandées par vos confrères.",
      image: Design_sans_titre.src,
      text: "Formation 100% prise en charge et indemnisée jusqu'à 950€"
    },
    {
      name: "Un service client de qualité et à votre écoute. 7 j / 7.",
      review: "Notre équipe de conseillers est disponible par telephone et par mail.",
      image: Design_sans_titre_5.src,
      text: "Choisissez parmi des thèmes variés, bénéficiez d'un suivi personnalisé, et accédez à des formations certifiées et de qualité."
    },
    {
      name: "Choisissez votre organisme de formation agréé.",
      review: "Choisissez parmis les formations les plus recommandées dispensées par des experts.",
      image: formation_groupe_presentiel.src,
      text: "Optimisez votre développement professionnel, accédez aux meilleures formations certifiées "
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
        <div className="py-12 hcontainer mx-auto px-4">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            className="h-[400px] sm:h-[500px] md:h-[550px] w-full"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              }
            }}
          >
            <SwiperSlide className="w-full sm:w-[90%] md:w-[80%]">
              <div
                className="flex flex-col justify-center items-center bg-white p-4 sm:p-6 pb-8 sm:pb-12 rounded-lg shadow-md mx-2 sm:mx-4 relative"
                style={{
                  backgroundImage: `url(${testimonials[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                <div className="absolute md:left-20 sm:left-8 top-4 sm:top-8 z-20 flex flex-col items-start   gap-4 w-full max-w-sm">
                  <h3 className="text-2xl hidden left-[-1em] top-[1em] md:block sm:text-3xl md:text-4xl font-bold py-6 sm:py-12 text-white leading-tight md:relative md:bottom-[-190px] md:right-[-200px]">
                    {testimonials[0].text}
                  </h3>
                </div>

                <button className="bg-[#C97435] hover:bg-[#b8612a] text-lg sm:text-2xl text-sm px-4 sm:px-6 py-2 sm:py-3 absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[350px] text-center rounded-full text-white font-semibold transition duration-200 shadow-lg">
                  Je vérifie mon éligibilité
                </button>

                <div className="absolute z-10 bg-white bg-opacity-60 p-4 sm:p-8 flex flex-col 
                    w-[90%] sm:w-[80%] md:w-[345px] 
                    h-auto md:h-[300px]
                    bottom-24 sm:bottom-32 md:top-[5em]
                    right-[5%] sm:right-[10%] md:right-[5em]
                    items-center rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold mb-4 text-black text-center tracking-wide">{testimonials[0].name}</p>
                  <p className="text-base sm:text-xl md:text-2xl font-normal mb-8 text-black text-center leading-relaxed">{testimonials[0].review}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full sm:w-[90%] md:w-[80%]">
              <div
                className="flex flex-col justify-center items-center bg-white p-4 sm:p-6 pb-8 sm:pb-12 rounded-lg shadow-md mx-2 sm:mx-4 relative"
                style={{
                  backgroundImage: `url(${testimonials[1].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                <div className="absolute left-[8em] sm:left-8 top-4 sm:top-8 z-20 flex flex-col items-start gap-4 w-full max-w-sm">
                  <h3 className="text-2xl hidden md:block left-[-0em] top-0  sm:text-3xl md:text-4xl font-bold py-6 sm:py-12 text-white leading-tight md:relative md:bottom-[-190px] md:right-[-200px]">
                    {testimonials[1].text}
                  </h3>
                </div>

                <div className="absolute z-10 bg-white bg-opacity-60 p-4 sm:p-8 flex flex-col 
                    w-[90%] sm:w-[80%] md:w-[345px]
                    h-auto md:h-[300px]
                    bottom-24 sm:bottom-32 md:top-[5em]
                    right-[5%] sm:right-[10%] md:right-[5em]
                    items-center rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold mb-4 text-black text-center tracking-wide">{testimonials[1].name}</p>
                  <p className="text-base sm:text-xl md:text-2xl font-normal mb-8 text-black text-center leading-relaxed">{testimonials[1].review}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full sm:w-[90%] md:w-[80%]">
              <div
                className="flex flex-col justify-center items-center bg-white p-4 sm:p-6 pb-8 sm:pb-12 rounded-lg shadow-md mx-2 sm:mx-4 relative"
                style={{
                  backgroundImage: `url(${testimonials[2].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                <div className="absolute left-4 sm:left-8 top-4 sm:top-8 z-20 flex flex-col items-start gap-4 w-full max-w-sm">
                  <h3 className="text-2xl hidden md:block  sm:text-3xl md:text-4xl font-bold py-6 sm:py-12 text-white leading-tight">
                    {testimonials[2].text}
                  </h3>
                </div>

                <div className="absolute z-10 bg-white bg-opacity-60 p-4 sm:p-8 flex flex-col 
                    w-[90%] sm:w-[80%] md:w-[345px]
                    h-auto md:h-[300px]
                    bottom-24 sm:bottom-32 md:top-[5em]
                    right-[5%] sm:right-[10%] md:right-[5em]
                    items-center rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold mb-4 text-black text-center tracking-wide">{testimonials[2].name}</p>
                  <p className="text-base sm:text-xl md:text-2xl font-normal mb-8 text-black text-center leading-relaxed">{testimonials[2].review}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center p-4 sm:p-6 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Des formations innovantes, gratuites et accessibles en vidéo pour améliorer vos compétences
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Accédez à des formations conçues spécifiquement pour vous permettre de développer vos compétences, tout en offrant à vos patients une prise en charge optimale. Entièrement en ligne et accessibles en illimité, nos programmes sont <span className="font-bold">100% financés</span> et peuvent même être indemnisés.
            </p>
            <p className="text-gray-600 font-medium mb-2">
              Une satisfaction approuvée
            </p>
            <p className="text-gray-600">
              Avec une note moyenne de <span className="font-bold">4,7/5</span> sur plus de <span className="font-bold">500 avis</span>.
            </p>
          </div>

          <div className="flex-1 w-full md:w-auto mt-6 md:mt-0 md:ml-10 p-4 sm:p-6 bg-[#2A394A] rounded-lg shadow-lg text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Je souhaite me former !</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="profession">
                Votre profession
              </label>
              <select id="profession" className="w-full p-2 sm:p-3 border rounded-lg text-black">
                <option value="medecin">Médecin</option>
                <option value="infirmier">Infirmier</option>
                <option value="pharmacien">Pharmacien</option>
              </select>
            </div>
            <button className="w-full bg-[#C97435] text-white font-bold py-2 sm:py-3 rounded-lg hover:bg-[#b8612a] transition duration-200">
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

        <div className="py-10 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row bg-[#2A394A] rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-12">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Contactez-nous
                    </h2>
                    <p className="text-gray-300">
                      Notre équipe est à votre disposition pour répondre à toutes vos questions
                    </p>
                  </div>

                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Nom*
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Prénom*
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Email*
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                          placeholder="Votre numéro"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Profession*
                      </label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                      >
                        <option value="">Sélectionnez votre profession</option>
                        <option value="medecin">Médecin</option>
                        <option value="infirmier">Infirmier</option>
                        <option value="pharmacien">Pharmacien</option>
                        <option value="dentiste">Dentiste</option>
                        <option value="kinesitherapeute">Kinésithérapeute</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Message*
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#C97435] transition-colors"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="mr-2 rounded border-gray-600 text-[#C97435] focus:ring-[#C97435]"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-300">
                        J'accepte la politique de confidentialité
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C97435] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#A65E2A] transition-colors duration-200"
                    >
                      Envoyer
                    </button>
                  </form>
                </div>

                <div className="w-full lg:w-1/3 bg-[#1F2937] p-6 sm:p-8 lg:p-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                    Nos coordonnées
                  </h3>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-[#C97435] mt-1">
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#C97435] font-medium mb-1">Adresse</h4>
                        <p className="text-gray-300">
                          123 rue de la Formation<br />
                          75000 Paris
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-[#C97435] mt-1">
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#C97435] font-medium mb-1">Email</h4>
                        <p className="text-gray-300">contact@metadeal.fr</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-[#C97435] mt-1">
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#C97435] font-medium mb-1">Téléphone</h4>
                        <p className="text-gray-300">01 23 45 67 89</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-[#C97435] mt-1">
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#C97435] font-medium mb-1">Horaires</h4>
                        <p className="text-gray-300">
                          Lundi - Vendredi<br />
                          9h00 - 18h00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
