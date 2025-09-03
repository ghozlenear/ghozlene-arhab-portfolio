import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiPython, SiTensorflow, SiFlutter, SiPostgresql } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Coride',
      year: '2025',
      category: 'UI Design',
      description: 'Ridesharing service app with user-friendly interface, real-time tracking, and seamless booking experience.',
      tools: ['figma','pixabay'],
      link: 'https://www.figma.com/proto/gWdZlJkECCmWv4K8g2vtvm/coride-service?page-id=0%3A1&node-id=1-752&viewport=147%2C94%2C0.69&t=pjOoL4EqBeogsJFv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A332',
      gradient: 'from-primary to-accent-rose'
    },
     {
      title: 'Mirae',
      year: '2025',
      category: 'E-commerce',
      description: 'Beauty e-commerce mobile application with modern UI/UX and seamless shopping experience.',
      tools: ['Figma', 'React Native', 'Node.js', 'REST API'],
      link: 'https://www.figma.com/proto/6LAmTkN42JeLxWmj94Qs9v/Mirae?page-id=0%3A1&node-id=211-310&p=f&viewport=585%2C223%2C0.38&t=O40qwGf1EtViXNpD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=211%3A310',
      gradient: 'from-accent-rose to-primary'
    },
    {
      title: 'HearMe',
      year: '2025',
      category: 'UI Design, Mobile App',
      description: 'Mental health app with AI chatbot support, emergency calling features, and mood activity tracking.',
      tools: ['Figma','React Native', 'Express',  'Node.js', 'AI Chatbot'],
      link: 'https://www.figma.com/proto/1HDZ4Qmz6HixI0GFJjiCaX/Hearme?page-id=0%3A1&node-id=3-1540&viewport=-1839%2C125%2C0.56&t=Zst2ezT7kwg3bGbt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4',
      gradient: 'from-accent-lavender to-primary'
    },
     {
      title: 'Mobiz',
      year: '2025',
      category: 'UI Design',
      description: 'Advanced object detection system using YOLOv4 and deep learning architectures for real-time recognition.',
      tools: ['Python', 'YOLOv4', 'ResNet50', 'VGG16', 'OpenCV', 'TensorFlow', 'CNNs'],
      link: 'https://www.figma.com/proto/gDTbzoTbt2jd3TC95JLQUC/Mobiz?page-id=0%3A1&node-id=2-543&p=f&viewport=233%2C113%2C0.14&t=APR9zgcLOqfEnUwK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A543',
      gradient: 'from-accent-magenta to-primary-end'
    },
    {
      title: 'MedApollo (Pharma App)',
      year: '2023',
      category: 'Mobile Development',
      description: 'Comprehensive pharmaceutical mobile application with geolocation features and real-time data management.',
      tools: ['Flutter', 'PostgreSQL', 'Geolocation API', 'Firebase', 'REST APIs'],
      link: 'https://github.com/ghozlenear/MedApollo',
      gradient: 'from-primary to-accent-lavender'
    }
  ];

  const getToolIcon = (tool: string) => {
    switch (tool.toLowerCase()) {
      case 'python':
        return <SiPython className="w-4 h-4" />;
      case 'tensorflow':
        return <SiTensorflow className="w-4 h-4" />;
      case 'flutter':
        return <SiFlutter className="w-4 h-4" />;
      case 'postgresql':
        return <SiPostgresql className="w-4 h-4" />;
      default:
        return <HiCode className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of innovative projects of digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card group relative overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white/60 font-medium">
                  {project.year}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-lavender group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-accent-lavender text-xs rounded-md border border-primary/20"
                    >
                      {getToolIcon(tool)}
                      {tool}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent-rose transition-colors duration-300 font-medium"
                >
                  <HiExternalLink className="w-4 h-4" />
                  View Project
                </motion.a>
              </div>
              <div className="project-overlay">
                <div className="text-white">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm opacity-90">Click to explore this project</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;