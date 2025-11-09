import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import shape1 from '../assets/shape1.png';
import yellowArrow from '../assets/yellow-arrow.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleScroll = () => {
      // Determine active section based on scroll position using offsets
      const ids = ['home', 'about', 'projects', 'experience', 'contact'];
      const offset = 120; // navbar + breathing room
      const y = (window.scrollY || 0) + offset;
      let currentHash = '#home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) currentHash = `#${id}`;
      }
      setActiveSection(currentHash);

      // Hide on scroll down, show on scroll up
      const prev = lastYRef.current;
      const delta = (window.scrollY || 0) - prev;
      lastYRef.current = window.scrollY || 0;

      const nearTop = (window.scrollY || 0) < 80;
      if (isOpen || nearTop) {
        setHidden(false);
      } else {
        if (delta > 2) setHidden(true); // scrolling down
        else if (delta < -2) setHidden(false); // scrolling up
      }
    };

    // Set initial hash
    const hash = window.location.hash || '#home';
    setActiveSection(hash);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', () => {
      setActiveSection(window.location.hash || '#home');
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll as any);
      window.removeEventListener('hashchange', () => {});
    };
  }, [isOpen]);

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
    const element = document.querySelector(href);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.history.pushState(null, '', href);
    }
  };

  const isActive = (href: string) => {
    return activeSection === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-transparent pt-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center relative">

          {/* Centered White Rectangle with Navigation */}
          <div className="hidden md:flex items-center justify-between bg-white px-8 h-12 w-[600px] rounded-full shadow-sm border border-black shadow-xl relative z-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-['Space_Mono',monospace] text-sm transition-colors duration-200 ${
                    active ? 'text-[#FF4A3B]' : 'text-black hover:text-black'
                  }`}
                >
                  _{item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 top-0 mr-6 mt-0 text-2xl text-black hover:text-[#FFA500] transition-colors duration-200 focus:outline-none z-50"
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
            <div className="md:hidden fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-black/10 shadow-xl p-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left font-['Space_Mono',monospace] text-base transition-all duration-300 py-3 ${
                        active
                          ? 'bg-[#FFE66D]/40 px-4 rounded-xl text-[#FF4A3B]'
                          : 'text-black hover:text-black'
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