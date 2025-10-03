import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Section Hero avec diaporama */}
      <Hero />
      
      {/* Mission et Présentation */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                L'Exigence et la Proximité au Cœur de Notre Engagement
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-inter">
                Forts de 30 ans d'expérience, nous avons bâti notre réputation sur une relation de confiance durable avec nos clients. Notre implantation stratégique au centre de Paris nous permet une grande disponibilité pour répondre à vos besoins.
              </p>
            </div>
          </Reveal>

          {/* 4 Piliers d'Excellence */}
          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Expertise Éprouvée</h3>
                <p className="text-gray-600 font-inter">Une connaissance pointue de votre écosystème d'affaires</p>
              </div>

              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-light border-2 border-primary rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Approche Personnalisée</h3>
                <p className="text-gray-600 font-inter">Chaque dossier traité directement par un associé</p>
              </div>

              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Vision Stratégique</h3>
                <p className="text-gray-600 font-inter">Anticiper les risques et saisir les opportunités</p>
              </div>

              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Réactivité Sans Faille</h3>
                <p className="text-gray-600 font-inter">Réponse à l'urgence de vos situations</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nos Domaines d'Expertise */}
      <section id="expertise" className="py-20 bg-white">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Droit des Affaires & Contrats */}
              <div className="group p-8 rounded-xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4">Droit des Affaires & Droit des Contrats</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Nous vous assistons dans la négociation, la rédaction et la sécurisation de l'ensemble de vos contrats commerciaux et assurons la défense de vos intérêts en cas de litige contractuel.
                </p>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Contrats de distribution et partenariat
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Prestations de services
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Défense en cas de litige
                  </li>
                </ul>
              </div>

              {/* Droit des Sociétés */}
              <div className="group p-8 rounded-xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4">Droit des Sociétés</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  De la création de votre société à sa transmission, nous vous apportons un conseil expert pour optimiser votre structure juridique et garantir sa conformité.
                </p>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Restructuration et fusions-acquisitions
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Relations entre associés
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Optimisation structure juridique
                  </li>
                </ul>
              </div>

              {/* Procédures Collectives */}
              <div className="group p-8 rounded-xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-accent-gold rounded"></div>
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4">Procédures Collectives</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Nous accompagnons les entreprises en difficulté avec mise en œuvre des procédures de prévention pour anticiper les risques et sécuriser vos intérêts.
                </p>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Mandat ad hoc et conciliation
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Sauvegarde et redressement
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Responsabilité des dirigeants
                  </li>
                </ul>
              </div>

              {/* Droit de la Concurrence */}
              <div className="group p-8 rounded-xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-accent-gold rounded"></div>
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4">Droit de la Concurrence</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                  Conseil en matière de pratiques anticoncurrentielles et concurrence déloyale pour assurer la conformité et la sécurité de vos stratégies commerciales.
                </p>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Concentrations et distribution
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span> Concurrence déloyale
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
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Choisir notre cabinet, c'est opter pour l'excellence
            </h2>
            <p className="text-xl mb-8 font-inter opacity-90">
              Une approche personnalisée où chaque dossier est traité directement par un associé pour garantir la qualité et la réactivité que vos enjeux d'affaires exigent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                Nous Contacter
              </a>
              <a
                href="/presentation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Découvrir Notre Histoire
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
