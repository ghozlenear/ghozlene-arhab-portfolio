import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaBehance, FaTwitter, FaHeart } from 'react-icons/fa';
import floralDecoration from '../assets/floral-decoration.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/ghozlene-arhab'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ghozlenear'
    },
    {
      name: 'Behance',
      icon: FaBehance,
      url: 'https://behance.net/ghozlene'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/ghozlene'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card/50 backdrop-blur-md border-t border-border/30 mt-20">
      {/* Floral Watermark */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <img src={floralDecoration} alt="" className="w-64 h-48" />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Ghozlene Arhab
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed">
              UI/UX Designer & AI Enthusiast passionate about creating beautiful, 
              intelligent digital experiences that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg p-2 text-accent-lavender hover:text-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-full h-full" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-lavender">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-lavender">Let's Connect</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a 
                  href="mailto:ghozlene.arhab@example.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  ghozlene.arhab@example.com
                </a>
              </p>
              <p>San Francisco, CA</p>
              <p>Available for freelance projects</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} Ghozlene Arhab. Made with 
            <FaHeart className="text-accent-rose w-4 h-4" /> 
            and lots of coffee.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => handleNavClick('#home')}
              className="hover:text-primary transition-colors duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;