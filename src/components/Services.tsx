import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiColorSwatch, HiSearch, HiTemplate, HiCollection } from 'react-icons/hi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: HiColorSwatch,
      title: 'Product Design',
      description: 'Creating beautiful, functional designs that solve real problems and delight users through every interaction.',
      color: 'from-primary to-accent-rose'
    },
    {
      icon: HiSearch,
      title: 'UX Research',
      description: 'Deep user insights through research methodologies, usability testing, and data-driven design decisions.',
      color: 'from-accent-magenta to-primary-end'
    },
    {
      icon: HiTemplate,
      title: 'Prototyping',
      description: 'High-fidelity interactive prototypes that bring ideas to life and facilitate seamless development handoffs.',
      color: 'from-accent-lavender to-primary'
    },
    {
      icon: HiCollection,
      title: 'Design Systems',
      description: 'Scalable design systems that ensure consistency, efficiency, and cohesive brand experiences across products.',
      color: 'from-primary-end to-accent-magenta'
    }
  ];

  return (
    <section id="services" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in user-centered design and cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="card-aura p-8 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-accent-lavender">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;