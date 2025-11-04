const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl tracking-wide font-['Italiana',serif] text-black mb-6 text-center">
          WHO’s Ghozlene?
        </h1>

        <div className="space-y-5">
          <p className="font-['Space_Mono',monospace] text-base md:text-lg leading-relaxed text-black/80">
            I'm a passionate UI/ UX Designer, Frontend developer and AI Engineer with a unique blend of
            creative design skills and technical expertise. My journey spans from crafting intuitive user
            interfaces to developing intelligent systems using machine learning.
          </p>

          <p className="font-['Space_Mono',monospace] text-base md:text-lg leading-relaxed text-black/70">
            With experience in both design and development, I bring a holistic approach to digital product
            creation. I believe in the power of design to solve complex problems and create meaningful
            connections between users and technology.
          </p>

          <div className="pt-2">
            <h3 className="font-['Italiana',serif] text-2xl md:text-3xl text-black">Core Skills</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6 font-['Space_Mono',monospace] text-black/80 text-sm">
              <li>React / React Native</li>
              <li>Python</li>
              <li>UI / UX Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;