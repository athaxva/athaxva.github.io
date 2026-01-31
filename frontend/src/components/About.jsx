import React from 'react';
import { profileData, exploringData } from '../data/mock';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Brain, Target, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Passionate about <span className="gradient-text font-medium">AI Security</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {profileData.about}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {profileData.careerDirection}
            </p>

            {/* Interest Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {profileData.interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-4">
            {/* Mission Card */}
            <Card className="glass p-6 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Mission</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building tools that help people distinguish real content from manipulated media, contributing to a more trustworthy digital ecosystem.
                  </p>
                </div>
              </div>
            </Card>

            {/* Focus Card */}
            <Card className="glass p-6 rounded-2xl hover:border-violet-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10">
                  <Brain className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Focus Areas</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Deepfake detection, AI safety research, prompt injection defense, and secure application design.
                  </p>
                </div>
              </div>
            </Card>

            {/* Currently Exploring Card */}
            <Card className="glass p-6 rounded-2xl hover:border-emerald-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10">
                  <Compass className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Currently Exploring</h3>
                  <ul className="space-y-2">
                    {exploringData.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
