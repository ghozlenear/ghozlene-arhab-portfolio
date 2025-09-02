import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBriefcase, HiStar } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'education',
      title: 'Master\'s in Artificial Intelligence',
      organization: 'University of Technology',
      period: '2023 - 2025',
      description: 'Specialized in machine learning, deep learning, and computer vision with focus on practical applications in healthcare and recommendation systems.',
      icon: HiAcademicCap,
      color: 'from-primary to-accent-rose'
    },
    {
      type: 'work',
      title: 'UI/UX Design Intern',
      organization: 'Tech Innovation Lab',
      period: '2024',
      description: 'Designed user interfaces for mobile applications, conducted user research, and created comprehensive design systems for multiple projects.',
      icon: HiBriefcase,
      color: 'from-accent-magenta to-primary-end'
    },
    {
      type: 'education',
      title: 'Bachelor\'s in Computer Science',
      organization: 'National Institute of Technology',
      period: '2020 - 2023',
      description: 'Foundation in software development, algorithms, and data structures with emphasis on mobile application development and database management.',
      icon: HiAcademicCap,
      color: 'from-primary-end to-accent-magenta'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through design, technology, and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent-magenta to-primary-end opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} p-4 border-4 border-background shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} ml-20 md:ml-0`}>
                    <div className="card-aura p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-accent-lavender rounded-full">
                          {exp.period}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-md ${
                          exp.type === 'education' ? 'bg-accent-lavender/20 text-accent-lavender' :
                          exp.type === 'work' ? 'bg-accent-rose/20 text-accent-rose' :
                          'bg-accent-magenta/20 text-accent-magenta'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-accent-lavender mb-2">
                        {exp.title}
                      </h3>
                      
                      <p className="text-primary font-medium mb-3">
                        {exp.organization}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;