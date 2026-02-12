import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-heritage-gold/30 bg-heritage-gold/10 text-heritage-cream text-sm font-medium hover:bg-heritage-gold/20 transition-all duration-300"
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase tracking-wide">{language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
};
