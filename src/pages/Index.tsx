import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const sections = [
  {
    title: 'Notre Histoire',
    description: 'Découvrez les racines profondes de l\'International Mandjara Heritage et son ancrage dans la culture du peuple Mandjara.',
    icon: BookOpen,
    href: '/context',
    color: 'heritage-gold',
  },
  {
    title: 'Les Trois Peuples',
    description: 'Explorez l\'héritage culturel des Bamoun, Nso\' et Bafia, les trois grands peuples fondateurs.',
    icon: Users,
    href: '/peoples',
    color: 'heritage-terracotta',
  },
  {
    title: 'Notre Mission',
    description: 'Promouvoir, préserver et transmettre le patrimoine culturel pour les générations futures.',
    icon: Target,
    href: '/mission',
    color: 'heritage-forest',
  },
  {
    title: 'Nos Valeurs',
    description: 'Les principes fondamentaux qui guident chaque décision et action de notre organisation.',
    icon: Heart,
    href: '/values',
    color: 'heritage-bronze',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Quick Navigation Cards */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-heritage-sand/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-gold/10 text-heritage-gold text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Explorez Notre Héritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Découvrez Notre <span className="text-heritage-gold">Organisation</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Naviguez à travers les différentes sections pour en apprendre davantage sur 
                notre mission, nos valeurs et notre engagement culturel.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={section.href} className="block h-full">
                    <div className="card-heritage group p-8 h-full flex flex-col hover:border-heritage-gold/30 transition-all duration-300">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${section.color}/10 text-${section.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {section.description}
                      </p>
                      <div className="flex items-center text-heritage-gold font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Team & Contact CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-2 gap-6"
            >
              <Link to="/team" className="block">
                <div className="relative overflow-hidden rounded-2xl bg-heritage-earth p-8 lg:p-10 group hover:shadow-heritage transition-all duration-300">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-heritage-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-heritage-cream mb-3">
                      Notre Équipe
                    </h3>
                    <p className="text-heritage-cream/70 mb-6">
                      Rencontrez les leaders engagés qui portent la vision de l'International Mandjara Heritage.
                    </p>
                    <div className="flex items-center text-heritage-gold font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      Découvrir l'équipe
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/contact" className="block">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-heritage-gold to-heritage-terracotta p-8 lg:p-10 group hover:shadow-heritage transition-all duration-300">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-heritage-cream mb-3">
                      Rejoignez-nous
                    </h3>
                    <p className="text-heritage-cream/90 mb-6">
                      Contactez-nous pour contribuer à la préservation de notre patrimoine culturel.
                    </p>
                    <div className="flex items-center text-heritage-cream font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      Nous contacter
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
