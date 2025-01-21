import React from 'react';
import { Mail, Github, Linkedin, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:shubhamsinghbaura@gmail.com">
                shubhamsinghbaura@gmail.com
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Shubham-Singh-08" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/shubham-singh-071b052a6/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com/u/ShubhamSingh_08/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Code2 className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 mr-2" />
              Back to Top
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Shubham Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}