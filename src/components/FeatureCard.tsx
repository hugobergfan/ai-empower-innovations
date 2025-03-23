
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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
    <div className="relative min-h-[14rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div
          className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-gray-800 bg-black p-6 shadow-sm animate-scale-in"
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="mb-4">{icon}</div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm font-medium text-autojam-text-secondary-dark mb-4">
                {subtitle}
              </p>
              <p className="text-autojam-text-secondary-dark mb-8 flex-grow">{description}</p>
            </div>
          </div>
          <div className="flex justify-start">
            <button className={cn("inline-flex items-center text-sm font-medium group px-4 py-2 rounded-lg bg-[#FAE5D1] text-black hover:shadow-md transition-all duration-300 w-auto")}>
              <span>Read more</span>
              <ArrowRight
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
