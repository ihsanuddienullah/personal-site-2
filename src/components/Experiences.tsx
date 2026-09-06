import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const Experiences = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Xapiens Teknologi Indonesia',
      companyUrl: 'https://xapiens.id',
      location: 'Indonesia, Remote',
      period: '03/2021 - Present',
      description: [
        'Developed from scratch an internal service management web application using React. Refactoring and optimizing performance through modern frontend technologies using Vite and integrating with Restful APIs.',
        'Maintained and enhanced existing predictive maintenance dashboard and charity web application, developed new features and resolved bugs using React.',
        'Created and maintained an online learning music platform web application for global users called Muso using Next.js, React, Shadcn UI, Tailwind CSS, and integrating with GraphQL.',
        'Built and maintained React project infrastructure using TypeScript and Material UI for a fraud detection system web application.',
        'Maintained and enhanced existing mobile applications using React Native, ensuring compatibility with both iOS and Android platforms.',
        'Collaborated with cross-functional teams like designers and product managers to deliver high-quality software solutions. Gained experience in agile methodologies.',
        'Implemented responsive design and optimized performance for web applications.',
        'Participated in code reviews and contributed to team knowledge sharing.',
        'Wrote unit tests and performed debugging to ensure code quality.',
        'Managed service for user support and bug fixing.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'React Native',
        'Next.js',
        'Bootstrap',
        'Sass/SCSS',
        'Tailwind CSS',
        'Shadcn UI',
        'Styled Components',
        'Redux',
        'Zustand',
        'React Hook Form',
        'Formik',
        'Zod',
        'Agile',
      ],
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    },
    {
      title: 'Frontend Developer Mentor',
      company: 'Dibimbing Academy',
      companyUrl: 'https://dibimbing.id',
      location: 'Indonesia, Remote',
      period: '2022 - 2025 (seasonal)',
      description: [
        'Mentored 20+ students per batch on JavaScript, React, and frontend development principles.',
        'Provided guidance on building a web application project from scratch using React and its ecosystem libraries.',
        'Provided constructive feedback and suggestions to help students improve their skills.',
        'Supported students in building their portfolios.',
      ],
      technologies: [
        'JavaScript',
        'React',
        'Sass/SCSS',
        'Bootstrap',
        'Tailwind CSS',
      ],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    },
    {
      title: 'Freelance Frontend Developer',
      company: 'Instama',
      companyUrl: 'https://instama.co.id',
      location: 'Indonesia, Bandung',
      period: '06/2020 - 12/2021',
      description: [
        'Built a property management web application for clients using HTML5, CSS3, JavaScript, PHP, CodeIgniter, and Bootstrap.',
        'Fixed bugs and implemented new features based on client requirements.',
        'Created and implemented a customized CSS grid system for responsive design.',
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'PHP',
        'CodeIgniter',
        'Bootstrap',
      ],
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    },
    {
      title: 'Web Developer Internship',
      company: 'Baramij Integrasi Teknologi',
      companyUrl: 'https://baramijintegrasi.com',
      location: 'Indonesia, Bandung',
      period: '05/2019 - 08/2019',
      description: [
        'Developed interface designs for web a application.',
        'Create a wireframe for a web application user interface.',
        'Create the website mockup.',
      ],
      technologies: ['Corel Draw', 'Photoshop', 'Figma', 'HTML5', 'CSS3'],
      image:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section id="experiences" className="section-shell section-tinted">
      <div className="container mx-auto px-6">
        <div className="section-heading animate-fade-in">
          <SectionTitle>
            Work{' '}
            <span className="text-[#42ff87]">
              Experience
            </span>
          </SectionTitle>
          <p className="section-kicker">02 / git.log --career</p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            My professional journey and key contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-[#42ff87] via-[#42ff87]/30 to-transparent md:block"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="absolute left-[1.62rem] top-8 z-10 hidden h-3 w-3 border-2 border-black bg-[#42ff87] shadow-[0_0_16px_#42ff87] md:block"></div>
              <div className="md:ml-16">
                <Card
                  className="surface-card animate-fade-in transition-all duration-300 hover:border-[#42ff87]/35"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#ffb000]/30 bg-[#ffb000]/5 font-mono text-xs text-[#ffb000]">0{index + 1}</div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {experience.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Briefcase size={16} />
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              <span className="font-medium">
                                {experience.company}
                              </span>
                            </a>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-outside text-muted-foreground mb-4 leading-relaxed space-y-1">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="rounded-none border border-[#42ff87]/15 bg-[#42ff87]/5 font-mono text-[10px] text-[#42ff87]/70"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
