import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: 'Layout',
    title: 'Frontend разработка',
    description: 'Создание интерактивных пользовательских интерфейсов на React, Vue, TypeScript с современным дизайном',
  },
  {
    icon: 'Server',
    title: 'Backend разработка',
    description: 'Разработка масштабируемых API, баз данных и серверной логики на Node.js, Python, Go',
  },
  {
    icon: 'Smartphone',
    title: 'Мобильная разработка',
    description: 'Кроссплатформенные мобильные приложения на React Native с нативной производительностью',
  },
  {
    icon: 'Database',
    title: 'Работа с базами данных',
    description: 'Проектирование и оптимизация баз данных PostgreSQL, MongoDB, Redis для высоких нагрузок',
  },
  {
    icon: 'Cloud',
    title: 'DevOps и деплой',
    description: 'Настройка CI/CD, контейнеризация Docker, развертывание на AWS, Azure, Vercel',
  },
  {
    icon: 'Zap',
    title: 'Оптимизация',
    description: 'Повышение производительности приложений, SEO оптимизация, анализ и устранение узких мест',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что я <span className="gradient-text">умею</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки от идеи до продакшена
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
