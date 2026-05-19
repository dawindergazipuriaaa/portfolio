"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%", // Triggers when the footer enters the view
        }
      });

      // Massive Text Reveal
      tl.fromTo([textRef1.current, textRef2.current],
        { yPercent: 100, rotateX: -20, opacity: 0 },
        { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" }
      )
      // Bottom Bar Fade In
      .fromTo(bottomBarRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="bg-[#0A0908] py-32 px-8 md:px-16 flex flex-col justify-center items-center min-h-[80vh] relative z-20">
      
      {/* Small pre-heading for structural consistency */}
      <div className="absolute top-24 pointer-events-none">
        <span className="font-manrope text-xs md:text-sm text-[#CBA365] uppercase tracking-widest">
          05 // Next Steps
        </span>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full mt-16">
        
        {/* The Massive Call to Action */}
        <a 
          href="mailto:dawindergazipuriaaa@gmail.com" 
          className="group flex flex-col items-center justify-center cursor-pointer"
        >
          {/* We split "LET'S" and "TALK" into two overflow-hidden divs for the GSAP curtain reveal */}
          <div className="overflow-hidden pb-4 -my-2 md:-my-4">
            <h2 ref={textRef1} className="font-cormorant text-[18vw] md:text-[12vw] leading-[0.8] text-[#ECE8E1] transition-colors duration-500 group-hover:text-[#CBA365]">
              LET'S
            </h2>
          </div>
          <div className="overflow-hidden pb-4 -my-2 md:-my-4">
            <h2 ref={textRef2} className="font-cormorant text-[18vw] md:text-[12vw] leading-[0.8] text-[#ECE8E1] transition-all duration-500 group-hover:text-[#CBA365] group-hover:italic">
              TALK.
            </h2>
          </div>
        </a>

      </div>

      {/* The Bottom Bar */}
      <div ref={bottomBarRef} className="w-full max-w-[1920px] mt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#2A2826] pt-8 opacity-0">
        
        {/* Left: Location */}
        <span className="font-manrope text-xs tracking-[0.2em] uppercase text-[#9E988F]">
          Ontario, Canada
        </span>

        {/* Right: Social Links */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link 
            href="https://www.linkedin.com/in/dawinder-singh-44890b23a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-manrope text-xs tracking-widest uppercase text-[#ECE8E1] transition-colors duration-300 hover:text-[#CBA365]"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/dawindergazipuriaaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-manrope text-xs tracking-widest uppercase text-[#ECE8E1] transition-colors duration-300 hover:text-[#CBA365]"
          >
            GitHub
          </Link>
          <a 
            href="mailto:Dawindergazipuriaaa@gmail.com" 
            className="font-manrope text-xs tracking-widest uppercase text-[#ECE8E1] transition-colors duration-300 hover:text-[#CBA365]"
          >
            Email
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Contact;