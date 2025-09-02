import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile-image.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'UI/UX Design',
    'Figma',
    'Prototyping',
    'User Research',
    'Design Systems',
    'React Native',
    'Python',
    'Machine Learning'
  ];

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that bridge technology and human needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl card-aura p-2">
              <img
                src={profileImage}
                alt="Ghozlene Arhab - UI/UX Designer"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate UI/UX Designer and AI Enthusiast with a unique blend of creative design skills 
              and technical expertise. My journey spans from crafting intuitive user interfaces to developing 
              intelligent systems using machine learning.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in both design and development, I bring a holistic approach to digital product 
              creation. I believe in the power of design to solve complex problems and create meaningful 
              connections between users and technology.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent-lavender">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;