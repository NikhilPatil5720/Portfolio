import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Nikhil Patil. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Designed & Developed with ❤️ by Nikhil Patil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
