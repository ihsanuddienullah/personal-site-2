import { Award, Code, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, number: '5+', label: 'Big Projects Completed' },
    { icon: <Coffee size={24} />, number: '10+', label: 'Cups of Coffee' },
    { icon: <Heart size={24} />, number: '25+', label: 'Happy Clients' },
    { icon: <Award size={24} />, number: '4+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a software engineer with over 4 years of experience working on
              frontend development. My journey began with a curiosity about how
              things work on the web and passionate about client-side
              programming especially UI design and front-end environment. It has
              evolved into a career dedicated to crafting beautiful UI.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in frontend development using modern web technologies
              including React, Next JS, and React Native using
              JavaScript/TypeScript. I believe in writing clean, maintainable
              code and creating user experiences that are both intuitive and
              delightful.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
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
