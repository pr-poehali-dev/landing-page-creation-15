import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const Index = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRepos = async (githubUsername: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
    setLoading(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">DevPortfolio</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-foreground hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
              Создаю современные
              <br />
              веб-решения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fullstack разработчик с опытом создания высококачественных приложений
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity" onClick={() => scrollToSection('portfolio')}>
                Мои проекты
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Code2', title: 'Веб-разработка', desc: 'Создание современных веб-приложений на React, TypeScript и Node.js' },
              { icon: 'Smartphone', title: 'Адаптивный дизайн', desc: 'Разработка интерфейсов, которые отлично выглядят на всех устройствах' },
              { icon: 'Database', title: 'Backend & API', desc: 'Проектирование и разработка масштабируемых серверных решений' },
              { icon: 'Palette', title: 'UI/UX дизайн', desc: 'Создание интуитивных и красивых пользовательских интерфейсов' },
              { icon: 'Zap', title: 'Оптимизация', desc: 'Повышение производительности и скорости загрузки приложений' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Обеспечение защиты данных и безопасности приложений' },
            ].map((service, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">Портфолио GitHub</h2>
          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <Input
                placeholder="Введите GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && username && fetchRepos(username)}
                className="bg-card border-border"
              />
              <Button onClick={() => username && fetchRepos(username)} disabled={loading} className="gradient-secondary text-white">
                {loading ? 'Загрузка...' : 'Показать'}
              </Button>
            </div>
          </div>

          {repos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <Card key={repo.id} className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon name="Github" size={24} className="text-primary" />
                      <Badge variant="secondary" className="gradient-secondary text-white">
                        <Icon name="Star" size={12} className="mr-1" />
                        {repo.stargazers_count}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{repo.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{repo.description || 'Описание отсутствует'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <Badge variant="outline">{repo.language}</Badge>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          Открыть <Icon name="ExternalLink" size={14} className="ml-1" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Rocket', title: 'Быстрая разработка', desc: 'Использую современные инструменты для ускорения процесса разработки' },
              { icon: 'Target', title: 'Внимание к деталям', desc: 'Каждый пиксель и строка кода имеют значение' },
              { icon: 'Users', title: 'Ориентация на клиента', desc: 'Ваши цели и удовлетворенность - мой приоритет' },
              { icon: 'TrendingUp', title: 'Современные технологии', desc: 'Всегда в курсе последних тенденций и лучших практик' },
            ].map((adv, i) => (
              <div key={i} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Icon name={adv.icon as any} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Отзывы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Алексей М.', role: 'CEO стартапа', text: 'Отличная работа! Проект сдан в срок, все требования учтены. Рекомендую!', rating: 5 },
              { name: 'Мария К.', role: 'Product Manager', text: 'Профессиональный подход, отличная коммуникация. Буду обращаться снова.', rating: 5 },
              { name: 'Дмитрий П.', role: 'Основатель', text: 'Превзошел ожидания. Современный дизайн и чистый код. Очень доволен!', rating: 5 },
            ].map((review, i) => (
              <Card key={i} className="bg-card border-border animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Связаться</h2>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Напишите мне</CardTitle>
              <CardDescription>Заполните форму, и я свяжусь с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="bg-background border-border" />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-center mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 DevPortfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
