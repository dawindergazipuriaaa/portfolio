"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const addToTextRefs = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. The Scrubbing Blockquote (unchanged)
      gsap.fromTo(quoteRef.current,
        { y: 50, opacity: 0 },
        {
          y: -30, 
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%", 
            end: "center center", 
            scrub: 1, 
          }
        }
      );

      // 2. The Bio Image Reveal - FIX APPLIED: Clean Fade & Lift
      // The old 'polygon' clipping code that cut your face is now gone. 
      // The image will fade in smoothly, showing the whole photo without any cuts.
      gsap.fromTo(imageContainerRef.current,
        // { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }, // DEPRECATED MASK
        { opacity: 0, y: 40 }, // Start hidden and slightly down
        {
          // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)", // DEPRECATED TRIANGLE
          opacity: 1, y: 0, // Fade in and move to final position
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 75%",
          }
        }
      );

      // 3. Staggered Bio Text Reveal (unchanged)
      gsap.fromTo(textRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageContainerRef.current, // Triggers alongside the image
            start: "top 60%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-[#12110F] py-32 md:py-48 border-t border-[#2A2826] overflow-hidden">
      
      <div className="px-8 md:px-16 max-w-[1920px] mx-auto w-full">
        
        {/* Pre-heading */}
        <div className="flex justify-center mb-16 md:mb-32">
          <span className="font-manrope text-xs md:text-sm text-[#CBA365] uppercase tracking-[0.2em]">
            04 // The Philosophy
          </span>
        </div>

        {/* PART 1: The Massive Blockquote */}
        <div className="flex justify-center w-full mb-32 md:mb-48">
          <blockquote 
            ref={quoteRef} 
            className="font-cormorant text-4xl md:text-5xl lg:text-7xl text-center max-w-5xl text-[#ECE8E1] leading-[1.1] md:leading-[1.1]"
          >
            "Good code is <span className="italic text-[#CBA365]">invisible</span>. Great design is <span className="italic text-[#CBA365]">felt</span>. I build systems that exist seamlessly at the intersection of both."
          </blockquote>
        </div>

        {/* PART 2: The Editorial Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Secondary Portrait */}
          <div className="md:col-span-5 relative w-full aspect-[3/4] overflow-hidden bg-[#1C1A18] group border border-[#2A2826]/50 shadow-2xl">
            <div ref={imageContainerRef} className="w-full h-full">
              <img 
                // Suggestion: Use a different photo here. Maybe you at a desk, or looking away from the camera.
                src="/about.png" 
                alt="Dawinder Singh - Philosophy"
                className="object-cover object-center w-full h-full grayscale contrast-125 transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#12110F]/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block"></div> {/* Spacer Column */}

          {/* Right Column: The Narrative */}
          <div className="md:col-span-6 flex flex-col justify-center">
            
            <div className="overflow-hidden mb-8">
              <h3 ref={addToTextRefs} className="font-cormorant text-4xl md:text-5xl text-[#EBE5D9] leading-none">
                Beyond the terminal.
              </h3>
            </div>

            <div className="flex flex-col gap-6 font-manrope text-[15px] md:text-base font-light text-[#9E988F] leading-relaxed">
              <div className="overflow-hidden">
                <p ref={addToTextRefs}>
                  Based in Ontario, Canada, my journey into development didn't start with a traditional computer science background. It started with a fundamental desire to understand how systems work, break them down, and rebuild them to be infinitely more efficient. 
                </p>
              </div>
              
              <div className="overflow-hidden">
                <p ref={addToTextRefs}>
                  After completing my Post-Graduation at Algoma University, I spent years leading operations and management before transitioning fully into software engineering. That operational background is my secret weapon: I don't just write code; I architect solutions that solve actual business bottlenecks.
                </p>
              </div>

              <div className="overflow-hidden">
                <p ref={addToTextRefs}>
                  Today, I focus on the modern web stack—Next.js, React, and GSAP—to craft digital experiences that demand attention. When I'm not pushing pixels or optimizing database queries, I'm likely researching new tech for my next deployment.
                </p>
              </div>
            </div>

            {/* Signature / Sign off */}
            <div className="overflow-hidden mt-12">
              <div ref={addToTextRefs} className="flex flex-col">
                <span className="font-cormorant text-3xl italic text-[#CBA365]">Dawinder Singh</span>
                <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-[#9E988F] mt-2">Creative Developer // Engineer</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
