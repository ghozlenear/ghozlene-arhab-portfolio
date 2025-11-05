import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiFigma } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiFlutter, SiPostgresql } from 'react-icons/si';
import miraeImg from '../assets/mirae.png';
import hearmeImg from '../assets/hearme.png';
import karieraImg from '../assets/kariera.png';
import aiObjectImg from '../assets/ai-object-detection.svg';
import aiBreastImg from '../assets/ai-breast-cancer.svg';
import aiMovieImg from '../assets/ai-movie-recommendation.svg';
import aiFacialImg from '../assets/ai-facial-expression.svg';
import heroBg from '../assets/hero-bg.png';
import vectorOverlay from '../assets/Vector.png';

const Projects = () => {
  const [active, setActive] = useState<'all' | 'frontend' | 'ai' | 'uiux'>('all');

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

  {active === 'all' && (
    <div className="mt-8 md:mt-10 px-4 md:px-6">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 md:gap-7 lg:gap-10 snap-x snap-mandatory pb-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`card-${i}`} className="snap-center shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
              <div className={`relative bg-white rounded-2xl border border-black/10 shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-3 md:p-4 transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <img src="/placeholder.svg" alt="project" className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {active === 'frontend' && (
    <div className="mt-8 md:mt-10 px-4 md:px-6">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 md:gap-7 lg:gap-10 snap-x snap-mandatory pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`frontend-${i}`} className="snap-center shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
              <div className={`relative bg-white rounded-2xl border border-black/10 shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-3 md:p-4 transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <img src="/placeholder.svg" alt="frontend project" className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {active === 'ai' && (
    <div className="mt-8 md:mt-10 px-4 md:px-6">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 md:gap-7 lg:gap-10 snap-x snap-mandatory pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`ai-${i}`} className="snap-center shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
              <div className={`relative bg-white rounded-2xl border border-black/10 shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-3 md:p-4 transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <img src="/placeholder.svg" alt="ai project" className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {active === 'uiux' && (
    <div className="mt-8 md:mt-10 px-4 md:px-6">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 md:gap-7 lg:gap-10 snap-x snap-mandatory pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`uiux-${i}`} className="snap-center shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
              <div className={`relative bg-white rounded-2xl border border-black/10 shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-3 md:p-4 transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <img src="/placeholder.svg" alt="uiux project" className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
</section>


  );
};

export default Projects;