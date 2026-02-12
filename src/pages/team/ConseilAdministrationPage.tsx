import { motion } from 'framer-motion';
import { Building2, Crown, GraduationCap, Users, Leaf, Heart, Award, HeartPulse, Globe, HandHeart } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import charlottePortrait from '@/assets/charlotte-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';

const conseilAdministration: TeamMember[] = [
  {
    name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
    role: "Fondatrice • Présidente",
    portrait: lauretinePortrait,
    bio: [
      "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité des genres, équité, diversité et inclusion (EEDI), anthropologue de formation et leader engagée en développement international, justice sociale et leadership inclusif. Elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, académiques et communautaires.",
      "Fondatrice de l'International Mandjara Heritage, elle siège à la fois au Conseil d'administration et au Bureau exécutif, assurant l'orientation stratégique, la gouvernance et le rayonnement international de l'organisation. Conférencière, auteure et activiste communautaire, elle œuvre à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Fondatrice IMH",
        description: "Fondatrice et Présidente du CA d'International Mandjara Heritage"
      },
      {
        icon: Building2,
        title: "Gouvernement Fédéral",
        description: "Gestionnaire contribuant aux cadres stratégiques d'équité et d'inclusion au Canada"
      },
      {
        icon: GraduationCap,
        title: "Anthropologue & Experte EEDI",
        description: "Plus de 15 ans d'expertise en égalité des genres, diversité et inclusion"
      },
      {
        icon: Users,
        title: "Engagement Communautaire",
        description: "Actrice engagée de la communauté franco-ontarienne, parent ambassadrice et conférencière"
      }
    ],
    quote: "Un leadership engagé, à la croisée de l'action institutionnelle, de l'engagement communautaire et de la transmission culturelle."
  },
  {
    name: "Madame Aïchetou",
    role: "Trésorière",
    portrait: aichetouPortrait,
    bio: [
      "Entrepreneure engagée et leader innovante, Madame Aïchetou est spécialisée dans la valorisation durable des ressources naturelles africaines, avec plus de quinze années d'expérience dans l'agroalimentaire, le bien-être, la formation et le développement d'entreprises.",
      "Au sein de l'International Mandjara Heritage, elle met son expertise entrepreneuriale, son sens de la gestion et son engagement communautaire au service de la gouvernance, de la transparence financière et du rayonnement des actions de l'organisation."
    ],
    achievements: [
      {
        icon: Building2,
        title: "AF. AGRO-TRADING",
        description: "Exportation de produits exotiques africains vers le Canada et les marchés internationaux"
      },
      {
        icon: Leaf,
        title: "LAMANJER",
        description: "Boissons et tisanes à base de plantes médicinales pour le bien-être naturel"
      },
      {
        icon: Heart,
        title: "AF. INSTITUT",
        description: "Institut de beauté et centre de formation multiculturel"
      }
    ],
    quote: "Un engagement constant en faveur de l'entrepreneuriat responsable, du bien-être, et du développement durable des communautés."
  },
  {
    name: "Charlotte Wirsiy",
    role: "Membre du CA • Représentante Nso'",
    portrait: charlottePortrait,
    portraitPosition: 'center 20%',
    bio: [
      "Madame Charlotte Wirsiy est une professionnelle engagée et une actrice communautaire investie dans les domaines du développement durable, de la résilience communautaire et du soin aux personnes. Née et élevée au Cameroun, elle a grandi dans un environnement marqué par la famille, la solidarité et un fort sentiment d'appartenance communautaire.",
      "Titulaire d'un master en gestion des catastrophes et développement durable, elle s'est ensuite reconvertie vers les sciences infirmières au Canada, alignant son parcours avec sa vocation de service et d'accompagnement humain. Au sein d'International Mandjara Heritage, elle contribue à la promotion du dialogue interculturel et à la valorisation des patrimoines culturels dans une perspective inclusive et intergénérationnelle."
    ],
    achievements: [
      {
        icon: GraduationCap,
        title: "Master Développement Durable",
        description: "Gestion des catastrophes et résilience communautaire"
      },
      {
        icon: HeartPulse,
        title: "Sciences Infirmières",
        description: "Reconversion professionnelle au Canada, vocation de soin et d'accompagnement"
      },
      {
        icon: Users,
        title: "Conseil d'Administration",
        description: "Membre du CA d'International Mandjara Heritage"
      },
      {
        icon: Crown,
        title: "Représentante Nso'",
        description: "Promotion du dialogue interculturel et transmission des valeurs communautaires"
      }
    ],
    quote: "La croissance personnelle et collective est un processus évolutif nourri par chaque étape de la vie."
  },
  {
    name: "Reine Mère Eveline Kinyuy",
    role: "Membre du CA • Vice-Présidente Liaison Nso'",
    portrait: evelinePortrait,
    bio: [
      "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada). Elle œuvre activement dans les domaines de l'éducation, du soutien communautaire, de la préservation du patrimoine culturel et de la transmission intergénérationnelle des valeurs au sein des communautés africaines et de la diaspora.",
      "Titulaire d'un Master en sciences de l'éducation et d'un diplôme en sociologie, elle possède une formation en tant que conseillère d'orientation et préposée aux services de soutien à la personne. Au sein de l'International Mandjara Heritage, elle est membre du Conseil d'administration et du Bureau exécutif, où elle occupe le poste de Vice-présidente chargée de la liaison avec la communauté Nso'."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Reine Mère",
        description: "Leader communautaire respectée et figure culturelle engagée"
      },
      {
        icon: GraduationCap,
        title: "Master Éducation",
        description: "Master en sciences de l'éducation et diplôme en sociologie"
      },
      {
        icon: Building2,
        title: "Membre du CA",
        description: "Membre du Conseil d'administration d'International Mandjara Heritage"
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

const ConseilAdministrationPage = () => {
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
              <Building2 className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Notre Équipe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              Conseil d'Administration
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              Direction stratégique et gouvernance de l'organisation
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="space-y-20">
            {conseilAdministration.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConseilAdministrationPage;
