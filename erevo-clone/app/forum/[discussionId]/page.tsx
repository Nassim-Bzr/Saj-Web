"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { FaUser, FaCalendar, FaTag, FaEye, FaComment } from 'react-icons/fa';

// Données de test (à remplacer par une vraie API)
const discussionsData = {
  '1': {
    id: '1',
    title: "Retour d'expérience : Formation Manifestations dermatologiques",
    author: "Dr. Martin",
    date: "2024-03-20",
    category: "Médecine Générale",
    tags: ["Formation", "Dermatologie", "DPC"],
    replies: 15,
    views: 234,
    content: "J'ai récemment suivi la formation sur les manifestations dermatologiques. Je trouve que le contenu était très pertinent, notamment sur le diagnostic différentiel des lésions cutanées. Les cas cliniques présentés étaient très instructifs et représentatifs de notre pratique quotidienne. \n\nPoints forts de la formation :\n- Qualité des supports visuels\n- Interactivité avec les formateurs\n- Mise en pratique immédiate\n\nJe recommande vivement cette formation à tous les médecins généralistes qui souhaitent actualiser leurs connaissances en dermatologie.",
    comments: [
      {
        author: "Dr. Sophie",
        date: "2024-03-21",
        content: "Merci pour ce retour détaillé ! Je suis inscrite pour la prochaine session."
      },
      {
        author: "Dr. Pierre",
        date: "2024-03-21",
        content: "Avez-vous abordé la partie sur les dermatoses professionnelles ?"
      }
    ]
  },
  // ... autres discussions
};

export default function DiscussionPage() {
  const params = useParams();
  const discussionId = params.discussionId as string;
  const discussion = discussionsData[discussionId];

  if (!discussion) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FDF5EB] flex items-center justify-center">
          <div className="text-xl">Discussion non trouvée</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-3xl font-bold text-[#2A394A] mb-4">
              {discussion.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <FaUser className="text-[#C97435]" />
                {discussion.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendar className="text-[#C97435]" />
                {discussion.date}
              </span>
              <span className="flex items-center gap-2">
                <FaEye className="text-[#C97435]" />
                {discussion.views} vues
              </span>
              <span className="flex items-center gap-2">
                <FaComment className="text-[#C97435]" />
                {discussion.replies} réponses
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {discussion.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#FDF5EB] text-[#C97435] text-sm rounded-full flex items-center gap-1"
                >
                  <FaTag className="text-xs" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none mb-8">
              {discussion.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Réponses</h2>
              {discussion.comments.map((comment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                    <FaUser className="text-[#C97435]" />
                    <span>{comment.author}</span>
                    <span>•</span>
                    <span>{comment.date}</span>
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 