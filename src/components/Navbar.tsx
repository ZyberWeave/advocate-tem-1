'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Practice Areas', to: 'practice' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-md' 
          : 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="hero" 
            smooth={true} 
            className="flex items-center cursor-pointer"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-blue-900 flex items-center"
            >
              <svg 
                className="w-8 h-8 mr-2 text-blue-700" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Mayur Badre Law
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                className="relative group cursor-pointer text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <motion.a
                href="tel:+919130332780"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FaPhoneAlt size={14} />
                <span className="text-sm font-medium">+91 91303 32780</span>
              </motion.a>
              <motion.a
                href="mailto:contact@mayurbadrelaw.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-blue-900 border border-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FaEnvelope size={14} />
                <span className="text-sm font-medium">Email Us</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    spy={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="space-y-3 mt-4">
                  <a
                    href="tel:+919130332780"
                    className="flex items-center justify-center gap-2 bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <FaPhoneAlt />
                    Call Now: +91 91303 32780
                  </a>
                  <a
                    href="mailto:contact@mayurbadrelaw.com"
                    className="flex items-center justify-center gap-2 bg-white text-blue-900 border border-blue-900 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <FaEnvelope />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}