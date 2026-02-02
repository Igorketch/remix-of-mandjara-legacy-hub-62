import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const ParrainsPage = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Notre Équipe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              Parrains
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              Personnalités de marque soutenant notre mission
            </p>
          </motion.div>

          {/* Empty State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-heritage-gold/10 border border-heritage-gold/20 flex items-center justify-center">
              <Users className="w-10 h-10 text-heritage-gold/50" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-heritage-cream mb-4">
              Section à venir
            </h3>
            <p className="text-heritage-cream/60 max-w-md mx-auto">
              Les parrains de l'International Mandjara Heritage seront présentés prochainement.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParrainsPage;
