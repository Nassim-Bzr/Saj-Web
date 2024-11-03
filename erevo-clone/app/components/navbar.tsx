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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-[#C97435]" : "text-gray-600";
  };

  return (
    <nav className="bg-[#2A394A] text-[#C97435] shadow-md sticky top-0 z-50 font-rubik">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#C97435] font-rubik tracking-tight">
            <Link href="/">
              METADEAL<span className="text-[#FF7E5F]">.</span>
            </Link>
          </div>
          {/* Menu de navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu className="bg-[#2A394A]">
              <NavigationMenuList className="bg-[#2A394A] group">
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-[#2A394A] text-[#C97435] font-rubik font-medium tracking-wide text-sm uppercase
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
              className={`${isActive('/qui-sommes-nous')} hover:text-[#C97435] transition-colors text-[#C97536] duration-200`}
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

          {/* Searchbar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Rechercher une formation" 
                className="w-full border border-gray-300 rounded-md p-2 pl-4 pr-10 focus:outline-none focus:border-[#C97435] font-rubik text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#C97435] text-white px-3 py-1 rounded-md hover:bg-[#b8612a] transition duration-200 text-sm font-rubik">
                Rechercher
              </button>
            </div>
          </div>

          {/* Connexion et Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-[#C97435] hover:text-white hover:bg-[#3A495A] rounded-md transition-colors duration-200"
              >
                Connexion
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-[#C97435] text-white hover:bg-[#A65E2A] rounded-md transition-colors duration-200"
              >
                Inscription
              </Link>
            </div>
            <a href="tel:0188555555" className="text-[#C97435] hover:text-white transition duration-200 font-rubik font-medium text-sm tracking-wide">
              01 88 55 55 55
            </a>
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
              <Link 
                href="/faq" 
                className="block px-3 py-2 text-base font-medium hover:text-white"
              >
                FAQ
              </Link>
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
