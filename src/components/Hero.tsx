import { HiArrowRight } from 'react-icons/hi';
import heroBg from '../assets/hero-bg.png';
import redCircle from '../assets/red-circle.png';
import arrow from '../assets/arrow.png';
import yellowArrow from '../assets/yellow-arrow.png';
import shape1 from '../assets/shape1.png';
import shape2 from '../assets/shape2.png';
import pinkStrip from '../assets/pink strip.png';
import blueStrip from '../assets/blue strip.png';
import blob from '../assets/Blob.png';
import picture from '../assets/picture.png';

const Hero = () => {
  const handleDownloadCV = () => {
    // Add CV download functionality here
    console.log('Download CV');
  };

  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden bg-white">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Yellow flower shape - top left of content area */}
      <img
        src={shape1}
        alt=""
        className="absolute top-24 md:top-28 left-8 md:left-12 lg:left-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 xl:px-20 pt-16 md:pt-20 pb-24 md:pb-28 gap-4 md:gap-6 lg:gap-8 xl:gap-10 h-full">
        {/* Left Section - HELLO and Info */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          {/* HELLO with red circle */}
          <div className="relative inline-block mb-4 lg:mb-5">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-['Italiana',serif] font-normal text-black leading-[0.9]">
              <span className="relative inline-block">HELLO</span>
              <span className="relative inline-block">
                <img
                  src={redCircle}
                  alt=""
                  className="absolute top-1/2 left-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 pointer-events-none z-0"
                  style={{ 
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: 'center'
                  }}
                />
                <span className="relative z-10">ELLO</span>
              </span>,
            </h1>
          </div>

          {/* Descriptive Text */}
          <p className="text-sm md:text-base font-['Space_Mono',monospace] text-black mb-3 leading-relaxed">
            Crafting beautiful, intuitive<br />
            digital experiences with a<br />
            touch of AI magic.
          </p>
          
          {/* Location Text */}
          <p className="text-sm md:text-base font-['Space_Mono',monospace] text-[#FF4A3B] italic mb-4 lg:mb-5">
            currently living in Annaba
          </p>

          {/* Gray Pyramid Shape near button */}
          <div className="relative inline-block">
            <img
              src={shape2}
              alt=""
              className="absolute -bottom-4 -left-8 w-12 h-12 md:w-14 md:h-14 z-0"
            />
            
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="group relative z-10 flex items-center space-x-2 border-2 border-[#FF4A3B] rounded-lg px-5 py-2.5 bg-white hover:bg-[#FF4A3B]/5 transition-colors duration-300"
            >
              <span className="text-black font-['Space_Mono',monospace] text-sm">
                Download CV
              </span>
              <HiArrowRight className="text-[#FF4A3B] text-lg" />
            </button>
          </div>
        </div>

        {/* Center Section - Profile Picture */}
        <div className="flex-shrink-0 flex items-center justify-center relative my-2 md:my-4 lg:my-0">
          {/* Blue Blob behind picture */}
          <img
            src={blob}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 -z-10"
          />

          {/* Profile Picture */}
          <div className="relative z-10">
            <img 
              src={picture} 
              alt="Ghozlene Arhab" 
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover"
            />
          </div>
        </div>

        {/* Right Section - Name, Title, Arrow, Social Links */}
        <div className="flex-1 max-w-md lg:max-w-lg flex flex-col items-start relative">
          {/* Yellow arrow/wavy line - top right */}
          <img
            src={yellowArrow}
            alt=""
            className="absolute -top-8 -right-8 w-16 h-16 md:w-20 md:h-20 z-0 opacity-60"
          />

          {/* Name */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Italiana',serif] font-normal text-black mb-2 leading-tight">
            Ghozlene Arhab
          </h2>

          {/* Title */}
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-['Italiana',serif] font-normal text-black mb-4 lg:mb-5 leading-tight">
            Frontend developer<br />
            & AI Engineer
          </p>

          {/* Pink Arrow */}
          <img
            src={arrow}
            alt=""
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 lg:mb-4"
          />

          {/* Social Media Links */}
          <div className="flex items-center space-x-3 font-['Space_Mono',monospace] text-xs md:text-sm text-black">
            <a href="#" className="hover:text-[#FF4A3B] transition-colors">gh</a>
            <span>/</span>
            <a href="#" className="hover:text-[#FF4A3B] transition-colors">in</a>
            <span>/</span>
            <a href="#" className="hover:text-[#FF4A3B] transition-colors">be</a>
          </div>
        </div>
      </div>

      {/* Bottom Strips - positioned at bottom of viewport */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20 h-24 md:h-28 lg:h-32">
        {/* Pink Strip */}
        <div className="relative h-10 md:h-12 lg:h-14 -mb-1 overflow-hidden">
          <div className="flex" style={{ width: '200%' }}>
            <img 
              src={pinkStrip} 
              alt="" 
              className="h-full w-auto"
              style={{ imageRendering: 'auto' }}
            />
            <img 
              src={pinkStrip} 
              alt="" 
              className="h-full w-auto"
              style={{ imageRendering: 'auto' }}
            />
          </div>
      </div>

        {/* Blue Strip */}
        <div className="relative h-10 md:h-12 lg:h-14 overflow-hidden">
          <div className="flex" style={{ width: '200%' }}>
            <img 
              src={blueStrip} 
              alt="" 
              className="h-full w-auto"
              style={{ imageRendering: 'auto' }}
            />
            <img 
              src={blueStrip} 
              alt="" 
              className="h-full w-auto"
              style={{ imageRendering: 'auto' }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;