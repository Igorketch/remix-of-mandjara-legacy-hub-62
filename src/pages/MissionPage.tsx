import { motion } from 'framer-motion';
import { Target, Eye, Compass, Leaf, BookOpen, Users2, Globe, Handshake, GraduationCap, Heart, Building } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const missionPoints = [
  {
    icon: BookOpen,
    title: 'Recherche & Documentation',
    text: 'Favoriser la recherche, la documentation et la valorisation du patrimoine matériel et immatériel Mandjara',
  },
  {
    icon: Users2,
    title: 'Liens Intergénérationnels',
    text: 'Renforcer les liens entre les générations et les diasporas issues de ces communautés',
  },
  {
    icon: Globe,
    title: 'Collaboration Internationale',
    text: 'Collaborer avec des institutions canadiennes et internationales pour promouvoir la diversité',
  },
  {
    icon: Compass,
    title: 'Activités Éducatives',
    text: 'Organiser des activités éducatives et culturelles au Canada et à l\'international',
  },
];

const objectives = [
  {
    icon: GraduationCap,
    title: 'Éducation Culturelle',
    description: 'Programmes éducatifs pour transmettre le savoir ancestral aux nouvelles générations.',
  },
  {
    icon: Handshake,
    title: 'Partenariats Stratégiques',
    description: 'Développer des collaborations avec des institutions académiques et culturelles.',
  },
  {
    icon: Heart,
    title: 'Actions Sociales',
    description: 'Soutenir les initiatives communautaires et le bien-être des membres.',
  },
  {
    icon: Building,
    title: 'Préservation Patrimoniale',
    description: 'Documenter et préserver les artefacts, traditions et pratiques culturelles.',
  },
];

const MissionPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-terracotta/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-forest/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-terracotta/20 border border-heritage-terracotta/30 backdrop-blur-sm mb-8">
              <Target className="w-4 h-4 text-heritage-terracotta" />
              <span className="text-heritage-terracotta text-sm font-medium">Notre Mission & Vision</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              Promouvoir, Préserver, <span className="text-gradient-gold">Transmettre</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez notre engagement envers la préservation et la transmission du patrimoine 
              culturel, historique et social du peuple Mandjara.
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

      {/* Mission Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
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
                  Un Engagement <span className="text-heritage-terracotta">Concret</span>
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
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-heritage-terracotta/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-6 h-6 text-heritage-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                        <p className="text-muted-foreground">{point.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
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
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
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

      {/* Objectives */}
      <section className="py-24 lg:py-32 bg-heritage-sand/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Nos <span className="text-heritage-terracotta">Objectifs</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Des actions concrètes pour réaliser notre vision d'un avenir où la culture 
                est au cœur du développement durable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-heritage group p-8 flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-heritage-terracotta/10 text-heritage-terracotta flex items-center justify-center flex-shrink-0 group-hover:bg-heritage-terracotta group-hover:text-white transition-all duration-300">
                    <objective.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MissionPage;
