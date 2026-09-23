// =========================================================================
// PORTFOLIO DATA CONFIGURATION
// All personal information, projects, skills, and FAQs can be updated here.
// =========================================================================

import profileImg from '../assets/profile.jpg';

// -------------------------------------------------------------------------
// 1. PERSONAL INFORMATION
// -------------------------------------------------------------------------
export const personalInfo = {
  name: "Irin Akter",
  brandLogo: "Irin Akter",
  role: "Frontend Developer",
  location: "Dhaka, Bangladesh",
  email: "irinakter2926@gmail.com",
  phone: "+880 1763548215",
  profileImage: profileImg,

  // Placeholder URLs (will render UI only when non-empty)
  resumeUrl: "",       // I will fill this later
  ogImageUrl: "",      // I will fill this later
  linkedinUrl: "",     // I will fill this later

  heroEyebrow: "HELLO, INTERNET. I'M",
  heroHeadlinePrefix: "I build clean, responsive\nweb interfaces ",
  heroHeadlineAccent: "with React.",
  heroBio: "I'm a frontend developer from Dhaka who builds responsive websites with React, Tailwind CSS and JavaScript. Open to junior frontend roles and internships.",
  
  aboutSubtitle: "Frontend Developer · Dhaka, Bangladesh",
  aboutBio: "I build responsive, clean web interfaces with React and Tailwind CSS. I'm focused on writing clean, readable code and constantly improving my JavaScript and Node.js fundamentals. Looking for a junior frontend role or internship where I can contribute, learn, and grow as part of a development team.",

  socialLinks: {
    github: "https://github.com/itsiruuu",
    linkedin: "", // Leave empty until filled, only renders if non-empty
    email: "mailto:irinakter2926@gmail.com",
  },
};

// -------------------------------------------------------------------------
// 2. TECHNOLOGY STRIP (Icons displayed below Hero buttons)
// Kept only HTML, CSS, JavaScript, React, Tailwind, Git, VS Code, Node.js, Bootstrap
// -------------------------------------------------------------------------
export const techStrip = [
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "JavaScript", category: "Language", color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Styling", color: "#06B6D4" },
  { name: "HTML5", category: "Markup", color: "#E34F26" },
  { name: "CSS3", category: "Styling", color: "#1572B6" },
  { name: "Bootstrap", category: "Styling", color: "#7952B3" },
  { name: "Node.js", category: "Runtime", color: "#339933" },
  { name: "Git", category: "VCS", color: "#F05032" },
  { name: "GitHub", category: "Collaboration", color: "#FFFFFF" },
  { name: "VS Code", category: "Editor", color: "#007ACC" },
];

// -------------------------------------------------------------------------
// 3. CORE TOOLS (Displayed beneath Skills Cards)
// Kept only tools from the skills list plus VS Code
// -------------------------------------------------------------------------
export const coreToolsList = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "DevOps" },
  { name: "VS Code", category: "Code Editor" },
];

// -------------------------------------------------------------------------
// 4. SKILLS & EXPERTISE
// Grouped by category, tags with honest 1-line description. No percentages.
// Allowed skills only: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Node.js, C/C++, Git & GitHub
// -------------------------------------------------------------------------
export const skills = [
  {
    id: "frontend-core",
    categoryTitle: "Frontend Core",
    iconName: "Layout",
    description: "Building responsive, modern, and accessible user interfaces from scratch.",
    skillTags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "styling-frameworks",
    categoryTitle: "Styling & Frameworks",
    iconName: "Sparkles",
    description: "Creating mobile-first responsive layouts with clean utility and component systems.",
    skillTags: ["Tailwind CSS", "Bootstrap"],
  },
  {
    id: "programming-backend",
    categoryTitle: "Programming & Backend",
    iconName: "Terminal",
    description: "Writing solid programmatic logic and lightweight server scripts.",
    skillTags: ["Node.js", "C/C++"],
  },
  {
    id: "tools-collaboration",
    categoryTitle: "Version Control & Tools",
    iconName: "GitBranch",
    description: "Collaborating with structured commits, version control, and modern editors.",
    skillTags: ["Git & GitHub", "VS Code"],
  },
];

