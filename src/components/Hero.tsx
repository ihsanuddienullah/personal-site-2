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
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 gradient-bg"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 p-1 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-float">
              <div className="flex items-center justify-center w-full h-full text-6xl font-bold text-transparent rounded-full bg-background bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text"></div>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
            <span className="block text-2xl md:text-5xl text-foreground">
              Hello world! I'm
            </span>
            <span className="block text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-glow">
              Muhammad Ihsanuddienullah
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground">
            Software engineer with 5 years experience,
            <br />
            passionate about building scalable web and mobile applications.
            <br />
            <strong>
              {' '}
              Let's connect and build something amazing together!
            </strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <a
              href="https://san-ai-chatbot.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                // onClick={() => scrollToSection('#projects')}
              >
                View My Work
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center mb-12 space-x-6">
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
      <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-purple-500/10 animate-float"></div>
      <div
        className="absolute w-16 h-16 rounded-full bottom-20 right-10 bg-blue-500/10 animate-float"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute w-12 h-12 rounded-full top-1/2 left-20 bg-green-500/10 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
};

export default Hero;
