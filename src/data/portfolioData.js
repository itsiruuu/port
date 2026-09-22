// =========================================================================
// PORTFOLIO DATA CONFIGURATION
// All personal information, projects, skills, and FAQs can be updated here.
// =========================================================================

import profileImg from '../assets/profile.jpg';
import showcase1Img from '../assets/projects/showcase-1.png';
import showcase2Img from '../assets/projects/showcase-2.png';
import showcase3Img from '../assets/projects/showcase-3.png';

// -------------------------------------------------------------------------
// 1. PERSONAL INFORMATION
// Edit your name, titles, bio, and social media URLs below.
// -------------------------------------------------------------------------
export const personalInfo = {
  name: " Irin ",
  brandLogo: "Irin Akter",
  role: "Frontend Developer · UI/UX Enthusiast",
  location: "Dhaka , Bangladesh",
  email: "irinakter2926@gmail.com",
  phone: "+880 1763548215",
  profileImage: profileImg,
  heroEyebrow: "HELLO, INTERNET. I'M",
  heroHeadlinePrefix: "I build websites that are\nfast, modern, and ",
  heroHeadlineAccent: "built to perform.",
  heroBio: "I'm a Web Developer focused on creating responsive, high-performance websites that combine clean code, thoughtful interactions, and seamless user experiences.",
  aboutBio: "I specialize in full-stack architecture, frontend perfection, and lightning-fast web applications. Bridging design fidelity with robust engineering, I build digital products with clean type safety, optimized assets, and modular components that scale effortlessly. Whether starting from an empty repository or modernizing an existing legacy platform, I prioritize velocity, reliability, and memorable interaction design.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    email: "mailto:irinakter2926@gmail.com",
  },
};

// -------------------------------------------------------------------------
// 2. TECHNOLOGY STRIP (Icons displayed below Hero buttons)
// -------------------------------------------------------------------------
export const techStrip = [
  { name: "HTML5", category: "Markup", color: "#E34F26" },
  { name: "CSS3", category: "Styling", color: "#1572B6" },
  { name: "JavaScript", category: "Language", color: "#F7DF1E" },
  { name: "React", category: "Framework", color: "#61DAFB" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "Tailwind CSS", category: "Styling", color: "#06B6D4" },
  { name: "Git", category: "VCS", color: "#F05032" },
  { name: "GitHub", category: "Collaboration", color: "#FFFFFF" },
  { name: "Figma", category: "UI/UX", color: "#F24E1E" },
  { name: "Node.js", category: "Runtime", color: "#339933" },
  { name: "VS Code", category: "Editor", color: "#007ACC" },
  { name: "Webflow", category: "CMS", color: "#4353FF" },
];

// -------------------------------------------------------------------------
// 3. CORE TOOLS (Displayed beneath Skill Cards)
// -------------------------------------------------------------------------
export const coreToolsList = [
  { name: "Figma", category: "Design System" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "CSS Utility" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "DevOps" },
  { name: "VS Code", category: "Code Editor" },
  { name: "Next.js", category: "Full-Stack" },
];

// -------------------------------------------------------------------------
// 4. SKILLS & EXPERTISE (6 Cards with Circular Progress Indicators)
// -------------------------------------------------------------------------
export const skills = [
  {
    id: "ui-ux",
    categoryBadge: "FIGMA PROFESSIONAL",
    title: "UI/UX Design",
    percentage: 95,
    expertiseLevel: "Expert",
    description: "Creating scalable design systems, wireframes, and high-fidelity prototypes that establish seamless and enjoyable user interactions.",
    iconName: "Figma",
  },
  {
    id: "react-next",
    categoryBadge: "FRONTEND ARCHITECT",
    title: "React & Next.js",
    percentage: 90,
    expertiseLevel: "Advanced",
    description: "Building high-performance, single-page web applications with reactive data flow, server-side rendering, and atomic component architecture.",
    iconName: "React",
  },
  {
    id: "modern-css",
    categoryBadge: "SEMANTIC & RESPONSIVE",
    title: "Modern CSS & HTML",
    percentage: 95,
    expertiseLevel: "Expert",
    description: "Authoring pixel-perfect layouts using modern Grid, Flexbox, Tailwind, and post-processors with absolute compliance to W3C standards.",
    iconName: "Layout",
  },
  {
    id: "javascript",
    categoryBadge: "CLEAN SCRIPTING",
    title: "JavaScript",
    percentage: 90,
    expertiseLevel: "Advanced",
    description: "Writing pristine, maintainable ES6+ code to handle state mutations, API integrations, and sophisticated DOM interactions asynchronously.",
    iconName: "Terminal",
  },
  {
    id: "client-systems",
    categoryBadge: "CLIENT-FIRST SYSTEMS",
    title: "Git & Development",
    percentage: 85,
    expertiseLevel: "Proficient",
    description: "Developing bespoke, lightweight architectures, modern bundling workflows, and structured version control that empower teams to scale with confidence.",
    iconName: "GitBranch",
  },
  {
    id: "creative-direction",
    categoryBadge: "CREATIVE DIRECTION",
    title: "Performance & Brand",
    percentage: 80,
    expertiseLevel: "Proficient",
    description: "Shaping distinct digital personas through customized typography scale design, color theory, asset production, and uniform brand guidelines.",
    iconName: "Sparkles",
  },
];

// -------------------------------------------------------------------------
// 5. THREE IMAGE SHOWCASE (Sequential Visual Tour using Uploaded Assets)
// -------------------------------------------------------------------------
export const threeImageShowcase = [
  {
    id: "showcase-01",
    projectNumber: "PROJECT 01",
    title: "High-Impact Multi-Brand Media & Storefront Portal",
    category: "Full-Stack Media & Interactive Commerce",
    description: "A comprehensive digital ecosystem featuring AI stream-to-clip engines, dynamic editorial storytelling, and responsive high-conversion storefronts.",
    image: showcase1Img,
    tags: ["React", "JavaScript", "Tailwind CSS", "Motion API"],
    liveUrl: "#projects",
    githubUrl: "https://github.com",
    alignment: "center",
  },
  {
    id: "showcase-02",
    projectNumber: "PROJECT 02",
    title: "Modular Capabilities & Enterprise Application Suite",
    category: "Design Systems & High-Velocity UI",
    description: "High-fidelity component systems engineered with atomic scalability, real-time telemetry metrics, and fluid micro-interactions.",
    image: showcase2Img,
    tags: ["Next.js", "Design Tokens", "Analytics", "PostCSS"],
    liveUrl: "#skills",
    githubUrl: "https://github.com",
    alignment: "right",
  },
  {
    id: "showcase-03",
    projectNumber: "PROJECT 03",
    title: "Conversion Architecture & Client Advisory Suite",
    category: "Design Systems & Technical Advisory",
    description: "Sleek client interaction flows, responsive layout systems, and automated quotation funnels wrapped in an ultra-minimal dark aesthetic.",
    image: showcase3Img,
    tags: ["Performance", "Accessibility", "A/B Testing", "SEO"],
    liveUrl: "#faq",
    githubUrl: "https://github.com",
    alignment: "left",
  },
];

// -------------------------------------------------------------------------
// 6. THINGS I'VE BUILT (6 Responsive Project Cards)
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
// 7. FREQUENTLY ASKED QUESTIONS (Accordion Items)
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
