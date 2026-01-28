import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
