"use client";
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { useState } from 'react';
import FormationSteps from '../components/FormationSteps';

interface FAQItem {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const faqData: FAQItem[] = [
    {
      category: "general",
      questions: [
        {
          question: "Comment fonctionne le DPC ?",
          answer: "Le Développement Professionnel Continu (DPC) est un dispositif de formation réglementé. Il permet aux professionnels de santé de suivre des formations prises en charge financièrement. Chaque professionnel doit suivre un parcours minimal de formation tous les trois ans."
        },
        {
          question: "Les formations sont-elles certifiantes ?",
          answer: "Oui, toutes nos formations sont certifiantes et validantes pour le DPC. Une attestation de formation vous sera délivrée à l'issue du parcours."
        },
        {
          question: "Puis-je annuler ma formation ?",
          answer: "Oui, vous pouvez annuler votre formation jusqu'à 14 jours avant son début. Les conditions d'annulation complètes sont disponibles dans nos CGV."
        }
      ]
    },
    {
      category: "inscription",
      questions: [
        {
          question: "Comment s'inscrire à une formation ?",
          answer: "L'inscription se fait directement en ligne. Sélectionnez la formation qui vous intéresse, cliquez sur 'S'inscrire' et suivez les étapes. Vous recevrez une confirmation par email."
        },
        {
          question: "Quels sont les modes de paiement acceptés ?",
          answer: "Nous acceptons les paiements par carte bancaire, virement bancaire et via votre compte DPC. Des facilités de paiement peuvent être proposées pour certaines formations."
        }
      ]
    },
    {
      category: "technique",
      questions: [
        {
          question: "Comment se déroulent les formations en ligne ?",
          answer: "Nos formations en ligne se déroulent sur notre plateforme sécurisée. Vous recevrez vos identifiants de connexion par email. Les contenus sont accessibles 24h/24 et le support technique est disponible en semaine."
        },
        {
          question: "Que faire en cas de problème technique ?",
          answer: "Notre équipe support est disponible du lundi au vendredi de 9h à 18h. Vous pouvez nous contacter par email ou téléphone. Un guide de dépannage est également disponible dans votre espace personnel."
        }
      ]
    }
  ];



  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <>
      <Navbar />


      <div className="min-h-screen bg-[#FDF5EB] py-16">
        <h1 className="text-5xl font-bold text-[#2a394a] mb-4 leading-tight">
          Questions Fréquentes
        </h1>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link href="/" className="text-[#C97435] hover:underline">Accueil</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">FAQ</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2a394a] mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-gray-600">
              Retrouvez les réponses aux questions les plus fréquemment posées
            </p>
          </div>

          {/* Categories */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {["general", "inscription", "technique"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-[#C97435] text-white"
                      : "bg-white text-[#2a394a] hover:bg-[#2a394a] hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {faqData
              .find((item) => item.category === activeCategory)
              ?.questions.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() => toggleQuestion(`${activeCategory}-${index}`)}
                  >
                    <span className="font-medium text-[#2a394a]">{faq.question}</span>
                    <span className="text-[#C97435]">
                      {openQuestions.has(`${activeCategory}-${index}`) ? "−" : "+"}
                    </span>
                  </button>
                  {openQuestions.has(`${activeCategory}-${index}`) && (
                    <div className="px-6 py-4 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-[#2a394a] mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C97435] text-white px-6 py-3 rounded-md hover:bg-[#A65E2A] transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
   

      <Footer />
    </>
  );
} 