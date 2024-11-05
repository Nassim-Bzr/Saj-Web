import { FaStethoscope, FaUserNurse, FaTooth, FaSyringe, FaPills, FaBaby, FaHeartbeat, FaUserMd, FaHandsHelping, FaHospitalAlt, FaChild, FaPrescriptionBottle, FaClinicMedical, FaRestroom, FaFemale, FaLungs, FaBrain, FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';

export default function FormationsGrid() {
  const formations = [
    { title: "Toutes nos formations", icon: <FaClinicMedical />, color: "bg-[#FDF5EB]", slug: "toutes-nos-formations" },
    { title: "Infirmières infirmiers", icon: <FaUserNurse />, color: "bg-[#5DA3A5]", slug: "infirmieres-infirmiers" },
    { title: "Médecins généralistes", icon: <FaStethoscope />, color: "bg-[#6E92B4]", slug: "medecins-generalistes" },
    { title: "Masseurs Kinésithérapeutes", icon: <FaHandsHelping />, color: "bg-[#546A75]", slug: "masseurs-kinesitherapeutes" },
    { title: "Chirurgiens dentistes", icon: <FaTooth />, color: "bg-[#3B567B]", slug: "chirurgiens-dentistes" },
    { title: "Sages femmes", icon: <FaFemale />, color: "bg-[#2F3E50]", slug: "sages-femmes" },
    { title: "Orthophonistes", icon: <FaRestroom />, color: "bg-[#3D6A6E]", slug: "orthophonistes" },
    { title: "Podologues", icon: <FaChild />, color: "bg-[#4BAAAB]", slug: "podologues" },
    { title: "Pharmaciens", icon: <FaPills />, color: "bg-[#377148]", slug: "pharmaciens" },
    { title: "Gynécologues", icon: <FaFemale />, color: "bg-[#3D5B4A]", slug: "gynecologues" },
    { title: "Pédiatres", icon: <FaBaby />, color: "bg-[#4A8B66]", slug: "pediatres" },
    { title: "Dermatologues", icon: <FaHandHoldingHeart />, color: "bg-[#597C9F]", slug: "dermatologues" },
    { title: "Cardiologues", icon: <FaHeartbeat />, color: "bg-[#813750]", slug: "cardiologues" },
    { title: "Aides-soignants", icon: <FaHandsHelping />, color: "bg-[#425661]", slug: "aides-soignants" },
    { title: "Psychiatres", icon: <FaBrain />, color: "bg-[#836983]", slug: "psychiatrres" },
    { title: "Gériatres", icon: <FaUserMd />, color: "bg-[#69707E]", slug: "geriatres" },
    { title: "Rhumatologues", icon: <FaSyringe />, color: "bg-[#7A6A74]", slug: "rhumatologues" },
    { title: "Neurologues", icon: <FaBrain />, color: "bg-[#596B6F]", slug: "neurologues" },
    { title: "Préparateurs en pharmacie", icon: <FaPrescriptionBottle />, color: "bg-[#3C8A73]", slug: "preparateurs-en-pharmacie" },
    { title: "Établissements de santé", icon: <FaHospitalAlt />, color: "bg-[#D9506A]", slug: "etablissements-de-sante" },
  ];

  return (
    <div className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {formations.map((formation, index) => (
        <Link 
          href={`/formations/${formation.slug}`} 
          key={index}
        >
          <div
            className={`${formation.color} flex flex-col items-center justify-center p-6 rounded-lg shadow-md text-white text-center 
            transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer`}
          >
            <div className="text-3xl mb-4">{formation.icon}</div>
            <h3 className="font-bold text-lg">{formation.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
