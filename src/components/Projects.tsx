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
      title: 'Movie Recommendations System',
      year: '2024',
      category: 'Machine Learning',
      description: 'Intelligent movie recommendation system using K-NN and neural networks for personalized content suggestions.',
      tools: ['Python', 'K-NN', 'Neural Networks', 'scikit-learn', 'TensorFlow', 'pandas', 'NumPy'],
      link: 'https://github.com/ghozlenear/movie-recommendations',
      gradient: 'from-primary to-accent-rose'
    },
    {
      title: 'Object Detection',
      year: '2024-2025',
      category: 'Computer Vision',
      description: 'Advanced object detection system using YOLOv4 and deep learning architectures for real-time recognition.',
      tools: ['Python', 'YOLOv4', 'ResNet50', 'VGG16', 'OpenCV', 'TensorFlow', 'CNNs'],
      link: 'https://github.com/ghozlenear/Object-Detection',
      gradient: 'from-accent-magenta to-primary-end'
    },
    {
      title: 'Breast Cancer Prediction',
      year: '2024-2025',
      category: 'Healthcare AI',
      description: 'Predictive model for breast cancer diagnosis using multiple machine learning algorithms and statistical analysis.',
      tools: ['Python', 'SVM', 'Decision Tree', 'K-NN', 'K-Means', 'Bayesian Networks', 'scikit-learn'],
      link: 'https://github.com/ghozlenear/breastcancer',
      gradient: 'from-accent-lavender to-primary'
    },
    {
      title: 'Facial Expression Recognition',
      year: '2024',
      category: 'Deep Learning',
      description: 'Real-time facial expression recognition using transfer learning with MobileNetV2 architecture.',
      tools: ['Python', 'MobileNetV2', 'ImageDataGenerator', 'TensorFlow', 'OpenCV'],
      link: 'https://github.com/ghozlenear/facial-expression-recognition',
      gradient: 'from-primary-end to-accent-magenta'
    },
    {
      title: 'Portfolio (Hackathon)',
      year: '2025',
      category: 'No-Code Development',
      description: 'Responsive portfolio website built during hackathon using no-code platform with accessibility optimizations.',
      tools: ['Bubble', 'No-Code', 'Responsive Design', 'Accessibility'],
      link: 'https://portfolionocode-60499.bubbleapps.io/version-test?debug_mode=true',
      gradient: 'from-accent-rose to-primary'
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
            A collection of innovative projects spanning AI, machine learning, and digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card relative overflow-hidden"
            >
              {/* Project Thumbnail/Gradient Background */}
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

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-lavender group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tools/Technologies */}
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

                {/* Project Link */}
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

              {/* Hover Overlay */}
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