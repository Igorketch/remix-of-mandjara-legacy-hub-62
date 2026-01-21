import { motion } from 'framer-motion';
import { Award, Building2, Heart, Leaf } from 'lucide-react';
import aichetouPortrait from '@/assets/aichetou-portrait.png';

const achievements = [
  {
    icon: Building2,
    title: "AF. AGRO-TRADING",
    description: "Exportation de produits exotiques africains vers le Canada et les marchés internationaux"
  },
  {
    icon: Leaf,
    title: "LAMANJER",
    description: "Boissons et tisanes à base de plantes médicinales pour le bien-être naturel"
  },
  {
    icon: Heart,
    title: "AF. INSTITUT",
    description: "Institut de beauté et centre de formation multiculturel"
  },
  {
    icon: Award,
    title: "International Mandjara Heritage",
    description: "Membre du CA, représentante Bamoun et Trésorière du Bureau exécutif"
  }
];

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-heritage-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-heritage-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-heritage-terracotta/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-heritage-gold/20 text-heritage-brown rounded-full text-sm font-medium mb-4">
            Notre Équipe
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-brown mb-6">
            Leadership & <span className="text-heritage-terracotta">Gouvernance</span>
          </h2>
          <p className="text-heritage-brown/70 max-w-2xl mx-auto text-lg">
            Des leaders engagés au service du patrimoine Mandjara
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Portrait */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={aichetouPortrait}
                    alt="Madame Aïchetou - Trésorière de l'International Mandjara Heritage"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/60 via-transparent to-transparent" />
                  
                  {/* Name overlay on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                    <h3 className="font-playfair text-3xl font-bold text-white mb-1">
                      Madame Aïchetou
                    </h3>
                    <p className="text-heritage-gold font-medium">
                      Trésorière • Représentante Bamoun
                    </p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-heritage-gold/50" />
              </div>

              {/* Biography content */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                {/* Name - desktop only */}
                <div className="hidden lg:block mb-6">
                  <h3 className="font-playfair text-4xl font-bold text-heritage-brown mb-2">
                    Madame Aïchetou
                  </h3>
                  <p className="text-heritage-terracotta font-medium text-lg">
                    Trésorière • Représentante de la communauté Bamoun
                  </p>
                </div>

                <div className="space-y-4 text-heritage-brown/80 leading-relaxed mb-8">
                  <p>
                    <span className="text-heritage-terracotta font-semibold">Entrepreneure engagée et leader innovante</span>, 
                    Madame Aïchetou est spécialisée dans la valorisation durable des ressources naturelles africaines, 
                    avec plus de <span className="font-semibold">quinze années d'expérience</span> dans l'agroalimentaire, 
                    le bien-être, la formation et le développement d'entreprises.
                  </p>
                  <p>
                    Au sein de l'International Mandjara Heritage, elle met son expertise entrepreneuriale, 
                    son sens de la gestion et son engagement communautaire au service de la gouvernance, 
                    de la transparence financière et du rayonnement des actions de l'organisation.
                  </p>
                </div>

                {/* Achievements grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-heritage-cream/50 rounded-xl hover:bg-heritage-cream transition-colors"
                    >
                      <div className="w-10 h-10 bg-heritage-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-heritage-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown text-sm">
                          {achievement.title}
                        </h4>
                        <p className="text-heritage-brown/60 text-xs mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t border-heritage-gold/20"
                >
                  <p className="italic text-heritage-brown/70">
                    "Un engagement constant en faveur de l'entrepreneuriat responsable, 
                    du bien-être, et du développement durable des communautés."
                  </p>
                </motion.blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
