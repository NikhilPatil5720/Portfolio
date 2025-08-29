import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and turning complex problems into elegant code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Full Stack Developer & Data Analytics Enthusiast
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Detail-oriented and self-motivated Full Stack Developer with expertise in MERN stack, 
                REST API development, and responsive web applications. I thrive on solving complex 
                problems and building scalable solutions that make a real impact.
              </p>
              
              <p>
                Skilled in Agile methodologies, version control, and CI/CD pipelines. My experience 
                includes API integration, database management (MongoDB, MySQL), and cloud deployment 
                platforms like Vercel, Render, and Cloudinary.
              </p>
              
              <p>
                I have a strong foundation in Database Management Systems, Operating Systems, 
                Computer Networks, and Software Engineering principles. Currently expanding my 
                expertise in data analytics with tools like Power BI and Tableau.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Education & Details Card */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h5 className="font-medium">B.Tech in Information Technology</h5>
                    <p className="text-sm text-muted-foreground">
                      Vishwakarma Institute of Information Technology
                    </p>
                    <p className="text-xs text-muted-foreground">Expected 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm text-muted-foreground">Currently Based In</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-muted-foreground">India</p>
                <p className="text-sm text-muted-foreground">
                  Available for remote work and collaboration
                </p>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-semibold mb-3">My Philosophy</h4>
              <p className="text-sm text-muted-foreground italic">
                "Great software is not just about clean code—it's about solving real problems 
                and creating experiences that users love. Every line of code should have purpose."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;