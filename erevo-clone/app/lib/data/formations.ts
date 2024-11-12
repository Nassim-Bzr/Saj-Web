import { FaClinicMedical, FaTooth, FaStethoscope, FaHandHoldingHeart, 
         FaUserMd, FaHospital, FaBrain, FaBaby, FaHeartbeat, FaLungs } from 'react-icons/fa';

import GeneralistImg from '../../../public/images/generaliste.png'

export const formationsData = [
  {
    title: "Médecine Générale",
    slug: "medecins-generalistes",
    icon: FaUserMd,
    color: "bg-[#5DA3A5]",
    description: "Formations adaptées aux médecins généralistes pour une pratique actualisée",
    image: GeneralistImg,
    formations: [
      {
        title: "Les manifestations dermatologiques.",
        slug: "les-manifestations-dermatologiques",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop",
        duration: "7 heures",
        price: "636,5€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 315€",
        tags: ["DPC", "PROGRAMME INTÉGRÉ"],
        shortDescription: "Renforcer les compétences dermatologiques des médecins généralistes.",
        nextSessions: ["E-LEARNING"]
      },
      {
        title: "Prise en charge du diabète de type 2",
        slug: "prise-en-charge-du-diabete-de-type-2",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Actualisation des connaissances sur la prise en charge du diabète de type 2",
        nextSessions: ["20 Mars 2024", "17 Avril 2024"]
      },
      {
        title: "Urgences en médecine générale",
        slug: "urgences-en-medecine-generale",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Gestion des situations d'urgence en cabinet de médecine générale",
        nextSessions: ["22 Mars 2024", "19 Avril 2024"]
      }
    ]
  },
  {
    title: "Chirurgien-dentiste",
    slug: "dentistes",
    image: GeneralistImg,
    icon: FaTooth,
    color: "bg-[#5DA3A5]", 
    description: "Formations spécialisées pour les chirurgiens-dentistes",
    formations: [
      {
        title: "Implantologie avancée",
        slug: "implantologie-avancee",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Techniques avancées en implantologie dentaire",
        nextSessions: ["18 Mars 2024", "15 Avril 2024"]
      },
      {
        title: "Endodontie moderne",
        slug: "endodontie-moderne",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "HYBRIDE"],
        shortDescription: "Nouvelles approches en traitement endodontique",
        nextSessions: ["25 Mars 2024", "22 Avril 2024"]
      }
    ]
  },
  {
    title: "Infirmier",
    slug: "infirmiers",
    icon: FaStethoscope,
    color: "bg-[#6E92B4]",
    description: "Formations adaptées aux infirmiers pour une pratique optimale",
    formations: [
      {
        title: "Soins palliatifs",
        slug: "soins-palliatifs",
        image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2941&auto=format&fit=crop",
        duration: "21 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Accompagnement des patients en fin de vie",
        nextSessions: ["20 Mars 2024", "17 Avril 2024"]
      },
      {
        title: "Plaies et cicatrisation",
        slug: "plaies-et-cicatrisation",
        image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "730€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 450€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Prise en charge moderne des plaies chroniques",
        nextSessions: ["22 Mars 2024", "19 Avril 2024"]
      }
    ]
  },
  {
    title: "Masseurs Kinésithérapeutes",
    slug: "masseurs-kinesitherapeutes",
    icon: FaHandHoldingHeart,
    color: "bg-[#546A75]",
    image: GeneralistImg,
    description: "Formations spécialisées en kinésithérapie",
    formations: [
      {
        title: "Rééducation du sportif",
        slug: "reeducation-du-sportif",
        image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Techniques spécifiques pour la rééducation sportive",
        nextSessions: ["15 Mars 2024", "12 Avril 2024"]
      },
      {
        title: "Thérapie manuelle",
        slug: "therapie-manuelle",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "HYBRIDE"],
        shortDescription: "Perfectionnement en thérapie manuelle",
        nextSessions: ["27 Mars 2024", "24 Avril 2024"]
      }
    ]
  },
  {
    title: "Pharmaciens",
    slug: "pharmaciens",
    icon: FaHospital,
    color: "bg-[#2F3E50]",
    image: GeneralistImg,
    
    description: "Formations continues pour les pharmaciens",
    formations: [
      {
        title: "Conseils en phytothérapie",
        slug: "conseils-en-phytotherapie",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Actualisation des connaissances en phytothérapie",
        nextSessions: ["19 Mars 2024", "16 Avril 2024"]
      },
      {
        title: "Vaccination à l'officine",
        slug: "vaccination-a-l-officine",
        image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Formation à la vaccination en pharmacie",
        nextSessions: ["26 Mars 2024", "23 Avril 2024"]
      }
    ]
  },
  {
    title: "Orthophonistes",
    slug: "orthophonistes",
    icon: FaBrain,
    color: "bg-[#3D6A6E]",
    image: GeneralistImg,
    description: "Formations spécialisées en orthophonie",
    formations: [
      {
        title: "Troubles du langage chez l'enfant",
        slug: "troubles-du-langage-enfant",
        image: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "HYBRIDE"],
        shortDescription: "Évaluation et prise en charge des troubles du langage",
        nextSessions: ["21 Mars 2024", "18 Avril 2024"]
      },
      {
        title: "Rééducation post-AVC",
        slug: "reeducation-post-avc",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Techniques de rééducation après un AVC",
        nextSessions: ["28 Mars 2024", "25 Avril 2024"]
      }
    ]
  },

  /*
  {
    title: "Cardiologie",
    icon: FaHeartbeat,
    color: "bg-[#6E92B4]",
    description: "Formations spécialisées en cardiologie et maladies cardiovasculaires",
    formations: [
      {
        title: "ECG en pratique quotidienne",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "HYBRIDE"],
        shortDescription: "Perfectionnement en lecture et interprétation des ECG",
        nextSessions: ["25 Mars 2024", "22 Avril 2024"]
      },
      {
        title: "Insuffisance cardiaque",
        image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2858&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Prise en charge moderne de l'insuffisance cardiaque",
        nextSessions: ["27 Mars 2024", "24 Avril 2024"]
      }
    ]
  },
  {
    title: "Pédiatrie",
    icon: FaBaby,
    color: "bg-[#546A75]",
    description: "Formations dédiées à la santé des enfants et des adolescents",
    formations: [
      {
        title: "Urgences pédiatriques",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Gestion des situations d'urgence en pédiatrie",
        nextSessions: ["1 Avril 2024", "29 Avril 2024"]
      },
      {
        title: "Développement de l'enfant",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2948&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Suivi du développement psychomoteur de l'enfant",
        nextSessions: ["5 Avril 2024", "3 Mai 2024"]
      }
    ]
  },
  {
    title: "Pneumologie",
    icon: FaLungs,
    color: "bg-[#3B567B]",
    description: "Formations spécialisées en pathologies respiratoires",
    formations: [
      {
        title: "BPCO et asthme",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2940&auto=format&fit=crop",
        duration: "21 heures",
        price: "1450€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 950€",
        tags: ["DPC", "E-LEARNING"],
        shortDescription: "Actualisation des connaissances sur la BPCO et l'asthme",
        nextSessions: ["3 Avril 2024", "1 Mai 2024"]
      },
      {
        title: "Exploration fonctionnelle respiratoire",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2940&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "PRESENTIEL"],
        shortDescription: "Maîtrise des techniques d'exploration fonctionnelle respiratoire",
        nextSessions: ["8 Avril 2024", "6 Mai 2024"]
      }
    ]
  }
  */
];