import cardBadge from '../assets/card with pf.png';
import flower from '../assets/flower.png';
import yellowArrow from '../assets/yellow-arrow.png';
import portalIcon from '../assets/Portal.png';
import asteriskIcon from '../assets/Asterisk.png';
import softFlowerIcon from '../assets/Soft Flower.png';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="relative z-[50] pt-8 md:pt-20 pb-0 md:pb-0 px-6 -translate-y-[10%]">
      <div className="container mx-auto max-w-6xl relative">
        <Reveal as="div" variant="left">
          <h1 className="text-[72px] tracking-wide font-['Italiana',serif] text-black mb-20 text-center">
            <span className="relative inline-block">
              WHO’s Ghozlene?
              <img
                src={yellowArrow}
                alt=""
                className="hidden md:block absolute right-[40px] md:right-[60px] lg:right-[80px] top-[80px] w-28 md:w-32 lg:w-36 pointer-events-none select-none"
               style={{ transform: 'rotate(40deg)' }}
              />
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 items-stretch">
            <div className="order-2 md:order-1 h-full flex items-start justify-start -mt-[150px] md:-mt-[240px] lg:-mt-[229px] -ml-[40px]">
              <div className="relative inline-block">
                <img
                  src={cardBadge}
                  alt="ID card"
                  className="w-full h-auto object-contain max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
                />
                <img
                  src={flower}
                  alt=""
                  className="absolute -bottom-4 -right-4 w-16 sm:w-20 md:w-24 lg:w-28 z-10 select-none pointer-events-none"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-4 text-left -ml-[200px] -mt-[10px] scale-90">
              <p className="font-['Space_Mono',monospace] text-lg md:text-xl leading-7 text-black max-w-[60ch]">
                I'm a passionate UI/ UX Designer, Frontend developer and AI Engineer with a unique blend of
                creative design skills and technical expertise. My journey spans from crafting intuitive user
                interfaces to developing intelligent systems using machine learning.
              </p>

              <p className="font-['Space_Mono',monospace] text-base md:text-lg leading-7 text-black/70 max-w-[60ch]">
                With experience in both design and development, I bring a holistic approach to digital product
                creation. I believe in the power of design to solve complex problems and create meaningful
                connections between users and technology.
              </p>

              <div className="pt-4">
    <h3 className="font-['Italiana',serif] text-3xl md:text-5xl text-black">Core Skills</h3>
    <ul className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-2 font-['Italiana',serif] text-black text-lg">
      <li className="flex items-center gap-2">
        <img src={portalIcon} alt="React / React Native" className="h-5 w-5" />
        <span>React / React Native</span>
      </li>
      <li className="flex items-center gap-2">
        <img src={asteriskIcon} alt="Python" className="h-5 w-5" />
        <span>Python</span>
      </li>
      <li className="flex items-center gap-2">
        <img src={softFlowerIcon} alt="UI / UX Design" className="h-5 w-5" />
        <span>UI / UX Design</span>
      </li>
    </ul>
  </div>
            </div>
          </div>
        </Reveal>
        {/* Blue stripe like in Hero */}
        <div className="relative z-[100] mt-12 -mb-10 md:-mb-14">
          <style>{`
            @keyframes about-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          `}</style>
          <div className="relative left-1/2 -translate-x-1/2 w-[140%]">
            <div className="relative h-14 overflow-hidden" style={{ top: -10, transform: 'rotate(2deg)' }}>
              <div className="absolute inset-0" style={{ background: '#59C2F0' }} />
              <div className="absolute inset-0 overflow-hidden flex items-center">
                <div className="flex gap-12 whitespace-nowrap h-full items-center" style={{ width: '200%', animation: 'about-marquee-right 16s linear infinite' }}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={`about-blue-${i}`} className="font-['Italiana',serif] text-black/90 leading-none" style={{ fontSize: 24, letterSpacing: '0.06em' }}>
                      About Me • About Me
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;