import { Award, Code, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, number: '5+', label: 'Big Projects Completed' },
    { icon: <Coffee size={24} />, number: '10+', label: 'Cups of Coffee' },
    { icon: <Heart size={24} />, number: '25+', label: 'Happy Clients' },
    { icon: <Award size={24} />, number: '5', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            About{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Me
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid items-center gap-12 mb-16 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h3 className="mb-6 text-2xl font-semibold">My Journey</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
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

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4 text-purple-600">
                    {stat.icon}
                  </div>
                  <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
