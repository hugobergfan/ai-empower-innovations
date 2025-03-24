
import React, { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const features = [{
    title: "AI Agents",
    subtitle: "Autonomous agent making decisions and taking action on your behalf",
    description: "The most powerful form of AI. Our agents connect to your platforms and databases, allowing them to make autonomous decisions and take actions unprompted. For example our agents can read, analyse and reply to emails and autonomously schedule meetings, create tickets, delegate work and take action. Your 24/7 employee.",
    graphic: <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="299" height="139" fill="none" className="mx-auto">
              <g transform="translate(0.878 1.408)">
                <g transform="translate(253.866 88.903)">
                  <path d="M 43.463 21.731 C 43.463 9.729 33.734 0 21.732 0 C 9.73 0 0 9.729 0 21.731 C 0 33.733 9.73 43.463 21.732 43.463 C 33.734 43.463 43.463 33.733 43.463 21.731 Z" fill="rgb(255,255,255)" stroke-width="0.987805" stroke="rgb(0, 79, 128)" stroke-miterlimit="10" stroke-dasharray=""></path>
                  <path d="M 23.592 36.054 L 22.706 34.696 C 23.19 34.029 23.41 33.192 23.323 32.357 C 23.236 31.522 22.847 30.756 22.238 30.215 C 21.214 29.312 20.512 28.068 20.249 26.688 C 17.64 30.621 18.994 32.79 20.249 34.714 L 19.329 36.054 C 17.583 35.707 16.015 34.705 14.915 33.233 C 13.815 31.761 13.257 29.918 13.344 28.046 C 13.344 28.046 12.994 24.236 17.156 20.514 C 17.156 20.514 21.87 15.91 20.232 12.506 L 21.418 11.359 C 23.229 12.699 24.615 14.584 25.393 16.768 C 26.172 18.952 26.307 21.334 25.782 23.601 C 26.179 23.193 26.497 22.708 26.718 22.172 L 28.173 22.048 C 28.29 22.26 31.249 27.217 29.661 31.398 C 29.095 32.644 28.244 33.723 27.184 34.536 C 26.125 35.349 24.891 35.87 23.592 36.054 Z M 20.249 23.795 L 21.703 24.483 C 21.626 25.287 21.724 26.1 21.99 26.859 C 22.257 27.617 22.685 28.301 23.241 28.857 C 23.957 29.408 24.5 30.174 24.799 31.055 C 25.097 31.936 25.137 32.891 24.912 33.796 C 25.604 33.541 26.238 33.14 26.778 32.619 C 27.319 32.097 27.753 31.466 28.056 30.763 C 28.624 28.615 28.378 26.319 27.37 24.36 C 27.054 24.901 26.594 25.334 26.047 25.603 C 25.501 25.873 24.892 25.968 24.294 25.876 L 23.709 24.677 C 24.441 23.006 24.691 21.144 24.426 19.325 C 24.162 17.505 23.395 15.808 22.222 14.446 C 21.987 18.186 18.359 21.643 18.243 21.837 C 14.781 24.941 15.016 27.817 15.016 27.94 C 14.95 29.03 15.163 30.117 15.63 31.091 C 16.097 32.065 16.803 32.889 17.674 33.479 C 16.688 31.009 16.688 28.046 20.298 23.795 Z" fill="rgb(0, 79, 128)"></path>
                </g>
                <g>
                  <defs>
                    <linearGradient id="idhfoHxdE_6g1539462816" x1="1" x2="0" y1="0.3120410343840635" y2="0.6879589656159365">
                      <stop offset="0" stop-color="rgba(245, 245, 245, 0)" stop-opacity="0"></stop>
                      <stop offset="0.16216216216216217" stop-color="rgba(242, 242, 242, 0.95)" stop-opacity="0.95"></stop>
                      <stop offset="1" stop-color="rgba(0, 79, 128, 0.61)" stop-opacity="0.61"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 148.622 87.592 C 148.622 90.834 145.533 93.592 142.122 93.592 L 114.91 93.588 L 114.91 93.565 L 96.978 93.565 C 96.721 93.565 96.465 93.573 96.211 93.588 L 95.841 93.588 L 95.841 93.615 C 89.552 94.16 84.626 99.186 84.626 105.306 L 84.625 111.53 L 84.636 111.53 C 84.478 114.638 81.776 117.112 78.467 117.112 L 29.14 117.112 L 29.14 122.982 L 78.467 122.982 C 85.289 122.982 90.819 117.726 90.819 111.242 L 90.82 105.019 L 90.809 105.019 C 90.958 102.081 93.378 99.71 96.436 99.459 L 142.122 99.592 C 148.944 99.592 154.622 94.075 154.622 87.592 L 154.622 81.592 L 148.622 81.592 Z" fill="url(#idhfoHxdE_6g1539462816)"></path>
                </g>
                <g>
                  <defs>
                    <linearGradient id="idgFoMxiju9g574182577" x1="5.551115123125783e-17" x2="1" y1="0.5972026781743196" y2="0.4027973218256804">
                      <stop offset="0" stop-color="rgba(245, 245, 245, 0)" stop-opacity="0"></stop>
                      <stop offset="0.16216216216216217" stop-color="rgba(242, 242, 242, 0.95)" stop-opacity="0.95"></stop>
                      <stop offset="1" stop-color="rgb(227, 227, 227)" stop-opacity="1"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 186.702 32.84 C 186.544 29.719 183.834 27.236 180.514 27.236 L 161.543 27.236 L 161.543 27.131 L 161.056 27.131 C 157.635 27.131 154.861 29.769 154.861 33.024 L 154.622 85.592 L 148.622 85.592 L 148.666 33.024 C 148.666 26.515 154.213 21.238 161.056 21.238 L 176.092 21.238 L 176.092 21.343 L 180.514 21.343 C 187.357 21.343 192.904 26.619 192.904 33.129 L 192.905 39.376 L 192.895 39.376 C 193.053 42.496 195.763 44.98 199.082 44.98 L 216.067 44.98 L 216.067 44.958 L 231.103 44.958 C 234.524 44.958 237.297 42.32 237.297 39.065 L 237.297 32.818 L 243.494 32.818 L 243.493 39.065 C 243.493 45.574 237.945 50.851 231.103 50.851 L 217.07 50.851 L 217.07 50.872 L 199.082 50.872 C 192.24 50.872 186.692 45.596 186.692 39.087 L 186.691 32.84 Z" fill="url(#idgFoMxiju9g574182577)"></path>
                </g>
                <g>
                  <defs>
                    <linearGradient id="idzyPH_JSA6g-574182588" x1="1" x2="0" y1="0.6820773582994835" y2="0.3179226417005166">
                      <stop offset="0" stop-color="rgba(245, 245, 245, 0)" stop-opacity="0"></stop>
                      <stop offset="0.16216216216216217" stop-color="rgba(242, 242, 242, 0.95)" stop-opacity="0.95"></stop>
                      <stop offset="1" stop-color="rgb(227, 227, 227)" stop-opacity="1"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 62.976 52.156 C 62.976 55.398 65.741 58.026 69.152 58.026 L 94.504 58.026 L 94.504 58.004 L 112.437 58.004 C 112.694 58.004 112.95 58.012 113.203 58.026 L 113.574 58.026 L 113.574 58.053 C 119.862 58.598 124.788 63.625 124.788 69.744 L 124.789 75.968 L 124.779 75.968 C 124.937 79.076 127.638 81.55 130.947 81.55 L 154.622 81.592 L 154.622 87.592 L 130.947 87.42 C 124.126 87.42 118.596 82.164 118.596 75.68 L 118.595 69.457 L 118.606 69.457 C 118.457 66.52 116.037 64.149 112.978 63.896 L 69.152 63.896 C 62.33 63.896 56.8 58.64 56.8 52.156 L 56.799 45.933 L 62.976 45.933 Z" fill="url(#idzyPH_JSA6g-574182588)"></path>
                </g>
                <g>
                  <defs>
                    <linearGradient id="idSX1tMQLcHg574182528" x1="0" x2="1" y1="0.11507870480606325" y2="0.8849212951939367">
                      <stop offset="0" stop-color="rgba(245, 245, 245, 0)" stop-opacity="0"></stop>
                      <stop offset="0.16216216216216217" stop-color="rgba(242, 242, 242, 0.95)" stop-opacity="0.95"></stop>
                      <stop offset="1" stop-color="rgb(227, 227, 227)" stop-opacity="1"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 271.895 82.249 C 271.895 79.04 269.133 76.438 265.726 76.438 L 152.622 75.592 L 152.622 69.592 L 265.726 70.628 C 272.54 70.628 278.066 75.831 278.066 82.249 L 278.067 88.408 L 271.895 88.409 Z" fill="url(#idSX1tMQLcHg574182528)"></path>
                </g>
                <g transform="translate(38.524 3.951)">
                  <path d="M 44.451 22.226 C 44.451 9.951 34.5 0 22.226 0 C 9.951 0 0 9.951 0 22.226 C 0 34.501 9.951 44.451 22.226 44.451 C 34.5 44.451 44.451 34.501 44.451 22.226 Z" fill="rgb(255,255,255)" stroke-width="0.987805" stroke="rgb(244,244,245)" stroke-miterlimit="10" stroke-dasharray=""></path>
                  <path d="M 14.323 32.762 L 19.802 16.838 L 18.722 14.323 L 16.957 14.323 L 16.957 11.689 L 19.591 11.689 C 20.145 11.689 20.619 12.031 20.816 12.518 L 28.363 30.128 L 30.128 30.128 L 30.128 32.762 L 27.494 32.762 C 26.927 32.762 26.453 32.406 26.269 31.919 L 21.343 20.447 L 17.115 32.762 Z" fill="rgb(24,24,27)"></path>
                </g>
                <g transform="translate(220.281 0)">
                  <path d="M 39.512 19.756 C 39.512 8.845 30.667 0 19.756 0 C 8.845 0 0 8.845 0 19.756 C 0 30.667 8.845 39.512 19.756 39.512 C 30.667 39.512 39.512 30.667 39.512 19.756 Z" fill="rgb(255,255,255)" stroke-width="0.987805" stroke="rgb(244,244,245)" stroke-miterlimit="10" stroke-dasharray=""></path>
                </g>
                <path d="M 248.981 19.395 C 249.172 19.506 249.398 19.537 249.61 19.481 C 249.824 19.426 250.006 19.289 250.117 19.1 C 250.229 18.912 250.259 18.687 250.203 18.476 C 250.148 18.265 250.01 18.084 249.82 17.974 L 249.815 17.973 L 247.97 16.916 L 249.924 15.791 C 250.321 15.561 249.486 14.138 249.09 14.368 L 247.136 15.493 L 247.136 13.378 C 247.136 12.917 245.469 12.917 245.469 13.378 L 245.469 16.427 L 242.817 17.945 L 241.259 17.077 L 241.259 14.028 L 243.937 12.497 C 244.335 12.267 243.5 10.844 243.104 11.074 L 241.259 12.131 L 241.259 9.895 C 241.259 9.434 239.591 9.434 239.591 9.895 L 239.591 12.131 L 237.746 11.074 C 237.349 10.844 236.517 12.28 236.912 12.497 L 239.591 14.028 L 239.591 17.077 L 238.032 17.945 L 235.394 16.427 L 235.394 13.35 C 235.394 12.889 233.727 12.889 233.727 13.35 L 233.727 15.465 L 231.772 14.34 C 231.376 14.11 230.543 15.546 230.938 15.763 L 232.893 16.888 L 231.047 17.945 C 230.651 18.175 231.485 19.598 231.88 19.368 L 234.56 17.837 L 237.212 19.354 L 237.212 21.13 L 234.56 22.66 L 231.88 21.13 C 231.484 20.9 230.652 22.336 231.047 22.553 L 232.893 23.609 L 230.938 24.734 C 230.542 24.964 231.377 26.387 231.772 26.157 L 233.727 25.032 L 233.727 27.147 C 233.727 27.608 235.394 27.608 235.394 27.147 L 235.394 24.07 L 238.045 22.553 L 239.604 23.42 L 239.604 26.469 L 236.924 28 C 236.528 28.23 237.363 29.653 237.758 29.423 L 239.604 28.367 L 239.604 30.606 C 239.604 31.066 241.271 31.066 241.271 30.606 L 241.271 28.369 L 243.117 29.426 C 243.513 29.656 244.345 28.22 243.95 28.003 L 241.271 26.472 L 241.271 23.42 L 242.829 22.553 L 245.481 24.07 L 245.481 27.147 C 245.481 27.608 247.149 27.608 247.149 27.147 L 247.149 25.032 L 249.103 26.157 C 249.5 26.387 250.332 24.951 249.936 24.734 L 247.983 23.609 L 249.828 22.553 C 250.224 22.323 249.389 20.9 248.994 21.13 L 246.301 22.66 L 243.65 21.143 L 243.65 19.368 L 246.315 17.85 Z M 242.269 21.319 L 241.435 21.78 L 241.258 21.874 L 240.424 22.335 L 239.59 21.874 L 239.412 21.78 L 238.579 21.319 L 238.579 19.192 L 239.412 18.731 L 239.59 18.637 L 240.424 18.176 L 241.258 18.637 L 241.435 18.731 L 242.269 19.192 L 242.269 20.357 Z" fill="rgb(24,24,27)"></path>
                <g transform="translate(0 97.793)">
                  <path d="M 38.524 19.262 C 38.524 8.624 29.9 0 19.262 0 C 8.624 0 0 8.624 0 19.262 C 0 29.901 8.624 38.525 19.262 38.525 C 29.9 38.525 38.524 29.901 38.524 19.262 Z" fill="rgb(255,255,255)" stroke-width="0.987805" stroke="rgb(244,244,245)" stroke-miterlimit="10" stroke-dasharray=""></path>
                  <path d="M 19.26 8.288 C 19.551 8.288 19.83 8.404 20.036 8.609 C 20.242 8.815 20.357 9.094 20.357 9.386 L 20.357 12.678 C 20.357 12.969 20.242 13.248 20.036 13.454 C 19.83 13.66 19.551 13.776 19.26 13.776 C 18.969 13.776 18.69 13.66 18.484 13.454 C 18.278 13.248 18.162 12.969 18.162 12.678 L 18.162 9.386 C 18.162 9.094 18.278 8.815 18.484 8.609 C 18.69 8.404 18.969 8.288 19.26 8.288 Z M 19.26 24.751 C 19.551 24.751 19.83 24.867 20.036 25.073 C 20.242 25.279 20.357 25.558 20.357 25.848 L 20.357 29.142 C 20.357 29.432 20.242 29.712 20.036 29.917 C 19.83 30.124 19.551 30.239 19.26 30.239 C 18.969 30.239 18.69 30.124 18.484 29.917 C 18.278 29.712 18.162 29.432 18.162 29.142 L 18.162 25.848 C 18.162 25.558 18.278 25.279 18.484 25.073 C 18.69 24.867 18.969 24.751 19.26 24.751 Z M 30.235 19.264 C 30.235 19.554 30.12 19.834 29.914 20.039 C 29.708 20.246 29.429 20.361 29.138 20.361 L 25.845 20.361 C 25.554 20.361 25.275 20.246 25.069 20.039 C 24.863 19.834 24.748 19.554 24.748 19.264 C 24.748 18.972 24.863 18.693 25.069 18.487 C 25.275 18.282 25.554 18.166 25.845 18.166 L 29.138 18.166 C 29.429 18.166 29.708 18.282 29.914 18.487 C 30.12 18.693 30.235 18.972 30.235 19.264 Z M 13.772 19.264 C 13.772 19.554 13.656 19.834 13.451 20.039 C 13.245 20.246 12.965 20.361 12.674 20.361 L 9.382 20.361 C 9.091 20.361 8.811 20.246 8.606 20.039 C 8.4 19.834 8.284 19.554 8.284 19.264 C 8.284 18.972 8.4 18.693 8.606 18.487 C 8.811 18.282 9.091 18.166 9.382 18.166 L 12.674 18.166 C 12.965 18.166 13.245 18.282 13.451 18.487 C 13.656 18.693 13.772 18.972 13.772 19.264 Z M 27.021 27.024 C 26.815 27.23 26.536 27.346 26.245 27.346 C 25.954 27.346 25.674 27.23 25.469 27.024 L 23.141 24.697 C 22.941 24.489 22.83 24.213 22.833 23.924 C 22.835 23.637 22.951 23.361 23.154 23.158 C 23.358 22.954 23.633 22.839 23.921 22.837 C 24.208 22.834 24.486 22.944 24.693 23.145 L 27.021 25.471 C 27.123 25.573 27.204 25.694 27.259 25.828 C 27.314 25.961 27.342 26.103 27.342 26.248 C 27.342 26.392 27.314 26.535 27.259 26.668 C 27.204 26.802 27.123 26.922 27.021 27.024 Z M 15.379 15.383 C 15.173 15.588 14.894 15.704 14.603 15.704 C 14.312 15.704 14.033 15.588 13.827 15.383 L 11.5 13.055 C 11.294 12.85 11.178 12.57 11.178 12.28 C 11.178 11.989 11.294 11.709 11.499 11.504 C 11.705 11.297 11.984 11.182 12.276 11.182 C 12.567 11.182 12.846 11.297 13.052 11.503 L 15.379 13.831 C 15.585 14.036 15.7 14.316 15.7 14.606 C 15.7 14.898 15.585 15.177 15.379 15.383 Z M 11.5 27.024 C 11.294 26.818 11.179 26.539 11.179 26.249 C 11.179 25.957 11.294 25.679 11.5 25.472 L 13.828 23.145 C 13.929 23.04 14.05 22.956 14.184 22.899 C 14.318 22.841 14.462 22.811 14.608 22.809 C 14.754 22.808 14.898 22.836 15.033 22.891 C 15.168 22.946 15.29 23.028 15.393 23.131 C 15.496 23.234 15.578 23.356 15.633 23.492 C 15.688 23.626 15.716 23.771 15.715 23.916 C 15.714 24.063 15.683 24.207 15.626 24.34 C 15.568 24.474 15.485 24.595 15.38 24.697 L 13.053 27.024 C 12.951 27.127 12.83 27.208 12.697 27.263 C 12.564 27.318 12.421 27.346 12.276 27.346 C 12.132 27.346 11.989 27.318 11.856 27.263 C 11.723 27.208 11.602 27.127 11.5 27.024 Z M 23.141 15.383 C 22.935 15.177 22.819 14.898 22.819 14.606 C 22.819 14.316 22.935 14.036 23.141 13.831 L 25.468 11.503 C 25.673 11.297 25.953 11.181 26.244 11.181 C 26.535 11.181 26.814 11.296 27.02 11.503 C 27.226 11.708 27.342 11.988 27.342 12.278 C 27.342 12.569 27.226 12.849 27.021 13.054 L 24.693 15.383 C 24.487 15.588 24.208 15.704 23.917 15.704 C 23.626 15.704 23.347 15.588 23.141 15.383 Z" fill="rgb(24,24,27)"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
  }, {
    title: "Automated Workflows",
    subtitle: "AI-powered backend handling data processes and workflows",
    description: "Automate your manual processes with AI powered automations. Decide a trigger and result e.g. when a new customer is added, update CRM, send an email and draft an invoice. AI enables automating workflows without predetermined variables, allowing anything to be automated.",
    graphic: <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-green-100 to-teal-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-4">
            <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-zinc-900 p-2 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-xs ml-2">Automated Workflow</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                <div className="flex flex-col items-center">
                  {/* Flow diagram */}
                  <div className="flex items-center justify-center w-full mb-2">
                    <div className="bg-emerald-500/20 rounded-lg p-1.5 text-emerald-300 text-xs font-medium">
                      New Customer
                    </div>
                    <div className="h-px w-6 bg-emerald-400/40"></div>
                    <div className="w-3 h-3 rounded-full border border-emerald-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                  
                  <div className="h-10 w-px bg-gradient-to-b from-emerald-400/40 to-blue-400/40 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 w-full mt-1">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border border-blue-400 flex items-center justify-center mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-1.5 text-blue-300 text-xs font-medium w-full text-center">
                        Update CRM
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border border-purple-400 flex items-center justify-center mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      </div>
                      <div className="bg-purple-500/20 rounded-lg p-1.5 text-purple-300 text-xs font-medium w-full text-center">
                        Send Email
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-10 w-px bg-gradient-to-b from-blue-400/40 to-amber-400/40 relative mt-1">
                    <div className="absolute left-1/2 -translate-x-1/2 top-2/3 w-2 h-2 rounded-full bg-amber-400/40 animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full mt-1">
                    <div className="w-3 h-3 rounded-full border border-amber-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    </div>
                    <div className="h-px w-6 bg-amber-400/40"></div>
                    <div className="bg-amber-500/20 rounded-lg p-1.5 text-amber-300 text-xs font-medium">
                      Generate Invoice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Internal Knowledge Chat-bots",
    subtitle: "Chat-bot that answers question from your docs, ensuring accuracy",
    description: "Train your own chatbot on internal documentation and domain specific knowledge. Our chat-bots answers based on real facts and documentation, with referrals to the sources, eliminating hallucinations and creating trustworthy replies.",
    graphic: <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-full blur-3xl opacity-60"></div>
          <div className="relative z-10 p-4">
            <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="bg-zinc-900 p-2 flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-xs ml-2">Knowledge Bot</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-blue-500/20 rounded-lg p-1.5 max-w-[80%]">
                      <p className="text-xs text-white">What's our refund policy?</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-slate-700/50 rounded-lg p-2 max-w-[80%] relative">
                      <div className="absolute -left-2 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-pink-500 opacity-50 blur-md"></div>
                      <div className="relative">
                        <p className="text-xs text-white mb-1.5">According to our company handbook:</p>
                        <div className="bg-slate-800/70 rounded p-1.5 border-l-2 border-amber-400 mb-1.5">
                          <p className="text-xs text-amber-200 italic">"Full refunds available within 30 days of purchase with receipt."</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500/70"></div>
                          <p className="text-xs text-emerald-300">Source: company-handbook.pdf, page 24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex-1 h-px bg-slate-700/50"></div>
                    <div className="text-xs text-slate-500">Verified from 3 documents</div>
                    <div className="flex-1 h-px bg-slate-700/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }];
  
  return <section ref={sectionRef} className="section-spacing reveal-animation bg-autojam-background dark:bg-autojam-background-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal-animation">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureCard key={feature.title} title={feature.title} subtitle={feature.subtitle} description={feature.description} graphic={feature.graphic} delay={index * 100} />)}
        </div>
      </div>
    </section>;
};

export default FeaturesSection;
