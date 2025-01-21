import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech in Computer Science(AI ML)',
    period: '2021 - 2025',
    cgpa: '8.2',
    achievements: [
      'S Grede in 6 Subjects',
      'Member of Technical Club'
    ]
  }
];

const certifications = [
  {
    name: 'Google Professional Data Analytics Certificate',
    issuer: 'Coursera',
    date: 'Jan 2025',
    logo: 'https://images.unsplash.com/photo-1678483790096-26cc771a9dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Applied machine Learning',
    issuer: 'Coursera',
    date: 'April 2023',
    logo: 'data:image/png;base64,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'
  }
] as const;

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Education & Certifications</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Building a strong foundation through academic excellence and professional development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.institution} 
                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.institution}</h4>
                <p className="text-indigo-600 font-medium mb-2">{edu.degree}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{edu.period}</span>
                  <span className="mx-2">•</span>
                  <span>CGPA: {edu.cgpa}</span>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="h-6 w-6 text-indigo-600 mr-2" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} 
                     className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-indigo-600">{cert.issuer}</p>
                      <p className="text-gray-600 mt-1">Completed: {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}