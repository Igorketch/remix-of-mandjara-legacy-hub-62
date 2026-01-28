import { motion } from 'framer-motion';
import { BookOpen, Globe2, Heart, Scroll, Calendar, MapPin, Crown, Mountain } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

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

const timeline = [
  {
    era: 'XIXe Siècle',
    title: 'Invention de l\'Écriture Shu-Mom',
    description: 'Le Roi Njoya crée un système d\'écriture unique pour le peuple Bamoun.',
    icon: Scroll,
  },
  {
    era: '2001',
    title: 'Déclaration UNESCO',
    description: 'Déclaration Universelle sur la diversité culturelle.',
    icon: Globe2,
  },
  {
    era: '2005',
    title: 'Convention UNESCO',
    description: 'Convention sur la Diversité des Expressions Culturelles.',
    icon: Crown,
  },
  {
    era: 'Aujourd\'hui',
    title: 'International Mandjara Heritage',
    description: 'Continuité culturelle et développement durable.',
    icon: Mountain,
  },
];

const ContextPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-terracotta/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <Calendar className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Contexte & Origines</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              Un Héritage <span className="text-gradient-gold">Millénaire</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez les racines profondes de l'International Mandjara Heritage et son ancrage 
              dans l'histoire et la culture du peuple Mandjara.
            </p>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Les Racines de Notre <span className="text-heritage-terracotta">Engagement</span>
                </h2>
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
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
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

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
                Notre <span className="text-heritage-gold">Histoire</span>
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-heritage-gold via-heritage-terracotta to-heritage-forest hidden lg:block" />
                <div className="space-y-12 lg:space-y-0">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.era}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`lg:flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                        <div className="card-heritage p-6">
                          <span className="text-heritage-gold font-bold text-lg">{item.era}</span>
                          <h3 className="font-serif text-xl font-bold text-foreground mt-2">{item.title}</h3>
                          <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-heritage-gold/20 border-4 border-background z-10">
                        <item.icon className="w-6 h-6 text-heritage-gold" />
                      </div>
                      <div className="lg:w-1/2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Value Pillars */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
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
    </PageLayout>
  );
};

export default ContextPage;
