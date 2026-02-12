import { motion } from 'framer-motion';
import { Lightbulb, MessageCircle, Heart, Shield, Leaf, Sparkles, TrendingUp, Users, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const values = [
  {
    icon: Lightbulb,
    name: 'Créativité',
    description: 'Les solutions émergent de l\'innovation et de la production d\'idées nouvelles.',
    longDescription: 'Nous croyons que l\'innovation culturelle est le moteur du progrès. La créativité nous permet de trouver des solutions uniques aux défis contemporains tout en honorant nos traditions ancestrales.',
    color: 'heritage-gold',
  },
  {
    icon: MessageCircle,
    name: 'Dialogue',
    description: 'L\'écoute, le respect et la coopération sont au cœur des relations humaines.',
    longDescription: 'Le dialogue interculturel est la base de notre action. Nous favorisons les échanges respectueux entre les communautés, les générations et les cultures pour construire des ponts durables.',
    color: 'heritage-terracotta',
  },
  {
    icon: Heart,
    name: 'Solidarité',
    description: 'La culture et l\'humanité étant interdépendantes, il est de notre devoir de préserver la cohésion culturelle.',
    longDescription: 'La solidarité communautaire est notre force. Ensemble, nous soutenons les membres de nos communautés et travaillons pour le bien-être collectif, ici et dans nos pays d\'origine.',
    color: 'heritage-forest',
  },
  {
    icon: Shield,
    name: 'Transparence',
    description: 'Les informations relatives aux activités de l\'International Mandjara Heritage sont rendues accessibles au public.',
    longDescription: 'Nous nous engageons à une gouvernance transparente et responsable. Chaque action, chaque décision est documentée et partagée avec notre communauté.',
    color: 'heritage-bronze',
  },
  {
    icon: Leaf,
    name: 'Durabilité Culturelle',
    description: 'En cohérence avec les trois autres piliers du développement durable, la culture est le ciment qui unit identité, progrès et environnement.',
    longDescription: 'La culture n\'est pas un luxe mais une nécessité. Elle est le quatrième pilier du développement durable, indissociable des dimensions économique, sociale et environnementale.',
    color: 'heritage-gold',
  },
];

const pillars = [
  { 
    name: 'Économique', 
    icon: TrendingUp,
    color: 'bg-heritage-gold',
    description: 'Développement économique responsable et inclusif'
  },
  { 
    name: 'Social', 
    icon: Users,
    color: 'bg-heritage-terracotta',
    description: 'Justice sociale et équité pour tous'
  },
  { 
    name: 'Environnemental', 
    icon: Leaf,
    color: 'bg-heritage-forest',
    description: 'Protection de notre planète et de ses ressources'
  },
  { 
    name: 'Culturel', 
    icon: Globe,
    color: 'bg-heritage-bronze',
    description: 'Préservation et transmission du patrimoine'
  },
];

const ValuesPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-heritage-sand via-background to-heritage-sand">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-gold/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-terracotta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-terracotta/20 border border-heritage-terracotta/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-heritage-terracotta" />
              <span className="text-heritage-terracotta text-sm font-medium">Nos Valeurs Fondamentales</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Les Principes Qui <span className="text-heritage-gold">Nous Guident</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Nos valeurs sont le fondement de chaque décision, comportement et action de 
              l'International Mandjara Heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card-heritage group p-8 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${value.color}/10 text-${value.color} mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {value.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed border-t border-border/50 pt-4">
                    {value.longDescription}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 lg:py-32 bg-heritage-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-heritage-cream mb-6">
                Les Quatre Piliers du <span className="text-heritage-gold">Développement Durable</span>
              </h2>
              <p className="text-heritage-cream/70 text-lg max-w-2xl mx-auto">
                L'International Mandjara Heritage reconnaît la culture comme le quatrième pilier 
                indispensable au développement durable, aux côtés des dimensions économique, 
                sociale et environnementale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`${pillar.color} rounded-2xl p-8 text-center transition-transform duration-300 group-hover:-translate-y-2 h-full`}>
                    <pillar.icon className="w-12 h-12 text-heritage-cream mx-auto mb-4" />
                    <h3 className="font-serif font-bold text-heritage-cream text-xl mb-3">
                      {pillar.name}
                    </h3>
                    <p className="text-heritage-cream/80 text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <blockquote className="relative max-w-3xl mx-auto">
                <div className="absolute -top-6 left-0 text-7xl text-heritage-gold/20 font-serif">"</div>
                <p className="text-xl lg:text-2xl font-serif text-heritage-cream italic leading-relaxed pl-8">
                  La culture n'est pas un supplément d'âme, mais le ciment qui unit identité, 
                  progrès et environnement dans une vision holistique du développement intégrant 
                  durabilité, paix et bien-être des sociétés.
                </p>
                <footer className="mt-6 flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-heritage-gold" />
                  <cite className="text-heritage-cream/60 not-italic font-medium">
                    UNESCO (2005)
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ValuesPage;
