import { FaClinicMedical, FaTooth, FaStethoscope, FaHandHoldingHeart, 
         FaUserMd, FaHospital, FaBrain, FaBaby, FaHeartbeat, FaLungs } from 'react-icons/fa';

export const formationsData = [
  {
    title: "Médecine Générale",
    icon: FaUserMd,
    color: "bg-[#5DA3A5]",
    description: "Formations adaptées aux médecins généralistes pour une pratique actualisée",
    formations: [
      {
        title: "Actualités en médecine générale 2024",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop",
        duration: "14 heures",
        price: "980€",
        funding: "Formation 100% prise en charge",
        indemnisation: "Indemnisation jusqu'à 730€",
        tags: ["DPC", "PRESENTIEL", "E-LEARNING"],
        shortDescription: "Mise à jour des connaissances sur les dernières recommandations et pratiques en médecine générale",
        nextSessions: ["15 Mars 2024", "12 Avril 2024", "10 Mai 2024"]
      },
      {
        title: "Prise en charge du diabète de type 2",
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
];
