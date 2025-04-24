'use client';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3
    });

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ParallaxProvider>
      <section 
        ref={sectionRef}
        id="about" 
        className="relative min-h-screen bg-white py-20 px-8 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float1"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float2"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float3"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content with parallax */}
          <div ref={contentRef} className="relative z-10">
            <Parallax speed={-5} opacity={[0.8, 1.5]}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                    About Mayur Badre Law
                  </span>
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  With over <span className="font-bold text-blue-900">15 years</span> of experience in civil litigation, I bring 
                  meticulous attention to detail and a client-focused approach 
                  to every case.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  My practice specializes in <span className="font-bold text-blue-900">corporate law</span> and 
                  <span className="font-bold text-blue-900"> intellectual property rights</span> protection, 
                  helping businesses navigate complex legal landscapes.
                </p>
              </motion.div>
            </Parallax>

            {/* Animated stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold text-blue-900 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-4xl font-bold text-blue-900 mb-2">200+</h3>
                <p className="text-gray-600">Cases Handled</p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-4xl font-bold text-blue-900 mb-2">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-4xl font-bold text-blue-900 mb-2">24/7</h3>
                <p className="text-gray-600">Client Support</p>
              </motion.div>
            </div>
          </div>

          {/* Image with parallax */}
          <div ref={imageRef} className="relative z-10 hidden lg:block">
            <Parallax speed={10} rotate={[-5, 5]} className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80"
                  alt="Mayur Badre Law professional portrait"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-900/10"></div>
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Bar Certified</h4>
                    <p className="text-sm text-gray-600">Since 2008</p>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>

    {/* Timeline */}
<div className="max-w-4xl mx-auto mt-24 relative z-10">
  <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
    Professional Journey
  </h3>
  
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-100 transform -translate-x-1/2"></div>
    
    {/* Timeline items */}
    <div className="space-y-16">
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative w-full"
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex w-full items-center"> {/* Added items-center here */}
            {/* Left content (for even indexes) */}
            <div className={`w-[45%] ${index % 2 === 0 ? 'pr-4' : 'invisible'}`}>
              {index % 2 === 0 && (
                <div className="p-6 rounded-xl text-right">
                  <h4 className="text-xl font-bold text-gray-900">{item.year}</h4>
                  <p className="text-gray-700">{item.title}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              )}
            </div>
            
            {/* Center dot - takes up 10% width */}
            <div className="w-[10%] flex justify-center">
              <div className="w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
            
            {/* Right content (for odd indexes) */}
            <div className={`w-[45%] ${index % 2 !== 0 ? 'pl-4' : 'invisible'}`}>
              {index % 2 !== 0 && (
                <div className="p-6 rounded-xl text-left">
                  <h4 className="text-xl font-bold text-gray-900">{item.year}</h4>
                  <p className="text-gray-700">{item.title}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
      </section>

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(5deg); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </ParallaxProvider>
  );
}

const timelineItems = [
  {
    year: "2008",
    title: "Harvard Law School",
    description: "Graduated with honors in Civil Law"
  },
  {
    year: "2010",
    title: "Junior Associate at Smith & Partners",
    description: "Started career in corporate litigation"
  },
  {
    year: "2014",
    title: "Senior Associate at LegalEdge",
    description: "Specialized in intellectual property cases"
  },
  {
    year: "2018",
    title: "Founded Mayur Badre Law Firm",
    description: "Established independent practice"
  },
  {
    year: "2023",
    title: "Expanded Practice",
    description: "Added international business law services"
  }
];