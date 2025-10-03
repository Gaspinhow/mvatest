"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images du cabinet avec Arc de Triomphe
const slides = [
  "/images/vue-horizontale-arc-triomphe.jpg",
  "/images/hero-bureau.jpg",
  "/images/equipe-collaboration.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slides[currentSlide]}
              alt="Cabinet d'avocats à Paris"
              className="w-full h-full object-cover kenburns"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Contenu Hero */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-white px-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-play.display font-bold mb-6 text-shadow">
              <span className="gradient-text">Votre Partenaire Stratégique</span>
              <br />
              <span className="text-white">en Droit des Affaires</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 font-inter"
            >
              Depuis trois décennies, notre cabinet situé à proximité de la Place de l'Étoile
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                Prendre Rendez-vous
              </a>
              <a
                href="#expertise"
                className="glass-morphism text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover:bg-white/20 backdrop-blur-lg"
              >
                Découvrir Notre Expertise
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicateurs de slides */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-primary" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
