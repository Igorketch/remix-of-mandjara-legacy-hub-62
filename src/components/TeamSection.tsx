import { motion } from 'framer-motion';
import { Award, Building2, Heart, Leaf, Users, Globe, HandHeart, MapPin, BookOpen, Languages, Crown, ScrollText, Stethoscope, Sparkles } from 'lucide-react';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import persidePortrait from '@/assets/perside-portrait.png';
import ncharePortrait from '@/assets/nchare-portrait.png';
import reginaPortrait from '@/assets/regina-portrait.png';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  portrait: string;
  bio: string[];
  achievements: Achievement[];
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Madame Aïchetou",
    role: "Trésorière • Représentante Bamoun",
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
      },
      {
        icon: Award,
        title: "International Mandjara Heritage",
        description: "Membre du CA, représentante Bamoun et Trésorière du Bureau exécutif"
      }
    ],
    quote: "Un engagement constant en faveur de l'entrepreneuriat responsable, du bien-être, et du développement durable des communautés."
  },
  {
    name: "Madame Ngameyet épouse Mouliom Perside",
    role: "Représentante Pays • Cameroun",
    portrait: persidePortrait,
    bio: [
      "Leader sociale et communautaire engagée, Madame Perside œuvre activement au Cameroun pour la promotion de la solidarité, de l'inclusion sociale et de l'autonomisation des femmes. Elle contribue au développement et à la mise en œuvre d'initiatives culturelles et sociales favorisant le dialogue interculturel et le vivre-ensemble.",
      "Présidente de plusieurs associations caritatives et sociales, elle œuvre principalement à l'amélioration des conditions de vie des jeunes filles, des femmes et de leurs familles. Membre fondatrice de l'Association Mandjara de Douala (ASMADLA), elle promeut la cohésion communautaire entre les trois peuples frères — Bamoun, Bafia et Nso'."
    ],
    achievements: [
      {
        icon: Globe,
        title: "Représentante Pays",
        description: "International Mandjara Heritage au Cameroun, développement d'initiatives culturelles"
      },
      {
        icon: Users,
        title: "ASMADLA",
        description: "Membre fondatrice de l'Association Mandjara de Douala pour la cohésion communautaire"
      },
      {
        icon: HandHeart,
        title: "Leadership Social",
        description: "Présidente d'associations caritatives pour l'autonomisation des femmes"
      },
      {
        icon: MapPin,
        title: "Engagement Commonwealth",
        description: "Participation aux dynamiques de collaboration et renforcement des capacités"
      }
    ],
    quote: "Promouvoir l'amour du prochain, la solidarité et les échanges d'expériences culturelles pour un impact social durable."
  },
  {
    name: "NJI Ncharé Oumarou",
    role: "Conseiller • Comité des Sages",
    portrait: ncharePortrait,
    bio: [
      "Figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun, Monsieur Ncharé Oumarou occupe le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde et à la diffusion de l'héritage historique du Royaume Bamoun.",
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
    name: "Regina Fonyuy Wirba",
    role: "Représentante Pays • Cameroun • Communauté Nso'",
    portrait: reginaPortrait,
    bio: [
      "L'honorable Reine mère Regina Fonyuy Wirba est une infirmière anesthésiste engagée et une figure communautaire respectée, originaire de Jakiri, au sein de la communauté Nso'. Elle conjugue expertise professionnelle en santé et engagement communautaire au service du bien-être et de l'autonomisation des femmes.",
      "En reconnaissance de son dévouement et de son rôle fédérateur, elle a été honorée du titre de « Reine Mère de Bongkisheri Douala », une distinction symbolisant sa sagesse, son sens du service et son influence positive au sein de la communauté."
    ],
    achievements: [
      {
        icon: Stethoscope,
        title: "Infirmière Anesthésiste",
        description: "Expertise professionnelle en santé au service du bien-être communautaire"
      },
      {
        icon: Crown,
        title: "Reine Mère Mbinkar",
        description: "Titre honorifique de Reine Mère de Bongkisheri Douala pour son leadership"
      },
      {
        icon: Users,
        title: "Association Femmes Nso'",
        description: "Présidente 2015-2021 de l'Association des Femmes Nso' de Bongkisheri Douala"
      },
      {
        icon: Sparkles,
        title: "ASMADLA",
        description: "Membre du Bureau exécutif de l'Association Mandjara de Douala"
      }
    ],
    quote: "Un engagement profond en faveur de la santé, de la dignité humaine et de la transmission des valeurs culturelles."
  }
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className={`grid lg:grid-cols-5 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Portrait */}
        <div className={`lg:col-span-2 relative ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
            <img
              src={member.portrait}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/60 via-transparent to-transparent" />
            
            {/* Name overlay on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-heritage-gold font-medium text-sm">
                {member.role}
              </p>
            </div>
          </div>
          
          {/* Decorative corner */}
          <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} w-16 h-16 ${isEven ? 'border-l-4 border-t-4' : 'border-r-4 border-t-4'} border-heritage-gold/50`} />
        </div>

        {/* Biography content */}
        <div className={`lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
          {/* Name - desktop only */}
          <div className="hidden lg:block mb-6">
            <h3 className="font-playfair text-3xl xl:text-4xl font-bold text-heritage-brown mb-2">
              {member.name}
            </h3>
            <p className="text-heritage-terracotta font-medium text-lg">
              {member.role}
            </p>
          </div>

          <div className="space-y-4 text-heritage-brown/80 leading-relaxed mb-8">
            {member.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Achievements grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {member.achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-heritage-cream/50 rounded-xl hover:bg-heritage-cream transition-colors"
              >
                <div className="w-10 h-10 bg-heritage-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-5 h-5 text-heritage-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-heritage-brown text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-heritage-brown/60 text-xs mt-1">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-heritage-gold/20"
          >
            <p className="italic text-heritage-brown/70">
              "{member.quote}"
            </p>
          </motion.blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export const TeamSection = () => {
  return (
    <section id="notre-equipe" className="py-24 bg-heritage-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-heritage-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-heritage-terracotta/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-heritage-gold/5 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-heritage-gold/20 text-heritage-brown rounded-full text-sm font-medium mb-4">
            Notre Équipe
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-brown mb-6">
            Leadership & <span className="text-heritage-terracotta">Gouvernance</span>
          </h2>
          <p className="text-heritage-brown/70 max-w-2xl mx-auto text-lg">
            Des leaders engagés au service du patrimoine Mandjara
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
