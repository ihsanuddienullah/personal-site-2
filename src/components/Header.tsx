import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import ihsanWhiteLogo from '@/assets/ihsan_white.svg';
import ihsanLogo from '@/assets/ihsan.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experiences', label: 'Experiences' },
    // { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-effect border-b transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-transparent cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"
            onClick={() => scrollToSection('#home')}
          >
            <img
              src={theme === 'light' ? ihsanLogo : ihsanWhiteLogo}
              alt="Logo"
              width={75}
              height={75}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-medium transition-colors duration-300 text-foreground hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:ihsanuddienullah@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl hover:scale-105">
                Hire me!
              </Button>
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="pb-4 mt-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="py-2 font-medium text-left transition-colors duration-300 text-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Button className="px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl hover:scale-105">
                Hire me!
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
