import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Sass/SCSS',
    'Tailwind CSS',
    'Bootstrap',
    'Material-UI',
    'Shadcn UI',
    'Redux',
    'Zustand',
    'React Hook Form',
    'Formik',
    'Zod',
    'Git',
    'Webpack',
    'Vite',
    'CI/CD',
    'Jest',
    'Testing',
    'Responsive Design',
    'Mobile-First Design',
    'Accessibility',
    'Prototyping',
    'Wireframing',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
