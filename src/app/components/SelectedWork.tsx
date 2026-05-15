"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Kootenay Fresh",
    description: "Luxury commercial cleaning platform with a custom estimation engine.",
    tech: "Next.js // Tailwind",
    image: "/kootneayfreshcleaning.png",
    link: "https://kootenayfreshcleaning.ca/" // Added the real link
  },
  {
    title: "Barber SaaS",
    description: "A high-end management suite for modern grooming studios.",
    tech: "Next.js // MongoDB // Auth",
    image: "/barber.png",
    link: "#" // Placeholder link for you to update later
  }
];

const SelectedWork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current || !sectionRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const scrollDistance = trackWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -scrollDistance,
        ease: "none", 
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true, 
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id='selectedWork' className="bg-[#12110F] overflow-hidden border-t border-[#2A2826]">
      <div ref={trackRef} className="flex h-screen w-max items-center">
        
        {projects.map((project, index) => (
          <div key={index} className="w-screen h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 pt-24 pb-12 box-border">
            
            <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              
              {/* LEFT SIDE: The Image (Now wrapped in an anchor tag) */}
              <a 
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full md:w-[55%] h-[45vh] md:h-[60vh] lg:h-[65vh] relative group bg-[#1C1A18] border border-[#2A2826]/50 p-4 flex items-center justify-center overflow-hidden shadow-2xl cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-[1.5s] group-hover:scale-[1.03]"
                />
                
                {/* Background Index Number */}
                <div className="absolute top-4 right-4 opacity-10 select-none pointer-events-none">
                  <span className="font-cormorant text-[12vh] lg:text-[18vh] text-[#EBE5D9] leading-none">
                    0{index + 1}
                  </span>
                </div>
              </a>

              {/* RIGHT SIDE: Typography */}
              <div className="w-full md:w-[45%] flex flex-col justify-center z-20">
                
                <div className="font-manrope text-[#CBA365] text-xs md:text-sm tracking-[0.3em] mb-6 uppercase">
                  Selected Work
                </div>
                
                {/* Title (Now wrapped in an anchor tag) */}
                <a 
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block w-fit"
                >
                  <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-[#EBE5D9] leading-[0.9] mb-8 tracking-tight transition-colors duration-500 hover:text-[#CBA365] cursor-pointer">
                    {project.title}.
                  </h2>
                </a>
                
                <p className="font-manrope text-[#9E988F] text-base md:text-lg font-light leading-relaxed mb-12 max-w-[90%]">
                  {project.description}
                </p>

                <div className="flex justify-between items-center border-t border-[#2A2826] pt-8 max-w-[90%]">
                  <span className="font-manrope text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#CBA365]">
                    {project.tech}
                  </span>
                  
                  {/* Circular Arrow Button (Now an anchor tag) */}
                  <a 
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-[#CBA365]/30 flex items-center justify-center text-[#CBA365] transition-all hover:bg-[#CBA365] hover:text-[#12110F] cursor-pointer shadow-lg hover:shadow-[#CBA365]/20"
                    aria-label={`View ${project.title} project`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SelectedWork;