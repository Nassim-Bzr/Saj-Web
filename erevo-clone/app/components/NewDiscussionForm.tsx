"use client";

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface NewDiscussionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewDiscussionForm({ isOpen, onClose }: NewDiscussionFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour soumettre la nouvelle discussion
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-2xl mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#2A394A] mb-6">Créer une nouvelle discussion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre de la discussion
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                required
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="Médecine Générale">Médecine Générale</option>
                <option value="Chirurgien-dentiste">Chirurgien-dentiste</option>
                <option value="Infirmier">Infirmier</option>
                <option value="Spécialités">Spécialités</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags (séparés par des virgules)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                placeholder="ex: Formation, DPC, E-learning"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu de la discussion
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C97435] min-h-[200px]"
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-[#C97435] text-white px-6 py-2 rounded-full hover:bg-[#A65E2A] transition-colors duration-200"
              >
                Publier la discussion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 