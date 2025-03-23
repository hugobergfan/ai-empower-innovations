
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <div
      className="bg-autojam-card rounded-xl shadow-card p-8 flex flex-col h-full card-hover animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm font-medium text-autojam-text-secondary mb-4">
        {subtitle}
      </p>
      <p className="text-autojam-text-secondary mb-8 flex-grow">{description}</p>
      <button className={cn("flex items-center text-sm font-medium group")}>
        <span>Read more</span>
        <ArrowRight
          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          size={16}
        />
      </button>
    </div>
  );
};

export default FeatureCard;
