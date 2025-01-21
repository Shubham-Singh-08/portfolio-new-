import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Gesture Detection System',
    description: 'Real-time hand gesture recognition system using computer vision and deep learning',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    github: 'https://github.com/Shubham-Singh-08/HAND-GESTURE-DETECTION-AND-RECOGNITION-',
    image: './hand.webp'
  },
  {
    title: 'Face Detection',
    description: 'Advanced face detection and recognition system with emotion analysis',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/Shubham-Singh-08/Facial-recognition-using-ML-',
    image: './face.webp'
  }
] as const;

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Showcasing some of my recent work in machine learning and software development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} 
                 className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center group-hover:text-indigo-600 transition-colors">
                  {project.title}
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} 
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}