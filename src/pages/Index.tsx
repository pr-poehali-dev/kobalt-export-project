import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type Language = 'sk' | 'en';

const translations = {
  sk: {
    companyName: 'Kobalt Export',
    nav: {
      services: 'Služby',
      catalog: 'Katalóg',
      about: 'O spoločnosti',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Profesionálny výber priemyselného zariadenia',
      subtitle: 'Spoločnosť «Kobalt Export» sa špecializuje na export priemyselných zariadení s kompletným logistickým cyklom',
      btnConsult: 'Získať konzultáciu',
      btnCatalog: 'Pozrieť katalóg'
    },
    stats: {
      projects: 'Realizovaných projektov',
      years: 'Rokov na trhu',
      partners: 'Partnerov',
      clients: 'Spokojných klientov'
    },
    services: {
      title: 'Naše služby',
      subtitle: 'Kompletné spektrum služieb pre výber, nákup a dodávku priemyselných zariadení',
      items: [
        {
          title: 'Výber optimálneho zariadenia',
          description: 'Naši špecialisti vyberú najvhodnejšie zariadenie práve pre vašu výrobu'
        },
        {
          title: 'Nákup zariadenia',
          description: 'Sme pripravení zakúpiť potrebné zariadenie od overených výrobcov a dodať ho priamo na vašu lokalitu'
        },
        {
          title: 'Montáž a uvedenie do prevádzky',
          description: 'Komplex prác na montáži a spustení zariadenia vo vašom podniku zabezpečí bezporuchovú prevádzku vašej techniky'
        },
        {
          title: 'Kompletný logistický cyklus',
          description: 'Od nákupu až po dodávku a montáž – preberáme plnú zodpovednosť za proces dodávky zariadenia'
        }
      ]
    },
    catalog: {
      title: 'Katalóg zariadení',
      subtitle: 'Široký sortiment priemyselných zariadení pre akékoľvek výrobné úlohy',
      items: [
        { title: 'CNC stroje', description: 'Vysokopresné obrábacie centrá' },
        { title: 'Elektrozariadenia', description: 'Priemyselné elektrické systémy' },
        { title: 'Výrobné linky', description: 'Automatizované komplexy' },
        { title: 'Meracie zariadenia', description: 'Presné kontrolné prístroje' },
        { title: 'Priemyselná robotika', description: 'Automatizácia výroby' },
        { title: 'Skladové zariadenia', description: 'Systémy skladovania a logistiky' }
      ]
    },
    about: {
      title: 'O našej spoločnosti',
      text1: 'Spoločnosť «Kobalt Export» sídli v Bratislave na Slovensku. Ponúkame kompletné spektrum služieb pre výber, nákup a dodávku priemyselných zariadení pre podniky różneho zamerania.',
      text2: 'Naši kvalifikovaní zamestnanci zabezpečujú kvalitný servis a spoľahlivú logistiku. Spolupracujeme s popredným výrobcami priemyselných zariadení a garantujeme vysokú kvalitu dodávanej techniky.',
      quality: { title: 'Kvalita', subtitle: 'Overení výrobcovia' },
      speed: { title: 'Rýchlosť', subtitle: 'Rýchla dodávka' },
      reliability: { title: 'Spoľahlivosť', subtitle: 'Záruka na zariadenie' }
    },
    contact: {
      title: 'Kontaktujte nás',
      subtitle: 'Ste pripravení prediskutovať váš projekt? Vyplňte formulár alebo nám zavolajte',
      info: 'Kontaktné informácie',
      address: 'Adresa',
      addressText: 'Václava Havla 18\nBratislava, Slovensko',
      phone: 'Telefón',
      hours: 'Pracovné hodiny',
      hoursText: 'Po-Pia: 9:00 - 18:00',
      form: {
        name: 'Meno',
        namePlaceholder: 'Vaše meno',
        phone: 'Telefón',
        email: 'Email',
        message: 'Správa',
        messagePlaceholder: 'Povedzte nám o vašom projekte...',
        submit: 'Odoslať správu'
      }
    },
    footer: {
      tagline: 'Profesionálne riešenia pre priemysel',
      services: 'Služby',
      servicesLinks: ['Výber zariadení', 'Nákup', 'Montáž', 'Logistika'],
      company: 'Spoločnosť',
      companyLinks: ['O nás', 'Katalóg', 'Kontakt'],
      contactTitle: 'Kontakt',
      copyright: '© 2025 «Kobalt Export». Všetky práva vyhradené.'
    }
  },
  en: {
    companyName: 'Kobalt Export',
    nav: {
      services: 'Services',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Professional Industrial Equipment Selection',
      subtitle: 'Kobalt Export specializes in industrial equipment export with full logistics cycle',
      btnConsult: 'Get Consultation',
      btnCatalog: 'View Catalog'
    },
    stats: {
      projects: 'Completed Projects',
      years: 'Years on Market',
      partners: 'Partners',
      clients: 'Satisfied Clients'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Full range of services for selection, purchase and delivery of industrial equipment',
      items: [
        {
          title: 'Optimal Equipment Selection',
          description: 'Our specialists will select the most suitable equipment for your production'
        },
        {
          title: 'Equipment Purchase',
          description: 'We are ready to purchase necessary equipment from verified manufacturers and deliver it directly to your location'
        },
        {
          title: 'Installation and Commissioning',
          description: 'Complex of installation and launch works at your facility ensures trouble-free operation of your equipment'
        },
        {
          title: 'Full Logistics Cycle',
          description: 'From purchase to delivery and installation – we take full responsibility for the equipment supply process'
        }
      ]
    },
    catalog: {
      title: 'Equipment Catalog',
      subtitle: 'Wide range of industrial equipment for any production tasks',
      items: [
        { title: 'CNC Machines', description: 'High-precision machining centers' },
        { title: 'Electrical Equipment', description: 'Industrial electrical systems' },
        { title: 'Production Lines', description: 'Automated complexes' },
        { title: 'Measuring Equipment', description: 'Precision control instruments' },
        { title: 'Industrial Robotics', description: 'Production automation' },
        { title: 'Warehouse Equipment', description: 'Storage and logistics systems' }
      ]
    },
    about: {
      title: 'About Our Company',
      text1: 'Kobalt Export is located in Bratislava, Slovakia. We offer a full range of services for selection, purchase and delivery of industrial equipment for enterprises of various profiles.',
      text2: 'Our qualified employees provide quality service and reliable logistics. We work with leading manufacturers of industrial equipment and guarantee high quality of supplied equipment.',
      quality: { title: 'Quality', subtitle: 'Verified manufacturers' },
      speed: { title: 'Speed', subtitle: 'Fast delivery' },
      reliability: { title: 'Reliability', subtitle: 'Equipment warranty' }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to discuss your project? Fill out the form or call us',
      info: 'Contact Information',
      address: 'Address',
      addressText: 'Václava Havla 18\nBratislava, Slovakia',
      phone: 'Phone',
      hours: 'Working Hours',
      hoursText: 'Mon-Fri: 9:00 - 18:00',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project...',
        submit: 'Send Message'
      }
    },
    footer: {
      tagline: 'Professional solutions for industry',
      services: 'Services',
      servicesLinks: ['Equipment Selection', 'Purchase', 'Installation', 'Logistics'],
      company: 'Company',
      companyLinks: ['About Us', 'Catalog', 'Contact'],
      contactTitle: 'Contact',
      copyright: '© 2025 «Kobalt Export». All rights reserved.'
    }
  }
};

