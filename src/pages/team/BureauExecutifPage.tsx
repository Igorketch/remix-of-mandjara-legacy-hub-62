import { motion } from 'framer-motion';
import { Briefcase, Crown, GraduationCap, Building2, HandHeart, Users } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';

const bureauExecutif: TeamMember[] = [
  {
    name: "Reine Mère Eveline Kinyuy",
    role: "Vice-Présidente • Liaison Communauté Nso'",
    portrait: evelinePortrait,
    bio: [
      "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada). Elle œuvre activement dans les domaines de l'éducation, du soutien communautaire, de la préservation du patrimoine culturel et de la transmission intergénérationnelle des valeurs au sein des communautés africaines et de la diaspora.",
      "Titulaire d'un Master en sciences de l'éducation et d'un diplôme en sociologie, elle possède une formation en tant que conseillère d'orientation et préposée aux services de soutien à la personne. Au sein du Bureau exécutif, elle joue un rôle clé dans la préservation du patrimoine culturel, le renforcement des liens communautaires et la transmission intergénérationnelle des savoirs, tout en favorisant le dialogue et la collaboration entre l'organisation et la communauté Nso'.",
      "Elle est également membre active de plusieurs associations communautaires et culturelles, notamment Bongkisheri Douala, Nso Family Union Canada, Catholic Women League of Canada et Mandjara du Canada."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Reine Mère",
        description: "Leader communautaire respectée et figure culturelle engagée"
      },
      {
        icon: Briefcase,
        title: "Vice-Présidente Bureau Exécutif",
        description: "Chargée de la liaison avec la communauté Nso'"
      },
      {
        icon: GraduationCap,
        title: "Master Éducation",
        description: "Master en sciences de l'éducation et diplôme en sociologie"
      },
      {
        icon: HandHeart,
        title: "Engagement Communautaire",
        description: "Membre active de Bongkisheri Douala, Nso Family Union Canada et Mandjara du Canada"
      }
    ],
    quote: "Un parcours dédié à la préservation du patrimoine, à la transmission intergénérationnelle, à la mémoire collective et au service communautaire."
  }
];

const BureauExecutifPage = () => {
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
              <Briefcase className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Notre Équipe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              Bureau Exécutif
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              Coordination opérationnelle des activités
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="space-y-20">
            {bureauExecutif.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauExecutifPage;
