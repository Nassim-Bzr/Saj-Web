"use client";

import { useState } from 'react';
import { formationsData } from '@/app/lib/data/formations';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
    formationSlug: string;
  };
}

export default function InscriptionPage({ params }: PageProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    profession: '',
    rpps: '',
    adresse: '',
    ville: '',
    codePostal: '',
    session: '',
    commentaire: ''
  });

  const category = formationsData.find(
    (cat) => cat.slug.toLowerCase() === params.slug
  );
  const formation = category?.formations.find(
    (f) => f.slug === params.formationSlug
  );

  if (!category || !formation) {
    return notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputStyle = "mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C97435] focus:ring-2 focus:ring-[#C97435] focus:ring-opacity-20 transition-all duration-200 bg-white shadow-sm";
  const labelStyle = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#FDF5EB] to-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-[250px]">
              {formation.image && (
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C97435]/90 to-[#2A394A]/90 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Inscription à la formation
                  </h1>
                  <p className="text-xl text-white/90">{formation.title}</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="bg-[#FDF5EB]/30 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-[#2A394A] mb-2">Informations importantes</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2">⏱️</span>
                    Durée: {formation.duration}
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2">💰</span>
                    Prix: {formation.price}
                  </li>
                  <li className="flex items-center text-green-600">
                    <span className="w-5 h-5 mr-2">✅</span>
                    {formation.funding}
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#2A394A] pb-2 border-b border-gray-200">
                      Informations personnelles
                    </h3>
                    <div>
                      <label className={labelStyle}>Nom</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Prénom</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Téléphone</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#2A394A] pb-2 border-b border-gray-200">
                      Informations professionnelles
                    </h3>
                    <div>
                      <label className={labelStyle}>Profession</label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Votre profession"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Numéro RPPS</label>
                      <input
                        type="text"
                        name="rpps"
                        value={formData.rpps}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Votre numéro RPPS"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Session souhaitée</label>
                      <select
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                      >
                        <option value="">Sélectionnez une session</option>
                        {formation.nextSessions.map((session, index) => (
                          <option key={index} value={session}>
                            {session}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2A394A] pb-2 border-b border-gray-200">
                    Adresse
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className={labelStyle}>Adresse complète</label>
                      <input
                        type="text"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Numéro et nom de rue"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Ville</label>
                      <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="Votre ville"
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Code Postal</label>
                      <input
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder="XXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Commentaire (optionnel)</label>
                  <textarea
                    name="commentaire"
                    value={formData.commentaire}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputStyle} resize-none`}
                    placeholder="Informations complémentaires..."
                  />
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[#C97435] to-[#A65E2A] text-white rounded-lg hover:from-[#A65E2A] hover:to-[#8B4E23] transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    Confirmer l'inscription
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 