import { motion } from 'framer-motion';
import { Briefcase, Crown, GraduationCap, Building2, HandHeart, Users, Globe, Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';

const bureauExecutif: TeamMember[] = [
  {
    name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
    role: "Présidente",
    portrait: lauretinePortrait,
    bio: [
      "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité des genres, équité, diversité et inclusion (EEDI), anthropologue de formation et leader engagée en développement international, justice sociale et leadership inclusif. Elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, académiques et communautaires.",
      "Fondatrice de l'International Mandjara Heritage, elle siège à la fois au Conseil d'administration et au Bureau exécutif, assurant l'orientation stratégique, la gouvernance et le rayonnement international de l'organisation. Conférencière, auteure et activiste communautaire, elle œuvre à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
    ],
    achievements: [
      {
        icon: Stethoscope,
        title: "Experte EEDI",
        description: "Experte internationale en égalité des genres, équité, diversité et inclusion"
      },
      {
        icon: GraduationCap,
        title: "Anthropologue",
        description: "Formation en anthropologie et développement international"
      },
      {
        icon: Globe,
        title: "Leadership International",
        description: "Plus de 15 années d'expérience au sein d'institutions gouvernementales et académiques"
      },
      {
        icon: Sparkles,
        title: "Fondatrice",
        description: "Fondatrice de l'International Mandjara Heritage"
      }
    ],
    quote: "Œuvrer à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
  },
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
  },
  {
    name: "Nathalie Sandrine Kouotou",
    role: "Secrétaire Générale",
    portrait: "",
    bio: [
      "Nathalie Sandrine Kouotou occupe le poste de Secrétaire Générale au sein du Bureau exécutif de l'International Mandjara Heritage. Elle contribue à la coordination administrative et organisationnelle des activités de l'organisation."
    ],
    achievements: [
      {
        icon: ScrollText,
        title: "Secrétaire Générale",
        description: "Coordination administrative et organisationnelle du Bureau exécutif"
      },
      {
        icon: Building2,
        title: "Gestion Administrative",
        description: "Suivi des dossiers et organisation des réunions"
      }
    ],
    quote: "Contribuer à la coordination et au bon fonctionnement de l'organisation pour mieux servir notre mission."
  },
  {
    name: "Madame Aïchetou Fafa Pouyona",
    role: "Trésorière (Bamoun)",
    portrait: aichetouPortrait,
    bio: [
      "Entrepreneure engagée et leader innovante, Madame Aïchetou est spécialisée dans la valorisation durable des ressources naturelles africaines, avec plus de quinze années d'expérience dans l'agroalimentaire, le bien-être, la formation et le développement d'entreprises.",
      "Au sein du Bureau exécutif, elle assure la gestion financière et la transparence budgétaire de l'organisation, mettant son expertise entrepreneuriale au service de la mission patrimoniale de Mandjara Heritage."
    ],
    achievements: [
      {
        icon: Award,
        title: "Trésorière",
        description: "Gestion financière et transparence budgétaire de l'organisation"
      },
      {
        icon: Leaf,
        title: "Entrepreneure",
        description: "Plus de 15 ans d'expérience dans la valorisation des ressources naturelles africaines"
      },
      {
        icon: Heart,
        title: "Communauté Bamoun",
        description: "Représentante de la communauté Bamoun au sein du Bureau exécutif"
      }
    ],
    quote: "Mettre l'entrepreneuriat au service de la préservation du patrimoine culturel africain."
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
