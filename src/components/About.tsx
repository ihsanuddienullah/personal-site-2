import { useEffect, useRef, useState } from 'react';
import { Award, Code, Coffee, Heart } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    {
      icon: <Heart size={26} />,
      number: '25+',
      label: 'Happy Clients',
      command: 'clients.happy',
    },
    {
      icon: <Code size={26} />,
      number: '5+',
      label: 'Big Projects Completed',
      command: 'projects.count',
    },
    {
      icon: <Coffee size={26} />,
      number: '10+',
      label: 'Cups of Coffee',
      command: 'coffee.consumed',
    },
    {
      icon: <Award size={26} />,
      number: '5',
      label: 'Years Experience',
      command: 'experience.years',
    },
  ];

  const showNextCard = () =>
    setActiveCard((current) => (current + 1) % stats.length);

  useEffect(() => {
    let animationFrame = 0;

    const updateCardFromScroll = () => {
      animationFrame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const usesPinnedLayout = window.matchMedia('(min-width: 1024px)').matches;
      if (!usesPinnedLayout) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollableDistance)
      );
      const nextCard = Math.min(
        stats.length - 1,
        Math.floor(progress * stats.length)
      );

      setActiveCard((current) => current === nextCard ? current : nextCard);
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateCardFromScroll);
      }
    };

    updateCardFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [stats.length]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-shell about-scroll-section"
    >
      <div className="about-sticky">
      <div className="container mx-auto px-6">
        <div className="section-heading animate-fade-in">
          <SectionTitle>
            About <span className="text-[#42ff87]">Me</span>
          </SectionTitle>
          <p className="section-kicker">01 / profile.readme</p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="animate-fade-in">
            <h3 className="mb-6 font-mono text-xl font-semibold text-[#ffb000]">
              <span className="mr-3 text-zinc-700">$</span>cat journey.md
            </h3>
            <p className="border-l border-[#42ff87]/30 pl-6 leading-8 text-zinc-400">
              I’m a Software Engineer with 5+ years of experience, focused on
              building scalable web and mobile applications with a strong
              frontend foundation. I specialize in React, Next.js, Node.js, and
              React Native using JavaScript/TypeScript. I’ve built applications
              from scratch and improved existing systems across various domains,
              ensuring they are performant, maintainable, and user-friendly. I
              enjoy writing clean code, collaborating with cross-functional
              teams, and continuously learning. I also mentor aspiring
              developers, helping them grow through hands-on guidance and
              real-world projects.
            </p>
          </div>

          <div className="about-card-stage animate-slide-in-right">
            <div className="about-card-sticky">
            <div
              className="stat-stack relative mx-auto h-[390px] w-full max-w-[520px]"
              aria-label="Developer statistics card stack"
            >
              {stats.map((stat, index) => {
                const position =
                  (index - activeCard + stats.length) % stats.length;
                const isActive = position === 0;
                return (
                  <button
                    key={stat.label}
                    type="button"
                    onClick={isActive ? showNextCard : undefined}
                    className={`stat-stack-card stack-position-${position} absolute inset-x-0 top-0 h-[230px] overflow-hidden border border-[#42ff87]/20 bg-[#030604] p-7 text-left shadow-[0_24px_70px_rgba(0,0,0,.72)] ${isActive ? 'cursor-pointer' : 'pointer-events-none'}`}
                    style={{ zIndex: stats.length - position }}
                    aria-label={
                      isActive
                        ? `${stat.label}. Click to show next statistic.`
                        : undefined
                    }
                    tabIndex={isActive ? 0 : -1}
                  >
                    <span className="absolute right-5 top-4 font-mono text-[10px] tracking-[.18em] text-zinc-700">
                      0{index + 1} / 04
                    </span>
                    <span className="mb-10 flex text-[#ffb000]">
                      {stat.icon}
                    </span>
                    <span className="block text-5xl font-semibold tracking-[-.06em] text-white">
                      {stat.number}
                    </span>
                    <span className="mt-2 block text-base text-zinc-400">
                      {stat.label}
                    </span>
                    <span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[.16em] text-[#42ff87]/45">
                      {stat.command}()
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-1 text-center font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700">
              <span className="mr-2 text-[#42ff87]">↕</span>
              <span className="hidden lg:inline">Scroll to cycle · click the front card</span>
              <span className="lg:hidden">Tap the front card to cycle</span>
            </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
