
import React, { useRef, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const FeaturesSection = () => {
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

  const features = [
    {
      title: "AI Agents",
      subtitle: "Autonomous agent making decisions and taking action on your behalf",
      description: "The most powerful form of AI. Our agents connect to your platforms and databases, allowing them to make autonomous decisions and take actions unprompted. For example our agents can read, analyse and reply to emails and autonomously schedule meetings, create tickets, delegate work and take action. Your 24/7 employee.",
      graphic: (
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-6">
            <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/70 text-xs ml-2">AI Agent</div>
              </div>
              <div className="bg-[#1A1A1A] p-4">
                <div className="flex space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/60 animate-pulse flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-2 bg-blue-300/30 rounded-full"></div>
                    <div className="h-2 bg-blue-300/20 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-white space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="text-xs text-blue-300">Analyzing email content...</div>
                  </div>
                  <div className="flex items-center text-white space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="text-xs text-green-300">Decision: Schedule meeting</div>
                  </div>
                  <div className="flex items-center text-white space-x-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="text-xs text-amber-300">Action: Updated calendar</div>
                  </div>
                  <div className="flex items-center text-white space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <div className="text-xs text-purple-300">Action: Drafted response email</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Automated Workflows",
      subtitle: "AI-powered backend handling data processes and workflows",
      description: "Automate your manual processes with AI powered automations. Decide a trigger and result e.g. when a new customer is added, update CRM, send an email and draft an invoice. AI enables automating workflows without predetermined variables, allowing anything to be automated.",
      graphic: (
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-green-100 to-teal-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-6">
            <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/70 text-xs ml-2">Workflow Builder</div>
              </div>
              <div className="bg-[#1A1A1A] p-4">
                <div className="flex flex-col items-center">
                  {/* Flow diagram with angular connections */}
                  <div className="flex items-center justify-center w-full mb-3">
                    <div className="bg-emerald-500/20 rounded-lg p-2 text-emerald-300 text-xs font-medium">
                      New Customer
                    </div>
                    <div className="h-px w-8 bg-emerald-400/40"></div>
                    <div className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                  
                  {/* Use right angle lines for connections */}
                  <div className="relative h-14 w-px bg-blue-400/40">
                    <div className="absolute top-1/2 left-0 h-px w-2 bg-blue-400/40"></div>
                    <div className="absolute left-2 top-1/2 w-3 h-3 rounded-full bg-blue-400/40 animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 w-full mt-1 relative">
                    {/* Connection from center to left node */}
                    <div className="absolute top-0 left-1/4 w-px h-2 bg-blue-400/40"></div>
                    {/* Connection from center to right node */}
                    <div className="absolute top-0 right-1/4 w-px h-2 bg-purple-400/40"></div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border border-blue-400 flex items-center justify-center mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-2 text-blue-300 text-xs font-medium w-full text-center">
                        Update CRM
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border border-purple-400 flex items-center justify-center mb-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      </div>
                      <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300 text-xs font-medium w-full text-center">
                        Send Email
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom connection with right angles */}
                  <div className="relative h-14 w-px bg-amber-400/40 mt-1">
                    <div className="absolute bottom-1/2 left-0 h-px w-2 bg-amber-400/40"></div>
                    <div className="absolute left-2 bottom-1/2 w-3 h-3 rounded-full bg-amber-400/40 animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full mt-1">
                    <div className="w-4 h-4 rounded-full border border-amber-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    </div>
                    <div className="h-px w-8 bg-amber-400/40"></div>
                    <div className="bg-amber-500/20 rounded-lg p-2 text-amber-300 text-xs font-medium">
                      Generate Invoice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Internal Knowledge Chat-bots",
      subtitle: "Chat-bot that answers question from your docs, ensuring accuracy",
      description: "Train your own chatbot on internal documentation and domain specific knowledge. Our chat-bots answers based on real facts and documentation, with referrals to the sources, eliminating hallucinations and creating trustworthy replies.",
      graphic: (
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-6">
            <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/70 text-xs ml-2">Knowledge Bot</div>
              </div>
              <div className="bg-[#1A1A1A] p-4">
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-blue-500/20 rounded-lg p-2 max-w-[80%]">
                      <p className="text-xs text-white">What's our refund policy?</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-slate-700/50 rounded-lg p-3 max-w-[80%] relative">
                      <div className="absolute -left-2 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-pink-500 opacity-50 blur-md"></div>
                      <div className="relative">
                        <p className="text-xs text-white mb-2">According to our company handbook:</p>
                        <div className="bg-slate-800/70 rounded p-2 border-l-2 border-amber-400 mb-2">
                          <p className="text-xs text-amber-200 italic">"Full refunds available within 30 days of purchase with receipt."</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                          <p className="text-xs text-emerald-300">Source: company-handbook.pdf, page 24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <div className="flex-1 h-px bg-slate-700/50"></div>
                    <div className="text-xs text-slate-500">Verified from 3 documents</div>
                    <div className="flex-1 h-px bg-slate-700/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="section-spacing reveal-animation bg-autojam-background dark:bg-autojam-background-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal-animation">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              graphic={feature.graphic}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
