
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHeroSection, setOverHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if we're over the hero section
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setOverHeroSection(heroBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? overHeroSection 
            ? "bg-transparent backdrop-blur-sm py-3" 
            : "bg-white/90 shadow-subtle backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={cn(
              "text-xl font-semibold flex items-center space-x-2 group",
              overHeroSection ? "text-white" : "text-black"
            )}
          >
            <img 
              src="/lovable-uploads/4dc1ac78-e3b0-4dfe-bfaf-6728975a96b4.png" 
              alt="AutoJam Logo" 
              className={cn(
                "h-8 w-auto transition-opacity",
                overHeroSection ? "invert" : ""
              )} 
            />
            <span className="text-2xl font-bold tracking-tight relative">
              <span className="relative z-10">AutoJam.ai</span>
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 group-hover:w-full h-1 transition-all duration-300 rounded",
                overHeroSection ? "bg-white/20" : "bg-black/10"
              )}></span>
            </span>
          </a>

          {/* Desktop Dropdown Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center space-x-1.5 focus:outline-none",
                overHeroSection ? "text-white" : "text-black"
              )}>
                <span className="text-sm font-medium">Menu</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white/80 backdrop-blur-lg shadow-lg rounded-lg border border-white/20">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Products</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden flex items-center space-x-1.5 focus:outline-none",
              overHeroSection ? "text-white" : "text-black"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-sm font-medium">Menu</span>
            <Menu
              className={cn(
                "w-5 h-5 transition-opacity",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <X
              className={cn(
                "w-5 h-5 absolute transition-opacity",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-white/90 backdrop-blur-lg pt-24 px-6 transition-all duration-500 ease-in-out transform md:hidden",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="flex flex-col space-y-8 text-center">
            <a
              href="#"
              className="text-2xl font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#"
              className="text-2xl font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-2xl font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <button className="button-primary">Contact us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
