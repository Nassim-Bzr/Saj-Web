"use client";
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaChartLine, FaCertificate, 
         FaHandshake, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';

export default function QuiSommesNous() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: "15K+", label: "Apprenants formés" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "100%", label: "Prise en charge" },
    { number: "950€", label: "Indemnisation max" }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-[#C97435]" />,
      title: "Engagement",
      description: "Un accompagnement personnalisé tout au long de votre parcours"
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#C97435]" />,
      title: "Innovation",
      description: "Des méthodes pédagogiques innovantes et adaptées"
    },
    {
      icon: <FaUsers className="text-4xl text-[#C97435]" />,
      title: "Collaboration",
      description: "Une approche collaborative et participative"
    },
    {
      icon: <FaAward className="text-4xl text-[#C97435]" />,
      title: "Excellence",
      description: "Une exigence de qualité dans tous nos programmes"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Thomas Laurent",
      role: "Président Fondateur",
      image: "https://thispersondoesnotexist.com/",
      description: "Expert en formation médicale continue depuis plus de 15 ans"
    },
    {
      name: "Dr. Marie Dubois",
      role: "Directrice Pédagogique",
      image: "https://thispersondoesnotexist.com/",
      description: "Spécialiste en innovation pédagogique et e-learning"
    },
    {
      name: "Dr. Alexandre Martin",
      role: "Responsable Scientifique",
      image: "https://thispersondoesnotexist.com/",
      description: "Expert en développement de programmes DPC"
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Hero Section Améliorée */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-[#2A394A] text-white py-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A394A] to-[#3D4F63] opacity-90"></div>
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="container mx-auto px-4 relative z-10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6">
                Apprendre avec <span className="text-[#C97435]">intelligence</span> et <span className="text-[#C97435]">discernement</span>
              </h1>
              <p className="text-2xl opacity-90 mb-12">
                Voici la signification de METADEAL !
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-4xl font-bold text-[#C97435] mb-2">{stat.number}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Nos Valeurs - Section améliorée */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#2A394A] mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des valeurs fortes qui guident chacune de nos actions
              </p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#2A394A] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Notre Mission - Section améliorée */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-[#2A394A]"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-8">Notre Mission</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#C97435]">Formation Continue</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Nous nous engageons à fournir des formations médicales continues de haute qualité, 
                    adaptées aux besoins spécifiques de chaque professionnel de santé.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#C97435]">Innovation Pédagogique</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Notre approche pédagogique innovante combine théorie et pratique pour une 
                    expérience d'apprentissage optimale.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification et Chiffres Clés */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-r from-[#2A394A] to-[#3D4F63] rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-12 text-white">
                <div className="flex items-center justify-center mb-8">
                  <FaCertificate className="text-7xl text-[#C97435]" />
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Notre certification QUALIOPI
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-[#C97435] mb-2">+10 ans</div>
                    <div className="text-sm opacity-80">d'expertise certifiée</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-[#C97435] mb-2">95%</div>
                    <div className="text-sm opacity-80">de satisfaction</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-[#C97435] mb-2">100%</div>
                    <div className="text-sm opacity-80">prise en charge</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Notre Équipe */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2A394A] mb-4">Notre Équipe</h2>
              <p className="text-xl text-gray-600">
                Des experts passionnés à votre service
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#2A394A] mb-2">{member.name}</h3>
                    <p className="text-[#C97435] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action Amélioré */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-[#FDF5EB]"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#2A394A] text-white rounded-2xl p-12 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6">
                  Prêt à développer vos compétences ?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Rejoignez plus de 15 000 professionnels de santé qui nous font confiance
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/formations"
                    className="inline-block bg-[#C97435] text-white py-4 px-8 rounded-full text-lg font-bold hover:bg-[#A65E2A] transition-colors duration-200"
                  >
                    Découvrir nos formations
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
} 