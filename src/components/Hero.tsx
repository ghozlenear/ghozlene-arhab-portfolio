import heroBg from '../assets/hero-bg.png';
import shape1 from '../assets/shape1.png';
import yellowArrow from '../assets/yellow-arrow.png';
import redCircle from '../assets/red-circle.png';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden bg-white">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Decorative elements placed in the hero, not inside navbar */}
      {/* These are positioned around the centered 600px navbar pill */}
      {/* Left flower placed under the navbar, slightly overlapping the pill */}
      <img
        src={shape1}
        alt=""
        className="absolute select-none pointer-events-none z-0"
        style={{
          top: 'calc(1.5rem + 5rem/2)', // pt-6 + h-12/2
          transform: 'translateY(-50%)',
          left: 'calc(50% - 300px - 60px)', // nudged a bit more left
          width: '123px',
          height: '125px',
        }}
      />

      {/* Right yellow arrow: start at pill right edge and extend to screen right */}
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

      {/* Main HELLO heading with red circle overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-[165px] ml-[30px]">
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
        <button
          onClick={() => console.log('Download CV')}
          className="mt-4 inline-flex items-center gap-2 border-2 border-[#FF4A3B] rounded-full px-5 py-2 bg-white text-black font-['Space_Mono',monospace] text-[14px] shadow-sm hover:bg-[#FF4A3B]/5 transition-colors"
        >
          Download CV
          <HiArrowRight className="text-[#FF4A3B] text-base" />
        </button>
      </div>
    </section>
  );
};

export default Hero;