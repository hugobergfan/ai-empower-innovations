
import React, { useEffect, useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

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
      className="section-spacing bg-autojam-background reveal-animation"
    >
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-elevated p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to transform your business with AI?
          </h2>
          <p className="text-autojam-text-secondary max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how our solutions can be tailored to your specific needs and goals.
          </p>
          <button className="button-primary mx-auto py-4 px-8 text-lg">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
