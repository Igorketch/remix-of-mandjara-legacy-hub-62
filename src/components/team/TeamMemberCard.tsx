import { motion } from 'framer-motion';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  portrait: string;
  bio: string[];
  achievements: Achievement[];
  quote: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative"
    >
      {/* Card Container */}
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch`}>
        {/* Portrait Section */}
        <div className="lg:w-2/5 flex-shrink-0">
          <div className="relative group h-full">
            {/* Background accent */}
            <div className={`absolute inset-0 bg-gradient-to-br from-heritage-gold/30 to-heritage-terracotta/20 rounded-2xl transform ${isEven ? 'rotate-3' : '-rotate-3'} transition-transform duration-500 group-hover:rotate-0`} />
            
            {/* Portrait */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-heritage-gold/30 shadow-heritage">
              {member.portrait ? (
                <img
                  src={member.portrait}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-heritage-earth/80 flex items-center justify-center">
                  <span className="text-6xl font-display text-heritage-gold/40">{member.name.charAt(0)}</span>
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/90 via-transparent to-transparent" />
              
              {/* Name on portrait for mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                <h3 className="text-2xl font-display font-bold text-heritage-cream mb-1">
                  {member.name}
                </h3>
                <p className="text-heritage-gold font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 flex flex-col justify-center">
          {/* Name - Desktop only */}
          <div className="hidden lg:block mb-6">
            <h3 className="text-3xl xl:text-4xl font-display font-bold text-heritage-cream mb-2">
              {member.name}
            </h3>
            <p className="text-xl text-heritage-gold font-medium">
              {member.role}
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-4 mb-8">
            {member.bio.map((paragraph, idx) => (
              <p key={idx} className="text-heritage-cream/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {member.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-heritage-earth/50 border border-heritage-gold/20 rounded-xl p-4 hover:border-heritage-gold/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heritage-cream text-sm mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-heritage-cream/60 text-xs leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl text-heritage-gold/20 font-serif">"</div>
            <blockquote className="pl-8 pr-4 py-4 border-l-2 border-heritage-gold/30">
              <p className="text-heritage-cream/90 italic text-lg">
                {member.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
