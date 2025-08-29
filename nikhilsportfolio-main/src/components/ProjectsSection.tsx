import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "YouTube-like Video Streaming Backend",
      description: "Developed comprehensive backend APIs for video upload, retrieval, and channel analytics using Node.js, Express.js, and MongoDB Aggregation Framework. Implemented JWT authentication, structured error handling, and database optimization for scalable video streaming platform.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer", "bcrypt.js"],
      period: "Aug 2025 – Oct 2025",
      category: "Backend Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Help-O-Ride: College Connection Platform",
      description: "Built a comprehensive platform connecting college students for ride sharing, significantly reducing travel costs and promoting eco-friendly commuting. Features real-time matching, secure user profiles, and integrated payment system.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      period: "Feb 2025-May 2025",
      category: "Full Stack",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "PlantChainAI",
      description: "Innovative web-based AI + Blockchain application for identifying protected plant species and tracing their trade. Combines machine learning for plant identification with blockchain technology for transparent supply chain tracking.",
      tech: ["Python", "TensorFlow", "Blockchain", "React", "FastAPI"],
      period: "2024",
      category: "AI & Blockchain",
      color: "from-purple-500 to-pink-500"
    },

    {
  title: "EV Charging Station Ranking & Booking System",
  description: "Built a decision-support system for EV users integrating FastAPI backend, SQLite database, and OpenChargeMap API. Implemented MCDM (TOPSIS) for ranking stations based on distance, price, power, queue, and rating. Added queue simulation, slot booking APIs, and React frontend with map visualization for real-time station selection.",
  tech: ["FastAPI", "SQLite", "SQLAlchemy", "OpenChargeMap API", "React", "Leaflet.js"],
  period: "Aug 2025 – Present",
  category: "Full Stack Development",
  color: "from-green-500 to-emerald-500"
}

    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            AI integration, and innovative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                {/* Category & Period */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium hover:bg-secondary/80 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
            <Code2 className="w-5 h-5" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;