import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Ghozlene\'s design work is exceptional. Her ability to blend AI insights with beautiful UX design created solutions that exceeded our expectations. A true professional with an eye for detail.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'Lead Developer',
      company: 'Innovation Labs',
      content: 'Working with Ghozlene was a game-changer for our project. Her machine learning models were not only accurate but also elegantly integrated into our user interface. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Startup Founder',
      company: 'HealthTech Solutions',
      content: 'The AI-powered recommendation system Ghozlene developed revolutionized our platform. Her combination of technical expertise and design thinking is rare and valuable.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Design Director',
      company: 'Creative Agency',
      content: 'Ghozlene brings a unique perspective to every project. Her hackathon-winning portfolio showcased incredible creativity and technical skills. A rising star in the design world.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <HiStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent-rose' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, clients, and collaborators
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-aura p-8 md:p-12 text-center rounded-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-accent-lavender">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-md rounded-full flex items-center justify-center text-accent-lavender hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-md rounded-full flex items-center justify-center text-accent-lavender hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;