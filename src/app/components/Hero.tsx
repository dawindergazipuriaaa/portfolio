"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<SVGSVGElement>(null);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const addToTextRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Clean Fade & Lift for the Image (NO MORE CUTS OR MASKS)
      tl.fromTo(imageContainerRef.current, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5 },
        0
      )
      // 2. Text Reveal
      .fromTo(textRefs.current,
        { y: 60, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1 },
        0.4
      )
      // 3. Fade in Marquee and Badge
      .fromTo([marqueeRef.current, badgeRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        1
      );

      // Infinite Marquee
      gsap.to(marqueeRef.current, {
        xPercent: -50, 
        repeat: -1,
        duration: 20,
        ease: "none"
      });

      // Infinite Badge Rotation
      gsap.to(badgeRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 8,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#12110F] pt-24 pb-32 flex items-center overflow-hidden">
      
      {/* BACKGROUND MARQUEE */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200vw] overflow-hidden z-0 pointer-events-none opacity-5">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <h1 className="font-cormorant text-[15vw] leading-none uppercase tracking-widest text-transparent" 
              style={{ WebkitTextStroke: '2px #EBE5D9' }}>
            DAWINDER SINGH — CREATIVE DEVELOPER — DAWINDER SINGH — CREATIVE DEVELOPER — &nbsp;
          </h1>
        </div>
      </div>

      {/* MAIN FOREGROUND GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center px-8 md:px-16 max-w-[1920px] mx-auto w-full relative z-10">
        
        {/* LEFT COLUMN: FULL, UNCUT PORTRAIT */}
        <div className="md:col-span-5 relative w-full flex justify-center order-2 md:order-1 group">
          
          {/* A massive, clean rectangular frame. */}
          <div ref={imageContainerRef} className="w-full aspect-[3/4] relative overflow-hidden bg-[#1C1A18] shadow-2xl border border-[#2A2826]/50">
             
             {/* No grayscale. No clipping. Just your face, perfectly centered. */}
             <img 
               src="/hero.jpg" 
               alt="Dawinder Singh"
               className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
             />
             
          </div>

          {/* Rotating SVG Badge */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-[#CBA365] rounded-full flex items-center justify-center p-2 z-20 shadow-2xl">
            <svg ref={badgeRef} className="w-full h-full text-[#12110F]" viewBox="0 0 100 100">
              <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="11" fontWeight="bold" letterSpacing="2.5" className="font-manrope uppercase">
                <textPath href="#textPath" startOffset="0%">
                  • SCROLL TO EXPLORE • DISCOVER MORE
                </textPath>
              </text>
            </svg>
            <svg className="absolute w-6 h-6 text-[#12110F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

        </div>

        {/* RIGHT COLUMN: Typography */}
        <div className="md:col-span-7 flex flex-col justify-center order-1 md:order-2 z-10">
          
          <div className="overflow-hidden mb-6">
            <span ref={addToTextRefs} className="block font-manrope text-[12px] md:text-sm text-[#CBA365] uppercase tracking-[0.2em]">
              01 // Digital Architect
            </span>
          </div>
          
          <h1 className="font-cormorant text-7xl md:text-[8vw] xl:text-[130px] text-[#EBE5D9] leading-[0.95] tracking-tight">
            <div className="overflow-hidden pb-4">
              <div ref={addToTextRefs}>Engineering</div>
            </div>
            <div className="overflow-hidden pb-4">
              <div ref={addToTextRefs} className="italic text-[#CBA365] pr-8">Digital</div>
            </div>
            <div className="overflow-hidden pb-4">
              <div ref={addToTextRefs}>Elegance.</div>
            </div>
          </h1>
          
          <div className="overflow-hidden mt-10">
            <p ref={addToTextRefs} className="font-manrope text-[15px] md:text-lg font-light text-[#9E988F] max-w-md leading-relaxed">
              Architecting high-performance web applications with a focus on precision, speed, and immaculate design. I build digital experiences that refuse to be ignored.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;