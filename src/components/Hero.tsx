import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import heroBg from '../assets/hero-bg.jpg';
import floralDecoration from '../assets/floral-decoration.png';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="absolute inset-0 aura-background" />
    
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 opacity-20"
      >
        <img src={floralDecoration} alt="" className="w-24 h-24" />
      </motion.div>
      
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 opacity-15"
      >
        <img src={floralDecoration} alt="" className="w-32 h-32" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ghozlene Arhab
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-accent-lavender mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            UI/UX Designer & AI Engineer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Crafting beautiful, intuitive digital experiences with a touch of AI magic. 
            Transforming complex problems into elegant design solutions.
          </motion.p>
          
          <motion.button
            onClick={handleScrollToProjects}
            className="btn-primary group px-10 py-4 rounded-full text-lg font-medium min-w-[220px] flex items-center justify-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <HiArrowDown className="ml-3 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-lavender rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent-lavender rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;