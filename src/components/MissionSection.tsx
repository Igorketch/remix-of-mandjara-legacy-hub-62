import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Compass, Leaf, BookOpen, Users2, Globe } from 'lucide-react';

const missionPoints = [
  {
    icon: BookOpen,
    text: 'Favoriser la recherche, la documentation et la valorisation du patrimoine matériel et immatériel Mandjara',
  },
  {
    icon: Users2,
    text: 'Renforcer les liens entre les générations et les diasporas issues de ces communautés',
  },
  {
    icon: Globe,
    text: 'Collaborer avec des institutions canadiennes et internationales pour promouvoir la diversité',
  },
  {
    icon: Compass,
    text: 'Organiser des activités éducatives et culturelles au Canada et à l\'international',
  },
];

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 heritage-pattern opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-heritage-terracotta/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-heritage-terracotta" />
                </div>
                <div>
                  <span className="text-heritage-terracotta font-medium tracking-widest uppercase text-sm">
                    Notre Mission
                  </span>
                </div>
              </div>
              
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8">
                Promouvoir, Préserver, <span className="text-heritage-terracotta">Transmettre</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                L'International Mandjara Heritage a pour mission de promouvoir, préserver et 
                transmettre le patrimoine culturel, historique et social du peuple Mandjara 
                (Bamoun, Bafia, Nso') et des communautés apparentées.
              </p>

              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-heritage-terracotta/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <p className="text-muted-foreground pt-2">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-heritage-forest/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-heritage-forest" />
                </div>
                <div>
                  <span className="text-heritage-forest font-medium tracking-widest uppercase text-sm">
                    Notre Vision
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8">
                Un Pont Entre <span className="text-heritage-forest">Mémoire et Avenir</span>
              </h2>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-heritage-forest/10 to-heritage-gold/10 rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-2xl p-8 lg:p-10 shadow-card-heritage border border-heritage-forest/10">
                  <p className="text-xl lg:text-2xl font-serif text-foreground leading-relaxed mb-8">
                    Une société où l'histoire, la culture et la connaissance du peuple Mandjara 
                    sont reconnues comme <strong className="text-heritage-gold">piliers du développement durable</strong>, 
                    au même titre que l'économie, la justice sociale et la protection de l'environnement.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-heritage-forest/5">
                      <Leaf className="w-6 h-6 text-heritage-forest" />
                      <span className="font-medium text-foreground">Durabilité Culturelle</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-heritage-gold/5">
                      <Globe className="w-6 h-6 text-heritage-gold" />
                      <span className="font-medium text-foreground">Rayonnement International</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-muted-foreground leading-relaxed italic border-l-4 border-heritage-gold/30 pl-6"
              >
                "Les enjeux culturels, économiques et sociaux sont étroitement liés et doivent 
                être traités de manière globale, afin que l'héritage de nos ancêtres continue 
                d'être le symbole de notre identité."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
