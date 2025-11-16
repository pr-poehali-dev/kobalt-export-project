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
      title: 'Подбор оптимального оборудования',
      description: 'Наши специалисты подберут наиболее подходящее оборудование именно для вашего производства'
    },
    {
      icon: 'ShoppingCart',
      title: 'Закупка оборудования',
      description: 'Мы готовы приобрести необходимое оборудование от проверенных производителей и доставить его прямо на вашу площадку'
    },
    {
      icon: 'Settings',
      title: 'Монтаж и пусконаладка',
      description: 'Комплекс работ по монтажу и запуску оборудования на вашем предприятии обеспечит бесперебойную работу вашей техники'
    },
    {
      icon: 'Truck',
      title: 'Полный цикл логистики',
      description: 'От закупки до доставки и монтажа – мы берем на себя всю ответственность за процесс поставки оборудования'
    }
  ];

  const equipment = [
    {
      icon: 'Cpu',
      title: 'Станки с ЧПУ',
      description: 'Высокоточные обрабатывающие центры'
    },
    {
      icon: 'Zap',
      title: 'Электрооборудование',
      description: 'Промышленные электрические системы'
    },
    {
      icon: 'Factory',
      title: 'Производственные линии',
      description: 'Автоматизированные комплексы'
    },
    {
      icon: 'Gauge',
      title: 'Измерительное оборудование',
      description: 'Точные контрольные приборы'
    },
    {
      icon: 'Cog',
      title: 'Промышленная робототехника',
      description: 'Автоматизация производства'
    },
    {
      icon: 'Container',
      title: 'Складское оборудование',
      description: 'Системы хранения и логистики'
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
            <span className="text-2xl font-bold text-secondary">Кобальт Экспорт</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О компании</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +421 123 456 789
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Профессиональный подбор промышленного оборудования
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Компания «Кобальт Экспорт» специализируется на экспорте промышленного оборудования с полным циклом логистики
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6">
                <Icon name="Folder" size={20} className="mr-2" />
                Посмотреть каталог
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
              <div className="text-muted-foreground">Проектов реализовано</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Партнёров</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по подбору, покупке и доставке промышленного оборудования
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
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Каталог оборудования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент промышленного оборудования для любых производственных задач
            </p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">О нашей компании</h2>
            </div>
            <Card className="p-8 md:p-12 bg-white shadow-xl border-2">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Компания <span className="font-bold text-primary">«Кобальт Экспорт»</span> расположена в городе Братислава, Словакия. 
                  Мы предлагаем полный спектр услуг по подбору, покупке и доставке промышленного оборудования для предприятий различного профиля.
                </p>
                <p>
                  Наши квалифицированные сотрудники обеспечивают качественный сервис и надежную логистику. 
                  Мы работаем с ведущими производителями промышленного оборудования и гарантируем высокое качество поставляемой техники.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Качество</div>
                      <div className="text-muted-foreground text-sm">Проверенные производители</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Скорость</div>
                      <div className="text-muted-foreground text-sm">Быстрая доставка</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold text-secondary mb-1">Надежность</div>
                      <div className="text-muted-foreground text-sm">Гарантия на оборудование</div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы обсудить ваш проект? Заполните форму или позвоните нам
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="opacity-90">ул. Вацлава Гавела, д. 18<br />Братислава, Словакия</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
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
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="opacity-90">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Имя *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Телефон *
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
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[120px]"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
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
                <span className="text-xl font-bold">Кобальт Экспорт</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональные решения для промышленности
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Подбор оборудования</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Закупка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Монтаж</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Логистика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+421 123 456 789</li>
                <li>info@kobaltexport.sk</li>
                <li>Братислава, Словакия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            © 2025 «Кобальт Экспорт». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
