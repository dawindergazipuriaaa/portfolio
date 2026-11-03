'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'


const navLinks = [
    {name:'Home',href:'#'},
    { name: 'Experience', href: '#experience' },
    {name:'Experties',href:'#expertise'},
    {name:'Selected Work',href:'#selectedWork'},
    {name:'About',href:'#about'},
    {name:'Contact',href:'#contact'},
]
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(()=>{
        if(isMobileMenuOpen){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='unset';
        }
    },[isMobileMenuOpen])

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#12110f]/80 backdrop-blur-md border-b border-[#2A2826] transition-all duration-300'>
    <div className='flex justify-between items-center h-24 px-8 md:px-16 max-w-[1920px] mx-auto text-[#ECE8E1]'>
        {/* logo left side  */}
            <Link href='#' className='flex flex-col justify-center group'>
                <span className='font-cormorant text-3xl md:text-4xl text-[#EBE5D9] uppercase tracking-[0.15em] leading-none transition-colors duration-500 group-hover:text-[#CBA365]'>
                    Dawinder
                </span>
                <span className='font-manrope text-[9px] text-[#9E988F] uppercase tracking-[0.3em] mt-2 ml-1'>
                    Creative Developer
                </span>
            </Link>
        <div>
            <ul className='hidden md:flex gap-14 items-center'>
                {navLinks.map((link)=>(
                    <li key={link.name}>
                        <Link href={link.href}
                        className='font-manrope text-[14px] text-[#9E988F] tracking-[0.15em] font-light transition-colors duration-500 hover:text-[#CBA365] relative group py-2'>
                            {link.name}
                            <span className='absolute left-0 -bottom-2 w-full h-[1px] bg-[#CBA365] scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left'></span>
                            </Link>
                    </li>
                ))}
                <li className="ml-8">
             <Link
                href="#contact"
                className="font-manrope text-[14px] text-[#CBA365] uppercase tracking-[0.15em] transition-opacity duration-500 hover:opacity-70 flex items-center gap-2"
              >
                Let's Talk
                {/* Minimalist arrow for the CTA */}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
          </li>
            </ul>
            <div className="md:hidden flex items-center z-50 relative">
          <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
           className="font-manrope text-[14px] text-[#CBA365] uppercase tracking-[0.15em] transition-all duration-300 w-16 text-right">
            {isMobileMenuOpen? 'Close':'Menu'}
          </button>
        </div>
        </div>
        </div>
        <div className={`md:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-[#12110F] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,24,1)]
        ${
        isMobileMenuOpen
        ?'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible -translate-y-8'
        }`}>
            <ul className='flex flex-col gap-10 items-center -mt-24'>
                {navLinks.map((link)=>(
                    <li key={link.name} className='overflow-hidden'>
                        <Link href={link.href} onClick={()=> setIsMobileMenuOpen(false)}
                        className={`block font-cormorant text-4xl text-[#EBE5D9] uppercase tracking-[0.1em] transition-all duration-700 delay-100 hover:text-[#CBA365]
                        ${
                            isMobileMenuOpen?'translate-y-0 opacity-100': 'translate-y-full opacity-0'
                        }`}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li className={`mt-12 overflow-hidden transition-all duration-700 delay-300 ${isMobileMenuOpen? 'translate-y-0 opacity-100':'translate-y-full opacity-0'}`}>
                <Link href="#contact"
                    onClick={()=>setIsMobileMenuOpen(false)}
                    className='font-manrope text-[13px] text-[#CBA365] uppercase tracking-[0.25em] flex items-center gap-3 border-b border-[#CBA365] pb-2'>
                        Let's Talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></ path>
                </svg>
                </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar