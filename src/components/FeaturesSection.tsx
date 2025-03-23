
import React, { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import { Brain, Workflow, MessageSquare } from "lucide-react";

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
      icon: <Brain className="w-10 h-10 text-black dark:text-white" />,
    },
    {
      title: "Automated Workflows",
      subtitle: "AI-powered backend handling data processes and workflows",
      description: "Automate your manual processes with AI powered automations. Decide a trigger and result e.g. when a new customer is added, update CRM, send an email and draft an invoice. AI enables automating workflows without predetermined variables, allowing anything to be automated.",
      icon: <Workflow className="w-10 h-10 text-black dark:text-white" />,
    },
    {
      title: "Internal Knowledge Chat-bots",
      subtitle: "Chat-bot that answers question from your docs, ensuring accuracy",
      description: "Train your own chatbot on internal documentation and domain specific knowledge. Our chat-bots answers based on real facts and documentation, with referrals to the sources, eliminating hallucinations and creating trustworthy replies.",
      icon: <MessageSquare className="w-10 h-10 text-black dark:text-white" />,
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
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
