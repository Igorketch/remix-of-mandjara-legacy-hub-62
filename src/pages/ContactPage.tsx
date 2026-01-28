import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageCircle, Clock, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      subject: '',
      message: ''
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-heritage-gold/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-heritage-terracotta/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <MessageCircle className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">Contactez-nous</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              Rejoignez <span className="text-gradient-gold">Notre Communauté</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Vous souhaitez contribuer à la préservation du patrimoine Mandjara ? 
              Contactez-nous pour faire partie de cette belle aventure.
            </p>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    Informations de Contact
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    N'hésitez pas à nous contacter pour toute question concernant notre organisation, 
                    nos projets ou comment vous pouvez contribuer.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">mefire@internationalmandjaraheritage.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                      <p className="text-muted-foreground text-sm">Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                      <p className="text-muted-foreground text-sm">+1 (343) 322-0908</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Heures d'ouverture</h4>
                      <p className="text-muted-foreground text-sm">Lun - Ven: 9h00 - 17h00 (EST)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Présence</h4>
                      <p className="text-muted-foreground text-sm">Canada • Cameroun • International</p>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-6 rounded-2xl bg-heritage-earth/5 border border-heritage-gold/20">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    Restez Informé
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Inscrivez-vous à notre newsletter pour recevoir les dernières actualités.
                  </p>
                  <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Votre email" 
                      className="flex-1"
                    />
                    <Button variant="gold" size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="card-heritage p-8 lg:p-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-foreground text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-foreground text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Comment pouvons-nous vous aider ?"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Décrivez votre demande en détail..."
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-24 bg-heritage-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-heritage-cream mb-6">
              Ensemble, Préservons Notre <span className="text-heritage-gold">Héritage</span>
            </h2>
            <p className="text-heritage-cream/80 text-lg leading-relaxed mb-8">
              Que vous soyez membre de la diaspora Mandjara, chercheur, partenaire institutionnel 
              ou simplement passionné par la préservation culturelle, votre contribution compte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg">
                Devenir Membre
              </Button>
              <Button variant="outline-light" size="lg">
                Faire un Don
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
