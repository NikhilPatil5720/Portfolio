import { Code, BarChart, Cloud, Smartphone, Database, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Building scalable, responsive, and modern web applications using the MERN stack. From concept to deployment, I create applications that deliver exceptional user experiences.",
      features: [
        "MERN Stack Development",
        "REST API Development", 
        "Responsive Design",
        "Performance Optimization",
        "Database Integration",
        "Authentication & Security"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: "Data Analytics & Visualization",
      description: "Transforming raw data into actionable insights through advanced analytics and interactive visualizations. Help businesses make data-driven decisions with comprehensive reporting.",
      features: [
        "Power BI Dashboards",
        "Tableau Visualizations",
        "Data Modeling",
        "Statistical Analysis", 
        "KPI Tracking",
        "Custom Reports"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment & DevOps",
      description: "Seamless deployment and management of applications on cloud platforms. Implementing CI/CD pipelines and ensuring scalable, reliable infrastructure for your projects.",
      features: [
        "Vercel/Render Deployment",
        "CI/CD Pipeline Setup",
        "Database Hosting",
        "Performance Monitoring",
        "Scalability Planning",
        "Backup Strategies"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "Creating robust, well-documented APIs and integrating third-party services. Ensuring seamless data flow and communication between different system components.",
      features: [
        "RESTful API Design",
        "API Documentation",
        "Third-party Integrations",
        "Authentication Systems",
        "Rate Limiting",
        "Error Handling"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, interactive user interfaces. Focus on accessibility, performance, and creating engaging user experiences across all devices.",
      features: [
        "Responsive Design",
        "Component Libraries",
        "Animation & Interactions",
        "Cross-browser Compatibility",
        "Accessibility Standards",
        "Performance Optimization"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Technical Consulting",
      description: "Strategic technical guidance for your projects. From architecture planning to technology stack selection, helping you make informed decisions for successful outcomes.",
      features: [
        "Architecture Planning",
        "Technology Stack Selection",
        "Code Review & Optimization",
        "Performance Auditing",
        "Best Practices Implementation",
        "Team Mentoring"
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development and analytics services tailored to bring your ideas to life 
            and drive business growth through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover group"
              >
                {/* Gradient Header */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-secondary text-secondary-foreground py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with cutting-edge technology 
              and innovative solutions tailored to your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:scale-105">
                Start a Project
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;