import React from 'react';
import { Trophy, Code, Award, Target } from 'lucide-react';

const achievements = [
  {
    category: 'Coding Platforms',
    icon: <Code className="h-6 w-6" />,
    items: [
      'Solved 200+ problems on LeetCode',
      'Solved 250+ problems on GeekForGeeks',
      'Contributed to open-source projects',
      'Achived 100 Days of Coding Badge on GFG and Leetcode'
    ]
  },
  {
    category: 'Competitions',
    icon: <Trophy className="h-6 w-6" />,
    items: [
      'Winner - Tresure Hunt 2k23',
      'Runner-up - G.V Challenge 2024',
      'Runner up District level Cricket Competition',
      'First Prize - TechDEV fest'
    ]
  },
  {
    category: 'Leadership',
    icon: <Target className="h-6 w-6" />,
    items: [
      'Technical Club Lead',
      'Organized Workshop Series',
      'Student Council Representative',
      'Mentored Junior Students'
    ]
  }
] as const;

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Achievements</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Recognition and accomplishments throughout my academic and professional journey
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.category} 
                 className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{achievement.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {achievement.items.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 mr-3" />
                    <span className="group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}