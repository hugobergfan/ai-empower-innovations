
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="hero-section" 
      className="min-h-screen text-white reveal-animation bg-black"
    >
      <div className="container-custom text-center px-6 sm:px-8 lg:px-12 flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl tracking-tight leading-tight mb-6 animate-fade-in bg-gradient-to-b from-white to-white/80 bg-clip-text font-medium md:text-6xl">
            Empower your business with <span className="font-serif italic">Artificial Intelligence</span>
          </h1>
          <p 
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" 
            style={{
              animationDelay: "200ms"
            }}
          >
            We build innovative AI applications tailored for your business. Our ground-breaking tech opens unlimited potential across a range of operations.
          </p>
          <div 
            className="flex flex-col items-center space-y-4 animate-fade-in" 
            style={{
              animationDelay: "400ms"
            }}
          >
            <p className="text-sm text-white/70">join the future:</p>
            <button className="flex items-center justify-center px-6 py-3 bg-[#FAE5D1] text-black rounded-lg font-medium transition-all duration-300 group hover:shadow-lg">
              <span>Contact us</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
