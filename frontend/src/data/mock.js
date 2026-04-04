// Mock data for Atharva Pathak's Portfolio

export const profileData = {
  name: "Atharva Pathak",
  location: "Mumbai, India",
  field: "Information Technology Student",
  tagline: "Building Secure AI Systems for a Trustworthy Digital Future",

  interests: [
    "Artificial Intelligence",
    "Deepfake Detection",
    "AI Security",
    "Cybersecurity Awareness"
  ],

  about: `I am a technology student passionate about Artificial Intelligence security and trust in digital media. I build practical AI tools focused on detecting manipulated content, improving online authenticity, and researching how AI systems can be protected from misuse. My work lies at the intersection of AI, security, and real-world problem solving.`,

  careerDirection:
    "I'm deeply interested in building secure, trustworthy AI systems and contributing to technology that helps people distinguish real content from manipulated media.",

  orcid: "0009-0004-7418-5834"
};



/* ================= PROJECTS ================= */

export const projectsData = [

  {
    id: 1,
    title: "TRUTHLENS.AI",
    description: "An AI-powered deepfake detection Android application.",
    purpose:
      "Users upload or capture images, and the AI model determines whether the image is real or manipulated. Designed to help fight misinformation and AI-generated fraud.",
    techStack: [
      "Flutter",
      "FastAPI",
      "TensorFlow Lite",
      "PostgreSQL",
      "Firebase Authentication",
      "Docker",
      "Google Cloud",
      "Vertex AI"
    ],
    featured: true,
    icon: "Shield",

    // ✅ THIS FIXES YOUR BUTTON
    link: "/projects/truthlensaiapk/"
  },

  {
    id: 2,
    title: "Hidden Prompt Injection Detector",
    description: "A browser-based security research project.",
    purpose:
      "Detects hidden malicious prompt injections on webpages to protect AI systems from manipulation. Focus on AI security and prompt safety research.",
    techStack: [
      "JavaScript",
      "Browser APIs",
      "AI Security Research"
    ],
    featured: true,
    icon: "Search",

    link: "https://github.com/athaxva/hidden-prompt-injection-detector"
  },

  {
    id: 3,
    title: "FormSense AI",
    description: "An Android app concept for intelligent form filling.",
    purpose:
      "Reads Google Forms, extracts questions using AI, and suggests intelligent answers. Focus on AI-powered automation and intelligent question understanding.",
    techStack: [
      "Flutter",
      "AI/ML",
      "Natural Language Processing"
    ],
    featured: false,
    icon: "FileText",

    link: "https://github.com/athaxva"
  }

];



/* ================= SKILLS ================= */

export const skillsData = {

  "AI & Machine Learning": [
    "TensorFlow Lite",
    "Deepfake Detection Models",
    "Computer Vision Fundamentals"
  ],

  "App & Backend Development": [
    "Flutter",
    "FastAPI",
    "REST APIs",
    "Firebase Authentication"
  ],

  "Cloud & DevOps": [
    "Google Cloud Platform",
    "Docker",
    "PostgreSQL"
  ],

  "Security Focus": [
    "AI Safety Concepts",
    "Prompt Injection Defense",
    "Secure AI Application Design"
  ]

};



/* ================= CURRENT RESEARCH ================= */

export const exploringData = [
  "Advanced deepfake detection techniques",
  "AI model robustness",
  "Security risks in AI systems"
];



/* ================= CONTACT ================= */

export const contactData = {
  email: "atharva@atharvapathak.in",
  linkedin: "linkedin.com/in/atharvappathak",
  github: "github.com/athaxva",
  orcid: "0009-0004-7418-5834"
};



/* ================= NAVIGATION ================= */

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },

  // ✅ YOUR BLOG LINK
  { name: "Blog", href: "https://blog.atharvapathak.in/" }
];
