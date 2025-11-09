import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaBehance, FaHeart } from 'react-icons/fa';
import Reveal from './Reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ghozlene-arhab-164990281/'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ghozlenear'
    },
    {
      name: 'Behance',
      icon: FaBehance,
      url: 'https://www.behance.net/ghozlenearhab'
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <Reveal as="footer" className="relative bg-white border-t border-black mt-8" variant="up">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4 text-black">
            <motion.h3
              className="font-['Italiana',serif] text-3xl leading-none tracking-tight"
              whileHover={{ scale: 1.03 }}
            >
              Ghozlene Arhab
            </motion.h3>
            <p className="font-['Space_Mono',monospace] text-sm leading-relaxed text-black/70">
              Frontend developer & AI Engineer
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white text-black hover:text-[#FF4A3B] hover:border-[#FF4A3B] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-['Italiana',serif] text-lg text-black">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-['Space_Mono',monospace] text-sm text-black/70 hover:text-[#FF4A3B] transition-colors"
                  >
                    _{link.name.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-['Italiana',serif] text-lg text-black">Let's Connect</h4>
            <div className="space-y-2 text-black/70">
              <p>
                <a
                  href="mailto:ghozlenearhab@gmail.com"
                  className="font-['Space_Mono',monospace] hover:text-[#FF4A3B] transition-colors"
                >
                  ghozlenearhab@gmail.com
                </a>
              </p>
              <p className="font-['Space_Mono',monospace]">Annaba, Algeria</p>
              <p className="font-['Space_Mono',monospace]">Available for work</p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-black" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/70">
          <p className="flex items-center gap-2">
            {currentYear} Ghozlene Arhab — made with
            <FaHeart className="text-[#FF69B4] w-4 h-4" />
            and coffee
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => handleNavClick('#home')}
              className="font-['Space_Mono',monospace] hover:text-[#FF4A3B] transition-colors"
            >
              _back-to-top
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden">
        <div className="h-full w-full flex">
          <div className="h-full flex-1" style={{ background: '#59C2F0' }} />
          <div className="h-full flex-1" style={{ background: '#FF69B4' }} />
          <div className="h-full flex-1" style={{ background: '#FFE66D' }} />
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;