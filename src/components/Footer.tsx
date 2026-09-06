import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIhsanLogo from '@/components/AnimatedIhsanLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#42ff87]/15 bg-[#000000] py-12 font-mono">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start">
            <AnimatedIhsanLogo />
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.github.com/ihsanuddienullah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-500 transition-colors hover:text-white"
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
                className="text-zinc-500 transition-colors hover:text-[#0a66c2]"
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
                className="text-zinc-500 transition-colors hover:text-[#ffb000]"
              >
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Muhammad Ihsanuddienullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
