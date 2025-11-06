import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import Arrow01 from '../assets/Arrow_01.png';
import Dawn from '../assets/Dawn.png';
import Spiral from '../assets/Spiral 1.png';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
     {
      type: 'Remote Internship',
      title: 'Frontend Developer Intern',
      organization: 'REVO LCC - USA',
      period: 'sep 2025 - nov 2025',
      description: 'Contributed to the development of a web application using React and Tailwind CSS, collaborating with a remote team to implement responsive designs and enhance user experience.',
      icon: HiBriefcase,
      color: 'from-primary to-accent-rose'
    },
    {
      type: 'education',
      title: 'Master\'s in Artificial Intelligence',
      organization: 'University of Technology - Annaba',
      period: '2023 - 2025',
      description: 'Specialized in machine learning, deep learning, and computer vision with focus on practical applications in healthcare and recommendation systems.',
      icon: HiAcademicCap,
      color: 'from-primary to-accent-rose'
    },
    {
      type: 'work',
      title: 'UI/UX Design ',
      organization: 'Personal Projects',
      period: '2023 - Present',
      description: 'Designed user interfaces for mobile applications, conducted user research, and created comprehensive design systems for multiple projects.',
      icon: HiBriefcase,
      color: 'from-accent-magenta to-primary-end'
    },
    {
      type: 'education',
      title: 'Bachelor\'s in Computer Science',
      organization: 'University of Technology - Annaba',
      period: '2020 - 2023',
      description: 'Foundation in software development, algorithms, and data structures with emphasis on mobile application development and database management.',
      icon: HiAcademicCap,
      color: 'from-primary-end to-accent-magenta'
    }
  ];

  const mapAccent = (type: string) =>
    type === 'education' ? 'emerald' : 'pink';

  const leftCards = experiences
    .filter((_, i) => i % 2 === 0)
    .map((e) => ({
      accent: mapAccent(e.type),
      title: e.title,
      org: e.organization,
      icon: e.icon,
      type: e.type,
      period: e.period,
      description: e.description,
    }));

  const rightCards = experiences
    .filter((_, i) => i % 2 === 1)
    .map((e) => ({
      accent: mapAccent(e.type),
      title: e.title,
      org: e.organization,
      icon: e.icon,
      type: e.type,
      period: e.period,
      description: e.description,
    }));

  return (
    <section id="experience" className="relative pt-20 pb-[160px] px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[72px] tracking-wide font-['Italiana',serif] text-black mb-6 text-center">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative md:grid md:grid-cols-2 gap-16">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-neutral-200" />

          <div className="space-y-24 md:pr-8">
            {leftCards.map((c, i) => {
              const Icon = c.icon;
              const next = leftCards[i + 1];
              const border = c.accent === 'pink' ? 'border-pink-400' : 'border-emerald-400';
              const shadow = c.accent === 'pink'
                ? 'shadow-[8px_8px_0_0_rgba(236,72,153,0.25)]'
                : 'shadow-[8px_8px_0_0_rgba(16,185,129,0.25)]';
              const pill = c.accent === 'pink' ? 'bg-pink-200 text-pink-700' : 'bg-emerald-200 text-emerald-700';
              return (
                <>
                  <motion.div
                    key={`l-${i}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className={`relative rounded-2xl border-[3px] ${border} bg-white p-7 ${shadow} hover:-translate-y-1 transition-transform`}
                  >
                    <div className="flex gap-4 mb-6">
                      <span className={`px-4 py-1 rounded-full text-sm ${pill}`}>{c.type}</span>
                      <span className={`px-4 py-1 rounded-full text-sm ${pill} opacity-70`}>{c.period}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 text-${c.accent}-500`}><Icon className="w-6 h-6" /></div>
                      <div>
                        <h3 className="text-2xl font-medium text-primary mb-2">{c.title}</h3>
                        <p className="tracking-wide text-muted-foreground">{c.org}</p>
                        <p className="text-muted-foreground leading-relaxed mt-3">{c.description}</p>
                      </div>
                    </div>
                  </motion.div>
                  {['work','Remote Internship'].includes(c.type) && next && ['work','Remote Internship'].includes(next.type) && (
                    <img key={`spiral-between-${i}`} src={Spiral} alt="spiral" className="mx-auto w-32 opacity-70" />
                  )}
                </>
              );
            })}

          </div>

          <div className="space-y-24 mt-20 md:mt-0 md:pl-8">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              src={Arrow01}
              alt="arrow"
              className="w-36 ml-10 mb-3 opacity-70"
            />

            {rightCards.map((c, i) => {
              const Icon = c.icon;
              const next = rightCards[i + 1];
              return (
                <>
                  <motion.div
                    key={`r-${i}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className={`relative rounded-2xl border-[3px] border-blue-500 bg-white p-7 shadow-[8px_8px_0_0_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-transform`}
                  >
                    <div className="flex gap-4 mb-6">
                      <span className={`px-4 py-1 rounded-full text-sm bg-blue-200 text-blue-700`}>{c.type}</span>
                      <span className={`px-4 py-1 rounded-full text-sm bg-blue-200 text-blue-700 opacity-70`}>{c.period}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 text-${c.accent}-500`}><Icon className="w-6 h-6" /></div>
                      <div>
                        <h3 className="text-2xl font-medium text-primary mb-2">{c.title}</h3>
                        <p className="tracking-wide text-muted-foreground">{c.org}</p>
                        <p className="text-muted-foreground leading-relaxed mt-3">{c.description}</p>
                      </div>
                    </div>
                  </motion.div>
                  {c.type === 'education' && next && next.type === 'education' && (
                    <img key={`dawn-between-${i}`} src={Dawn} alt="dawn" className="w-28 ml-auto opacity-70" />
                  )}
                </>
              );
            })}

            
          </div>
        </div>
      </div>
      {/* Rotating marquee strips like in Hero */}

      <style>{`
  @keyframes hero-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes hero-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
`}</style>

<div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[150%] h-[180px] pointer-events-none">
  {/* Blue Strip */}
  <div className="absolute left-0 right-0 top-1/2 -translate-y-[50%] rotate-[-3.66deg] z-0">
    <div className="relative h-14 overflow-hidden">
      <div className="absolute inset-0 bg-[#59C2F0]" />
      <div className="absolute inset-0 overflow-hidden flex items-center">
        <div
          className="flex gap-12 whitespace-nowrap h-full items-center"
          style={{ width: '200%', animation: 'hero-marquee-left 14s linear infinite' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`hero-blue-${i}`}
              className="font-['Italiana',serif] text-black/90 leading-none"
              style={{ fontSize: 24, letterSpacing: '0.06em' }}
            >
              Experience • Education
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Pink Strip */}
  <div className="absolute left-0 right-0 top-1/2 -translate-y-[40%] rotate-[3.66deg] z-10">
    <div className="relative h-14 overflow-hidden">
      <div className="absolute inset-0 bg-[#FF69B4]" />
      <div className="absolute inset-0 overflow-hidden flex items-center">
        <div
          className="flex gap-12 whitespace-nowrap h-full items-center"
          style={{ width: '200%', animation: 'hero-marquee-right 16s linear infinite' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`hero-pink-${i}`}
              className="font-['Italiana',serif] text-black/90 leading-none"
              style={{ fontSize: 24, letterSpacing: '0.06em' }}
            >
              Education • Experience
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Experience;