
import React, { useEffect, useRef } from "react";
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-zinc-800 text-white p-4 font-mono">
                <ScrollReveal threshold={0.2}>
                  <div className="space-y-2">
                    <p className="text-green-400">Agent: Analyzing emails...</p>
                    <p className="text-cyan-400">Agent: Important meeting request detected.</p>
                    <p className="text-amber-300">Agent: Scheduling meeting for tomorrow at 2pm.</p>
                    <p className="text-blue-400">Agent: Drafting response...</p>
                    <p className="text-pink-400">Agent: Email sent to client ✓</p>
                  </div>
                </ScrollReveal>
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
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-zinc-800 text-white p-4 font-mono">
                <ScrollReveal threshold={0.2}>
                  <div className="space-y-2">
                    <p className="text-green-400">✓ New customer added: Sarah Johnson</p>
                    <p className="text-blue-400">→ Updating CRM record...</p>
                    <p className="text-purple-400">→ Creating welcome email...</p>
                    <p className="text-amber-300">→ Generating invoice #INV-4872...</p>
                    <p className="text-emerald-400">✓ Workflow complete</p>
                  </div>
                </ScrollReveal>
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-zinc-900 p-3 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-zinc-800 text-white p-4 font-mono">
                <ScrollReveal threshold={0.2}>
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">User: What's our refund policy?</p>
                    <p className="text-cyan-300">AI: According to our policy (section 3.2):</p>
                    <p className="text-amber-300">"Full refunds available within 30 days."</p>
                    <p className="text-gray-400 text-sm">User: Thanks! Where is this documented?</p>
                    <p className="text-green-400">AI: Source: company-handbook.pdf, page 24</p>
                  </div>
                </ScrollReveal>
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
