import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Rocket',
    title: 'Быстрая разработка',
    description: 'Использую современные фреймворки и готовые решения для сокращения времени разработки',
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Следую лучшим практикам безопасности, шифрование данных и защита от уязвимостей',
  },
  {
    icon: 'Gauge',
    title: 'Высокая производительность',
    description: 'Оптимизация кода, lazy loading, кэширование для максимальной скорости работы',
  },
  {
    icon: 'Smartphone',
    title: 'Адаптивность',
    description: 'Идеальное отображение на всех устройствах от смартфонов до десктопов',
  },
  {
    icon: 'Code2',
    title: 'Чистый код',
    description: 'Читаемый, документированный код с использованием TypeScript и best practices',
  },
  {
    icon: 'RefreshCw',
    title: 'Поддержка и обновления',
    description: 'Постоянная техническая поддержка, обновления и масштабирование проекта',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему <span className="gradient-text">выбирают меня</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Преимущества работы со мной как разработчиком
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon as any} size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
