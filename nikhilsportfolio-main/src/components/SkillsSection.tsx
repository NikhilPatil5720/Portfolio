import { Code, Database, Cloud, BarChart3, GitBranch, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Vercel", "Render", "Cloudinary", "Docker", "CI/CD", "Git/GitHub"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      skills: ["Power BI", "Tableau", "Python", "Data Visualization", "Statistical Analysis", "Excel"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Development Practices",
      skills: ["Agile/Scrum", "Version Control", "Testing", "Code Review", "Documentation", "Problem Solving"],
      color: "from-teal-500 to-green-500"
    }
  ];

  const expertise = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "Power BI", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "Cloud Deployment", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills spanning full-stack development, 
            data analytics, and modern deployment practices
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 card-hover group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Levels */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications/Learning */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
            <h4 className="font-semibold mb-2">Continuous Learning</h4>
            <p className="text-muted-foreground text-sm">
              Currently expanding expertise in Machine Learning, Advanced Data Analytics, 
              and Cloud Architecture patterns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;