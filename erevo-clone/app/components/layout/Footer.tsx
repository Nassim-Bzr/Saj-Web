import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2a394a] text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <p>01 88 55 55 55</p>
            <p>contact@metadeal.fr</p>
            <p>123 Avenue de la Formation<br />75001 Paris</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li><Link href="/formations" className="hover:text-[#C97435]">Formations</Link></li>
            <li><Link href="/qui-sommes-nous" className="hover:text-[#C97435]">Qui sommes-nous ?</Link></li>
            <li><Link href="/faq" className="hover:text-[#C97435]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Informations Légales</h3>
          <ul className="space-y-2">
            <li><Link href="/mentions-legales" className="hover:text-[#C97435]">Mentions légales</Link></li>
            <li><Link href="/cgv" className="hover:text-[#C97435]">CGV</Link></li>
            <li><Link href="/confidentialite" className="hover:text-[#C97435]">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Restez informé de nos dernières formations</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="p-2 rounded-l-md text-gray-800 w-full"
            />
            <button className="bg-[#C97435] px-4 py-2 rounded-r-md hover:bg-[#A65E2A]">
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <p className="text-center">© 2024 Metadeal. Tous droits réservés.</p>
      </div>
    </footer>
  );
} 