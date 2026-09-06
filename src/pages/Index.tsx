import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme-v2">
      <div className="site-frame min-h-screen bg-background text-foreground selection:bg-primary/30">
        <div className="fixed left-0 top-0 z-[70] h-px w-full bg-gradient-to-r from-transparent via-[#42ff87]/80 to-[#ffb000]/60" />
        <Header />
        <main>
          <Hero />
          <About />
          <Experiences />
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
