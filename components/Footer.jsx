import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo-mva.png" alt="MVA AVOCATS" className="h-10 w-auto" />
              <h3 className="text-xl font-inter font-semibold">MVA AVOCATS</h3>
            </div>
            <p className="text-gray-300 mb-4 font-inter">
              Cabinet d'avocats au Barreau de Paris depuis trois décennies.<br/>
              Votre partenaire stratégique en droit des affaires.
            </p>
          </div>

          {/* Informations légales */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-gray-300">
              <li>SIREN : 920 818 804</li>
              <li>TVA : FR20 920818804</li>
              <li>Capital : 1 000 €</li>
              <li>RCS Paris</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start space-x-2">
                <span className="text-primary">📍</span>
                <span>Proche Place de l'Étoile<br/>75017 Paris</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-primary">📧</span>
                <Link href="mailto:contact@mva-avocats.fr" className="hover:text-primary transition-colors">
                  contact@mva-avocats.fr
                </Link>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-primary">📞</span>
                <Link href="tel:+33142961234" className="hover:text-primary transition-colors">
                  01 42 96 12 34
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MVA AVOCATS - Tous droits réservés | Site web conforme RGPD
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
