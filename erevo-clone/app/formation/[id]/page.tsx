"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { useState } from 'react';

export default function FormationDetail() {
  const params = useParams();
  const [showInscriptionForm, setShowInscriptionForm] = useState(false);

  // Simuler les données de la formation
  const formation = {
    id: params.id,
    title: "Le patient Alzheimer",
    label: "Programme intégré",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
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
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      experience: "15 ans d'expérience"
    },
    prochaineSessions: [
      { date: "15 Mars 2024", places: 5 },
      { date: "22 Mars 2024", places: 8 },
      { date: "12 Avril 2024", places: 12 }
    ]
  };

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    profession: '',
    session: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoutez ici la logique d'envoi du formulaire
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB] py-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-black">
          <Image
            src={formation.imageUrl}
            alt={formation.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-end pb-16">
              <div className="max-w-3xl">
                <div className="flex gap-2 mb-4">
                  {formation.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#C97435] text-white text-sm font-bold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  {formation.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {formation.description}
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock"></i>
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{formation.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-euro-sign"></i>
                    <span>{formation.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="md:col-span-2">
              {/* Programme détaillé */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#2a394a] mb-6">
                  Programme détaillé
                </h2>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700">
                    {formation.fullDescription}
                  </div>
                </div>
              </div>

              {/* Formateur */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#2a394a] mb-6">
                  Votre formateur
                </h2>
                <div className="flex items-center gap-6">
                  <Image
                    src={formation.formateur.image}
                    alt={formation.formateur.name}
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#2a394a]">
                      {formation.formateur.name}
                    </h3>
                    <p className="text-[#C97435] font-medium">
                      {formation.formateur.title}
                    </p>
                    <p className="text-gray-600 mt-2">
                      {formation.formateur.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Card d'inscription */}
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#2a394a] mb-4">
                  S'inscrire à la formation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={formData.prenom}
                      onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Session
                    </label>
                    <select
                      value={formData.session}
                      onChange={(e) => setFormData({...formData, session: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                      required
                    >
                      <option value="">Sélectionnez une session</option>
                      {formation.prochaineSessions.map((session, idx) => (
                        <option key={idx} value={session.date}>
                          {session.date} ({session.places} places)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C97435] text-white py-3 px-6 rounded-md hover:bg-[#A65E2A] transition-colors duration-200 font-bold"
                  >
                    S'inscrire maintenant
                  </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Prix : {formation.price}</p>
                  <p className="mt-1">Formation éligible au DPC</p>
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
