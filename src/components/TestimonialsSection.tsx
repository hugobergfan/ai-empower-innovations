
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "AutoJam.ai transformed our customer service operations. Their AI agents handle routine inquiries with remarkable accuracy, freeing our team to focus on complex cases.",
    author: "Sarah Johnson",
    position: "Customer Experience Director, TechSolutions Inc.",
  },
  {
    quote: "The automated workflows have cut our data processing time by 70%. What used to take days now happens in hours, with greater accuracy.",
    author: "Michael Chen",
    position: "Operations Manager, DataFlow Systems",
  },
  {
    quote: "Our internal knowledge base is now accessible through their intuitive chatbot. Our team finds answers in seconds rather than digging through documentation.",
    author: "Emily Rodriguez",
    position: "CTO, InnovateX",
  },
];

const TestimonialsSection = () => {
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
      className="section-spacing bg-gradient-to-b from-autojam-background to-white reveal-animation"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What our clients say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-8 rounded-xl shadow-card flex flex-col animate-scale-in",
                "transform transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <svg
                  width="45"
                  height="36"
                  viewBox="0 0 45 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black/10"
                >
                  <path
                    d="M13.4 36C9.2 36 5.73333 34.4 3 31.2C1 28.4 0 25.0667 0 21.2C0 15.6 1.86667 10.8 5.6 6.8C9.33333 2.8 14.2667 0.533333 20.4 0L21.4 5.6C17.1333 6.13333 13.6667 7.66667 11 10.2C8.33333 12.7333 7 15.7333 7 19.2L7.4 19.6C8.33333 18.1333 9.86667 17.4 12 17.4C14 17.4 15.7333 18.2 17.2 19.8C18.6667 21.4 19.4 23.4 19.4 25.8C19.4 28.3333 18.6 30.4667 17 32.2C15.4 34.0667 13.5333 35 11.4 35.8L13.4 36ZM36.6 36C32.4 36 28.9333 34.4 26.2 31.2C24.2 28.4 23.2 25.0667 23.2 21.2C23.2 15.6 25.0667 10.8 28.8 6.8C32.5333 2.8 37.4667 0.533333 43.6 0L44.6 5.6C40.3333 6.13333 36.8667 7.66667 34.2 10.2C31.5333 12.7333 30.2 15.7333 30.2 19.2L30.6 19.6C31.5333 18.1333 33.0667 17.4 35.2 17.4C37.2 17.4 38.9333 18.2 40.4 19.8C41.8667 21.4 42.6 23.4 42.6 25.8C42.6 28.3333 41.8 30.4667 40.2 32.2C38.6 34.0667 36.7333 35 34.6 35.8L36.6 36Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-autojam-text-secondary mb-8 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-autojam-text-muted text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
