import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Express',
    'Sass/SCSS',
    'Tailwind CSS',
    'Bootstrap',
    'Material-UI',
    'Shadcn UI',
    'Redux',
    'Zustand',
    'Webpack',
    'Vite',
    'Jest',
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="container mx-auto px-6">
        <div className="section-heading animate-fade-in">
          <SectionTitle>
            Tech <span className="text-[#42ff87]">Stack</span>
          </SectionTitle>
          <p className="section-kicker">03 / stack.json</p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="animate-fade-in cursor-pointer justify-start rounded-none border border-[#42ff87]/10 bg-[#030604]/90 px-4 py-6 font-mono text-[11px] text-zinc-500 shadow-[inset_0_1px_0_rgba(66,255,135,.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#42ff87]/45 hover:bg-[#42ff87]/5 hover:text-[#42ff87]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mr-2 text-[#42ff87]/40">{String(index + 1).padStart(2, '0')}</span>{skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
