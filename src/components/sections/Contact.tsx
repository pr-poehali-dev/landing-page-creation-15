import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    { icon: 'Mail', label: 'Email', value: 'dev@example.com' },
    { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67' },
    { icon: 'MapPin', label: 'Локация', value: 'Москва, Россия' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="gradient-text">со мной</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готов обсудить ваш проект и предложить оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon as any} size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                    <div className="font-semibold text-lg">{contact.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Социальные сети</h3>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center">
                    <Icon name="Github" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center">
                    <Icon name="Instagram" size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
