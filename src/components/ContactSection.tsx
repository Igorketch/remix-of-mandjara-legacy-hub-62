import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.'
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return <section id="contact" className="relative py-24 lg:py-32 bg-heritage-earth overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 heritage-pattern" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-heritage-gold/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-heritage-terracotta/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <span className="inline-block text-heritage-gold font-medium tracking-widest uppercase text-sm mb-4">
              Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-heritage-cream mb-6">
              Rejoignez <span className="text-heritage-gold">Notre Communauté</span>
            </h2>
            <p className="text-heritage-cream/70 text-lg max-w-2xl mx-auto">
              Vous souhaitez contribuer à la préservation du patrimoine Mandjara ? 
              Contactez-nous pour faire partie de cette belle aventure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heritage-cream mb-1">Email</h4>
                    <p className="text-heritage-cream/70">mefire@internationalmandjaraheritage.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heritage-cream mb-1">Localisation</h4>
                    <p className="text-heritage-cream/70">Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heritage-cream mb-1">Téléphone</h4>
                    <p className="text-heritage-cream/70">+1 (343) 322-0908</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 rounded-2xl bg-heritage-cream/5 border border-heritage-cream/10">
                <h4 className="font-serif text-lg font-bold text-heritage-cream mb-2">
                  Restez Informé
                </h4>
                <p className="text-heritage-cream/60 text-sm mb-4">
                  Inscrivez-vous à notre newsletter pour recevoir les dernières actualités.
                </p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Votre email" className="bg-heritage-cream/10 border-heritage-cream/20 text-heritage-cream placeholder:text-heritage-cream/40 focus:border-heritage-gold" />
                  <Button variant="gold" size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 40
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-heritage-cream/5 backdrop-blur-sm rounded-2xl p-8 border border-heritage-cream/10">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-heritage-cream/80 text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <Input type="text" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} placeholder="Votre nom" required className="bg-heritage-cream/10 border-heritage-cream/20 text-heritage-cream placeholder:text-heritage-cream/40 focus:border-heritage-gold" />
                    </div>
                    <div>
                      <label className="block text-heritage-cream/80 text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} placeholder="votre@email.com" required className="bg-heritage-cream/10 border-heritage-cream/20 text-heritage-cream placeholder:text-heritage-cream/40 focus:border-heritage-gold" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-heritage-cream/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder="Comment pouvons-nous vous aider ?" required rows={5} className="bg-heritage-cream/10 border-heritage-cream/20 text-heritage-cream placeholder:text-heritage-cream/40 focus:border-heritage-gold resize-none" />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};