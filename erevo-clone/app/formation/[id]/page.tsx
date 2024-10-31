"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function FormationDetail() {
  const params = useParams();

  const formation = {
    id: params.id,
    title: "Le patient Alzheimer",
    label: "Programme intégré",
    imageUrl: "/images/formations/alzheimer.jpg",
    tags: ["DPC", "PERSO"],
    specialty: "Gériatrie",
    duration: "14 heures",
    price: "441.8€",
    description: "Formation approfondie sur la prise en charge des patients atteints d'Alzheimer.",
    fullDescription: `
      Cette formation complète vous permettra de maîtriser la prise en charge des patients atteints d'Alzheimer.
      
      Objectifs pédagogiques :
      - Comprendre la maladie d'Alzheimer et ses manifestations
      - Maîtriser les techniques de communication adaptées
      - Gérer les troubles du comportement
      - Accompagner les familles
      
      Programme détaillé :
      1. Comprendre la maladie
         - Physiopathologie
         - Symptômes et évolution
         - Diagnostic et traitements actuels
      
      2. Communication et relation d'aide
         - Techniques de communication verbale et non verbale
         - Adaptation à l'évolution de la maladie
         - Gestion des situations difficiles
      
      3. Accompagnement au quotidien
         - Maintien de l'autonomie
         - Activités adaptées
         - Prévention des complications
    `,
    dates: ["15 Mars 2024", "22 Mars 2024"],
    location: "Paris",
    formateur: {
      name: "Dr. Marie Martin",
      title: "Gériatre - Spécialiste Alzheimer",
      experience: "15 ans d'expérience"
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#FDF5EB] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-[#C97435] hover:underline">Accueil</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/#formations" className="text-[#C97435] hover:underline">Formations</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">{formation.title}</span>
          </div>

          {/* En-tête de la formation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-64">
              <img
                src={formation.imageUrl}
                alt={formation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#2a394a] text-white text-sm font-bold px-3 py-1 rounded-md">
                  {formation.label}
                </span>
                <span className="bg-[#C97435] text-white text-sm font-bold px-3 py-1 rounded-md">
                  {formation.specialty}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-[#2a394a] mb-4">{formation.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2 text-[#C97435]"></i>
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-[#C97435]"></i>
                  <span>{formation.location}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-euro-sign mr-2 text-[#C97435]"></i>
                  <span>{formation.price}</span>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                {formation.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Formateur */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-[#2a394a] mb-2">Formateur</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-[#2a394a]">{formation.formateur.name}</p>
                    <p className="text-sm text-gray-600">{formation.formateur.title}</p>
                    <p className="text-sm text-gray-600">{formation.formateur.experience}</p>
                  </div>
                </div>
              </div>

              {/* Dates disponibles */}
              <div className="mb-6">
                <h3 className="font-bold text-[#2a394a] mb-2">Dates disponibles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {formation.dates.map((date, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                      {date}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description détaillée */}
              <div className="prose max-w-none">
                <h3 className="font-bold text-[#2a394a] mb-2">Description détaillée</h3>
                <div className="whitespace-pre-line text-gray-700">
                  {formation.fullDescription}
                </div>
              </div>

              {/* Bouton d'inscription */}
              <div className="mt-8">
                <button className="w-full bg-[#C97435] text-white py-3 px-6 rounded-md hover:bg-[#A65E2A] transition-colors duration-200 font-bold">
                  S'inscrire à cette formation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <Footer />
    </>
  );
}
