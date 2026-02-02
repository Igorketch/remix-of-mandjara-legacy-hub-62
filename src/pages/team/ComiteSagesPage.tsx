import { motion } from 'framer-motion';
import { ScrollText, Crown, Languages, BookOpen, Plane, Palette, Users, Building2, GraduationCap, HandHeart, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import ncharePortrait from '@/assets/nchare-portrait.png';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';

const comiteSages: TeamMember[] = [
  {
    name: "NJI Ncharé Ousmanou",
    role: "Conseiller",
    portrait: ncharePortrait,
    bio: [
      "Figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun, Monsieur Ncharé Ousmanou occupe le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde et à la diffusion de l'héritage historique du Royaume Bamoun.",
      "Linguiste, archiviste et muséologue, il est reconnu comme spécialiste de l'écriture Shu-Mom et des langues inventées par le Roi Njoya. Co-traducteur du Saint Coran en langue bamoun, il contribue à la transmission intergénérationnelle des savoirs Bamoun."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Palais des Rois Bamoun",
        description: "Directeur des Affaires administratives et culturelles depuis plusieurs décennies"
      },
      {
        icon: Languages,
        title: "Écriture Shu-Mom",
        description: "Spécialiste des langues inventées par le Roi Njoya et traducteur du Coran en bamoun"
      },
      {
        icon: BookOpen,
        title: "Archiviste & Muséologue",
        description: "Conservation et interprétation des manuscrits royaux du Royaume Bamoun"
      },
      {
        icon: ScrollText,
        title: "Comité des Sages",
        description: "Conseiller apportant expertise historique et sagesse aux orientations de l'organisation"
      }
    ],
    quote: "Une mémoire vivante au service de la culture, de l'histoire et de l'identité des peuples."
  },
  {
    name: "Sylvie Mouchingam épouse TABUE",
    role: "Conseillère",
    portrait: sylviePortrait,
    bio: [
      "Sylvie Mouchingam épouse Tabue est une entrepreneure, dirigeante et actrice communautaire engagée, reconnue pour sa capacité à articuler leadership stratégique, engagement socioculturel et sens profond du service.",
      "Fondatrice et PDG de Mandjara Travel et Mandjara Arts, elle contribue à la promotion des arts, de la culture et à la valorisation du patrimoine. Au sein d'International Mandjara Heritage, elle siège comme conseillère au Comité des sages, accompagnant la vision, l'orientation éthique et la transmission des valeurs fondamentales de l'institution."
    ],
    achievements: [
      {
        icon: Plane,
        title: "Mandjara Travel",
        description: "Fondatrice et PDG, services de transport aérien et mobilité internationale"
      },
      {
        icon: Palette,
        title: "Mandjara Arts",
        description: "Fondatrice et PDG, promotion des arts et valorisation du patrimoine culturel"
      },
      {
        icon: Users,
        title: "Bureau Exécutif",
        description: "Membre du Bureau exécutif de Mandjara Douala, coordination des initiatives"
      },
      {
        icon: ScrollText,
        title: "Comité des Sages",
        description: "Conseillère pour la vision éthique et la transmission intergénérationnelle"
      }
    ],
    quote: "Un leadership fondé sur le service, la foi, la responsabilité sociale et l'impact durable."
  },
  {
    name: "Ousmanou NGAM",
    role: "Conseiller",
    portrait: ousmanouPortrait,
    bio: [
      "Ousmanou NGAM est titulaire d'un Executive MBA de l'Université du Québec à Montréal et d'un Advanced Management Programme de l'ESSEC de Paris. En tant que Président de Global Trade Logistics Canada Inc, il a notamment orchestré l'acquisition du laboratoire de Cosmétique Capillaire KARILISS Inc.",
      "Avant son installation au Canada, il a dirigé plusieurs entreprises en Afrique, en Europe et en Chine. Son engagement actif en tant qu'administrateur au sein de la fondation MMS, ainsi que ses interventions comme éducateur à l'école TEFLER de l'Université d'Ottawa, soulignent son dévouement envers des causes philanthropiques et éducatives."
    ],
    achievements: [
      {
        icon: Building2,
        title: "Global Trade Logistics Canada",
        description: "Président et acquisition du laboratoire KARILISS Inc"
      },
      {
        icon: GraduationCap,
        title: "Formation d'Excellence",
        description: "Executive MBA (UQÀM) et Advanced Management Programme (ESSEC Paris)"
      },
      {
        icon: HandHeart,
        title: "Fondation MMS",
        description: "Administrateur de la fondation Mère du Monde pour la Santé"
      },
      {
        icon: Briefcase,
        title: "Réseaux d'Affaires",
        description: "Membre des Chambres de Commerce de Montréal, Laval et Sainte-Thérèse-Blainville"
      }
    ],
    quote: "Un dévouement envers des causes philanthropiques, éducatives et le développement des échanges internationaux."
  }
];

const ComiteSagesPage = () => {
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
              <ScrollText className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Notre Équipe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              Comité des Sages
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              Gardiens de la sagesse et de la tradition
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="space-y-20">
            {comiteSages.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComiteSagesPage;
