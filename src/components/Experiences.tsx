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
        'Led the frontend architecture and development of an internal service management platform from the ground up using React, successfully migrating a legacy codebase to Vite and integrating RESTful APIs, resulting in significantly faster build times and improved application performance.',
        'Optimized frontend search functionality for large-scale datasets by redesigning data fetching and rendering strategies, reducing search response times by approximately 70% and improving overall user productivity.',
        'Collaborated closely with product managers, UI/UX designers, and backend engineers in Agile environments, conducting peer code reviews, implementing unit testing practices, and ensuring high-quality, maintainable code delivery.',
        'Engineered and launched musomethod.app, a global online music learning platform built with Next.js, GraphQL, TypeScript, Tailwind CSS, and Shadcn UI, delivering a highly responsive and scalable user experience for international users.',
        'Developed and maintained a fraud detection platform using TypeScript and Material UI, establishing a type-safe frontend architecture that improved code reliability, consistency, and long-term maintainability.',
        'Maintained and enhanced cross-platform mobile applications for iOS and Android using React Native, delivering critical bug fixes and continuous feature improvements while ensuring stable production performance.',
        'Standardized frontend dependencies, development environments, and versioning practices across projects, improving team collaboration, reducing environment-related issues, and ensuring alignment between development, staging, and production environments.',
        'Leveraged AI-assisted development tools to accelerate debugging, code analysis, and complex refactoring initiatives, reducing bug investigation and resolution time by up to 50% while improving engineering efficiency.',
      ],
      achievements: [
        'Achieved and maintained a 0% critical production error rate by proactively identifying issues, strengthening QA processes, and implementing robust frontend validation and testing practices.',
        'Reduced frontend search feature processing time by approximately 70%, significantly improving responsiveness and user experience across data-intensive applications.',
        'Standardized project version management, dependencies, and documentation across multiple environments, minimizing deployment inconsistencies and accelerating onboarding for new developers.',
        'Improved application stability and code quality, contributing to a measurable reduction in reported system errors and user-facing issues over multiple product releases.',
        'Accelerated bug resolution workflows by 35-50% through the adoption of AI-powered debugging and development tools, enabling faster feature delivery and maintenance cycles.',
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
        'Mentored 20+ students per cohort from diverse educational and professional backgrounds in JavaScript, React, and modern frontend development practices.',
        'Designed and delivered structured learning programs covering frontend fundamentals, component-based architecture, state management, API integration, and industry-standard development workflows.',
        'Guided students through the end-to-end development lifecycle, enabling them to build production-ready web applications using React and its ecosystem from concept to deployment.',
        'Provided personalized code reviews, technical consultations, and career mentoring sessions, helping students improve problem-solving skills, coding standards, and software engineering best practices.',
        'Supported students in developing professional portfolios and real-world projects.',
        'Simplified complex technical concepts into practical and easy-to-understand learning experiences, resulting in consistently high student engagement and learning outcomes.',
      ],
      achievements: [
        'Consistently recognized as one of the highest-rated mentors, achieving an average mentor satisfaction score of 4.8/5 based on student evaluations.',
        'Maintained consistently high student satisfaction scores through clear communication, hands-on mentoring, and effective technical guidance.',
        'Contributed to improving student completion rates and project quality by providing structured feedback, technical troubleshooting, and personalized learning support.',
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
        'Developed a responsive property management web application for client operations using HTML5, CSS3, JavaScript, PHP, CodeIgniter, and Bootstrap.',
        'Collaborated directly with stakeholders to gather requirements, translate business needs into technical solutions, and deliver features aligned with project objectives and timelines.',
        'Designed and implemented a custom CSS grid system to improve responsiveness across desktop, tablet, and mobile devices, ensuring a consistent user experience on multiple screen sizes.',
        'Worked closely with backend developers to integrate application interfaces with server-side functionality and optimize data presentation for end users.',
      ],
      achievements: [
        'Improved cross-device compatibility and responsive behavior by implementing a customized grid system, reducing UI inconsistencies across major screen resolutions.',
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
        'Collaborated with the development team to design user-friendly web application interfaces.',
        'Created wireframes and user flow diagrams to define application structure, navigation, and functionality before development.',
        'Designed high-fidelity website mockups and UI prototypes that served as visual references for developers and stakeholders throughout the development.',
        'Applied responsive design principles and modern UI/UX practices to create consistent experiences across desktop and mobile devices.',
      ],
      achievements: [
        'Delivered multiple wireframes and UI mockups that were successfully adopted as the foundation for web application development projects.',
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
                    <p className="mb-2 font-medium text-foreground">Key Achievements</p>
                    <ul className="list-disc list-outside text-muted-foreground mb-4 leading-relaxed space-y-1">
                      {experience.achievements.map((item, itemIndex) => (
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
