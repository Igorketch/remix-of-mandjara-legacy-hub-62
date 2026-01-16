import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ContextSection } from '@/components/ContextSection';
import { PeoplesSection } from '@/components/PeoplesSection';
import { MissionSection } from '@/components/MissionSection';
import { ValuesSection } from '@/components/ValuesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContextSection />
        <PeoplesSection />
        <MissionSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
