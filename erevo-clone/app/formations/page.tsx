"use client";

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { formationsData } from '../lib/data/formations';
import Link from 'next/link';
import FormationCard from '../components/FormationCard';

export default function FormationsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF5EB]">
        <div className="container pb-16 mx-auto px-4 py-12">
          {formationsData.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-8">
                <category.icon className="text-4xl text-[#C97435] mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-[#2A394A]">
                    {category.title}
                  </h2>
                  <Link 
                    href={`/formations/${category.slug}`} 
                    className="text-xl flex absolute right-5 text-[#C97435] hover:underline"
                  >
                    Catalogue de formations {category.title}
                  </Link>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.formations.map((formation, fIndex) => (
                  <FormationCard 
                    key={fIndex}
                    formation={formation}
                    categorySlug={category.slug}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}