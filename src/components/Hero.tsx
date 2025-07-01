import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-bg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-5xl block text-foreground">
              Hello world! I'm
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent animate-glow">
              Muhammad Ihsanuddienullah
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Software engineer with 4+ years experience,
            <br />
            passionate about building scalable web and mobile applications.
            <br />
            <strong>
              {' '}
              Let's connect and build something amazing together!
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.github.com/ihsanuddienullah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-purple-600"
              >
                <Github size={24} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ihsanuddienullah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <Linkedin size={24} />
              </Button>
            </a>
            <a
              href="mailto:ihsanuddienullah@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-green-600"
              >
                <Mail size={24} />
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce"
            onClick={() => scrollToSection('#about')}
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
};

export default Hero;
