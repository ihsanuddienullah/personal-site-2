import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'AlgoEasy',
      description:
        'Simple landing page for online learning platform with a focus on user experience, featuring a modern design, smooth animations, and responsive layout.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tech: ['JavaScript', 'React', 'Bootstrap', 'Animate.css'],
      github: '#',
      demo: 'https://algoeasy.vercel.app',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tech: ['Vue.js', 'Firebase', 'TypeScript', 'Vuetify'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts, interactive maps, and beautiful data visualizations.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
      tech: ['React', 'D3.js', 'OpenWeatherMap API', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Blockchain Portfolio Dashboard',
      description:
        'A decentralized finance (DeFi) dashboard for tracking cryptocurrency portfolios, transactions, and market trends using blockchain technology.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tech: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React and TypeScript, featuring dark mode, smooth animations, and contact forms.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Fitness Tracker',
      description:
        'A comprehensive fitness tracking app with workout planning, progress monitoring, and social features for community engagement.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      tech: ['React Native', 'Express', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="section-shell section-tinted">
      <div className="container mx-auto px-6">
        <div className="section-heading animate-fade-in">
          <SectionTitle>
            Featured{' '}
            <span className="text-[#eaff00]">
              Projects
            </span>
          </SectionTitle>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid auto-rows-[minmax(320px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`surface-card group overflow-hidden transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:border-[#eaff00] ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-[#eaff00]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="transition-colors group-hover:text-[#eaff00]">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="rounded-none border-white/20 bg-transparent font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
