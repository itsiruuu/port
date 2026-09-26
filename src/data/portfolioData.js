// =========================================================================
// PORTFOLIO DATA CONFIGURATION
// All personal information, projects, skills, and FAQs can be updated here.
// =========================================================================

import profileImg from '../assets/profile.jpg';
import creativeAgency from "../assets/image8.png";
import gourmetHaven from "../assets/image7.png";
import evenza from "../assets/image6.png";
import ecommerce from "../assets/image5.png";
import tourys from "../assets/image4.png";
import cheffest from "../assets/image1.png";
import coffetto from "../assets/image2.png";
import pumpInsta from "../assets/image3.png";
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
    id: "evenza",
    title: "Evenza",
    category: "Web Apps",
    description:
      "A modern and responsive web application built with React, Vite, and Tailwind CSS, featuring smooth animations and custom interactive components.",
    image: evenza ,
    tags: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://evenza-app.vercel.app/",
    githubUrl: "",
  },
  
  {
    id: "gourmet-haven",
    title: "Gourmet Haven",
    category: "Web Design",
    description:
      "A sleek and elegant front-end website for a luxury dining restaurant, built with modern web standards and Bootstrap for a responsive experience across all devices.",
    image: gourmetHaven ,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://gourmet-haven-restaurant-beta.vercel.app/",
    githubUrl: "",
  },

    {
    id: "e-commerce",
    title: "E-Commerce",
    category: "E-Commerce",
    description:
      "A fast, responsive, and user-friendly E-Commerce frontend platform built with React and Vite, designed to deliver an optimal online shopping experience.",
    image: ecommerce,
    tags: ["React", "Vite", "JavaScript"],
    demoUrl: "https://e-commerce-ten-beta-91.vercel.app/",
    githubUrl: "",
  },
  
    {
    id: "tourys",
    title: "TOURy's Travel Website",
    category: "Web Design",
    description:
      "A premium travel landing page UI template built with Tailwind CSS, highlighting popular tourist destinations such as Bromo and Komodo Island.",
    image: tourys,
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "https://tourys-travel-website.vercel.app/",
    githubUrl: "",
  },
 
  
  {
    id: "cheffest",
    title: "Cheffest Restaurant App",
    category: "Web Apps",
    description:
      "A modern and fully responsive web application for a fast-food restaurant featuring Naan Burgers, tacos, and custom meals, with dynamic menu navigation, category filtering, online ordering, and franchise pages.",
    image: cheffest,
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://cheffest-restaurant-app.vercel.app/",
    githubUrl: "",
  },
  
  {
    id: "pump-insta",
    title: "Pump Insta",
    category: "Web Design",
    description:
      "A responsive and modern Instagram growth agency website built with HTML, Tailwind CSS, and Bootstrap.",
    image: pumpInsta,
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "https://pump-insta-inky.vercel.app/",
    githubUrl: "",
  },
  
  {
    id: "creative-agency",
    title: "Creative Agency Design",
    category: "Web Design",
    description:
      "A clean and modern static web design for a Creative Agency landing page.",
    image: creativeAgency,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://creative-agency-design.vercel.app/",
    githubUrl: "",
    featured: true,
  },

  {
    id: "coffetto",
    title: "Coffetto Coffee",
    category: "Web Design",
    description:
      "A modern and fully responsive coffee website built with HTML and Tailwind CSS, featuring coffee products, history, manufacturing steps, testimonials, and a newsletter section.",
    image: coffetto,
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "https://coffetto-coffee.vercel.app/",
    githubUrl: "",
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
