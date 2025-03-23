
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-autojam-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold mb-4 animate-fade-in">404</h1>
          <p className="text-xl text-autojam-text-secondary mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="button-primary inline-block animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
