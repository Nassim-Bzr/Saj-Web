"use client";

import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Formations",
    question: "Comment s'inscrire à une formation ?",
    answer: "Pour vous inscrire à une formation, il vous suffit de sélectionner la formation qui vous intéresse, de cliquer sur 'S'inscrire à cette formation' et de remplir le formulaire d'inscription. Nous vous contacterons ensuite pour confirmer votre inscription."
  },
  {
    category: "Formations",
    question: "Les formations sont-elles prises en charge ?",
    answer: "Oui, nos formations sont éligibles à une prise en charge par les OPCO et le FIF-PL. Le montant de la prise en charge dépend de votre situation professionnelle et de votre organisme financeur."
  },
  {
    category: "Formations",
    question: "Puis-je annuler mon inscription ?",
    answer: "Vous pouvez annuler votre inscription jusqu'à 14 jours avant le début de la formation. Au-delà de ce délai, des frais d'annulation peuvent s'appliquer."
  },
  {
    category: "Paiement",
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte bancaire, virement bancaire et chèque. Le paiement peut être effectué en plusieurs fois selon les modalités convenues."
  },
  {
    category: "Paiement",
    question: "Comment obtenir une facture ?",
    answer: "Une facture vous est automatiquement envoyée par email après le paiement de votre formation. Vous pouvez également la retrouver dans votre espace personnel."
  },
  {
    category: "Technique",
    question: "Comment se déroulent les formations en ligne ?",
    answer: "Les formations en ligne se déroulent via notre plateforme d'apprentissage. Vous recevrez vos identifiants de connexion par email après votre inscription. La plateforme est accessible 24h/24 et 7j/7."
  },
  {
    category: "Technique",
    question: "Que faire en cas de problème technique ?",
    answer: "En cas de problème technique, vous pouvez contacter notre support technique par email ou par téléphone. Nous nous engageons à vous répondre dans les plus brefs délais."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = activeCategory === "Toutes" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#FDF5EB] to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A394A] mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez ici les réponses aux questions les plus fréquemment posées sur nos formations et nos services.
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("Toutes")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === "Toutes"
                  ? "bg-[#C97435] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-[#C97435] hover:text-white"}`}
            >
              Toutes les questions
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === category
                    ? "bg-[#C97435] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-[#C97435] hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Liste des FAQ */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-[#2A394A]">{item.question}</span>
                  <FaChevronDown
                    className={`text-[#C97435] transition-transform duration-200 
                      ${openItems.includes(index) ? 'transform rotate-180' : ''}`}
                  />
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 text-gray-600">
                      {item.answer}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#FDF5EB] text-[#C97435] text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section de contact */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-[#2A394A] mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#C97435] to-[#A65E2A] text-white rounded-lg hover:from-[#A65E2A] hover:to-[#8B4E23] transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 