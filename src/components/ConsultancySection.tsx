import React, { useEffect, useRef } from "react";
import { Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";
const ConsultancySection = () => {
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
  return <section ref={sectionRef} className="section-spacing reveal-animation relative overflow-hidden bg-gradient-to-b from-white to-gray-50 bg-autojam-background">
      {/* Background decorative elements */}
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <Card className="p-10 md:p-14 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-br from-black to-gray-600 bg-clip-text text-transparent">
                  How should I implement AI into my business?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-gray-600">
                  Let's find out. Book a free consultancy call with us or talk to our AI agent.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 shadow-lg group">
                    <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Book a call
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-gray-50 shadow-md group">
                    <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Talk to AI agent
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="relative z-10 p-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="text-white p-6 font-mono bg-slate-900">
                    <ScrollReveal threshold={0.2} delay={400}>
                      <div className="space-y-3">
                        <p className="text-green-400">→ Running AI business analysis...</p>
                        <p className="text-cyan-400">→ Identifying optimization areas...</p>
                        <p className="text-blue-400">→ Calculating potential ROI...</p>
                        <Separator className="bg-zinc-700 my-3" />
                        <p className="text-amber-300">
                          Let me help determine the perfect AI implementation strategy for your specific business needs.
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default ConsultancySection;