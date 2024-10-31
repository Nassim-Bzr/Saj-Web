"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2A394A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:0188555555" className="hover:text-[#C97435] transition duration-200">
                  01 88 55 55 55
                </a>
              </li>
              <li>
                <a href="mailto:contact@metadeal.fr" className="hover:text-[#C97435] transition duration-200">
                  contact@metadeal.fr
                </a>
              </li>
              <li>123 Avenue de la Formation</li>
              <li>75001 Paris</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  Formations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informations Légales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C97435] transition duration-200">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Restez informé de nos dernières formations</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 rounded-l-md text-gray-800 w-full"
              />
              <button className="bg-[#C97435] px-4 py-2 rounded-r-md hover:bg-[#b8612a] transition duration-200">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Metadeal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
