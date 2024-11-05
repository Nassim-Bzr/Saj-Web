"use client";

import Link from 'next/link';
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#2a394a]">
            METADEAL
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/formations" className="text-gray-600 hover:text-[#C97435]">
              Formations
            </Link>
            <Link href="/qui-sommes-nous" className="text-gray-600 hover:text-[#C97435]">
              Qui sommes-nous
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#C97435]">
              FAQ
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-[#C97435]">
              Connexion
            </Link>
            <Link 
              href="/register" 
              className="bg-[#C97435] text-white px-4 py-2 rounded-md hover:bg-[#A65E2A]"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 