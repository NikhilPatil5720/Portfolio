import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with public key
      emailjs.init('bFxIGdcYAmZcqvOUe');
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.project,
        message: formData.message,
        to_name: 'Nikhil Patil'
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_ir47ybb',    // Service ID
        'template_o8uu5q9',   // Template ID
        templateParams
      );
      
      // Success notification
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', project: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error notification
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhilpatil5720@gmail.com",
      link: "mailto:nikhilpatil5720@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98345 54338",
      link: "tel:+919834554338",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/nikhilpatil5720",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub", 
      link: "https://github.com/NikhilPatil5720",
      color: "hover:text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project or just want to say hello? 
            I'm always excited to collaborate on new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, need technical consultation, 
                or just want to connect, I'd love to hear from you. Let's create 
                something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} p-3 flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{method.label}</h4>
                      {method.link ? (
                        <a 
                          href={method.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{method.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4">
              <h4 className="font-medium mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="api-development">API Development</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell me about the project</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;