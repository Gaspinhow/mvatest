import Reveal from "../../components/Reveal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Domaines() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Nos Domaines d'Expertise
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl font-inter">
              Notre cabinet a développé une compétence reconnue dans les domaines clés du droit des affaires, offrant un conseil stratégique et une assistance contentieuse de haut niveau.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Domaines Détaillés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit des Affaires & Contrats</h2>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Négociation, rédaction et sécurisation de vos contrats commerciaux avec défense des intérêts en cas de litige contractuel.
                </p>
                <ul className="space-y-3 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Contrats de distribution et partenariat
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Prestations de services complexes
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Résolution des litiges commerciaux
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Médiation et arbitrage
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit des Sociétés</h2>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Conseil expert de la création à la transmission pour optimiser votre structure juridique et garantir sa conformité.
                </p>
                <ul className="space-y-3 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Restructuration et fusions-acquisitions
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Gestion des relations entre associés
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Transmission d'entreprise
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Conseil structurel stratégique
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-accent-gold rounded"></div>
                </div>
                <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">Procédures Collectives</h2>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Accompagnement des entreprises en difficulté avec mise en œuvre des procédures de prévention et accompagnement judiciaire.
                </p>
                <ul className="space-y-3 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Mandat ad hoc et conciliation
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Sauvegarde et redressement
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Responsabilité des dirigeants
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Stratégies de redressement
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-accent-gold rounded"></div>
                </div>
                <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">Droit de la Concurrence</h2>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Conseil en pratiques anticoncurrentielles et concurrence déloyale pour assurer la conformité de vos stratégies commerciales.
                </p>
                <ul className="space-y-3 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Concentrations et distribution
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Concurrence déloyale
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Détournement de clientèle
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Conformité réglementaire
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Besoin d'expertise juridique ?
            </h2>
            <p className="text-xl mb-8 font-inter opacity-90">
              Nos avocats spécialisés sont à votre disposition pour vous accompagner dans vos projets d'affaires.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Nous Contacter
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
