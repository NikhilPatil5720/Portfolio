import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/nikhil-profile-new.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="hero-gradient absolute inset-0 -z-10" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 float-animation" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-accent/20 float-slow" />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-primary/30 float-animation" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-20 right-40 w-24 h-24 rounded-lg bg-accent/15 float-slow" style={{animationDelay: '1s'}} />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Nikhil Patil</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary-foreground">
                Full Stack Developer & Data Analyst
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Detail-oriented IT Engineer skilled in MERN stack, REST APIs, cloud deployment, 
                and data analytics. Passionate about building scalable web applications and 
                transforming data into actionable insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:scale-105 group"
              >
                View Portfolio 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-secondary/80 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:nikhilpatil5720@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/nikhilpatil5720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://github.com/NikhilPatil5720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl transform scale-110" />
              
              {/* Profile image container */}
              <div className="relative bg-card border border-border rounded-3xl p-2 hover:scale-105 transition-transform duration-500">
                <img 
                  src={profileImage} 
                  alt="Nikhil Patil - Full Stack Developer"
                  className="w-80 h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg float-animation">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;