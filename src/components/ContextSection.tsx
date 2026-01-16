import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Globe2, Heart } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Respect des Ancêtres',
    description: 'Honorer la mémoire et les enseignements de ceux qui ont façonné notre identité à travers les siècles.',
  },
  {
    icon: Heart,
    title: 'Solidarité Communautaire',
    description: 'Renforcer les liens entre les générations et les diasporas issues de nos communautés.',
  },
  {
    icon: Globe2,
    title: 'Transmission du Savoir',
    description: 'Préserver et partager le patrimoine matériel et immatériel pour les générations futures.',
  },
];

export const ContextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="context" className="relative py-24 lg:py-32 heritage-pattern">
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
              Contexte & Origines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Un Héritage <span className="text-heritage-gold">Millénaire</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-heritage-terracotta via-heritage-gold to-heritage-terracotta mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                L'<strong className="text-foreground">International Mandjara Heritage</strong> trouve ses racines 
                dans l'histoire et la culture du peuple Mandjara, un groupe ethnique d'Afrique centrale 
                ayant façonné son identité, sa langue et ses traditions à travers les siècles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Elle s'inspire de cet héritage pour promouvoir le développement social, culturel et 
                éducatif dans le respect des traditions locales, tout en s'inscrivant dans une approche 
                contemporaine du <strong className="text-heritage-forest">développement durable</strong> fondé 
                sur quatre piliers : économique, social, environnemental et culturel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette approche rejoint la Déclaration Universelle de l'UNESCO sur la diversité 
                culturelle (2001) et la Convention sur la Diversité des Expressions Culturelles (2005).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-heritage-gold/20 to-heritage-terracotta/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-2xl p-8 lg:p-10 shadow-elevated border border-heritage-gold/10">
                <blockquote className="relative">
                  <div className="absolute -top-4 -left-2 text-7xl text-heritage-gold/30 font-serif">"</div>
                  <p className="relative text-xl lg:text-2xl font-serif text-foreground italic leading-relaxed">
                    La culture est essentielle à la durabilité, à la paix et au bien-être des sociétés.
                  </p>
                  <footer className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-px bg-heritage-gold" />
                    <cite className="text-muted-foreground not-italic font-medium">
                      UNESCO, 2005
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>

          {/* Value Pillars */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="card-heritage group p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heritage-gold/10 text-heritage-gold mb-6 group-hover:bg-heritage-gold group-hover:text-heritage-earth transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
