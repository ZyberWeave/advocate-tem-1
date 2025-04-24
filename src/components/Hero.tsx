'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from '@tsparticles/engine';

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  

  useEffect(() => {
    const heroEl = heroRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;
    const ctaEl = ctaRef.current;
    
    if (!heroEl || !titleEl || !subtitleEl || !ctaEl) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

    tl.fromTo(titleEl, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(subtitleEl, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
      .fromTo(ctaEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5');

    gsap.to(titleEl, {
      duration: 2,
      text: { value: 'Mayur Badre Law Firm', speed: 0.5 },
      ease: 'none',
    });

    gsap.to(heroEl, {
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      opacity: 0.7,
      scale: 0.98,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      gsap.to(titleEl, { x: x * 20 - 10, y: y * 20 - 10, duration: 1 });
      gsap.to(subtitleEl, { x: x * 15 - 7.5, y: y * 15 - 7.5, duration: 1 });
    };

    heroEl.addEventListener('mousemove', handleMouseMove);
    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <ParallaxProvider>
      <section
        id="hero"
        ref={heroRef}
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        {/* Particles background */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            init={particlesInit as unknown as (engine: import("tsparticles-engine").Engine) => Promise<void>}
            options={{
              fullScreen: { enable: false },
              background: { color: { value: 'transparent' } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: 'push' },
                  onHover: { enable: true, mode: 'repulse' },
                  resize: true,
                },
                modes: { 
                  push: { quantity: 4 }, 
                  repulse: { distance: 100, duration: 0.4 } 
                },
              },
              particles: {
                color: { value: '#1e3a8a' },
                links: { 
                  color: '#1e40af', 
                  distance: 150, 
                  enable: true, 
                  opacity: 0.3, 
                  width: 1 
                },
                collisions: { enable: true },
                move: { 
                  direction: 'none', 
                  enable: true, 
                  outModes: { default: 'bounce' }, 
                  speed: 2 
                },
                number: { 
                  value: 80, 
                  density: { 
                    enable: true, 
                    width: 800, 
                    height: 800 
                  } 
                },
                opacity: { value: 0.5 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        </div>

        {/* Gradient + blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-float1" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-float2" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-float3" />
        </div>

        {/* Parallax image */}
        <ParallaxBanner
          layers={[
            {
              image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2070&q=80',
              speed: -30,
              opacity: [0.3, 0],
              scale: [1, 1.2],
              shouldAlwaysCompleteAnimation: true,
            },
          ]}
          className="absolute inset-0 z-0"
        />

        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <h1
            ref={titleRef}
            className="mb-4 text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.15]"
            style={{
              background: 'linear-gradient(to right, #1e3a8a, #1e40af)',
              WebkitTextStroke: '1px rgba(30,58,138,0.3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              paddingBottom: '0.2em',
            }}
          >
            Mayur Badre Law Firm
          </h1>

          <Parallax speed={-5}>
            <p
              ref={subtitleRef}
              className="max-w-2xl mx-auto mb-8 text-xl font-medium text-gray-700 sm:text-2xl"
            >
              Expert legal representation with a personal touch. Justice delivered with integrity
              and excellence.
            </p>
          </Parallax>

          <div ref={ctaRef} className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="contact"
              smooth
              className="relative px-8 py-4 font-bold text-white bg-blue-900 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </Link>

            <Link
              to="practice"
              smooth
              className="relative px-8 py-4 font-bold text-blue-900 bg-white border-2 border-blue-900 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span className="relative z-10">Practice Areas</span>
              <span className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </Link>
          </div>

          <div className="mt-10">
            <div className="relative w-6 h-10 mx-auto rounded-full border-2 border-blue-900">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-900 rounded-full animate-scroll" />
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/4 right-16 z-0 w-24 h-24 animate-float4 text-blue-900 opacity-70">
          <svg viewBox="0 0 512 512" className="w-full h-full">
            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm50.7-346.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 289.4l-28.7-28.7c-10.5-10.5-27.3-6.2-32.8 7.7l-48 112c-4 9.3-.6 20.1 7.7 25.6s20.1 .6 25.6-7.7l39.7-92.6 28.7 28.7c6.2 6.2 16.4 6.2 22.6 0l96-96z"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-16 z-0 w-20 h-20 animate-float5 text-blue-800 opacity-70">
          <svg viewBox="0 0 576 512" className="w-full h-full">
            <path fill="currentColor" d="M256 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V96h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V160H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V64zM128 288c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V288zm352-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V224c0-17.7 14.3-32 32-32s32 14.3 32 32v32z"/>
          </svg>
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
        @keyframes float4 {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(5deg); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(6px); opacity: 0; }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
        .animate-float5 { animation: float5 7s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease infinite; }
      `}</style>
    </ParallaxProvider>
  );
}