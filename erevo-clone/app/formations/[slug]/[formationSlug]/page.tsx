"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import { formationsData } from '@/app/lib/data/formations';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/footer';

type PageProps = {
  params: {
    slug: string;
    formationSlug: string;
  };
}

export default function FormationDetailsPage({ params }: PageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // ... reste du code
  );
} 