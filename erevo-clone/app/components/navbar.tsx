"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2A394A] text-[#C97435] h-[70px] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#C97435]">
            metadeal<span className="text-[#FF7E5F]"></span>
          </div>

          {/* Searchbar - Visible uniquement sur desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Rechercher une formation" 
                className="w-full border border-gray-300 rounded-md p-2 pl-4 pr-10 focus:outline-none focus:border-[#C97435]" 
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#C97435] text-white px-3 py-1 rounded-md hover:bg-[#b8612a] transition duration-200">
                Rechercher
              </button>
            </div>
          </div>

          {/* Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-white font-nunito text-base font-medium transition duration-200">
              Formations
            </a>
            <a href="#" className="hover:text-white font-nunito text-base font-medium transition duration-200">
              Qui sommes-nous ?
            </a>
            <a href="#" className="hover:text-white font-nunito text-base font-medium transition duration-200">
              FAQ
            </a>
          </div>

          {/* Connexion et Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="bg-[#C97435] text-white font-medium py-2 px-4 rounded-full hover:bg-[#b8612a] transition duration-200">
              Se connecter
            </button>
            <a href="tel:0188555555" className="text-[#C97435] hover:text-white transition duration-200 font-medium">
              01 88 55 55 55
            </a>
          </div>

          {/* Menu burger pour mobile */}
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

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <input 
                type="text" 
                placeholder="Rechercher une formation" 
                className="w-full border border-gray-300 rounded-md p-2 mb-4" 
              />
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-white">
                Formations
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-white">
                Qui sommes-nous ?
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-white">
                FAQ
              </a>
              <button className="w-full bg-[#C97435] text-white font-medium py-2 px-4 rounded-full hover:bg-[#b8612a] transition duration-200 mt-4">
                Se connecter
              </button>
              <a href="tel:0188555555" className="block px-3 py-2 text-base font-medium text-center hover:text-white mt-2">
                01 88 55 55 55
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
