"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import logo_MetaDeal from '../../public/images/logo_Metadeal2.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);

  const pathname = usePathname();

  

  return (
    <nav className="bg-[#2A394A] text-[#D8893F] shadow-md sticky top-0 z-50 font-rubik">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold flex text-[#D8893F] font-rubik tracking-tight">
           <Link href="/">
             
            <img src={logo_MetaDeal.src} alt="Logo METADEAL" width={'350px'} height={'350px'}  className="ml-[-50px]"  />
            </Link> 
          </div>
          {/* Menu de navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu className="bg-[#2A394A]">
              <NavigationMenuList className="bg-[#2A394A] group">
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-[#2A394A] text-[#D8893F] font-rubik font-medium tracking-wide text-sm uppercase
                    hover:text-white hover:bg-[#3A495A] 
                    data-[state=open]:bg-[#3A495A] data-[state=open]:text-white 
                    duration-200 outline-none focus:outline-none
                    group-hover:pointer-events-auto"
                  >
                    <Link href="/formations" className="flex items-center">
                      Formations
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#2A394A] rounded-md shadow-lg p-4 border border-[#C97435]">
                    <div className="grid grid-cols-2 gap-4 min-w-[400px]">
                      <Link href="/formations/medecine-generale" className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Medecine Générale
                      </Link>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Medecine Interne
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Chirurgie
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Psychiatrie
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Pediatrie
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Gynécologie
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Gériatrie
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2 hover:bg-[#3A495A] rounded-md text-[#C97435] hover:text-white transition-colors duration-200 font-rubik font-medium text-sm tracking-wide">
                        Dentisterie
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              href="/qui-sommes-nous" 
              className={`hover:text-white transition-colors duration-200 font-rubik font-medium text-sm uppercase tracking-wide`}
            >
              Qui sommes-nous
            </Link>
            <Link 
              href="/faq" 
              className="hover:text-white font-rubik font-medium text-sm uppercase tracking-wide transition duration-200"
            >
              FAQ
            </Link>
          </div>

          {/* Searchbar - Version desktop et tablette */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-2 lg:mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Rechercher une formation" 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:border-[#C97435] font-rubik text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C97435] hover:text-[#b8612a] transition duration-200">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bouton demande d'informations */}
          <div className="hidden md:block">
            <button 
              onClick={() => setShowInfoForm(true)}
              className="px-3 lg:px-4 py-2 bg-[#C97435] text-white hover:bg-[#A65E2A] rounded-full transition-colors duration-200 text-xs lg:text-sm whitespace-nowrap"
            >
              Demande d'informations
            </button>
          </div>

          {/* Menu burger pour mobile - reste inchangé */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path 
                fillRule="evenodd" 
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile - reste inchangé */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="px-2 pt-2 pb-3 space-y-4">
              {/* Barre de recherche - Version mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une formation"
                  className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C97435]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </button>
              </div>

              <Link 
                href="/formations" 
                className="block px-3 py-2 text-base font-medium hover:text-white"
              >
                Formations
              </Link>
              <Link 
                href="/qui-sommes-nous" 
                className="block px-3 py-2 text-base font-medium hover:text-white"
              >
                Qui sommes-nous ?
              </Link>
              <Link 
                href="/faq" 
                className="block px-3 py-2 text-base font-medium hover:text-white"
              >
                FAQ
              </Link>
              <button 
                onClick={() => setShowInfoForm(true)}
                className="w-full bg-[#C97435] text-white py-2 px-4 rounded-full hover:bg-[#A65E2A] transition duration-200 text-sm"
              >
                Demande d'informations
              </button>
            </div>
          </div>
        )}
      {/* Bouton demande d'informations */}
 

      {/* Modal formulaire */}
      {showInfoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              {/* Formulaire */}
              <div className="w-full lg:w-2/3 p-8">
                <div className="flex mb-6">
                  <h1 className="font-bold text-3xl text-[#2A394A]">
                    Demande d'informations<br />
                    <span className="text-[#C97435] text-xl font-normal">Nous vous répondrons dans les plus brefs délais</span>
                  </h1>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Nom*"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    />
                    <input
                      type="text"
                      placeholder="Prénom*"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    />
                    <select
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    >
                      <option value="">Sélectionnez votre profession*</option>
                      <option>Médecin</option>
                      <option>Infirmier</option>
                      <option>Pharmacien</option>
                      <option>Autre</option>
                    </select>
                    <input
                      type="date"
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    />
                    <select
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    >
                      <option value="">Sélectionnez un créneau horaire*</option>
                      <option>Matin (9h-12h)</option>
                      <option>Après-midi (14h-17h)</option>
                      <option>Soirée (17h-19h)</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <textarea
                      placeholder="Votre message*"
                      rows={4}
                      className="w-full bg-gray-100 text-gray-900 p-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#C97435]"
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowInfoForm(false)}
                      className="px-6 py-3 text-[#C97435] font-medium rounded-full hover:bg-gray-100 transition duration-200"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#C97435] text-white font-medium rounded-full hover:bg-[#A65E2A] transition duration-200"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="w-full lg:w-1/3 bg-[#2A394A] p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-[#C97435]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-[#C97435]">Notre adresse</h3>
                      <p className="text-gray-300">123 rue de la Formation<br />75000 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-[#C97435]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-[#C97435]">Email</h3>
                      <p className="text-gray-300">contact@metadeal.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-[#C97435]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-[#C97435]">Horaires</h3>
                      <p className="text-gray-300">Du lundi au vendredi<br />9h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
{/* Ajout de la classe text-[#C97435] pour rendre "Qui sommes-nous" orange comme les autres liens */}
<style jsx>{`
  .nav-link {
    @apply text-[#C97435] hover:text-[#b8612a] transition-colors duration-200;
  }
`}</style>
