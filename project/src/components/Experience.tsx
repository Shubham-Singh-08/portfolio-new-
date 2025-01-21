import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Oasis Infobyte',
    position: 'Data Science Intern',
    period: 'Nov 2024 - Present',
    achievements: [
      'Engaged in hands-on applications of data science concepts to enhance practical knowledge and skills',
      'Participated in orientation sessions focused on foundational data science techniques and tools',
      'Developed a deeper understanding of data science principles through project-based learning',
      'Demonstrated the ability to apply theoretical knowledge to real-world scenarios'
    ]
  },
  {
    company: 'Cognifyz Technologies',
    position: 'Data Analyst Intern',
    period: 'Oct 2024 - Dec 2024',
    achievements: [
      'Utilized Python programming and data manipulation skills to extract valuable insights from complex datasets',
      'Cleaned and preprocessed data for analysis, ensuring accuracy and reliability',
      'Conducted statistical analyses to identify trends, patterns, and key metrics, improving decision-making processes by 20%',
      'Created visual representations (graphs, charts, dashboards) to effectively communicate findings and results'
    ]
  }
] as const;

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Building real-world experience through challenging roles and projects
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.company} 
                 className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-indigo-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    </div>
                    <div className="flex items-center text-indigo-600 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <ChevronRight className="h-4 w-4 mx-2" />
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-3" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}