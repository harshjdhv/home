"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Social Icons - 18px
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6.53 12.07 6.9 19.25" />
    </svg>
  );
}

// Local Time Component
function LocalTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }));
      setDate(now.toLocaleDateString("en-US", { 
        month: "short", 
        day: "numeric" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">{date}</span>
      <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">,</span>
      <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">{time}</span>
    </div>
  );
}

// Project Card
function ProjectCard({ 
  title, 
  category, 
  year, 
  image, 
  href 
}: { 
  title: string; 
  category: string; 
  year: string; 
  image: string; 
  href: string; 
}) {
  return (
    <Link href={href} className="group block w-full bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-[0.9]"
        />
      </div>
      <div className="pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">{title}</span>
          <span className="w-[5px] h-[5px] bg-[#757575] -rotate-45" />
          <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">{category}</span>
        </div>
        <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">&apos;{year}</span>
      </div>
    </Link>
  );
}

// Service Item
function ServiceItem({ title }: { title: string }) {
  return (
    <div className="w-full">
      <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">{title}</p>
      <div className="h-[1px] bg-[#e3e3e3] mt-2" />
    </div>
  );
}

// Projects data
const projects = [
  { title: "Neon Flux", category: "Fashion Editorial", year: "22", image: "/portfolio/assets/img_10.jpg", href: "#" },
  { title: "Lumina City", category: "Conceptual Series", year: "23", image: "/portfolio/assets/img_6.png", href: "#" },
  { title: "Urban Echoes", category: "Brand Identity", year: "23", image: "/portfolio/assets/img_7.png", href: "#" },
  { title: "Ethereal Dreams", category: "Photography", year: "24", image: "/portfolio/assets/img_8.png", href: "#" },
];

const services = ["Visual Identity", "Web design", "Photography"];
const navLinks = [
  { label: "Home,", href: "/", active: true },
  { label: "Info,", href: "/about", active: false },
  { label: "Work,", href: "/work", active: false },
  { label: "Contact", href: "/contact", active: false },
];

export default function Page() {
  return (
    // Root container - full width, bg: #fff
    <div 
      className="bg-white font-['Geist',sans-serif]"
      style={{ 
        width: '100%', 
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      {/* HEADER WRAPPER - .framer-2awwzh: fixed, width: 100%, display: flex, gap: 20px */}
      <header 
        style={{ 
          position: 'fixed',
          top: 0,
          zIndex: 50,
          width: '100%',
          height: 'min-content',
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}
      >
        {/* NAV INNER - .framer-sv6vrp: flex: 1 0 0, width: 1px, gap: 32px, padding: 12px 20px */}
        <nav 
          style={{ 
            flex: '1 0 0',
            width: '1px',
            height: 'min-content',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '32px',
            padding: '12px 20px',
            overflow: 'visible',
            backgroundColor: '#fff',
            borderBottom: '1px solid #e3e3e3'
          }}
        >
          {/* Logo section - .framer-jmphyf: width: 25%, flex: none */}
          <div 
            style={{ 
              width: '25%',
              flex: 'none',
              height: 'min-content',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 1,
              overflow: 'visible'
            }}
          >
            <Link href="/" className="flex items-center gap-[6px] rounded-[30px]">
              <div className="relative w-[67px] h-[19px]">
                <Image
                  src="/portfolio/assets/img_1.svg"
                  alt="Maelle"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Pages - .framer-zi14v7: flex: 1 0 0, width: 1px, gap: 4px, padding-left: 16px */}
          <div 
            style={{ 
              flex: '1 0 0',
              width: '1px',
              height: 'min-content',
              padding: '0 0 0 16px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '4px',
              overflow: 'visible'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium tracking-[-0.03em] leading-[1.4em] whitespace-nowrap transition-colors hover:text-[#121212] ${
                  link.active ? "text-[#121212]" : "text-[#5e5e5e]"
                }`}
                style={{ flex: 'none', width: 'auto', height: 'auto' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Local time - .framer-mwkixo: width: 25%, flex: none */}
          <div 
            style={{ 
              width: '25%',
              flex: 'none',
              height: 'min-content',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              overflow: 'visible'
            }}
          >
            <LocalTime />
          </div>
        </nav>
      </header>

      {/* MAIN ROW - .framer-18n2j1w: width: 100%, gap: 32px, padding: 0 20px */}
      <main 
        style={{
          width: '100%',
          height: 'min-content',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '32px',
          overflow: 'visible'
        }}
      >
        
        {/* LEFT COLUMN - .framer-sn780o: width: 25%, flex: none, height: 100vh, sticky */}
        <section 
          style={{
            width: '25%',
            flex: 'none',
            height: '100vh',
            padding: '140px 0 8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'sticky',
            top: 0,
            zIndex: 3,
            overflow: 'visible'
          }}
        >
          {/* Intro - gap: 6px */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '6px', overflow: 'hidden' }}>
            <h1 className="text-[56px] font-medium tracking-[-0.05em] leading-[1em] text-[#121212]">
              Hello!<br />I&apos;m Maelle.
            </h1>
          </div>

          {/* Socials - gap: 8px, max-width: 400px */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', gap: '8px', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://x.com" target="_blank" rel="noopener" className="w-[18px] h-[18px] text-[#121212] hover:text-[#757575] transition-colors">
                <XIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="w-[18px] h-[18px] text-[#121212] hover:text-[#757575] transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener" className="w-[18px] h-[18px] text-[#121212] hover:text-[#757575] transition-colors">
                <DribbbleIcon />
              </a>
            </div>
          </div>

          {/* Services - gap: 4px, at bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px', marginTop: 'auto' }}>
            {services.map((service) => (
              <ServiceItem key={service} title={service} />
            ))}
          </div>
        </section>

        {/* MIDDLE COLUMN - .framer-19s0btu: flex: 1 0 0, width: 1px, border-left/right */}
        <section 
          style={{
            flex: '1 0 0',
            width: '1px',
            height: 'min-content',
            padding: '140px 16px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 0,
            borderLeft: '1px solid #e3e3e3',
            borderRight: '1px solid #e3e3e3',
            backgroundColor: '#fff',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          
          {/* Description - sticky top: 140px */}
          <div 
            style={{ 
              width: '100%',
              height: 'min-content',
              padding: '0 0 8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '8px',
              position: 'sticky', 
              top: '140px', 
              zIndex: 1,
              backgroundColor: '#fff',
              overflow: 'visible'
            }}
          >
            <h2 
              className="text-[26px] font-medium tracking-[-0.04em] leading-[1.1em] text-left"
              style={{ width: '100%', maxWidth: '600px' }}
            >
              <span className="text-[#121212]">A digital designer & photographer with 12 years of experience </span>
              <span className="text-[#121212]">— </span>
              <span className="text-[#757575]">specializing in crafting visual identities and capturing moments that tell stories.</span>
            </h2>
          </div>

          {/* Spacer - height: 30vh, opacity: 0 */}
          <div style={{ width: '100%', height: '30vh', opacity: 0, overflow: 'hidden' }} />

          {/* Projects container - z-index: 2 */}
          <div 
            style={{ 
              width: '100%',
              height: 'min-content',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              zIndex: 2,
              backgroundColor: '#fff',
              overflow: 'hidden'
            }}
          >
            {/* Projects list - gap: 20px */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          {/* Bottom spacer row - padding-top: 146px */}
          <div 
            style={{ 
              width: '100%',
              height: 'min-content',
              padding: '146px 0 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              overflow: 'hidden'
            }}
          >
            <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">2019</span>
            <div style={{ flex: '1 0 0', width: '1px', height: '40vh', opacity: 0, overflow: 'hidden' }} />
          </div>
        </section>

        {/* RIGHT COLUMN - .framer-r4o7r6: width: 25%, flex: none, height: 100vh, sticky */}
        <section 
          style={{
            width: '25%',
            flex: 'none',
            height: '100vh',
            padding: '140px 0 8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 3,
            overflow: 'visible'
          }}
        >
          
          {/* About section - gap: 32px */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'min-content', gap: '32px', overflow: 'visible' }}>
            {/* Photo row - gap: 8px */}
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 'min-content', gap: '8px', overflow: 'visible' }}>
              {/* Available badge - flex: 1 0 0 */}
              <div 
                style={{ 
                  flex: '1 0 0',
                  width: '1px',
                  height: 'min-content',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '4px',
                  overflow: 'visible'
                }}
              >
                <span className="w-[5px] h-[5px] bg-[#757575] rotate-45" />
                <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] whitespace-nowrap">Available for work</span>
              </div>

              {/* Profile column - flex: 1 0 0, gap: 32px */}
              <div 
                style={{ 
                  flex: '1 0 0',
                  width: '1px',
                  height: 'min-content',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '32px',
                  overflow: 'hidden'
                }}
              >
                {/* Profile Image - aspect-ratio: 0.758065 */}
                <div 
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '0.758065' }}
                >
                  <Image
                    src="/portfolio/assets/img_18.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Info - gap: 2px */}
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'min-content', gap: '2px', textAlign: 'right', overflow: 'hidden' }}>
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Digital Designer</p>
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Based in France</p>
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">Since 2013</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact section - at bottom */}
          <div 
            style={{ 
              width: '100%',
              height: 'min-content',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: '8px',
              overflow: 'visible'
            }}
          >
            {/* Buttons column - flex: 1 0 0, gap: 4px */}
            <div 
              style={{ 
                flex: '1 0 0',
                width: '1px',
                height: 'min-content',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                overflow: 'hidden'
              }}
            >
              <a
                href="mailto:hello@maelle.design"
                className="block w-full py-[8px] px-[16px] text-center text-[14px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] border border-[#121212] rounded-full hover:bg-[#121212] hover:text-white transition-all"
              >
                hello@maelle.design
              </a>
              <a
                href="tel:+1234567890"
                className="block w-full py-[8px] px-[16px] text-center text-[14px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575] border border-[#e3e3e3] rounded-full hover:bg-[#121212] hover:text-white hover:border-[#121212] transition-all"
              >
                (123) 456-7890
              </a>
            </div>
            {/* Copyright */}
            <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575] whitespace-nowrap">© 2025</span>
          </div>
        </section>
      </main>
    </div>
  );
}
