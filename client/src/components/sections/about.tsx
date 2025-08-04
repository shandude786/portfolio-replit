import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, accomplishments, education } from "@/data/portfolio-data";
import { Download, MessageCircle, Award, GraduationCap } from "lucide-react";

export default function About() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey as a frontend developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative z-10 text-center text-white">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-4xl font-bold">SL</span>
                </div>
                <p className="text-lg font-medium">{personalInfo.title}</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Dynamic React.js / Next.js Developer</h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm passionate about leveraging cutting-edge web technologies to deliver accessible, 
              maintainable, and scalable solutions that enhance user engagement and drive business success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="hover-lift">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-primary mb-2">Experience</h4>
                  <p className="text-2xl font-bold">4+ Years</p>
                  <p className="text-sm text-muted-foreground">Frontend Development</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-primary mb-2">Projects</h4>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-muted-foreground">Completed Successfully</p>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <Card className="mb-8 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <h5 className="font-medium">{education.degree} ({education.percentage})</h5>
                <p className="text-sm text-muted-foreground">
                  {education.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {education.university} • {education.period}
                </p>
              </CardContent>
            </Card>

            {/* Accomplishments */}
            <Card className="mb-8 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <h4 className="font-semibold">Key Accomplishments</h4>
                </div>
                <ul className="space-y-2">
                  {accomplishments.slice(0, 2).map((accomplishment, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => {
                  // Create a link to download the resume
                  const link = document.createElement('a');
                  link.href = '/attached_assets/Shanti Lal Resume_1754298888819.pdf';
                  link.download = 'Shanti_Lal_Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleScrollToContact}
                className="btn-outline"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
