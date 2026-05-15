"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Next.js // React Architecture",
  "TypeScript // Modern JavaScript",
  "Tailwind CSS // GSAP // Motion",
  "Node.js // MERN Stack",
  "PostgreSQL // Supabase",
  "Secure Authentication",
  "Cloud Deployment // Vercel",
  "UI/UX Systems Design",
  "Vercel",
  "Git Hub"
];

const Expertise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  
  // Refs for the Progress Indicator
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  
  // NEW: Ref for the right column to track its specific scroll distance
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const addToListRefs = (el: HTMLLIElement | null) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Reveal Animation (Fades everything in when section comes into view)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(listRefs.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );

      // 2. Real-time Scroll Progress Indicator (FIXED LOGIC)
      gsap.to(progressBarRef.current, {
        scaleY: 1, 
        ease: "none", 
        scrollTrigger: {
          trigger: rightColumnRef.current, // Target the list specifically
          start: "top center", // Start counting when the top of the list hits the middle of the screen
          end: "bottom 80%", // Finish counting when the bottom of the list gets near the bottom of the screen
          scrub: 1, // Adds a 1-second smoothing delay so the numbers don't flicker aggressively
          onUpdate: (self) => {
            if (progressTextRef.current) {
              progressTextRef.current.innerText = Math.round(self.progress * 100) + "%";
            }
          }
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="relative bg-[#12110F] overflow-visible border-t border-[#2A2826]">
      
      {/* Massive Watermark "02" Background
        pointer-events-none ensures it doesn't block interactions.
      */}
      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center">
        <span className="font-cormorant text-[40vw] text-[#1C1A18] leading-none opacity-50 -translate-x-1/4">
          02
        </span>
      </div>

      <div className="px-8 md:px-16 max-w-[1920px] mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* LEFT COLUMN (STICKY) */}
          <div className="md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center py-32">
            
            <div ref={headerRef} className="opacity-0">
              <span className="block font-manrope text-[12px] md:text-sm text-[#CBA365] uppercase tracking-[0.2em] mb-8">
                02 // Expertise
              </span>
            </div>
            
            <p ref={textRef} className="font-manrope text-[16px] md:text-xl font-light text-[#EBE5D9] leading-relaxed max-w-md opacity-0">
              I specialize in building full-stack applications that do not compromise on design. From architecting secure databases to crafting buttery-smooth frontend animations, I treat every layer of the stack with absolute precision.
            </p>

            {/* Scroll Progress Indicator */}
            <div className="mt-16 flex items-center gap-6">
              {/* The Track (Empty Line) */}
              <div className="w-[1px] h-24 bg-[#2A2826] relative origin-top">
                {/* The Fill (Gold Line that grows) */}
                <div 
                  ref={progressBarRef} 
                  className="absolute top-0 left-0 w-full h-full bg-[#CBA365] scale-y-0 origin-top"
                ></div>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="font-manrope text-[9px] text-[#9E988F] uppercase tracking-[0.3em]">
                  Scroll Progress
                </span>
                {/* The Percentage Counter */}
                <span ref={progressTextRef} className="font-cormorant text-2xl text-[#EBE5D9] tabular-nums">
                  0%
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (SCROLLS) */}
          {/* FIX APPLIED: Attached rightColumnRef and added massive pb-[30vh] for smooth scrolling */}
          <div ref={rightColumnRef} className="py-32 pb-[30vh]">
            <ul className="flex flex-col">
              {skills.map((skill, index) => (
                <li 
                  key={index}
                  ref={addToListRefs}
                  className="group flex items-center justify-between py-12 border-b border-[#2A2826] cursor-pointer opacity-0"
                >
                  <span className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-[#9E988F] transition-all duration-500 ease-out group-hover:text-[#EBE5D9] group-hover:translate-x-4">
                    {skill}
                  </span>
                  
                  <span className="text-[#CBA365] opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;