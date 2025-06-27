import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Muhammad Ihsanuddienullah
            </div>
            <p className="text-muted-foreground">Software Engineer</p>
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
