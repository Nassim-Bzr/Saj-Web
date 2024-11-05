import { FaStethoscope, FaUserNurse, FaTooth, FaSyringe, FaPills, FaBaby, FaHeartbeat, FaUserMd, FaHandsHelping, FaHospitalAlt, FaChild, FaPrescriptionBottle, FaClinicMedical, FaRestroom, FaFemale, FaLungs, FaBrain, FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';
 

export default function FormationsGrid() {
  const formations = [
    { title: "Toutes nos formations", icon: <FaClinicMedical />, color: "bg-[#5DA3A5]", slug: "toutes-nos-formations" },
    { title: "Chirurgien-dentiste", icon: <FaTooth />, color: "bg-[#5DA3A5]", slug: "dentistes" },
    { title: "Infirmier", icon: <FaStethoscope />, color: "bg-[#6E92B4]", slug: "medecins-generalistes" },
    { title: "Masseurs Kinésithérapeutes", icon: <FaHandHoldingHeart />, color: "bg-[#546A75]", slug: "masseurs-kinesitherapeutes" },
    { title: "Pedicure-podologue", icon: <FaUserMd />, color: "bg-[#3B567B]", slug: "chirurgiens-dentistes" },
    { title: "Pharmaciens", icon: <FaFemale />, color: "bg-[#2F3E50]", slug: "pharmaciens" },
    { title: "Orthophonistes", icon: <FaRestroom />, color: "bg-[#3D6A6E]", slug: "orthophonistes" },
    { title: "Medecine generale", icon: <FaBaby />, color: "bg-[#3D6A6E]", slug: "infirmieres" },
    
];

  return (
    <div className="container mx-auto py-8 px-4 mt-24 mb-16">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {formations.map((formation, index) => (
          <Link 
            href={`/formations/${formation.slug}`} 
            key={index}
            className="flex items-center justify-center"
          >
            <div
              className={`${formation.color} flex flex-col items-center justify-center w-full aspect-square rounded-full shadow-md text-white text-center 
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer p-2`}
            >
              <div className="text-6xl mb-2">{formation.icon}</div>
              <h3 className="font-bold text-[16px] leading-tight">{formation.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