// -------------------------------------------------------------------------
// 5. THINGS I'VE BUILT (6 Responsive Project Cards - UNTOUCHED)
// -------------------------------------------------------------------------
export const gridProjects = [
  {
    id: "pokemon-vault",
    title: "Pokémon Card Ecommerce Ecosystem Platform",
    category: "E-Commerce / Trading",
    description: "An advanced collectibles trading exchange with live inventory telemetry, rarity tiering, and instantaneous instant-checkout flows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["React", "JavaScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com/demo/pokemon",
    githubUrl: "https://github.com/example/pokemon-vault",
    featured: true,
  },
  {
    id: "epicurean-table",
    title: "Where Every Meal Feels Like Home",
    category: "Culinary & Dining",
    description: "An experiential gastronomical website featuring bespoke table bookings, interactive chef degustations, and fluid viewport transitions.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "Micro-animations"],
    demoUrl: "https://example.com/demo/dining",
    githubUrl: "https://github.com/example/epicurean-table",
  },
  {
    id: "stream-viral-clips",
    title: "Turn Streams into Viral Clips Instantly",
    category: "AI SaaS Platform",
    description: "Automated streaming video synthesis platform featuring real-time audio peak tracking, AI captioning, and cloud rendering queues.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    tags: ["React", "WebAudio API", "Node.js", "Tailwind"],
    demoUrl: "https://example.com/demo/streamclips",
    githubUrl: "https://github.com/example/streamclips",
  },
  {
    id: "creative-studio-hub",
    title: "Motion Studio & Video Synthesizer",
    category: "Content Production",
    description: "Browser-native video editing workstation with multi-track timeline sequencing, keyframe transitions, and hardware-accelerated exports.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tags: ["JavaScript", "Canvas API", "WebGL", "Tailwind"],
    demoUrl: "https://example.com/demo/motion-studio",
    githubUrl: "https://github.com/example/motion-studio",
  },
  {
    id: "kinetic-overshirt",
    title: "KINETIC Luxury Streetwear Storefront",
    category: "Luxury Fashion",
    description: "High-fashion minimalist apparel storefront with 3D product viewports, dynamic fabric zoom inspection, and currency switching.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    tags: ["React", "Tailwind CSS", "Shopify API"],
    demoUrl: "https://example.com/demo/kinetic",
    githubUrl: "https://github.com/example/kinetic-apparel",
  },
  {
    id: "enterprise-metrics",
    title: "Fintech Core Analytics & Telemetry Hub",
    category: "SaaS Dashboard",
    description: "Real-time enterprise metrics monitor with custom time-series charting, latency audits, and automated incident alert thresholds.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "JavaScript", "Tailwind"],
    demoUrl: "https://example.com/demo/analytics",
    githubUrl: "https://github.com/example/analytics-hub",
  },
];

// -------------------------------------------------------------------------
// 6. FREQUENTLY ASKED QUESTIONS (Accordion Items - UNTOUCHED)
// -------------------------------------------------------------------------
export const faqs = [
  {
    id: "faq-1",
    question: "What is your typical project timeline?",
    answer: "Most custom website projects take between 4 to 8 weeks from start to launch. This timeline includes planning, wireframing, high-fidelity UI design, and development. We value quality and clean execution, ensuring every stage receives thorough review.",
  },
  {
    id: "faq-2",
    question: "How much does a custom web design and development project cost?",
    answer: "Every project is scoped individually based on complexity, feature set, custom animations, and integrations. Typically, standard developer portfolios and marketing sites range between $2,500 and $6,000, while complex web applications are quoted on a milestone basis.",
  },
  {
    id: "faq-3",
    question: "Will I be able to update content on my website easily?",
    answer: "Yes, absolutely. The codebase is organized with clear, modular data files so you can update text, projects, and personal details in one place. Alternatively, headless CMS integration (such as Sanity, Contentful, or Strapi) can be plugged in seamlessly.",
  },
  {
    id: "faq-4",
    question: "Do you build custom designs or use pre-made templates?",
    answer: "Every single build is crafted 100% custom from scratch. No cookie-cutter templates or bloated page builders. This ensures your brand identity stands out with bespoke micro-interactions, clean semantic HTML, and lightning-fast load times.",
  },
  {
    id: "faq-5",
    question: "What technologies do you use for development?",
    answer: "My primary stack revolves around modern React, Next.js, JavaScript, and Tailwind CSS. For animation and interactions, I employ native CSS transforms and lightweight motion libraries. Everything is bundled with Vite or Turbopack for optimal performance.",
  },
  {
    id: "faq-6",
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes. All delivered projects come with 30 days of complimentary post-launch bug fixing, optimization, and walkthrough documentation. Ongoing retainer maintenance packages are also available for continuous feature development and updates.",
  },
];
