import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-up">
        <div className="mb-8">
          {/* Professional avatar placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/20">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">SL</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mb-4 text-white/90 font-medium">
          {personalInfo.title}
        </p>

        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Building scalable web applications with 4+ years of specialized experience in React, TypeScript, and modern frontend technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            onClick={() => handleScrollToSection('projects')}
            className="btn-primary inline-flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScrollToSection('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-white/80">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
          <a 
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            {personalInfo.phone}
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {personalInfo.location}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn Profile"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub Profile"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-icon email"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
