import React, { useState } from 'react';
import { Github, Linkedin, Code2, BookOpenCheck, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
            Shubham Singh
          </h1>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#education" className="text-gray-700 hover:text-indigo-600 transition-colors">Education</a>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Shubham-Singh-08" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/shubham-singh-071b052a6/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://leetcode.com/u/ShubhamSingh_08/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/shubhamsixrcp/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <BookOpenCheck className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">Skills</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">Experience</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">Projects</a>
            <a href="#education" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">Education</a>
          </div>
          <div className="px-5 pt-4 pb-6 border-t border-gray-200">
            <div className="flex space-x-6">
              <a href="https://github.com/shubham-singh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/shubham-singh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com/shubham-singh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <Code2 className="h-6 w-6" />
              </a>
              <a href="https://geeksforgeeks.org/user/shubham-singh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <BookOpenCheck className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}