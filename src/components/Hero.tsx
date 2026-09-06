import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import serverNodes from '@/assets/server-nodes.png';

const Hero = () => {
  const scrollToSection = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="hero-terminal relative min-h-[100svh] overflow-hidden pt-20"
    >
      <div className="cyber-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div
        className="scanlines fixed inset-0 z-[90] pointer-events-none"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] flex-col px-6 py-6">
        <div className="relative z-30 mb-5 flex items-center justify-between border-b border-[#42ff87]/20 pb-3 font-mono text-[10px] uppercase tracking-[.22em] text-zinc-600">
          <span>
            <i className="status-dot mr-3 inline-block" />
            system.online
          </span>
          <div className="flex items-center gap-4 text-zinc-600">
            <a
              href="https://www.github.com/ihsanuddienullah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="relative z-30 inline-flex p-1 transition-colors hover:text-white"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/ihsanuddienullah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative z-30 inline-flex p-1 transition-colors hover:text-[#0a66c2]"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:ihsanuddienullah@gmail.com"
              aria-label="Email"
              className="relative z-30 inline-flex p-1 hover:text-[#ffb000]"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-20">
            <p className="mb-6 font-mono text-xs uppercase tracking-[.24em] text-[#ffb000]">
              // Muhammad Ihsanuddienullah · Software Engineer
            </p>
            <h1 className="mb-7 max-w-4xl text-[clamp(3.3rem,7.3vw,7.6rem)] font-bold uppercase leading-[.84] tracking-[-.075em] text-white">
              Hello
              <br />
              <span className="text-outline-green">World.</span>
            </h1>
            <p className="max-w-xl border-l border-[#42ff87]/50 pl-5 text-sm leading-7 text-zinc-400 md:text-base">
              Software engineer with 5 years experience, passionate about
              building scalable web and mobile applications.{' '}
              <strong className="font-normal text-zinc-100">
                Let's connect and build something amazing together!
              </strong>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="cyber-button inline-flex h-12 items-center bg-[#42ff87] px-6 font-mono text-xs font-bold uppercase tracking-[.12em] text-black transition hover:bg-white"
                href="https://san-ai-chatbot.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Execute work <ArrowUpRight className="ml-2" size={16} />
              </a>
              <button
                className="cyber-button h-12 border border-[#ffb000]/45 bg-[#ffb000]/5 px-6 font-mono text-xs uppercase tracking-[.12em] text-[#ffb000] transition hover:bg-[#ffb000] hover:text-black"
                onClick={() => scrollToSection('#contact')}
              >
                ./contact-me
              </button>
            </div>
          </div>
          <div className="relative min-h-[440px] lg:min-h-[520px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 w-[min(620px,115%)] -translate-x-1/2 -translate-y-1/2 select-none lg:left-[46%]" aria-hidden="true">
              <img
                src={serverNodes}
                alt=""
                className="server-art w-full max-w-none opacity-55"
              />
            </div>
            <div className="code-window absolute left-0 top-1/2 w-full -translate-y-1/2 overflow-hidden border border-[#42ff87]/25 bg-black/80 shadow-[0_0_80px_rgba(66,255,135,.08)] backdrop-blur-md transition-transform duration-500 sm:left-auto sm:right-[14%] sm:w-[80%] lg:rotate-[1.75deg] lg:hover:rotate-[.5deg]">
              <div className="flex h-10 items-center justify-between border-b border-[#42ff87]/15 bg-[#071009]/90 px-4 font-mono text-[10px] text-zinc-600">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <span>developer.ts</span>
                <span>UTF-8</span>
              </div>
              <div className="grid grid-cols-[42px_1fr] font-mono text-[12px] leading-7 sm:text-sm">
                <div className="select-none border-r border-[#42ff87]/10 py-5 pr-3 text-right text-zinc-800">
                  01
                  <br />
                  02
                  <br />
                  03
                  <br />
                  04
                  <br />
                  05
                  <br />
                  06
                  <br />
                  07
                  <br />
                  08
                </div>
                <div className="overflow-hidden p-5 text-zinc-400">
                  <p>
                    <span className="text-[#ffb000]">import</span> {'{'}{' '}
                    createMagic {'}'}{' '}
                    <span className="text-[#ffb000]">from</span>{' '}
                    <span className="text-[#42ff87]">'./core'</span>;
                  </p>
                  <p>&nbsp;</p>
                  <p className="typing-line">
                    <span className="text-[#ffb000]">const</span>{' '}
                    <span className="text-white">developer</span> ={' '}
                    <span className="text-[#42ff87]">createMagic</span>();
                  </p>
                  <p>
                    developer.<span className="text-[#42ff87]">focus</span> ={' '}
                    <span className="text-[#ffb000]">'scalable systems'</span>;
                  </p>
                  <p>
                    developer.<span className="text-[#42ff87]">experience</span>{' '}
                    = <span className="text-[#ffb000]">5</span>;
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span className="text-zinc-700">
                      // ship clean. scale safely.
                    </span>
                  </p>
                  <p>
                    <span className="text-[#ffb000]">export default</span>{' '}
                    developer;
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#42ff87]/15 bg-[#42ff87]/[.035] px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-[#42ff87]/60">
                <span>● main*</span>
                <span>Ln 3, Col 31 &nbsp; TypeScript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600 transition hover:text-[#42ff87]"
          >
            Scroll to inspect <ArrowDown size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
