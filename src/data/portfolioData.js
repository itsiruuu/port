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
  linkedinUrl: "https://www.linkedin.com/in/irin-akter-13946543b/",    

  heroEyebrow: "HELLO, I'M",
  heroHeadlinePrefix: "I build interfaces that",
  heroHeadlineAccent: " feel as good as they look.",
  heroBio: "Frontend developer from Dhaka, crafting responsive and interactive web experiences with React, JavaScript, and Tailwind CSS. Always learning, experimenting, and turning ideas into thoughtful digital experiences.",
  
  aboutSubtitle: "Frontend Developer · Dhaka, Bangladesh",
  aboutBio: "I build modern, responsive, and interactive web experiences using React, JavaScript, and Tailwind CSS. I enjoy turning ideas and designs into clean, user-friendly interfaces with a strong focus on detail and performance.I'm continuously improving my frontend skills, exploring new technologies, and building projects that challenge me to grow. I'm currently open to junior frontend roles, internships, and opportunities to collaborate on meaningful digital experiences.",

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
    categoryTitle: "Frontend Development",
    iconName: "Layout",
    description: "Building clean, responsive, and user-friendly interfaces with modern frontend technologies.",
    skillTags: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    id: "styling-frameworks",
    categoryTitle: "Styling & UI",
    iconName: "Sparkles",
    description: "Creating mobile-first layouts with reusable components and modern styling systems.",
    skillTags: ["Tailwind CSS", "Bootstrap","Responsive Design"],
  },
  {
    id: "programming-backend ",
    categoryTitle: "Programming & Backend Basics",
    iconName: "Terminal",
    description: "Building a strong foundation in programming logic and backend development.",
    skillTags: ["Node.js", "C/C++"],
  },
  {
    id: "tools-collaboration",
    categoryTitle: "Tools Control & Version ",
    iconName: "GitBranch",
    description: "Using modern development tools and version control for organized and efficient workflows.",
    skillTags: ["Git ", "GitHub", "VS Code"],
  },
];

// -------------------------------------------------------------------------
// 5. THINGS I'VE BUILT
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
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the project's size, features, and level of customization. A standard frontend website usually takes around 1–4 weeks. I focus on delivering a polished, responsive, and well-structured website without compromising on quality.",
  },
  {
    id: "faq-2",
    question: "How much does a website project cost?",
    answer: "Every project is different, so pricing depends on the number of pages, design complexity, animations, and required features. Once I understand your requirements, I can provide a clear and customized estimate for your project.",
  },
  {
    id: "faq-3",
    question: "Will my website be responsive on all devices?",
    answer: "Absolutely. Every website I build is designed with responsiveness in mind. The layout adapts smoothly to desktop, tablet, and mobile screens, providing a consistent and user-friendly experience across devices.",
  },
  {
    id: "faq-4",
    question: "Do you create custom designs or use templates?",
    answer: "I build websites around the project's specific goals and requirements. Rather than simply relying on ready-made templates, I focus on creating clean, modern layouts with thoughtful interactions and a unique visual experience.",
  },
  {
    id: "faq-5",
    question: "What technologies do you work with?",
    answer: "My frontend stack includes HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and Vite. I also use Git and GitHub to maintain clean, organized, and version-controlled projects.",
  },
  {
    id: "faq-6",
    question: "Do you provide support after the website is completed?",
    answer: "Yes. My support doesn't necessarily end when the website goes live. I can help with frontend bug fixes, small design or content updates, and deployment-related issues to keep your website running smoothly.",
  },
];

// -------------------------------------------------------------------------
// 7. DEVELOPMENT PROCESS
// -------------------------------------------------------------------------
export const processData = [
  {
    step: '01',
    title: 'Understand',
    description: 'Grasp requirements, user needs, and core goals before writing a single line of code.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create clear layouts, thoughtful visual hierarchies, and intuitive component structures.',
    icon: 'palette',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Write clean, modular React components with semantic HTML and utility-first CSS.',
    icon: 'code',
  },
  {
    step: '04',
    title: 'Polish',
    description: 'Refine responsiveness, interactions, accessibility, and visual details to create a smooth experience.',
    icon: 'sparkles',
  },
];
