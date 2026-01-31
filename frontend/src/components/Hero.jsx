import React from 'react';
import { profileData } from '../data/mock';
import { Button } from './ui/button';
import { ArrowDown, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 animate-fade-in-up">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300">{profileData.field}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fade-in-up animate-delay-100">
          <span className="text-white">{profileData.name.split(' ')[0]}</span>
          <br />
          <span className="gradient-text font-medium">{profileData.name.split(' ')[1]}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-4 animate-fade-in-up animate-delay-200">
          {profileData.tagline}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500 mb-10 animate-fade-in-up animate-delay-300">
          Based in {profileData.location}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-medium hover:from-cyan-400 hover:to-cyan-500 transition-all duration-200 px-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-gray-700 text-gray-300 hover:bg-white/5 hover:border-gray-600 transition-colors duration-200"
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
