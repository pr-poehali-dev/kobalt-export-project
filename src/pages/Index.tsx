import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: 'Search',
      title: 'Výber optimálneho zariadenia',
      description: 'Naši špecialisti vyberú najvhodnejšie zariadenie práve pre vašu výrobu'
    },
    {
      icon: 'ShoppingCart',
      title: 'Nákup zariadenia',
      description: 'Sme pripravení zakúpiť potrebné zariadenie od overených výrobcov a dodať ho priamo na vašu lokalitu'
    },
    {
      icon: 'Settings',
      title: 'Montáž a uvedenie do prevádzky',
      description: 'Komplex prác na montáži a spustení zariadenia vo vašom podniku zabezpečí bezporuchovú prevádzku vašej techniky'
    },
    {
      icon: 'Truck',
      title: 'Kompletný logistický cyklus',
      description: 'Od nákupu až po dodávku a montáž – preberáme plnú zodpovednosť za proces dodávky zariadenia'
    }
  ];

  const equipment = [
    {
      icon: 'Cpu',
      title: 'CNC stroje',
      description: 'Vysokopresné obrábacie centrá'
    },
    {
      icon: 'Zap',
      title: 'Elektrozariadenia',
      description: 'Priemyselné elektrické systémy'
    },
    {
      icon: 'Factory',
      title: 'Výrobné linky',
      description: 'Automatizované komplexy'
    },
    {
      icon: 'Gauge',
      title: 'Meracie zariadenia',
      description: 'Presné kontrolné prístroje'
    },
    {
      icon: 'Cog',
      title: 'Priemyselná robotika',
      description: 'Automatizácia výroby'
    },
    {
      icon: 'Container',
      title: 'Skladové zariadenia',
      description: 'Systémy skladovania a logistiky'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Box" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-secondary">Kobalt Export</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Služby</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Katalóg</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">O spoločnosti</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Kontakt</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +421 123 456 789
          </Button>
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Profesionálny výber priemyselného zariadenia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Spoločnosť «Kobalt Export» sa špecializuje na export priemyselných zariadení s kompletným logistickým cyklom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Získať konzultáciu
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6">
                <Icon name="Folder" size={20} className="mr-2" />
                Pozrieť katalóg
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
              <div className="text-muted-foreground">Realizovaných projektov</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Rokov na trhu</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Partnerov</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Spokojných klientov</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Naše služby</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletné spektrum služieb pre výber, nákup a dodávku priemyselných zariadení
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-primary/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-white" size={28} />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Katalóg zariadení</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Široký sortiment priemyselných zariadení pre akékoľvek výrobné úlohy
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
            {equipment.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer bg-gradient-to-br from-white to-muted/20 border-2 hover:border-accent/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name={item.icon as any} className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">O našej spoločnosti</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/806d4220-5983-4cc9-bb6a-5ff4cafc407e/files/79580c96-3ea0-44a2-8a4a-ac603f91853c.jpg" 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Spoločnosť <span className="font-bold text-primary">«Kobalt Export»</span> sídli v Bratislave na Slovensku. 
                  Ponúkame komplexné spektrum služieb pre výber, nákup a dodávku priemyselných zariadení pre podniky rôzneho zamerania.
                </p>
                <p>
                  Naši kvalifikovaní zamestnanci zabezpečujú kvalitný servis a spoľahlivú logistiku. 
                  Spolupracujeme s popredným výrobcami priemyselných zariadení a garantujeme vysokú kvalitu dodávanej techniky.
                </p>
              </div>
            </div>
            <Card className="p-8 bg-white shadow-xl border-2">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Kvalita</div>
                      <div className="text-muted-foreground text-sm">Overení výrobcovia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Rýchlosť</div>
                      <div className="text-muted-foreground text-sm">Rýchla dodávka</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Spoľahlivosť</div>
                      <div className="text-muted-foreground text-sm">Záruka na zariadenie</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Kontaktujte nás</h2>
              <p className="text-xl text-muted-foreground">
                Ste pripravení prediskutovať váš projekt? Vyplňte formulár alebo nám zavolajte
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
                <h3 className="text-2xl font-bold mb-6">Kontaktné informácie</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Adresa</div>
                      <div className="opacity-90">Václava Havla 18<br />Bratislava, Slovensko</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Telefón</div>
                      <div className="opacity-90">+421 123 456 789</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="opacity-90">info@kobaltexport.sk</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Pracovné hodiny</div>
                      <div className="opacity-90">Po-Pia: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Meno *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Telefón *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                      placeholder="+421 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Správa
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[120px]"
                      placeholder="Povedzte nám o vašom projekte..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Odoslať správu
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Box" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Kobalt Export</span>
              </div>
              <p className="text-white/70 text-sm">
                Profesionálne riešenia pre priemysel
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Služby</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Výber zariadení</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Nákup</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Montáž</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Logistika</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Spoločnosť</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">O nás</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Katalóg</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+421 123 456 789</li>
                <li>info@kobaltexport.sk</li>
                <li>Bratislava, Slovensko</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            © 2025 «Kobalt Export». Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;