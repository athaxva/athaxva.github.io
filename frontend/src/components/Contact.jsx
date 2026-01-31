import React, { useState } from 'react';
import { contactData, profileData } from '../data/mock';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, Github, ExternalLink, Send, Copy, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyToClipboard = async (text, field) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const socialLinks = [
    { name: 'Email', value: contactData.email, icon: Mail, href: `mailto:${contactData.email}` },
    { name: 'LinkedIn', value: contactData.linkedin, icon: Linkedin, href: `https://${contactData.linkedin}` },
    { name: 'GitHub', value: contactData.github, icon: Github, href: `https://${contactData.github}` },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/10 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Let's <span className="gradient-text font-medium">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interested in collaboration or have questions about AI security? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-medium text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-medium hover:from-cyan-400 hover:to-cyan-500 transition-all duration-200"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <Card
                key={link.name}
                className="glass rounded-xl p-5 hover:border-cyan-500/30 transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-200">
                      <link.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{link.name}</p>
                      <p className="text-white font-mono text-sm">{link.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(link.value, link.name)}
                      className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {copiedField === link.name ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* ORCID */}
            <Card className="glass rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.684 3.965h1.369v9.628H6.685V8.343zm5.999 0h3.693c3.268 0 4.927 2.168 4.927 4.814 0 2.646-1.659 4.814-4.927 4.814h-3.693V8.343zm1.369 1.262v7.103h2.324c2.017 0 3.558-1.262 3.558-3.552 0-2.289-1.541-3.551-3.558-3.551h-2.324z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ORCID</p>
                  <p className="text-white font-mono text-sm">{profileData.orcid}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
