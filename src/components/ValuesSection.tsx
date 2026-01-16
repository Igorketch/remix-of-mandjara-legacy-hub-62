import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, MessageCircle, Heart, Shield, Leaf } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    name: 'Créativité',
    description: 'Les solutions émergent de l\'innovation et de la production d\'idées nouvelles.',
    color: 'heritage-gold',
  },
  {
    icon: MessageCircle,
    name: 'Dialogue',
    description: 'L\'écoute, le respect et la coopération sont au cœur des relations humaines.',
    color: 'heritage-terracotta',
  },
  {
    icon: Heart,
    name: 'Solidarité',
    description: 'La culture et l\'humanité étant interdépendantes, il est de notre devoir de préserver la cohésion culturelle.',
    color: 'heritage-forest',
  },
  {
    icon: Shield,
    name: 'Transparence',
    description: 'Les informations relatives aux activités de l\'International Mandjara Heritage sont rendues accessibles au public.',
    color: 'heritage-bronze',
  },
  {
    icon: Leaf,
    name: 'Durabilité Culturelle',
    description: 'En cohérence avec les trois autres piliers du développement durable, la culture est le ciment qui unit identité, progrès et environnement.',
    color: 'heritage-gold',
  },
];

export const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="values" className="relative py-24 lg:py-32 bg-gradient-to-b from-heritage-sand to-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-heritage-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-block text-heritage-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Nos Valeurs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Les Principes Qui <span className="text-heritage-gold">Nous Guident</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Les décisions, comportements et actions de l'International Mandjara Heritage 
              sont guidés par ces valeurs fondamentales.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`card-heritage group p-8 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${value.color}/10 text-${value.color} mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Four Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-10">
              Les Quatre Piliers du Développement Durable
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { name: 'Économique', color: 'bg-heritage-gold' },
                { name: 'Social', color: 'bg-heritage-terracotta' },
                { name: 'Environnemental', color: 'bg-heritage-forest' },
                { name: 'Culturel', color: 'bg-heritage-bronze' },
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`${pillar.color} rounded-xl p-6 text-center transition-transform duration-300 group-hover:-translate-y-2`}>
                    <span className="font-serif font-bold text-heritage-cream text-lg">
                      {pillar.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
