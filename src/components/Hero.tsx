import heroBg from '../assets/hero-bg.png';
import shape1 from '../assets/shape1.png';
import yellowArrow from '../assets/yellow-arrow.png';

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
    </section>
  );
};

export default Hero;