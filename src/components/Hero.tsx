import heroBg from '../assets/hero-bg.png';
import shape1 from '../assets/shape1.png';
import yellowArrow from '../assets/yellow-arrow.png';
import redCircle from '../assets/red-circle.png';
import { HiArrowRight } from 'react-icons/hi';
import blobShape from '../assets/Blob.png';
import arrow from '../assets/arrow.png';
import shape2 from '../assets/shape2.png';
import portrait from '../assets/picture.png';
import pf from '../assets/pf.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-visible bg-white">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <img
        src={shape1}
        alt=""
        className="absolute select-none pointer-events-none z-0"
        style={{
          top: 'calc(1.5rem + 5rem/2)', 
          transform: 'translateY(-50%)',
          left: 'calc(50% - 300px - 60px)', 
          width: '123px',
          height: '125px',
        }}
      />

      {/* Right yellow arrow */}
      <img
        src={yellowArrow}
        alt=""
        className="absolute select-none pointer-events-none z-0 object-contain"
        style={{
          top: 'calc(1.5rem + 11rem/2)',
          transform: 'translateY(-50%)',
          left: 'calc(50% + 300px)', 
          width: '335px',                     
          height: 'auto',                     
          objectFit: 'contain',
          objectPosition: 'left center',      
        }}
      />

      <img
        src={blobShape}
        alt=""
        className="absolute select-none pointer-events-none z-0"
        style={{
          top: '135px',
          left: 'calc(50% - 60px)',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '340px'
        }}
      />

      <div
        className="absolute z-10"
        style={{
          top: '115px',
          left: 'calc(50% - 60px)',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '340px',
          WebkitMaskImage: `url(${blobShape})`,
          maskImage: `url(${blobShape})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
        }}
      >
        <img
          src={pf}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 50%' }}
        />
      </div>

      {/* Pink arrow beside the blue blob */}
      <img
        src={arrow}
        alt=""
        className="absolute select-none pointer-events-none z-20"
        style={{
          top: '310px',
          left: 'calc(50% + 25px)',
          width: '200px',
          height: 'auto',
          //transform: 'rotate(18deg)'
        }}
      />

      <img
        src={shape2}
        alt=""
        className="absolute select-none pointer-events-none z-20"
        style={{
          top: '120px',
          left: '370px',
          width: '150px',
          height: '147.89px',
          transform: 'rotate(-10deg)'
        }}
      />

      <div
        className="absolute z-10 text-black"
        style={{
          top: '150px',
          left: 'calc(50% + 50px)'
        }}
      >
        <h2
          className="font-['Italiana',serif] tracking-tight leading-none"
          style={{ fontSize: '72px', letterSpacing: '0.02em', whiteSpace: 'nowrap', textAlign: 'center' }}
        >
          Ghozlene Arhab
        </h2>
        <div className="mt-2 text-center">
          <div
            className="font-['Italiana',serif] text-black/90"
            style={{ fontSize: '36px', letterSpacing: '0.06em' }}
          >
            Frontend developer
          </div>
          <div
            className="font-['Italiana',serif] text-black/90"
            style={{ fontSize: '36px', letterSpacing: '0.06em', marginTop: '2px' }}
          >
            &
          </div>
          <div
            className="font-['Italiana',serif] text-black/90"
            style={{ fontSize: '36px', letterSpacing: '0.06em' }}
          >
            AI Engineer
          </div>
        </div>
      </div>

      {/* Main HELLO heading with red circle overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-[170px] ml-[30px]">
        <div className="relative inline-block">
          <h1 className="font-['Italiana',serif] text-black leading-[0.9] text-[60px] md:text-[96px] lg:text-[90px] tracking-tight">
            HELLO,
          </h1>
          <img
            src={redCircle}
            alt=""
            className="absolute pointer-events-none select-none"
            style={{
              top: '30%',
              left: '52%',
              transform: 'translate(-50%, -50%) rotate(-3deg)',
              width: '350px',
              height: 'auto',
              zIndex: 20,
            }}
          />
        </div>
        {/* Subtext under HELLO */}
        <p className="mt-6 text-black font-['Space_Mono',monospace] text-[14px] leading-relaxed max-w-md">
          Crafting beautiful, intuitive
          <br />
          digital experiences with a
          <br />
          touch of AI magic.
        </p>
        <p className="mt-2 font-['Space_Mono',monospace] text-[#FF4A3B] italic text-[14px]">
          currently living in Annaba
        </p>
        <a
          href="/GhozleneArhab%20CV.pdf"
          download
          className="mt-4 inline-flex items-center gap-2 border-2 border-[#FF4A3B] rounded-full px-5 py-2 bg-white text-black font-['Space_Mono',monospace] text-[14px] shadow-sm hover:bg-[#FF4A3B]/5 transition-colors"
        >
          Download CV
          <HiArrowRight className="text-[#FF4A3B] text-base" />
        </a>
      </div>

      <style>{`
        @keyframes hero-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes hero-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      <div className="absolute left-1/2 -translate-x-1/2 w-[140%]" style={{ top: 520 }}>
        <div className="relative h-14 overflow-hidden" style={{ transform: 'rotate(-3.66deg)' }}>
          <div className="absolute inset-0" style={{ background: '#59C2F0' }} />
          <div className="absolute inset-0 overflow-hidden flex items-center">
            <div className="flex gap-12 whitespace-nowrap h-full items-center" style={{ width: '200%', animation: 'hero-marquee-left 14s linear infinite' }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={`hero-blue-${i}`} className="font-['Italiana',serif] text-black/90 leading-none" style={{ fontSize: 24, letterSpacing: '0.06em' }}>
                  Frontend developer • AI Engineer
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-[140%]" style={{ top: 528 }}>
        <div className="relative h-14 overflow-hidden" style={{ transform: 'rotate(3.66deg)' }}>
          <div className="absolute inset-0" style={{ background: '#FF69B4' }} />
          <div className="absolute inset-0 overflow-hidden flex items-center">
            <div className="flex gap-12 whitespace-nowrap h-full items-center" style={{ width: '200%', animation: 'hero-marquee-right 16s linear infinite' }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={`hero-pink-${i}`} className="font-['Italiana',serif] text-black/90 leading-none" style={{ fontSize: 24, letterSpacing: '0.06em' }}>
                  AI Engineer • Frontend developer
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;