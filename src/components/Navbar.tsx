import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import shape1 from '../assets/shape1.png';
import yellowArrow from '../assets/yellow-arrow.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = ['#home', '#about', '#projects', '#experience', '#contact'];
      const current = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Set initial hash
    const hash = window.location.hash || '#home';
    setActiveSection(hash);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => {
      setActiveSection(window.location.hash || '#home');
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => {});
    };
  }, []);

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    window.location.hash = href;
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isActive = (href: string) => {
    return activeSection === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center relative">
          {/* Centered White Rectangle with Navigation */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6 bg-white px-6 py-3 rounded-full shadow-sm relative z-10">
            {/* Yellow flower shape - positioned to the left of nav */}
            <img
              src={shape1}
              alt=""
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
            />

            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-['Space_Mono',monospace] text-sm transition-all duration-300 ${
                    active
                      ? 'bg-[#FFE66D]/30 px-4 py-2 rounded-full'
                      : 'text-black hover:text-[#FF4A3B]'
                  }`}
                >
                  <span
                    className={`underline decoration-2 ${
                      active ? 'decoration-[#FF4A3B]' : 'decoration-black'
                    }`}
                  >
                    _{item.name}
                  </span>
                </button>
              );
            })}

            {/* Yellow arrow extending from the right side of nav */}
            <img
              src={yellowArrow}
              alt=""
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-24 h-auto hidden lg:block"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black focus:outline-none z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white rounded-lg p-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left font-['Space_Mono',monospace] text-sm transition-all duration-300 py-2 ${
                        active
                          ? 'bg-[#FFE66D]/30 px-4 rounded-full text-[#FF4A3B]'
                          : 'text-black hover:text-[#FF4A3B]'
                      }`}
                    >
                      <span
                        className={`underline decoration-2 ${
                          active ? 'decoration-[#FF4A3B]' : 'decoration-black'
                        }`}
                      >
                        _{item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;