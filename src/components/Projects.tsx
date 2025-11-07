
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiFigma } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import miraeImg from '../assets/mirae.png';
import hearmeImg from '../assets/hearme.png';
import karieraImg from '../assets/kariera.png';
import objectDetectionPng from '../assets/objectdetection.png';
import breastCancerPng from '../assets/breastcancer.png';
import moviePng from '../assets/movie.png';
import facialPng from '../assets/facial.png';
import heroBg from '../assets/hero-bg.png';
import vectorOverlay from '../assets/Vector.png';
import portfolioImg from '../assets/potfolio.png';

const Projects = () => {
  const [active, setActive] = useState<'all' | 'frontend' | 'ai' | 'uiux'>('all');

  const projects = [
    {
      title: 'Portfolio',
      year: '2025',
      category: 'UI/UX, Frontend',
      description: 'A redesign version of my personal portfolio.',
      tools: ['Figma', 'React', 'Tailwind CSS'],
      link: 'https://www.figma.com/design/TKqaZJXDFWuLd4RCxZJH7O/ghozlene-portfolio?node-id=1-2&t=0BTICaad0XzvkGCo-1',
      github: 'https://github.com/ghozlenear/ghozlene-arhab-portfolio',
      gradient: 'from-accent-rose to-primary',
      image: portfolioImg,
      imageFit: 'contain',
      tags: ['uiux', 'frontend'],
    },
    {
      title: 'Kariera',
      year: '2025',
      category: 'AI, Web App',
      description:
        'AI-powered career guidance platform offering personalized job recommendations,resume builder and skill assessments.',
      tools: ['React ', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/ghozlenear/kareira',
      gradient: 'from-accent-rose to-primary',
      image: karieraImg,
      imageFit: 'contain',
      tags: ['frontend'],
    },
    {
      title: 'Mirae',
      year: '2025',
      category: 'E-commerce',
      description:
        'Beauty e-commerce mobile application with modern UI/UX and seamless shopping experience.',
      tools: ['Figma', 'React Native', 'Node.js', 'REST API'],
      link: 'https://www.figma.com/proto/6LAmTkN42JeLxWmj94Qs9v/Mirae?page-id=0%3A1&node-id=211-310&p=f&viewport=585%2C223%2C0.38&t=O40qwGf1EtViXNpD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=211%3A310',
      github: 'https://github.com/ghozlenear/ghozlene-arhab-portfolio',
      gradient: 'from-accent-rose to-primary',
      image: miraeImg,
      tags: ['uiux', 'frontend'],
    },
    {
      title: 'HearMe',
      year: '2025',
      category: 'UI Design, Mobile App',
      description:
        'Mental health app with AI chatbot support, emergency calling features, and mood activity tracking.',
      tools: ['Figma', 'React Native', 'Express', 'Node.js', 'AI Chatbot'],
      link: 'https://www.figma.com/proto/1HDZ4Qmz6HixI0GFJjiCaX/Hearme?page-id=0%3A1&node-id=3-1540&viewport=-1839%2C125%2C0.56&t=Zst2ezT7kwg3bGbt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4',
      github: 'https://github.com/ghozlenear/HearMe-App',
      gradient: 'from-accent-lavender to-primary',
      image: hearmeImg,
      tags: ['uiux', 'frontend', 'ai'],
    },
    {
      title: 'Real-Time Object Detection',
      year: '2025',
      category: 'AI',
      description:
        'Implemented neural networks for object classification and localization in various environments.',
      tools: ['ResNet50', 'YOLOv4', 'VGG16'],
      github: 'https://github.com/ghozlenear/Object-Detection',
      image: objectDetectionPng,
      gradient: 'from-accent-lavender to-primary',
      tags: ['ai'],
    },
    {
      title: 'Breast Cancer Prediction',
      year: '2024',
      category: 'AI',
      description:
        'Applied supervised classification models to assist in early diagnosis from medical data.',
      tools: ['KNN', 'SVM', 'KMeans', 'Naive Bayes', 'Decision Tree'],
      github: 'https://github.com/ghozlenear/breastcancer',
      image: breastCancerPng,
      gradient: 'from-accent-lavender to-primary',
      tags: ['ai'],
    },
    {
      title: 'Movie Recommendation System',
      year: '2024',
      category: 'AI',
      description:
        'Developed a hybrid recommendation engine combining collaborative and content-based filtering.',
      tools: ['KNN', 'ANN'],
      github: 'https://github.com/ghozlenear/movie-recommendations',
      image: moviePng,
      gradient: 'from-accent-lavender to-primary',
      tags: ['ai'],
    },
    {
      title: 'Facial Expression Recognition',
      year: '2024',
      category: 'AI',
      description:
        'Created an image analysis model for emotion detection.',
      tools: ['MobileNetV2'],
      github: 'https://github.com/ghozlenear/facial-expression-recognition',
      gradient: 'from-accent-lavender to-primary',
      image: facialPng,
      tags: ['ai'],
    },
  ];

  return (
    <section id="projects" className="-mt-6 md:-mt-8 py-0">
       <div
        className="relative z-0 w-full h-40 md:h-56 lg:h-[320px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
  >
    <img
      src={vectorOverlay}
      alt=""
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 md:h-44 lg:h-56 w-auto object-contain pointer-events-none select-none"
    />
  </div>


  <div className="relative -mt-6 md:-mt-8 flex justify-center">
        <div className="bg-white rounded-xl border border-black/10 shadow-[0_8px_18px_rgba(0,0,0,0.12)] px-3 md:px-4 py-2 md:py-3 inline-flex items-center gap-3 md:gap-6">
          <button
            onClick={() => setActive('all')}
            className={`${active === 'all' ? 'bg-[#FF4A3B] text-white' : 'text-black'} px-3 py-2 rounded-[10px] text-sm font-['Space_Mono',monospace] transition-colors`}
          >
            All
          </button>
          <button
            onClick={() => setActive('frontend')}
            className={`${active === 'frontend' ? 'bg-[#FF4A3B] text-white' : 'text-black'} px-3 py-2 rounded-[10px] text-sm font-['Space_Mono',monospace] transition-colors`}
          >
            Front-End
          </button>
          <button
            onClick={() => setActive('ai')}
            className={`${active === 'ai' ? 'bg-[#FF4A3B] text-white' : 'text-black'} px-3 py-2 rounded-[10px] text-sm font-['Space_Mono',monospace] transition-colors`}
          >
            AI-Projects
          </button>
          <button
            onClick={() => setActive('uiux')}
            className={`${active === 'uiux' ? 'bg-[#FF4A3B] text-white' : 'text-black'} px-3 py-2 rounded-[10px] text-sm font-['Space_Mono',monospace] transition-colors`}
          >
            UI/UX-Design
          </button>
        </div>
      </div>

      {(() => {
        const visible = projects.filter(p => active === 'all' ? true : p.tags?.includes(active));
        return (
          <div className="mt-8 md:mt-10 px-4 md:px-6">
            <div className="relative">
              {/* Side fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
              {/* Bottom fade */}
              <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"></div>

              <div className="overflow-x-auto overflow-y-visible no-scrollbar">
                <div className="flex gap-5 md:gap-7 lg:gap-10 snap-x snap-mandatory pb-8">
                  {visible.map((p, i) => {
                    const href = p.link || p.github || '#';
                    return (
                      <div key={`${p.title}-${i}`} className="snap-center shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
                        <div className="group block">
                          <div className={`relative rounded-[22px] p-0 transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'} shadow-grey hover-shadow-pink ${i % 4 === 0 ? 'mt-1' : i % 4 === 1 ? 'mt-4' : i % 4 === 2 ? 'mt-2' : 'mt-5'} group-hover:rotate-0 group-hover:-translate-y-1 transition-all duration-300` }>
                            <img src={p.image} alt={p.title} className={`w-full h-[180px] md:h-[220px] lg:h-[260px] ${p.imageFit === 'contain' ? 'object-contain bg-transparent' : 'object-cover'} rounded-[22px]`} />

                            {/* Bottom overlay with details */}
                            <div className="absolute inset-x-2 bottom-2">
                              <div className="pointer-events-auto rounded-xl bg-white/85 backdrop-blur-md ring-1 ring-primary/30 shadow-[0_6px_18px_rgba(255,79,163,0.18)] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="p-3 flex flex-col gap-2">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-sm md:text-base font-semibold text-black truncate">{p.title}</h4>
                                    <span className="text-[10px] md:text-xs text-black/60 whitespace-nowrap">{p.year}</span>
                                  </div>
                                  {p.description && (
                                    <p className="text-[10px] md:text-xs text-black/70 max-h-10 overflow-hidden">
                                      {p.description}
                                    </p>
                                  )}
                                  {p.tools?.length ? (
                                    <div className="flex flex-wrap gap-1.5">
                                      {p.tools.slice(0, 4).map((tool) => (
                                        <span key={tool} className="px-2 py-0.5 rounded-md text-[10px] md:text-[11px] bg-primary/10 text-black border border-primary/20">
                                          {tool}
                                        </span>
                                      ))}
                                    </div>
                                  ) : null}
                                  <div className="flex items-center gap-3 pt-1">
                                    {p.link && (
                                      <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs md:text-[13px] text-primary hover:text-accent-rose transition-colors"
                                      >
                                        {p.link?.includes('figma.com') ? <SiFigma className="w-4 h-4" /> : <HiExternalLink className="w-4 h-4" />}
                                        <span>{p.link?.includes('figma.com') ? 'Figma' : 'Live'}</span>
                                      </a>
                                    )}
                                    {p.github && (
                                      <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs md:text-[13px] text-primary hover:text-accent-rose transition-colors"
                                      >
                                        <FaGithub className="w-4 h-4" />
                                        <span>GitHub</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      {/* Pink strip like in Hero, placed under the cards */}
      <style>{`
        @keyframes projects-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div className="relative left-1/2 -translate-x-1/2 w-[140%] mt-8">
        <div className="relative h-14 overflow-hidden" style={{ transform: 'rotate(3.66deg)' }}>
          <div className="absolute inset-0" style={{ background: '#FF69B4' }} />
          <div className="absolute inset-0 overflow-hidden flex items-center">
            <div className="flex gap-12 whitespace-nowrap h-full items-center" style={{ width: '200%', animation: 'projects-marquee-right 16s linear infinite' }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={`projects-pink-bottom-${i}`} className="font-['Italiana',serif] text-black/90 leading-none" style={{ fontSize: 24, letterSpacing: '0.06em' }}>
                  Featured Projects • Featured Projects
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;