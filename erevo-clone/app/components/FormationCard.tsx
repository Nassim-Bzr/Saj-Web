import Image from 'next/image';
import Link from 'next/link';
import { FormationDetail } from '../types';

interface FormationCardProps {
  formation: FormationDetail;
  categorySlug: string;
}

export default function FormationCard({ formation, categorySlug }: FormationCardProps) {
  return (
    <Link 
      href={`/formations/${categorySlug}/${formation.slug}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        {formation.image && (
          <Image
            src={formation.image}
            alt={formation.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {formation.tags.map((tag, tIndex) => (
            <span key={tIndex} className="px-3 py-1 bg-[#FDF5EB] text-[#C97435] text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-[#2A394A] mb-3">
          {formation.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {formation.shortDescription}
        </p>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="w-5 h-5 mr-2">⏱️</span>
            Durée: {formation.duration}
          </p>
          <p className="flex items-center">
            <span className="w-5 h-5 mr-2">💰</span>
            Prix: {formation.price}
          </p>
          <p className="text-green-600 flex items-center">
            <span className="w-5 h-5 mr-2">✅</span>
            {formation.funding}
          </p>
          <p className="text-[#C97435] flex items-center">
            <span className="w-5 h-5 mr-2">🎯</span>
            {formation.indemnisation}
          </p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Prochaines sessions :</p>
          <div className="flex flex-wrap gap-2">
            {formation.nextSessions.map((session, sIndex) => (
              <span key={sIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                {session}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 