import { FaStethoscope, FaUserNurse, FaTooth, FaSyringe, FaPills, FaBaby, FaHeartbeat, FaUserMd, FaHandsHelping, FaHospitalAlt, FaChild, FaPrescriptionBottle, FaClinicMedical, FaRestroom, FaFemale, FaLungs, FaBrain, FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';
import { formationsData } from './lib/data/formations';
 

export default function FormationsGrid() {

  const formations = formationsData;

  console.log(formations);
    

  return (
    <div className="container mx-auto py-8  mt-24 mb-16">
        <div className="bg-[#FDF5EB] py-8 mb-8 rounded-lg">
          <h2 className="text-5xl font-bold text-center text-[#2A394A] mb-4 leading-tight">
            Choisissez votre <span className="text-[#C97435]">formation</span>
          </h2>
        
        </div>
      <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-4 lg:grid-cols-6 gap-4 flex flex-wrap items-center justify-center">
        {formations.map((formation, index) => (
          <Link 
            href={`/formations/${formations[index].slug}`} 
            key={index}
            className="flex items-center p-2 justify-center hover:scale-105 transition-all duration-300 ease-in-out "
          >
            <div
              className={`${formation.color} flex flex-c  ol items-center justify-center w-full aspect-square rounded-full shadow-md text-white text-center 
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer p-2`}
            >
              <h3 className="font-bold text-[16px] leading-tight">{formation.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
