import { useState } from 'react';
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '@/components/SectionTitle';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'ihsanuddienullah@gmail.com',
      link: 'mailto:ihsanuddienullah@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'Muhammad Ihsanuddienullah',
      link: 'https://www.linkedin.com/in/ihsanuddienullah/',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Indonesia',
      link: '#',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: 'Message sent!',
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();

    window.location.assign(
      `https://api.whatsapp.com/send?phone=+6282128807395&text=Hello${' '}I'm${' '}${
        formValue.name
      }${' '}(${formValue.email})${' '}want${' '}to${' '}${
        formValue.subject
      }${'.'}${' '}${formValue.message}`
    );
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-shell section-tinted">
      <div className="container mx-auto px-6">
        <div className="section-heading animate-fade-in">
          <SectionTitle>
            Get In{' '}
            <span className="text-[#42ff87]">
              Touch
            </span>
          </SectionTitle>
          <p className="section-kicker">04 / initiate_handshake.sh</p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="mb-8 font-mono text-xl font-semibold text-[#ffb000]">$ ./start-a-conversation</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="border border-[#ffb000]/30 bg-[#ffb000]/[.05] p-3 text-[#ffb000]">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, creative
              projects, or potential collaborations. Whether you have a specific
              project in mind or just want to chat about technology, feel free
              to reach out!
            </p>
          </div>

          <Card className="surface-card animate-slide-in-right p-2 sm:p-4">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="First Name"
                  required
                  disabled={isSubmitting}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      name: e.target.value,
                    })
                  }
                  value={formValue.name}
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  disabled={isSubmitting}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      email: e.target.value,
                    })
                  }
                  value={formValue.email}
                />

                <Input
                  placeholder="Subject"
                  required
                  disabled={isSubmitting}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      subject: e.target.value,
                    })
                  }
                  value={formValue.subject}
                />

                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  disabled={isSubmitting}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      message: e.target.value,
                    })
                  }
                  value={formValue.message}
                />

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#42ff87] text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(84,215,255,.18)] hover:bg-[#9be9ff]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
