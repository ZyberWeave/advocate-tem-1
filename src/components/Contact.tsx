'use client';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
  // Random office locations
  const officeLocations = [
    {
      city: "New York",
      address: "123 Legal Avenue, Suite 500",
      coordinates: "40.7128° N, 74.0060° W"
    },
    {
      city: "London",
      address: "456 Justice Lane, Floor 3",
      coordinates: "51.5074° N, 0.1278° W"
    },
    {
      city: "Mumbai",
      address: "789 Law Chambers, Nariman Point",
      coordinates: "19.0760° N, 72.8777° E"
    }
  ];

  // Select a random location
  const randomLocation = officeLocations[Math.floor(Math.random() * officeLocations.length)];

  return (
    <ParallaxProvider>
      <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-8 overflow-hidden">
        {/* Background with subtle parallax */}
        <Parallax speed={-15} className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-full w-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        </Parallax>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a legal question or need consultation? Reach out to our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
            >
              <div className="p-8 md:p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600">{randomLocation.address}<br />{randomLocation.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaPhone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 91303 32780</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaEnvelope className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">contact@jdlaw.example.com<br />support@jdlaw.example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaClock className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Emergency Contact</h4>
                  <p className="text-gray-600 mb-4">For urgent legal matters outside business hours:</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <FaPhone className="mr-2" size={16} />
                    Emergency Legal Assistance
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-64 md:h-96 w-full relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8977695496613!2d72.82885067499837!3d19.076045982159753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sMumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1709697436044!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl"
              ></iframe>
            </div>
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office Location</h3>
              <p className="text-gray-600">
                123 Legal Avenue, Suite 500<br />
                Mumbai, Maharashtra 400001<br />
                <a 
                  href="https://maps.app.goo.gl/ukrrLC7zU422JQReA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}