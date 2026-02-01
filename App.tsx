
import React, { useEffect, useState, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  BookOpen, 
  Cpu, 
  Binary, 
  Trophy, 
  GraduationCap, 
  ExternalLink, 
  ArrowRight,
  Hexagon,
  Waves,
  Satellite,
  Radar,
  Sparkles,
  FlaskConical,
  Edit3,
  Mail as SubstackIcon,
  Globe,
  Send
} from 'lucide-react';
import { GlassCard } from './components/GlassCard';
import { SectionHeading } from './components/SectionHeading';
import { SignalVisualizer } from './components/SignalVisualizer';
import { Reveal } from './components/Reveal';
import { EXPERIENCES, PROJECTS, SKILLS, ACHIEVEMENTS, SOCIALS } from './constants';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isroExperience = EXPERIENCES.find(exp => exp.company.includes("ISRO"));
  const otherExperiences = EXPERIENCES.filter(exp => !exp.company.includes("ISRO"));

  return (
    <div className="min-h-screen relative gradient-mesh selection:bg-pink-500/30 overflow-x-hidden">
      {/* Background decoration with Parallax */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-[120px]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <div 
          className="text-xl font-bold tracking-tighter flex items-center group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 font-mono tracking-tight hover:opacity-80 transition-opacity">DB</span>
        </div>
        <div className="flex gap-4 md:gap-8 text-sm font-medium">
          {[
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Expertise' },
            { id: 'contact', label: 'Contact' }
          ].map((nav) => (
            <button 
              key={nav.id}
              onClick={() => scrollToSection(nav.id)} 
              className={`transition-all cursor-pointer relative py-1 ${activeSection === nav.id ? 'text-pink-400' : 'text-white/40 hover:text-white'}`}
            >
              {nav.label}
              {activeSection === nav.id && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-pink-500" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-12 px-6 max-w-7xl mx-auto text-center">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-pink-400 mb-8 tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Currently: ML Intern @ ISRO
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 leading-[0.85]">
            Dhanashree<br/>Bansode
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Building intelligent systems where <span className="text-white font-normal">data</span>, <span className="text-white font-normal">math</span>, and <span className="text-white font-normal">machine learning</span> intersect.
          </p>
        </Reveal>

        <Reveal delay={600} direction="up">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href={SOCIALS.medium} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group shadow-xl shadow-pink-500/5"
            >
              <Edit3 size={18} className="text-pink-400" />
              <span className="text-sm font-medium">Medium</span>
            </a>
            <a 
              href={SOCIALS.substack} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group shadow-xl shadow-indigo-500/5"
            >
              <SubstackIcon size={18} className="text-purple-400" />
              <span className="text-sm font-medium">Substack</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500/50 hover:scale-110 transition-all text-white/70 hover:text-white shadow-lg shadow-black/20">
              <Github size={24} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:scale-110 transition-all text-white/70 hover:text-white shadow-lg shadow-black/20">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${SOCIALS.email}`} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 hover:scale-110 transition-all text-white/70 hover:text-white shadow-lg shadow-black/20">
              <Mail size={24} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-32 pt-12 pb-24 px-6 max-w-4xl mx-auto text-center border-t border-white/5">
        <Reveal>
          <p className="text-2xl md:text-4xl font-extralight text-white/80 leading-snug italic">
            “I am a translator—I translate our language to machine, Hi I'm Dhanashree”
          </p>
        </Reveal>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-32 py-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading title="Professional Path" icon={<Cpu size={32} />} />
        </Reveal>
        
        {/* Special ISRO Internship Featured Card */}
        {isroExperience && (
          <Reveal className="mb-16">
            <GlassCard className="!p-0 border-pink-500/30 overflow-hidden ring-1 ring-pink-500/20">
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="lg:w-1/3 bg-pink-500/5 border-r border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
                   <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/10 blur-[80px]" />
                   <div className="relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center mb-6 shadow-xl shadow-pink-500/20 group hover:rotate-12 transition-transform">
                       <Satellite className="text-white" size={32} />
                     </div>
                     <h3 className="text-3xl font-black text-white tracking-tighter mb-1 uppercase">ISRO</h3>
                     <p className="text-white/40 font-mono text-xs uppercase tracking-[0.2em]">Dept. of Space</p>
                   </div>
                   
                   <div className="mt-12 space-y-4 relative z-10">
                     <div className="flex justify-between items-end border-b border-white/5 pb-2">
                        <span className="text-[10px] font-mono text-white/30 uppercase">Status</span>
                        <span className="text-[10px] font-mono text-pink-400 animate-pulse">ACTIVE_ENGAGEMENT</span>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/5 pb-2">
                        <span className="text-[10px] font-mono text-white/30 uppercase">Location</span>
                        <span className="text-[10px] font-mono text-white/60 uppercase">Remote Research</span>
                     </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 p-8 md:p-12">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{isroExperience.role}</h4>
                        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-wider">
                          <Radar size={14} className="animate-spin-slow" />
                          SIGNAL_PROCESSING_LAB_V4.0
                        </div>
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-[10px] uppercase tracking-widest">
                        {isroExperience.period}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                      {isroExperience.highlights.map((h, i) => (
                        <div key={i} className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                          <div className="flex items-start gap-3">
                            <span className="mt-1 w-1 h-1 rounded-full bg-pink-500 group-hover:scale-150 transition-transform" />
                            <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/80 transition-colors">{h}</p>
                          </div>
                        </div>
                      ))}
                   </div>

                   {/* Signal Lab Integrated */}
                   <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FlaskConical size={16} className="text-pink-500" />
                          <span className="text-[10px] font-mono text-pink-500 uppercase tracking-widest">Live Signal Sandbox</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 shadow-inner">
                         <SignalVisualizer />
                      </div>
                   </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        )}

        {/* Other Experiences */}
        <div className="grid grid-cols-1 gap-8">
          {otherExperiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <GlassCard>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-4">
                      {exp.company}
                    </h3>
                    <p className="text-pink-400 font-mono text-sm tracking-wide">{exp.role}</p>
                    {exp.company === "Coding Jr" && (
                      <div className="flex items-center gap-2 mt-2 text-white/30 font-mono text-[10px] uppercase">
                        <Globe size={10} /> Remote Engagement
                      </div>
                    )}
                  </div>
                  <span className="text-white/40 font-mono text-xs px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                    {exp.period}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="group flex items-start gap-4 text-white/50 text-sm leading-relaxed hover:text-white/80 transition-colors">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 py-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading title="Research Artifacts" icon={<Binary size={32} />} />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <Reveal key={idx} delay={idx * 200} threshold={0.2}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
                <GlassCard className="group h-full flex flex-col hover:border-pink-500/40">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                    {project.title}
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-all">
                      {project.link?.includes("github") ? <ExternalLink size={18} /> : <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </h3>
                  <p className="text-white/50 text-sm mb-10 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/40 text-[9px] font-mono rounded-md border border-white/5 uppercase tracking-widest group-hover:border-pink-500/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills & Education Grid */}
      <section id="skills" className="scroll-mt-32 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills Column */}
          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading title="Core Expertise" icon={<Hexagon size={32} />} />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((cat, idx) => (
                <Reveal key={idx} delay={idx * 150}>
                  <GlassCard className="!p-8 group h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <Waves size={16} className="text-pink-500 animate-pulse" />
                      <h4 className="text-xs font-mono text-pink-500 tracking-[0.3em] uppercase">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          style={{ animationDelay: `${(idx * 200) + (i * 80)}ms` }}
                          className="skill-tag-animate px-4 py-1.5 bg-white/5 text-white/70 text-sm rounded-lg border border-white/10 group-hover:border-pink-500/20 hover:bg-pink-500/10 hover:text-white transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education & Achievement Column */}
          <div className="space-y-12">
            <Reveal delay={200}>
              <SectionHeading title="Academic" icon={<GraduationCap size={32} />} />
              <GlassCard className="!p-8 border-indigo-500/20">
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h4>
                <p className="text-white/50 text-xs font-mono mb-6 uppercase tracking-wider">G.S. Moze College, SPPU</p>
                <div className="relative p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                  <p className="relative text-5xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-500">8.55</p>
                  <p className="relative text-[10px] font-mono text-indigo-300 uppercase tracking-[0.4em] mt-2">Cumulative CGPA</p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={400}>
              <SectionHeading title="Honors" icon={<Trophy size={32} />} />
              <GlassCard className="!p-8 border-pink-500/20">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex items-center gap-2 mb-2 text-pink-500">
                      <Sparkles size={16} className="group-hover:rotate-45 transition-transform" />
                      <h4 className="text-lg font-bold text-white">{ach.title}</h4>
                    </div>
                    <p className="text-pink-400 font-mono text-[10px] mb-4 uppercase tracking-[0.2em]">{ach.event}</p>
                    <p className="text-white/40 text-[11px] leading-relaxed italic border-l-2 border-pink-500/20 pl-4 py-1 group-hover:text-white/60 transition-colors">
                      {ach.topic}
                    </p>
                  </div>
                ))}
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32 py-24 px-6 max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading title="Initialize Connection" icon={<Mail size={32} />} />
        </Reveal>
        
        <Reveal delay={200}>
          <GlassCard className="!p-10 border-pink-500/20">
            <form action="https://formspree.io/f/mqelkjbe" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono text-pink-400 uppercase tracking-[0.2em]">Source Identity (Email)</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="researcher@future.io"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/50 transition-all font-mono text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono text-indigo-400 uppercase tracking-[0.2em]">Transmission Data (Message)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    placeholder="Initiate a professional exchange or collaboration request..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all font-mono text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-xl text-white font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-pink-500/20"
                >
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Transmit Signal
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </section>

      {/* Footer / Socials */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black/60 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <Reveal className="max-w-md" direction="right">
            <div className="text-4xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 font-mono">DB</div>
            <p className="text-white/40 text-sm font-mono leading-relaxed">
              ML Intern @ ISRO &middot; Researching the intersection of mathematical signals and machine intelligence.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-8" direction="left">
            <a href={SOCIALS.medium} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Writings</span>
              <span className="text-white/60 group-hover:text-pink-400 transition-colors flex items-center gap-2">Medium <ExternalLink size={12}/></span>
            </a>
            <a href={SOCIALS.substack} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Newsletter</span>
              <span className="text-white/60 group-hover:text-pink-400 transition-colors flex items-center gap-2">Substack <ExternalLink size={12}/></span>
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Source</span>
              <span className="text-white/60 group-hover:text-pink-400 transition-colors flex items-center gap-2">GitHub <ExternalLink size={12}/></span>
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Network</span>
              <span className="text-white/60 group-hover:text-pink-400 transition-colors flex items-center gap-2">LinkedIn <ExternalLink size={12}/></span>
            </a>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 text-white/10 text-[9px] font-mono uppercase tracking-[0.4em]">
          <div>&copy; 2024 / Future-Ready Systems</div>
          <div className="flex gap-4">
             <span>Signal Level: 100%</span>
             <span>Noise Level: 0.02%</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
