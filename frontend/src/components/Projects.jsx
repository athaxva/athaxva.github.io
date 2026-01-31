import React from 'react';
import { projectsData } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Search, FileText, ExternalLink, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Search: Search,
  FileText: FileText
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Building for a <span className="gradient-text font-medium">Secure Future</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Practical AI tools focused on detecting manipulated content, improving online authenticity, and AI security research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Shield;
            const isFeatured = project.featured;
            
            return (
              <Card
                key={project.id}
                className={`group glass rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 ${
                  isFeatured && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${isFeatured ? 'bg-cyan-500/10' : 'bg-violet-500/10'}`}>
                      <IconComponent className={`w-6 h-6 ${isFeatured ? 'text-cyan-400' : 'text-violet-400'}`} />
                    </div>
                    {isFeatured && (
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">
                    {project.purpose}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-white/5 text-gray-400 border-white/10 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-white/5 text-gray-500 border-white/10"
                      >
                        +{project.techStack.length - 5} more
                      </Badge>
                    )}
                  </div>

                  {/* Link */}
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200 group/link">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
