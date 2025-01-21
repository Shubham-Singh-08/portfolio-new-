import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Data Scientist & <br />
              Data Analyst
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl animate-fade-in-delay">
              Transforming data into actionable insights and building innovative solutions that drive impact
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <a href="#contact" 
                 className="group inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projects" 
                 className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg transform rotate-6 scale-105" />
              <img 
                src="./shubham main.jpg"
                alt="Data Science Illustration"
                className="relative rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}