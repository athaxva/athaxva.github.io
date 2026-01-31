import React from 'react';
import { skillsData } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Code2, Cloud, ShieldCheck } from 'lucide-react';

const categoryIcons = {
  "AI & Machine Learning": Brain,
  "App & Backend Development": Code2,
  "Cloud & DevOps": Cloud,
  "Security Focus": ShieldCheck
};

const categoryColors = {
  "AI & Machine Learning": { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  "App & Backend Development": { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  "Cloud & DevOps": { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  "Security Focus": { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Technical <span className="gradient-text font-medium">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A comprehensive toolkit for building secure, intelligent applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => {
            const IconComponent = categoryIcons[category] || Code2;
            const colors = categoryColors[category] || categoryColors["App & Backend Development"];
            
            return (
              <Card
                key={category}
                className={`glass rounded-2xl p-6 hover:${colors.border} transition-colors duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${colors.bg}`}>
                    <IconComponent className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className={`${colors.bg} ${colors.text} border ${colors.border} font-mono text-xs px-3 py-1.5 hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
