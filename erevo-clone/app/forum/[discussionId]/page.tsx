"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { FaUser, FaCalendar, FaTag, FaEye, FaComment } from 'react-icons/fa';

// Définir les types
type Comment = {
  author: string;
  date: string;
  content: string;
};

type Discussion = {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  replies: number;
  views: number;
  content: string;
  comments: Comment[];
};

type DiscussionsData = {
  [key: string]: Discussion;
};

// Données de test avec le type correct
const discussionsData: DiscussionsData = {
  '1': {
    id: '1',
    title: "Retour d'expérience : Formation Manifestations dermatologiques",
    author: "Dr. Martin",
    date: "2024-03-20",
    category: "Médecine Générale",
    tags: ["Formation", "Dermatologie", "DPC"],
    replies: 15,
    views: 234,
    content: "J'ai récemment suivi la formation sur les manifestations dermatologiques...",
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
  '2': {
    id: '2',
    title: "Questions sur la formation Diabète de type 2",
    author: "Dr. Dubois",
    date: "2024-03-19",
    category: "Médecine Générale",
    tags: ["Diabétologie", "E-learning", "DPC"],
    replies: 8,
    views: 156,
    content: "Je m'apprête à suivre la formation sur le diabète de type 2...",
    comments: [
      {
        author: "Dr. Laurent",
        date: "2024-03-20",
        content: "J'ai suivi cette formation le mois dernier, la partie sur les nouvelles thérapeutiques est très complète."
      }
    ]
  },
  '3': {
    id: '3',
    title: "Retour sur la formation Implantologie avancée",
    author: "Dr. Moreau",
    date: "2024-03-18",
    category: "Chirurgien-dentiste",
    tags: ["Implantologie", "Présentiel", "DPC"],
    replies: 12,
    views: 189,
    content: "Excellente formation en implantologie !...",
    comments: [
      {
        author: "Dr. Garcia",
        date: "2024-03-19",
        content: "Je confirme, les TP sont vraiment bien organisés."
      }
    ]
  },
  '4': {
    id: '4',
    title: "Formation Soins palliatifs - Groupe d'échange",
    author: "Inf. Bernard",
    date: "2024-03-17",
    category: "Infirmier",
    tags: ["Soins palliatifs", "E-learning", "Retour d'expérience"],
    replies: 20,
    views: 278,
    content: "Je propose de créer un groupe d'échange...",
    comments: [
      {
        author: "Inf. Martinez",
        date: "2024-03-18",
        content: "Excellente initiative ! Je suis partante pour participer aux échanges."
      }
    ]
  }
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