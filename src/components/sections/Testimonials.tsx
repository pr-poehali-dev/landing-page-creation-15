import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Алексей Иванов',
    role: 'CEO, TechStart',
    text: 'Отличный разработчик! Проект был выполнен в срок, код чистый и хорошо документирован. Обязательно буду работать снова.',
    rating: 5,
  },
  {
    name: 'Мария Петрова',
    role: 'Product Manager, DigitalHub',
    text: 'Профессионализм на высшем уровне. Быстро понял требования бизнеса и предложил оптимальные технические решения.',
    rating: 5,
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'CTO, FinanceApp',
    text: 'Работа с базами данных на высоком уровне, оптимизация запросов значительно ускорила наше приложение. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Елена Смирнова',
    role: 'Founder, BeautyOnline',
    text: 'Создал потрясающий интернет-магазин с удобной админ-панелью. Клиенты в восторге от скорости и дизайна!',
    rating: 5,
  },
  {
    name: 'Игорь Волков',
    role: 'Marketing Director, AdTech',
    text: 'Отзывчивый и ответственный исполнитель. Всегда на связи, быстро реагирует на правки. Приятно работать!',
    rating: 5,
  },
  {
    name: 'Анна Кузнецова',
    role: 'Designer, CreativeStudio',
    text: 'Идеально воплотил дизайн в код! Все анимации плавные, адаптив работает безупречно. Профессионал своего дела.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Отзывы о работе над реальными проектами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-scale-in hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
