import React from 'react';
import { Download, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-6" />
              <img
                src="./shubham.jpg"
                alt="Shubham Singh"
                className="relative rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                I am a passionate Data Scientist and Software Engineer with expertise in machine learning, 
                statistical analysis, and full-stack development. My journey in tech is driven by a 
                deep curiosity for solving complex problems and creating impactful solutions.
              </p>
              <p>
                With a strong foundation in both theoretical concepts and practical applications, 
                I specialize in transforming raw data into actionable insights and building 
                scalable applications that drive business value.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1osct_0wb96LmeXzQHw-_gNs8FndsfqiY/view?usp=sharing"
                download
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
              <a
                href="shubhamsinghbaura@gmail.com"
                className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}