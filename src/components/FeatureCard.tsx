
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
      className="bg-autojam-card dark:bg-autojam-card-dark rounded-xl p-8 flex flex-col h-full card-hover animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-sm font-medium text-autojam-text-secondary dark:text-autojam-text-secondary-dark mb-4">
        {subtitle}
      </p>
      <p className="text-autojam-text-secondary dark:text-autojam-text-secondary-dark mb-8 flex-grow">{description}</p>
      <div className="flex justify-start">
        <button className={cn("inline-flex items-center text-sm font-medium group px-4 py-2 rounded-lg bg-[#FAE5D1] text-black hover:shadow-md transition-all duration-300")}>
          <span>Read more</span>
          <ArrowRight
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            size={16}
          />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
