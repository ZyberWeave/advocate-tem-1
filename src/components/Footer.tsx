'use client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Mayur Badre Law</h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional legal services with integrity and dedication since 2008.
            </p>
            <div className="flex space-x-4">
  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
    <span className="inline-block w-5 h-5"><FaLinkedin size={20} /></span>
  </a>
  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
    <span className="inline-block w-5 h-5"><FaTwitter size={20} /></span>
  </a>
</div>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="hero" 
                  smooth={true} 
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="practice" 
                  smooth={true} 
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Us</h3>
            <ul className="space-y-4">
            <li className="flex items-start">
  <span className="text-blue-400 mt-1 mr-3 flex-shrink-0"><FaMapMarkerAlt size={18} /></span>
  …
</li>

<li className="flex items-center">
  <span className="text-blue-400 mr-3 flex-shrink-0"><FaPhone size={18} /></span>
  …
</li>

<li className="flex items-center">
  <span className="text-blue-400 mr-3 flex-shrink-0"><FaEnvelope size={18} /></span>
  …
</li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Office Hours</h3>
            <div className="flex items-start">
            <span className="text-blue-400 mt-1 mr-3 flex-shrink-0"><FaClock size={18} /></span>
              <div className="text-gray-300">
                <p className="font-medium">Monday - Friday</p>
                <p className="mb-3">9:00 AM - 6:00 PM</p>
                <p className="font-medium">Saturday</p>
                <p>By appointment only</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Mayur Badre Law Practice. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Disclaimer
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Attorney Advertising. Prior results do not guarantee similar outcomes.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}