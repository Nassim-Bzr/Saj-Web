"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaSearch, FaComment, FaUser, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import NewDiscussionForm from '../components/NewDiscussionForm';

// Types pour la gestion des discussions
type Discussion = {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  replies: number;
  views: number;
  content?: string;
  lastReply: {
    author: string;
    date: string;
  };
};

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isNewDiscussionOpen, setIsNewDiscussionOpen] = useState(false);

  // Données de test basées sur les formations
  const discussions: Discussion[] = [
    {
      id: '1',
      title: "Retour d'expérience : Formation Manifestations dermatologiques",
      author: "Dr. Martin",
      date: "2024-03-20",
      category: "Médecine Générale",
      tags: ["Formation", "Dermatologie", "DPC"],
      replies: 15,
      views: 234,
      content: "J'ai récemment suivi la formation sur les manifestations dermatologiques. Je trouve que le contenu était très pertinent, notamment sur le diagnostic différentiel des lésions cutanées...",
      lastReply: {
        author: "Dr. Sophie",
        date: "2024-03-21"
      }
    },
    {
      id: '2',
      title: "Questions sur la formation Diabète de type 2",
      author: "Dr. Dubois",
      date: "2024-03-19",
      category: "Médecine Générale",
      tags: ["Diabétologie", "E-learning", "DPC"],
      replies: 8,
      views: 156,
      content: "Je m'apprête à suivre la formation sur le diabète de type 2. Est-ce que des confrères l'ont déjà suivie ? Je voudrais notamment savoir si la partie sur les nouvelles thérapeutiques est bien développée.",
      lastReply: {
        author: "Dr. Laurent",
        date: "2024-03-20"
      }
    },
    {
      id: '3',
      title: "Retour sur la formation Implantologie avancée",
      author: "Dr. Moreau",
      date: "2024-03-18",
      category: "Chirurgien-dentiste",
      tags: ["Implantologie", "Présentiel", "DPC"],
      replies: 12,
      views: 189,
      content: "Excellente formation en implantologie ! Les travaux pratiques étaient particulièrement enrichissants. Je recommande vivement à tous les confrères qui souhaitent se perfectionner.",
      lastReply: {
        author: "Dr. Garcia",
        date: "2024-03-19"
      }
    },
    {
      id: '4',
      title: "Formation Soins palliatifs - Groupe d'échange",
      author: "Inf. Bernard",
      date: "2024-03-17",
      category: "Infirmier",
      tags: ["Soins palliatifs", "E-learning", "Retour d'expérience"],
      replies: 20,
      views: 278,
      content: "Je propose de créer un groupe d'échange pour ceux qui suivent actuellement la formation en soins palliatifs. Nous pourrions partager nos expériences et nos questionnements.",
      lastReply: {
        author: "Inf. Martinez",
        date: "2024-03-18"
      }
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        {/* Hero Section */}
        <div className="bg-[#2A394A] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Forum des Professionnels de Santé</h1>
            <p className="text-xl opacity-90">Échangez, partagez et apprenez avec vos pairs</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Barre de recherche et filtres */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Rechercher dans les discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
              >
                <option value="all">Toutes les catégories</option>
                <option value="general">Médecine Générale</option>
                <option value="speciality">Spécialités</option>
                <option value="formation">Formations</option>
              </select>
              <button
                onClick={() => setIsNewDiscussionOpen(true)}
                className="bg-[#C97435] text-white px-6 py-2 rounded-full hover:bg-[#A65E2A] transition-colors duration-200"
              >
                Nouvelle Discussion
              </button>
            </div>
          </div>

          {/* Liste des discussions */}
          <div className="bg-white rounded-xl shadow-lg">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <Link href={`/forum/${discussion.id}`}>
                      <h3 className="text-xl font-semibold text-[#2A394A] hover:text-[#C97435] cursor-pointer">
                        {discussion.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-[#C97435]" />
                        {discussion.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-[#C97435]" />
                        {discussion.replies} réponses
                      </span>
                      <span>{discussion.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
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
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>Dernière réponse</div>
                    <div className="font-medium text-[#C97435]">{discussion.lastReply.author}</div>
                    <div>{discussion.lastReply.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewDiscussionForm 
        isOpen={isNewDiscussionOpen}
        onClose={() => setIsNewDiscussionOpen(false)}
      />
      <Footer />
    </>
  );
} 