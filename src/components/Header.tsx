import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedIhsanLogo from '@/components/AnimatedIhsanLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#experiences', label: 'experience' },
    { href: '#skills', label: 'stack' },
    { href: '#contact', label: 'contact' },
  ];
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY <= 24 || currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${scrolled ? 'border-[#42ff87]/20 bg-black/75 backdrop-blur-xl' : 'border-white/5 bg-black/30'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <button onClick={() => scrollToSection('#home')} className="group flex items-center gap-3" aria-label="Back to home">
          <AnimatedIhsanLogo />
          <span className="hidden font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600 transition group-hover:text-[#42ff87] sm:block">~/portfolio</span>
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <button key={item.href} onClick={() => scrollToSection(item.href)} className="px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500 transition hover:bg-[#42ff87]/5 hover:text-[#42ff87]">
              <span className="mr-1 text-[#ffb000]/60">0{index + 1}.</span>{item.label}
            </button>
          ))}
          <a href="mailto:ihsanuddienullah@gmail.com" className="cyber-button ml-4 border border-[#42ff87]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-[#42ff87] transition hover:bg-[#42ff87] hover:text-black">hire_me()</a>
        </nav>
        <button
          className={`relative h-10 w-10 text-[#42ff87] md:hidden ${isMenuOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-out`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <Menu
            size={22}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'scale-50 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
          />
          <X
            size={22}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'scale-100 -rotate-90 opacity-100' : 'scale-50 rotate-0 opacity-0'}`}
          />
        </button>
      </div>
      <div
        className={`grid bg-black/80 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-500 md:hidden ${isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)' }}
      >
        <div className="overflow-hidden">
          <nav className="border-t border-[#42ff87]/15 px-6 py-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full border-b border-white/5 py-4 text-left font-mono text-xs uppercase tracking-widest text-zinc-400 transition-all duration-300 hover:pl-2 hover:text-[#42ff87] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${80 + index * 45}ms` : '0ms' }}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="mr-3 text-[#ffb000]">0{index + 1}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
