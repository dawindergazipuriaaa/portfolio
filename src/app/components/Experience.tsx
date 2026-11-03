"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Agile & Cross-Functional Delivery",
    desc: "Collaborated with designers, backend engineers, and product managers across sprint cycles to ship features for 8+ client builds."
  },
  {
    title: "Design System & Pixel Precision",
    desc: "Translated Figma & Adobe XD design files into accessible, responsive interfaces while maintaining under 5% deviation from source specs."
  },
  {
    title: "Component Architecture",
    desc: "Engineered reusable, modular component libraries and design tokens, accelerating delivery cadence across active project repos."
  },
  {
    title: "Core Web Vitals & Optimization",
    desc: "Applied SSR, code splitting, lazy loading, Redux, and React Query caching strategies, driving a measured 22% improvement in load times."
  },
  {
    title: "Third-Party & Payment Integrations",
    desc: "Integrated Stripe, Razorpay, Google Maps, and Firebase Auth with strict client-side validation and resilient error handling boundaries."
  },
  {
    title: "Code Quality & CI/CD Pipelines",
    desc: "Wrote unit and component suites using Jest and React Testing Library, integrated with Git branch protection rules and automated Vercel workflows."
  },
  {
    title: "Legacy Refactoring & Compatibility",
    desc: "Resolved 30+ legacy bugs spanning memory leaks, cross-browser regressions, and dependencies; refactored legacy SCSS to reduce bundle weight by 45%."
  }
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToItemsRef = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Header
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Reveal Experience Card
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
          }
        }
      );

      // 3. Stagger Points
      gsap.fromTo(
        itemsRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 65%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="experience" 
      className="relative bg-[#12110F] py-32 md:py-44 border-t border-[#2A2826] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-end">
        <span className="font-cormorant text-[36vw] text-[#1C1A18] leading-none opacity-40 translate-x-1/4">
          03
        </span>
      </div>

      <div className="px-8 md:px-16 max-w-[1920px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 pb-8 border-b border-[#2A2826]/60">
          <div>
            <span className="block font-manrope text-xs md:text-sm text-[#CBA365] uppercase tracking-[0.25em] mb-4">
              03 // Track Record
            </span>
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-[#ECE8E1] tracking-tight leading-none">
              Engineering <span className="italic text-[#CBA365]">History</span>.
            </h2>
          </div>
          <p className="font-manrope text-xs md:text-sm text-[#9E988F] tracking-[0.15em] uppercase mt-6 md:mt-0">
            Professional Experience &amp; Impact
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div 
          ref={cardRef} 
          className="bg-[#171513]/60 border border-[#2A2826] p-8 md:p-14 lg:p-16 backdrop-blur-sm relative"
        >
          {/* Top Metadata Row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-[#2A2826]">
            
            <div className="flex flex-col gap-2">
              <span className="font-manrope text-[11px] tracking-[0.3em] uppercase text-[#CBA365]">
                ByteBridge Lab
              </span>
              <h3 className="font-cormorant text-4xl md:text-5xl text-[#ECE8E1] tracking-tight">
                Junior Frontend Developer
              </h3>
              <span className="font-manrope text-sm text-[#9E988F] font-light">
                Mohali, Punjab, India &bull; Full-Time
              </span>
            </div>

            <div className="flex flex-col lg:items-end gap-3">
              <span className="font-cormorant text-2xl md:text-3xl italic text-[#EBE5D9]">
                Mar 2023 — Apr 2024
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1A18] border border-[#2A2826] text-[#CBA365] font-manrope text-[11px] uppercase tracking-[0.2em]">
                1 yr 2 mos
              </div>
            </div>

          </div>

          {/* Key Deliverables & Impact */}
          <div className="mt-12">
            <h4 className="font-manrope text-[11px] uppercase tracking-[0.3em] text-[#9E988F] mb-8">
              Key Contributions &amp; Architectural Focus
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {achievements.map((item, idx) => (
                <div 
                  key={idx} 
                  ref={addToItemsRef} 
                  className="flex flex-col gap-2 group border-l border-[#2A2826] pl-6 hover:border-[#CBA365] transition-colors duration-500"
                >
                  <span className="font-manrope text-xs uppercase tracking-[0.15em] text-[#EBE5D9] group-hover:text-[#CBA365] transition-colors duration-300">
                    {item.title}
                  </span>
                  <p className="font-manrope text-sm font-light text-[#9E988F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="mt-14 pt-8 border-t border-[#2A2826] flex flex-wrap items-center gap-3">
            {[
              "React.js", 
              "Next.js", 
              "TypeScript", 
              "Redux", 
              "React Query", 
              "Jest & RTL", 
              "Tailwind / SCSS", 
              "Stripe & Razorpay", 
              "Firebase", 
              "Vercel CI/CD"
            ].map((tech, i) => (
              <span 
                key={i} 
                className="font-manrope text-[11px] uppercase tracking-[0.15em] text-[#9E988F] px-3.5 py-1.5 bg-[#12110F] border border-[#2A2826]/80"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;