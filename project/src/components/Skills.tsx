import React from 'react';
import { Code2, Database, PenTool as Tool } from 'lucide-react';

const skills = {
  'Programming Languages': {
    icon: <Code2 className="h-6 w-6" />,
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'R']
  },
  'Frameworks & Libraries': {
    icon: <Database className="h-6 w-6" />,
    items: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy']
  },
  'Developer Tools & Databases': {
    icon: <Tool className="h-6 w-6" />,
    items: ['Git', 'MongoDB', 'PostgreSQL', 'Azure']
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit that enables me to tackle complex problems and deliver robust solutions
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div key={category} 
                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-3">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}