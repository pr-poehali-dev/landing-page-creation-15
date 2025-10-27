import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 mb-6">
            <Icon name="Code2" size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">Доступен для новых проектов</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Разработка <span className="gradient-text">веб-приложений</span><br />нового поколения
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Создаю современные, быстрые и масштабируемые решения с использованием передовых технологий
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-primary" onClick={() => scrollToSection('portfolio')}>
              <Icon name="Eye" size={20} className="mr-2" />
              Смотреть работы
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить проект
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
