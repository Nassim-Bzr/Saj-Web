"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Trainings() {
  const professionsData = [
    {
      title: "Formations Médecins",
      subtitle: "Jusqu'à 21 heures financées par l'ANDPC",
      funding: "Vous recevez jusqu'à 1 470€",
      trainings: [
        {
          title: "Actualités en cardiologie",
          label: "Programme intégré",
          imageUrl: "/images/formations/cardio.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Cardiologie",
          duration: "14 heures",
          price: "980€",
          description: "Mise à jour sur les nouvelles recommandations en cardiologie et les thérapeutiques innovantes."
        },
        // Ajoutez d'autres formations pour médecins...
      ]
    },
    {
      title: "Formations Infirmiers",
      subtitle: "Jusqu'à 14 heures financées par l'ANDPC sous réserve d'agrément et dans la limite de votre budget disponible.",
      funding: "Vous recevez jusqu'à 441,8 €",
      trainings: [
        {
          title: "Rôle de l'IDE dans la vaccination",
          label: "Programme intégré",
          imageUrl: "/images/formations/vaccination.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Médecine Générale",
          duration: "7 heures",
          price: "220.9€",
          description: "Actualisation des connaissances sur les vaccins, techniques d'injection, conservation des produits et gestion des effets indésirables."
        },
        {
          title: "Soins palliatifs à domicile",
          label: "Programme intégré",
          imageUrl: "/images/formations/soins-palliatifs.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Médecine Générale",
          duration: "14 heures",
          price: "441.8€",
          description: "Accompagnement des patients en fin de vie, gestion de la douleur, support psychologique et relation avec les familles."
        },
        {
          title: "Diabétologie et soins infirmiers",
          label: "Programme intégré",
          imageUrl: "/images/formations/diabetologie.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Médecine Interne",
          duration: "14 heures",
          price: "441.8€",
          description: "Prise en charge du patient diabétique, surveillance glycémique, éducation thérapeutique et prévention des complications."
        },
        {
          title: "Maladies auto-immunes",
          label: "Programme intégré",
          imageUrl: "/images/formations/auto-immune.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Médecine Interne",
          duration: "14 heures",
          price: "441.8€",
          description: "Comprendre et accompagner les patients atteints de maladies auto-immunes, suivi des traitements et surveillance des complications."
        },
        {
          title: "Plaies et cicatrisation",
          label: "Programme intégré",
          imageUrl: "/images/formations/plaies.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Chirurgie",
          duration: "14 heures",
          price: "441.8€",
          description: "Évaluation des plaies, choix des pansements, techniques de soins avancées et suivi de la cicatrisation."
        },
        {
          title: "Soins post-opératoires",
          label: "Programme intégré",
          imageUrl: "/images/formations/post-op.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Chirurgie",
          duration: "14 heures",
          price: "441.8€",
          description: "Prise en charge post-opératoire, surveillance des complications, gestion de la douleur et réhabilitation précoce."
        },
        {
          title: "Troubles anxio-dépressifs",
          label: "Programme intégré",
          imageUrl: "/images/formations/anxiete.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Psychiatrie",
          duration: "14 heures",
          price: "441.8€",
          description: "Reconnaissance des symptômes, accompagnement thérapeutique et prévention des risques suicidaires."
        },
        {
          title: "Schizophrénie et psychoses",
          label: "Programme intégré",
          imageUrl: "/images/formations/schizophrenie.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Psychiatrie",
          duration: "14 heures",
          price: "441.8€",
          description: "Accompagnement des patients psychotiques, gestion des crises et suivi du traitement."
        },
        {
          title: "La douleur aiguë chez l'enfant",
          label: "Programme intégré",
          imageUrl: "/images/formations/pediatrie-douleur.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Pédiatrie",
          duration: "14 heures",
          price: "441.8€",
          description: "Évaluation et prise en charge de la douleur pédiatrique. Utilisation des échelles adaptées et mise en place des protocoles antalgiques."
        },
        {
          title: "Urgences pédiatriques",
          label: "Programme intégré",
          imageUrl: "/images/formations/urgences-pediatriques.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Pédiatrie",
          duration: "14 heures",
          price: "441.8€",
          description: "Gestion des situations d'urgence en pédiatrie, évaluation rapide et prise en charge adaptée."
        },
        {
          title: "Suivi de grossesse",
          label: "Programme intégré",
          imageUrl: "/images/formations/grossesse.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Gynécologie",
          duration: "14 heures",
          price: "441.8€",
          description: "Accompagnement de la femme enceinte, surveillance et prévention des complications de la grossesse."
        },
        {
          title: "Cancers gynécologiques",
          label: "Programme intégré",
          imageUrl: "/images/formations/cancer-gyneco.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Gynécologie",
          duration: "14 heures",
          price: "441.8€",
          description: "Prise en charge des patientes atteintes de cancers gynécologiques, soins de support et accompagnement."
        },
        {
          title: "Le patient Alzheimer",
          label: "Programme intégré",
          imageUrl: "/images/formations/alzheimer.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Gériatrie",
          duration: "14 heures",
          price: "441.8€",
          description: "Formation approfondie sur la prise en charge des patients atteints d'Alzheimer. Apprentissage des techniques de communication, gestion des troubles du comportement."
        },
        {
          title: "Prévention des chutes",
          label: "Programme intégré",
          imageUrl: "/images/formations/chutes.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Gériatrie",
          duration: "7 heures",
          price: "220.9€",
          description: "Évaluation des risques de chute, mise en place de mesures préventives et adaptation de l'environnement."
        },
        {
          title: "Hygiène bucco-dentaire",
          label: "Programme intégré",
          imageUrl: "/images/formations/hygiene-dentaire.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Dentisterie",
          duration: "7 heures",
          price: "220.9€",
          description: "Soins d'hygiène bucco-dentaire, prévention des pathologies et éducation thérapeutique."
        },
        {
          title: "Urgences dentaires",
          label: "Programme intégré",
          imageUrl: "/images/formations/urgences-dentaires.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Dentisterie",
          duration: "7 heures",
          price: "220.9€",
          description: "Gestion des urgences dentaires, premiers soins et orientation vers les spécialistes."
        },
        {
          title: "Devenir et être IDEL",
          label: "Formation continue",
          imageUrl: "/images/formations/idel.jpg",
          tags: ["FIFPL", "PERSO"],
          specialty: "Installation",
          duration: "21 heures",
          price: "662.7€",
          description: "Formation complète pour l'installation en libéral : aspects juridiques, comptables, relationnels et organisationnels."
        },
        {
          title: "NGAP Module Initiation",
          label: "Formation continue",
          imageUrl: "/images/formations/ngap.jpg",
          tags: ["FIFPL", "PERSO"],
          specialty: "Administratif",
          duration: "7 heures",
          price: "220.9€",
          description: "Maîtrise de la nomenclature générale des actes professionnels. Optimisation de la cotation et sécurisation des remboursements."
        }
      ]
    },
    {
      title: "Formations Dentistes",
      subtitle: "Jusqu'à 14 heures financées par l'ANDPC",
      funding: "Vous recevez jusqu'à 730€",
      trainings: [
        {
          title: "Implantologie avancée",
          label: "Programme intégré",
          imageUrl: "/images/formations/implant.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Chirurgie dentaire",
          duration: "14 heures",
          price: "730€",
          description: "Techniques avancées en implantologie et gestion des complications."
        },
        // Ajoutez d'autres formations pour dentistes...
      ]
    },
    {
      title: "Formations Kinésithérapeutes",
      subtitle: "Jusqu'à 14 heures financées par l'ANDPC",
      funding: "Vous recevez jusqu'à 546€",
      trainings: [
        {
          title: "Rééducation du sportif",
          label: "Programme intégré",
          imageUrl: "/images/formations/sport.jpg",
          tags: ["DPC", "PERSO"],
          specialty: "Kinésithérapie sportive",
          duration: "14 heures",
          price: "546€",
          description: "Techniques spécifiques de rééducation pour les sportifs de haut niveau."
        },
        // Ajoutez d'autres formations pour kinés...
      ]
    }
  ];

  return (
    <div className="bg-[#FDF5EB] py-16">
      {professionsData.map((profession, profIndex) => (
        <div key={profIndex} className="mb-16">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{profession.title}</h2>
            <p className="text-lg text-gray-600">
              {profession.subtitle}
            </p>
            <p className="text-2xl text-[#2a394a] font-bold mt-2">{profession.funding}</p>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView={4}
            className="container mx-auto px-4"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {profession.trainings.map((training, index) => (
              <SwiperSlide key={index}>
                <Link href={`/formation/${index}`}>
                  <div className="relative bg-white rounded-lg shadow-md text-left h-full hover:shadow-xl transition-shadow duration-200">
                    <div className="relative">
                      <Image
                        src={training.imageUrl}
                        alt={training.title}
                        className="rounded-t-lg h-48 w-full object-cover"
                        width={500}
                        height={300}
                      />
                      <span className="absolute top-2 left-2 bg-[#2a394a] text-white text-xs font-bold px-3 py-1 rounded-md">
                        {training.label}
                      </span>
                      <span className="absolute top-2 right-2 bg-[#C97435] text-white text-xs font-bold px-3 py-1 rounded-md">
                        {training.specialty}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#2a394a] font-nunito mb-2">{training.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{training.description}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          <i className="fas fa-clock mr-2"></i>{training.duration}
                        </span>
                        <span className="text-sm font-bold text-[#C97435]">
                          {training.price}
                        </span>
                      </div>
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
