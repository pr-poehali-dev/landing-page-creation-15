import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
