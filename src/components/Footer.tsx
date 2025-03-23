
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 md:py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold">
              AutoJam.ai
            </a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <a
              href="#"
              className="text-autojam-text-secondary hover:text-black transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#"
              className="text-autojam-text-secondary hover:text-black transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-autojam-text-secondary hover:text-black transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-autojam-text-secondary hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-autojam-text-muted text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AutoJam.ai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-autojam-text-muted hover:text-black transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-autojam-text-muted hover:text-black transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
