import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeatureRotator from "@/components/feature-rotator";
import IntegrationMarquee from "@/components/integration-marquee";
import HowItWorks from "@/components/how-it-works";

export default function ClaceHero() {
  return (
    <main className="min-h-screen w-full bg-white text-neutral-900 font-sans tracking-tight selection:bg-blue-100">
      {/* Navbar space placeholder */}
      <nav className="relative z-[60] flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-2xl font-semibold tracking-tighter">Clace</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <Link href="#" className="hover:text-neutral-900 transition-colors">Download</Link>
          <Link href="#" className="hover:text-neutral-900 transition-colors">Enterprise</Link>
          <Link href="#" className="hover:text-neutral-900 transition-colors">Pricing</Link>
        </div>
        <div className="w-[88px] hidden md:block"></div>
      </nav>

      <section className="relative flex flex-col items-center justify-center pt-16 pb-32 px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light leading-[0.85] tracking-tight flex flex-col items-center">
            <span>Personal AI</span>
            <span className="text-neutral-900 font-normal mt-1">On-device Context</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto flex flex-col items-center">
            <span className="flex items-center flex-wrap justify-center">
              We help AI&nbsp;
              <FeatureRotator 
                features={[
                  "understand your context,",
                  "remember your preferences,",
                  "connect to your workflow,",
                  "organize your knowledge,"
                ]} 
                className="text-blue-600 font-medium inline-flex cursor-default" 
              />
            </span>
            <span>follow your standards, and keep data private.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a 
              href="#"
              className="group relative overflow-hidden flex items-center gap-[8px] px-6 py-3 text-[16px] font-medium text-white bg-gradient-to-b from-[#3a86ff] to-[#0A64FF] rounded-xl transition-all shadow-[0_2px_8px_rgba(10,100,255,0.3),_inset_0_1px_1px_rgba(255,255,255,0.4),_inset_0_-1px_1px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(10,100,255,0.4),_inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-black/10 active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 rounded-[10px] border border-white/20 pointer-events-none mix-blend-overlay" />
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5 relative z-10" xmlns="http://www.w3.org/2000/svg"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>
              <span className="relative z-10">Get for Mac</span>
            </a>
            <a 
              href="#"
              className="flex items-center gap-[8px] px-6 py-3 text-[16px] font-medium text-neutral-800 bg-[#E3E3E3]/80 backdrop-blur-sm rounded-xl hover:bg-[#d8d8d8]/80 transition-all active:scale-95 shadow-[0_2px_4px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.16),_inset_0_1px_0_#FDFDFD,_inset_0_-1px_0_#F1F1F1]"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Video/Image Placeholder mockup */}
        <div className="w-full max-w-5xl mx-auto mt-20 px-4 relative z-10">
          <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-900 rounded-2xl md:rounded-3xl border border-neutral-200/50 dark:border-white/10 shadow-2xl overflow-hidden relative group flex items-center justify-center">
            {/* Inner glow effect for some depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            
            <div className="flex flex-col items-center justify-center text-neutral-400 gap-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-neutral-100 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-medium">Video/Image Placeholder</p>
            </div>
          </div>
        </div>

        <IntegrationMarquee />

      </section>

      <HowItWorks />
    </main>
  );
}

