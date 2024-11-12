// formations/[slug]/page.tsx

"use client";
import { notFound } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/app/components/navbar';
import { Formation } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

interface FormationDetailsProps {
  params: {
    slug: string;
  };
  formation: Formation;
}

export default function FormationDetails({ params, formation }: FormationDetailsProps) {
  if (!formation) {
    notFound();
  }

  return (
    <div>
      <h1>{formation.title}</h1>
    </div>
  );
} 