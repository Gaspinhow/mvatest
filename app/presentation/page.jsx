import Reveal from "../../components/Reveal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Presentation() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Votre Partenaire Stratégique en Droit des Affaires
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl font-inter">
              Depuis trois décennies, notre cabinet, situé à proximité de la Place de l'Étoile, accompagne les entreprises, leurs dirigeants et les entrepreneurs dans toutes les étapes de leur développement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission Globale */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                  Transformer Les Défis Juridiques en Opportunités de Croissance
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-inter">
                  Nous combinons une connaissance approfondie du droit avec une approche pragmatique et orientée résultats pour sécuriser vos opérations, défendre vos intérêts et transformer les défis juridiques en opportunités de croissance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-inter">
                  Notre mission est de vous fournir des solutions sur-mesure, avec la réactivité et l'excellence que vos enjeux exigent.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white transform rotate-2">
                  <div className="transform -rotate-2">
                    <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-inter font-bold text-center mb-4">Réactivité & Excellence</h3>
                    <p className="text-center opacity-90 font-inter">
                      Solutions sur-mesure avec la réactivité que vos enjeux exigent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nos Domaines d'Expertise Détaillés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Nos Domaines d'Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-inter">
                Notre cabinet a développé une compétence reconnue dans les domaines clés du droit des affaires, offrant un conseil stratégique et une assistance contentieuse de haut niveau.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-12">
              {/* Droit des Affaires & Contrats */}
              <div className="flex flex-col lg:flex-row gap-8 items-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-full lg:w-2/5">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit des Affaires & Droit des Contrats</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    Nous vous assistons dans la négociation, la rédaction et la sécurisation de l'ensemble de vos contrats commerciaux (distribution, partenariat, prestations de services) et assurons la défense de vos intérêts en cas de litige contractuel.
                  </p>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">🔧 Conseil</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Négociation et rédaction de contrats</li>
                        <li>• Contrats de distribution et partenariat</li>
                        <li>• Prestations de services complexes</li>
                        <li>• Clauses contractuelles de protection</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">Contentieux</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Défense des intérêts en cas de litige</li>
                        <li>• Action en exécution et résiliation</li>
                        <li>• Résolution des différends commerciaux</li>
                        <li>• Référence et médiation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Droit des Sociétés */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-full lg:w-2/5">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit des Sociétés</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    De la création de votre société à sa transmission, nous vous apportons un conseil expert pour optimiser votre structure juridique et garantir sa conformité.
                  </p>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">🚀 Création</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Choix de la forme sociale optimale</li>
                        <li>• Rédaction des statuts sur mesure</li>
                        <li>• Immatriculation au RCS</li>
                        <li>• Conseil structurel stratégique</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">🔄 Restructuration</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Opérations de restructuration</li>
                        <li>• Fusions-acquisitions</li>
                        <li>• Gestion des relations entre associés</li>
                        <li>• Transmission d'entreprise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Procédures Collectives */}
              <div className="flex flex-col lg:flex-row gap-8 items-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-full lg:w-2/5">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-accent-gold rounded"></div>
                  </div>
                  <h3 className="text-3xl font-inter font-bold text-gray-900 mb-4">Procédures Collectives</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    Nous accompagnons les entreprises en difficulté avec mise en œuvre des procédures de prévention pour anticiper les risques et sécuriser vos intérêts.
                  </p>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">Prévention</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Anticipation des risques financiers</li>
                        <li>• Mandat ad hoc</li>
                        <li>• Conciliation préventive</li>
                        <li>• Stratégies de redressement</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">Procédures</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Sauvegarde et redressement</li>
                        <li>• Liquidation judiciaire</li>
                        <li>• Responsabilité des dirigeants</li>
                        <li>• Extension de procédure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Droit de la Concurrence */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-full lg:w-2/5">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-accent-gold rounded"></div>
                  </div>
                  <h3 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit de la Concurrence</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    Conseil en matière de pratiques anticoncurrentielles et concurrence déloyale pour assurer la conformité et la sécurité de vos stratégies commerciales.
                  </p>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">Pratiques</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Concentrations d'entreprises</li>
                        <li>• Contrôle des accords</li>
                        <li>• Conformité réglementaire</li>
                        <li>• Distribution sélective</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-inter font-semibold text-gray-900 mb-3">Défense</h4>
                      <ul className="space-y-2 text-gray-600 font-inter text-sm">
                        <li>• Détournement de clientèle</li>
                        <li>• Parasitisme économique</li>
                        <li>• Désorganisation interne</li>
                        <li>• Protection commerciale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Choisir Notre Cabinet */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
              Choisir notre cabinet, c'est opter pour :
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-inter font-semibold mb-4">Une expertise éprouvée</h3>
                <p className="opacity-90 font-inter">Une connaissance pointue de votre écosystème d'affaires développée sur 30 ans d'expérience.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-inter font-semibold mb-4">Une approche personnalisée</h3>
                <p className="opacity-90 font-inter">Une relation où chaque dossier est traité directement par un associé pour garantir qualité et réactivité.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-inter font-semibold mb-4">Une vision stratégique</h3>
                <p className="opacity-90 font-inter">Une approche etiquette pour anticiper les risques et saisir les opportunités de votre secteur.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-inter font-semibold mb-4">Une réactivité sans faille</h3>
                <p className="opacity-90 font-inter">Une disponibilité immédiate pour répondre à l'urgence de vos situations d'affaires.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                Nous Contacter
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
