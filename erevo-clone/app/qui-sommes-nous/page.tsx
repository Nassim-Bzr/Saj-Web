"use client";
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function QuiSommesNous() {
  const teamMembers = [
    {
      name: "Dr. Sophie Laurent",
      role: "Directrice & Fondatrice",
      image: "/images/team/sophie-laurent.jpg",
      description: "Médecin spécialiste avec 20 ans d'expérience dans la formation médicale continue."
    },
    {
      name: "Dr. Thomas Dubois",
      role: "Responsable Pédagogique",
      image: "/images/team/thomas-dubois.jpg",
      description: "Expert en ingénierie pédagogique et en formation médicale digitale."
    },
    // Ajoutez d'autres membres selon vos besoins
  ];

  const values = [
    {
      title: "Excellence",
      icon: "🎯",
      description: "Nous nous engageons à fournir des formations de la plus haute qualité, basées sur les dernières avancées médicales."
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "Nous développons constamment de nouvelles approches pédagogiques pour optimiser l'apprentissage."
    },
    {
      title: "Proximité",
      icon: "🤝",
      description: "Nous maintenons une relation étroite avec nos apprenants pour répondre au mieux à leurs besoins."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB] py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-8">
            <Link href="/" className="text-[#C97435] hover:underline">Accueil</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Qui sommes-nous</span>
          </div>

          {/* Hero Section */}
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="relative h-96">
              <img
                src={'https://www.fmfpro.org/wp-content/uploads/2021/11/arton2266.jpg'}
                alt="Notre équipe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                <div className="p-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Former pour mieux soigner
                  </h1>
                  <p className="text-xl text-white/90">
                    Plus de 15 ans d'expertise dans la formation médicale continue
                  </p>
                </div>
              </div>
            </div>

            {/* Notre Histoire */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#2a394a] mb-6">Notre Histoire</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Fondée en 2008 par une équipe de professionnels de santé passionnés, notre organisme 
                  s'est donné pour mission d'améliorer les compétences des professionnels de santé à 
                  travers des formations innovantes et personnalisées.
                </p>
                <p className="mb-4">
                  Au fil des années, nous avons développé une expertise unique dans la formation 
                  médicale continue, en nous adaptant constamment aux évolutions du secteur de la santé 
                  et aux besoins des professionnels.
                </p>
              </div>
            </div>
          </div>

          {/* Nos Valeurs */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#2a394a] mb-8 text-center">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#2a394a] mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notre Équipe */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2a394a] mb-8 text-center">Notre Équipe</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-[#2a394a] mb-2">{member.name}</h3>
                      <p className="text-[#C97435] font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-6xl mx-auto mt-12 text-center">
            <div className="bg-[#2a394a] text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">
                Envie de rejoindre l'aventure ?
              </h2>
              <p className="mb-6">
                Découvrez nos formations et participez à l'amélioration des soins de demain
              </p>
              <Link 
                href="/#formations"
                className="inline-block bg-[#C97435] text-white py-3 px-6 rounded-md hover:bg-[#A65E2A] transition-colors duration-200 font-bold"
              >
                Voir nos formations
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 