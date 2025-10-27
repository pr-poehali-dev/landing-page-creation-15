import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const projects = [
  {
    title: 'E-commerce платформа',
    description: 'Полнофункциональный интернет-магазин с интеграцией платежей и аналитикой',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SaaS дашборд',
    description: 'Панель управления с real-time аналитикой и визуализацией данных',
    tags: ['TypeScript', 'Next.js', 'GraphQL', 'Charts'],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Мобильное приложение',
    description: 'Кроссплатформенное приложение для iOS и Android с геолокацией',
    tags: ['React Native', 'Firebase', 'Maps API'],
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Корпоративный портал',
    description: 'Внутренняя система управления с правами доступа и документооборотом',
    tags: ['Vue.js', 'Python', 'Docker', 'Redis'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'AI чат-бот',
    description: 'Интеллектуальный помощник с обработкой естественного языка',
    tags: ['OpenAI', 'FastAPI', 'WebSockets'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Финтех приложение',
    description: 'Платформа для управления финансами с банковскими интеграциями',
    tags: ['React', 'Go', 'Blockchain', 'Security'],
    gradient: 'from-indigo-500 to-purple-500',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мои <span className="gradient-text">работы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реализованные проекты с использованием современного стека
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="ExternalLink" size={20} className="text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
