import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Scroll, Users } from 'lucide-react';
import bamounImage from '@/assets/bamoun-culture.jpg';
import bafiaImage from '@/assets/bafia-culture.jpg';
import nsoImage from '@/assets/nso-culture.jpg';

const peoples = [
  {
    name: 'Les Bamoun',
    region: 'Région du Noun, Cameroun',
    image: bamounImage,
    description: 'Patrimoine artistique et culturel d\'une richesse exceptionnelle, dont l\'écriture inventée par le roi Njoya à la fin du XIXe siècle.',
    highlight: 'Écriture royale unique',
    color: 'heritage-gold',
  },
  {
    name: 'Les Nso\'',
    region: 'Région du Nord-Ouest, Cameroun',
    image: nsoImage,
    description: 'Héritiers des populations Tikar, ils ont su préserver une forte identité culturelle et sociale malgré les migrations et les bouleversements historiques.',
    highlight: 'Héritage Tikar',
    color: 'heritage-forest',
  },
  {
    name: 'Les Bafia',
    region: 'Région du Mbam, Cameroun',
    image: bafiaImage,
    description: 'Population bantoue aux traditions et structures sociales profondément enracinées, gardiens d\'un savoir ancestral.',
    highlight: 'Traditions bantoues',
    color: 'heritage-terracotta',
  },
];

export const PeoplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="peoples" className="relative py-24 lg:py-32 bg-heritage-earth overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full heritage-pattern" />
      </div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-terracotta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-block text-heritage-gold font-medium tracking-widest uppercase text-sm mb-4">
              Groupes Ethniques Fondateurs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-heritage-cream mb-6">
              Les Trois Peuples <span className="text-heritage-gold">Mandjara</span>
            </h2>
            <p className="text-heritage-cream/70 text-lg max-w-2xl mx-auto">
              L'International Mandjara Heritage s'inscrit dans la continuité culturelle et 
              historique de ces trois grands peuples du Cameroun.
            </p>
          </motion.div>

          {/* Peoples Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {peoples.map((people, index) => (
              <motion.article
                key={people.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-heritage-cream/5 backdrop-blur-sm border border-heritage-cream/10">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={people.image}
                      alt={people.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth via-heritage-earth/50 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-${people.color}/20 text-${people.color === 'heritage-gold' ? 'heritage-gold' : people.color === 'heritage-terracotta' ? 'heritage-terracotta-light' : 'heritage-forest-light'} border border-current/30`}>
                        <Scroll className="w-3 h-3" />
                        {people.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="font-serif text-2xl font-bold text-heritage-cream mb-2">
                      {people.name}
                    </h3>
                    <div className="flex items-center gap-2 text-heritage-gold/80 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {people.region}
                    </div>
                    <p className="text-heritage-cream/70 leading-relaxed">
                      {people.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Unity Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-heritage-gold/10 border border-heritage-gold/20">
              <Users className="w-6 h-6 text-heritage-gold" />
              <span className="text-heritage-cream font-medium">
                Unis par l'histoire, la culture et la fraternité
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
