import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  organisation: [
    { name: 'Notre Histoire', href: '#context' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Nos Valeurs', href: '#values' },
    { name: 'Équipe', href: '#' },
  ],
  ressources: [
    { name: 'Publications', href: '#' },
    { name: 'Événements', href: '#' },
    { name: 'Galerie', href: '#' },
    { name: 'Partenaires', href: '#' },
  ],
  legal: [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Conditions d\'utilisation', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer className="bg-heritage-earth border-t border-heritage-cream/10">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <Globe className="w-10 h-10 text-heritage-gold" />
              <div>
                <span className="block font-serif text-xl font-bold text-heritage-cream">
                  International
                </span>
                <span className="block text-heritage-gold text-sm font-medium tracking-wider">
                  MANDJARA HERITAGE
                </span>
              </div>
            </a>
            <p className="text-heritage-cream/60 leading-relaxed mb-6 max-w-md">
              Préserver et transmettre le patrimoine culturel, historique et social 
              des peuples Bamoun, Bafia et Nso' pour les générations futures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-heritage-cream/5 flex items-center justify-center text-heritage-cream/60 hover:bg-heritage-gold hover:text-heritage-earth transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">Organisation</h4>
            <ul className="space-y-3">
              {footerLinks.organisation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-heritage-cream/60 hover:text-heritage-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-heritage-cream/60 hover:text-heritage-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-heritage-cream/60 hover:text-heritage-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-heritage-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-heritage-cream/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} International Mandjara Heritage. Tous droits réservés.
            </p>
            <p className="text-heritage-cream/40 text-sm">
              Préservons notre héritage ensemble 🌍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