const Index = () => {
  const [language, setLanguage] = useState<Language>('sk');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const t = translations[language];

  const handleLanguageChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(language === 'sk' ? 'en' : 'sk');
      setIsTransitioning(false);
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const serviceIcons = ['Search', 'ShoppingCart', 'Settings', 'Truck'];
  const equipmentIcons = ['Cpu', 'Zap', 'Factory', 'Gauge', 'Cog', 'Container'];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Box" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-secondary">{t.companyName}</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.services}</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.catalog}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLanguageChange}
              className="flex items-center gap-2"
            >
              <Icon name="Globe" size={16} />
              <span className="font-semibold">{language === 'sk' ? 'EN' : 'SK'}</span>
            </Button>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +421 123 456 789
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/806d4220-5983-4cc9-bb6a-5ff4cafc407e/files/85a7e887-845a-4850-b21f-f707ab51f7b2.jpg" 
            alt="Industrial Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-primary/80"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className={`max-w-4xl mx-auto text-center animate-fade-in ${!isTransitioning ? 'language-transition' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                {t.hero.btnConsult}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6">
                <Icon name="Folder" size={20} className="mr-2" />
                {t.hero.btnCatalog}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">{t.stats.projects}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">{t.stats.years}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">{t.stats.partners}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">{t.stats.clients}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className={`text-center mb-16 ${!isTransitioning ? 'language-transition' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-primary/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon name={serviceIcons[index] as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className={`text-center mb-16 ${!isTransitioning ? 'language-transition' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.catalog.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.catalog.subtitle}
            </p>
          </div>
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://cdn.poehali.dev/projects/806d4220-5983-4cc9-bb6a-5ff4cafc407e/files/d2920147-abdb-4b79-ac42-aaaa11887ac5.jpg" 
              alt="Industrial Machinery"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.catalog.items.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={equipmentIcons[index] as any} className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={!isTransitioning ? 'language-transition' : 'opacity-0'}>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">{t.about.title}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t.about.text1}
                </p>
                <p>
                  {t.about.text2}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="Award" className="text-primary mx-auto mb-2" size={32} />
                  <div className="font-bold text-secondary mb-1">{t.about.quality.title}</div>
                  <div className="text-muted-foreground text-sm">{t.about.quality.subtitle}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="Zap" className="text-primary mx-auto mb-2" size={32} />
                  <div className="font-bold text-secondary mb-1">{t.about.speed.title}</div>
                  <div className="text-muted-foreground text-sm">{t.about.speed.subtitle}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="Shield" className="text-primary mx-auto mb-2" size={32} />
                  <div className="font-bold text-secondary mb-1">{t.about.reliability.title}</div>
                  <div className="text-muted-foreground text-sm">{t.about.reliability.subtitle}</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/806d4220-5983-4cc9-bb6a-5ff4cafc407e/files/b3b1e73e-e3a4-4e33-a85c-ae07354a7c6a.jpg" 
                alt="Team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 ${!isTransitioning ? 'language-transition' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-secondary to-primary text-white">
              <h3 className="text-2xl font-bold mb-6">{t.contact.info}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.address}</div>
                    <div className="opacity-90 whitespace-pre-line">{t.contact.addressText}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.phone}</div>
                    <div className="opacity-90">+421 123 456 789</div>
                    <div className="opacity-90">info@kobaltexport.sk</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.hours}</div>
                    <div className="opacity-90">{t.contact.hoursText}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      {t.contact.form.phone} *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+421"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    {t.contact.form.email} *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  {t.contact.form.submit}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-secondary to-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Box" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">{t.companyName}</span>
              </div>
              <p className="text-white/70 text-sm">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {t.footer.servicesLinks.map((link, i) => (
                  <li key={i}><a href="#services" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">{t.footer.companyLinks[0]}</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">{t.footer.companyLinks[1]}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.footer.companyLinks[2]}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.contactTitle}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+421 123 456 789</li>
                <li>info@kobaltexport.sk</li>
                <li>{language === 'sk' ? 'Bratislava, Slovensko' : 'Bratislava, Slovakia'}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;