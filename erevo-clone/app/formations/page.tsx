"use client";
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

interface Formation {
  id: string;
  title: string;
  specialty: string;
  imageUrl: string;
  duration: string;
  price: string;
  tags: string[];
  shortDescription: string;
}

export default function Formations() {
  const formations: Formation[] = [
    {
      id: "1",
      title: "Le patient Alzheimer",
      specialty: "Gériatrie",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      duration: "14 heures",
      price: "441.8€",
      tags: ["DPC", "PERSO"],
      shortDescription: "Formation approfondie sur la prise en charge des patients atteints d'Alzheimer."
    },
    {
      id: "2",
      title: "Urgences pédiatriques",
      specialty: "Pédiatrie",
      imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      duration: "21 heures",
      price: "590€",
      tags: ["DPC", "URGENT"],
      shortDescription: "Maîtrisez la prise en charge des urgences pédiatriques courantes et graves."
    },
    {
      id: "3",
      title: "Chirurgie mini-invasive",
      specialty: "Chirurgie",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      duration: "28 heures",
      price: "890€",
      tags: ["SPECIALISATION", "PRATIQUE"],
      shortDescription: "Techniques avancées de chirurgie mini-invasive et laparoscopique."
    },
    {
      id: "4",
      title: "Diabète de type 2",
      specialty: "Médecine Générale",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      duration: "7 heures",
      price: "290€",
      tags: ["DPC", "CHRONIQUE"],
      shortDescription: "Actualisation des connaissances sur la prise en charge du diabète de type 2."
    },
    {
      id: "5",
      title: "Psychiatrie de l'adolescent",
      specialty: "Psychiatrie",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      duration: "14 heures",
      price: "445€",
      tags: ["DPC", "SPECIALISATION"],
      shortDescription: "Comprendre et traiter les troubles psychiatriques spécifiques à l'adolescence."
    },
    {
      id: "6",
      title: "Échographie obstétricale",
      specialty: "Gynécologie",
      imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0",
      duration: "35 heures",
      price: "1290€",
      tags: ["TECHNIQUE", "PRATIQUE"],
      shortDescription: "Formation pratique aux techniques d'échographie obstétricale."
    },
    {
      id: "7",
      title: "Implantologie avancée",
      specialty: "Dentisterie",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
      duration: "42 heures",
      price: "1890€",
      tags: ["SPECIALISATION", "PRATIQUE"],
      shortDescription: "Techniques avancées en implantologie dentaire."
    },
    {
      id: "8",
      title: "Cardiologie interventionnelle",
      specialty: "Cardiologie",
      imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd",
      duration: "28 heures",
      price: "990€",
      tags: ["TECHNIQUE", "SPECIALISATION"],
      shortDescription: "Perfectionnement en cardiologie interventionnelle."
    },
    {
      id: "9",
      title: "Nutrition et cancer",
      specialty: "Oncologie",
      imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975",
      duration: "14 heures",
      price: "445€",
      tags: ["DPC", "SUPPORT"],
      shortDescription: "Prise en charge nutritionnelle du patient cancéreux."
    },
    {
      id: "10",
      title: "Urgences traumatologiques",
      specialty: "Médecine d'urgence",
      imageUrl: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34",
      duration: "21 heures",
      price: "690€",
      tags: ["URGENT", "PRATIQUE"],
      shortDescription: "Gestion des traumatismes en situation d'urgence."
    },
    {
      id: "11",
      title: "Dermatologie esthétique",
      specialty: "Dermatologie",
      imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370",
      duration: "28 heures",
      price: "990€",
      tags: ["SPECIALISATION", "TECHNIQUE"],
      shortDescription: "Techniques avancées en dermatologie esthétique."
    },
    {
      id: "12",
      title: "Soins palliatifs",
      specialty: "Médecine Générale",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      duration: "21 heures",
      price: "590€",
      tags: ["DPC", "ETHIQUE"],
      shortDescription: "Accompagnement des patients en fin de vie."
    },
    {
      id: "13",
      title: "Orthodontie invisible",
      specialty: "Dentisterie",
      imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
      duration: "35 heures",
      price: "1490€",
      tags: ["TECHNIQUE", "SPECIALISATION"],
      shortDescription: "Maîtrise des techniques d'orthodontie invisible."
    },
    {
      id: "14",
      title: "Troubles du sommeil",
      specialty: "Neurologie",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
      duration: "14 heures",
      price: "445€",
      tags: ["DPC", "CHRONIQUE"],
      shortDescription: "Diagnostic et traitement des troubles du sommeil."
    },
    {
      id: "15",
      title: "Médecine du sport",
      specialty: "Médecine Générale",
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      duration: "21 heures",
      price: "690€",
      tags: ["SPECIALISATION", "PRATIQUE"],
      shortDescription: "Prise en charge des pathologies liées au sport."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB] py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto mb-8">
            <Link href="/" className="text-[#C97435] hover:underline">Accueil</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Formations</span>
          </div>

          {/* Header */}
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2a394a] mb-4">
              Nos Formations
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'ensemble de nos formations médicales continues, conçues pour enrichir vos compétences professionnelles.
            </p>
          </div>

          {/* Filtres */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Rechercher une formation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435] focus:border-transparent"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435] focus:border-transparent">
                  <option value="">Toutes les spécialités</option>
                  <option value="geriatrie">Gériatrie</option>
                  <option value="pediatrie">Pédiatrie</option>
                  {/* Ajoutez d'autres options */}
                </select>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435] focus:border-transparent">
                  <option value="">Type de formation</option>
                  <option value="DPC">DPC</option>
                  <option value="PERSO">Personnel</option>
                </select>
                <button className="bg-[#C97435] text-white px-6 py-2 rounded-md hover:bg-[#A65E2A] transition-colors duration-200">
                  Filtrer
                </button>
              </div>
            </div>
          </div>

          {/* Liste des formations */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {formations.map((formation) => (
                <Link 
                  href={`/formation/${formation.id}`}
                  key={formation.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="relative h-48">
                    <img
                      src={formation.imageUrl}
                      alt={formation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {formation.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#2a394a] text-white text-xs font-bold px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#2a394a]">
                        {formation.title}
                      </h3>
                      <span className="text-[#C97435] font-bold">
                        {formation.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {formation.shortDescription}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{formation.specialty}</span>
                      <span>{formation.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="max-w-7xl mx-auto mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Précédent
              </button>
              <button className="px-4 py-2 bg-[#C97435] text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 