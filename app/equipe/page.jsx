import Reveal from "../../components/Reveal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Equipe() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl font-inter">
              Une équipe d'avocats expérimentés et spécialisés pour défendre vos intérêts avec rigueur et excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Premier Avocat */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">JM</span>
                  </div>
                  <h3 className="text-2xl font-inter font-bold text-gray-900 mb-2">Maître Julien MALLET</h3>
                  <p className="text-primary font-inter font-medium">Associé - Avocat au Barreau de Paris</p>
                </div>
                <div className="space-y-4 text-gray-600 font-inter">
                  <p><strong>Expertise en Contentieux Commerciaux</strong></p>
                  <p>Intervient dans l'ensemble des contentieux commerciaux : droit des contrats, responsabilité délictuelle, recouvrement de créances et exécution.</p>
                  
                  <p><strong>Spécialisation Procédures Collectives</strong></p>
                  <p>Expérience approfondie dans les restructurations de dettes en procédure amiable (mandat ad'hoc et conciliation) et au stade des procédures collectives.</p>
                  
                  <p><strong>Accompagnement Repreneurs & Dirigeants</strong></p>
                  <p>Développé une expertise dans l'accompagnement des candidats repreneurs (reprise en plan de cession) et des dirigeants dans les contentieux liés aux procédures collectives.</p>
                  
                  <p><strong>Opérations d'Acquisition</strong></p>
                  <p>Accompagne les dirigeants sur des opérations d'acquisition pour optimiser leurs stratégies juridiques.</p>
                </div>
              </div>

              {/* Deuxième Avocat */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">HS</span>
                  </div>
                  <h3 className="text-2xl font-inter font-bold text-gray-900 mb-2">Maître Hanane SEFIANE</h3>
                  <p className="text-primary font-inter font-medium">Docteur en Droit Privé - Avocat au Barreau de Paris</p>
                </div>
                <div className="space-y-4 text-gray-600 font-inter">
                  <p><strong>Expertise Multidisciplinaire</strong></p>
                  <p>Intervient en droit des contrats, droit de la concurrence, procédures collectives, ainsi que dans les domaines de l'immobilier, de la banque et de l'assurance.</p>
                  
                  <p><strong>Double Approche : Conseil & Contentieux</strong></p>
                  <p>Assiste ses clients tant en conseil qu'en contentieux : négociation et exécution de contrats complexes, responsabilité contractuelle et délictuelle.</p>
                  
                  <p><strong>Spécialisation Concurrence</strong></p>
                  <p>Expertise reconnue dans les problématiques concurrentielles : pratiques restrictives de concurrence, concurrence déloyale et parasitaire.</p>
                  
                  <p><strong>Procédures Collectives & Restructuration</strong></p>
                  <p>Accompagnement spécialisé dans les procédures collectives et opérations de restructuration d'entreprises.</p>
                  
                  <p><strong>Immobilier, Banque & Assurance</strong></p>
                  <p>Activité couvrant les opérations immobilières et litiges bancaires et assurantiels, offrant une approche globale et stratégique adaptée aux enjeux juridiques et financiers des clients.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Notre Engagement */}
          <Reveal delay={400}>
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
                Notre Engagement envers Vous
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Expertise Personnalisée</h3>
                  <p className="text-gray-600 font-inter">Chaque dossier est traité directement par un associé expérimenté</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent-gold rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Réactivité</h3>
                  <p className="text-gray-600 font-inter">Réponse garantie sous 24h pour tous vos besoins urgents</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3">Confidentialité</h3>
                  <p className="text-gray-600 font-inter">Protection absolue de vos informations et stratégies</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Rencontrons-nous pour parler de votre projet
            </h2>
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Prendre Rendez-vous
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
