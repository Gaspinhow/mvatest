import Reveal from "../../components/Reveal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Nous Contacter
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl font-inter">
              Rencontrons-nous pour discuter de vos besoins juridiques et vous accompagner dans vos projets d'affaires.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Informations principales */}
              <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-inter font-bold text-gray-900 mb-8">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-inter font-semibold text-gray-900 mb-1">Adresse</h3>
                      <p className="text-gray-600 font-inter">
                        Proche Place de l'Étoile<br/>
                        75017 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-inter font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <p className="text-gray-600 font-inter">
                        <a href="tel:+33142961234" className="hover:text-primary transition-colors">
                          01 42 96 12 34
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-inter font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 font-inter">
                        <a href="mailto:contact@mva-avocats.fr" className="hover:text-primary transition-colors">
                          contact@mva-avocats.fr
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-inter font-semibold text-gray-900 mb-1">Horaires</h3>
                      <p className="text-gray-600 font-inter">
                        Lundi - Vendredi : 9h - 19h<br/>
                        Sur rendez-vous uniquement
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations légales */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-6">Informations Légales</h3>
                
                <div className="space-y-4 text-gray-600 font-inter">
                  <div>
                    <h4 className="font-semibold text-gray-900">Forme sociale</h4>
                    <p>SELAS MVA AVOCATS</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">SIREN</h4>
                    <p>920 818 804</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">TVA</h4>
                    <p>FR20 920818804</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Capital</h4>
                    <p>1 000 €</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">RCS</h4>
                    <p>Paris</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-inter font-semibold text-gray-900 mb-3">Secteur d'intervention</h4>
                  <p className="text-sm text-gray-600 font-inter">
                    Cabinet d'avocats spécialisé en droit des affaires desservant Paris et la région parisienne.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message d'Engagement */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Votre Succès est Notre Priorité
            </h2>
            <p className="text-xl mb-8 font-inter opacity-90">
              Notre équipe d'avocats spécialisés vous accompagne avec rigueur et réactivité pour défendre vos intérêts et sécuriser vos opérations d'affaires.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-lg font-inter">
                <strong>Engagement qualité :</strong> Réponse sous 24h maximum • Suivi personnalisé • Confidentialité absolue
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
