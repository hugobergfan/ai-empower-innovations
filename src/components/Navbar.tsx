
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
          ? "bg-white/90 shadow-subtle backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold flex items-center space-x-2 group"
          >
            <span className="text-2xl font-bold tracking-tight relative">
              <span className="relative z-10">AutoJam.ai</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-1 bg-black/10 transition-all duration-300 rounded"></span>
            </span>
          </a>

          {/* Desktop Dropdown Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1.5 text-black focus:outline-none">
                <span className="text-sm font-medium">Menu</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg rounded-lg">
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
            className="md:hidden flex items-center space-x-1.5 text-black focus:outline-none"
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
            "fixed inset-0 z-40 bg-white pt-24 px-6 transition-all duration-500 ease-in-out transform md:hidden",
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
