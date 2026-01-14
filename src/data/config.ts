import type { PortfolioData } from "../types";

export const techIcons: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML/CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Ant Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  "Material-UI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  NestJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  ".NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  "ASP.NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  Cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  gRPC: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "CompTIA Security+":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/network/network-original.svg",
};

export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
};

export const getTechIcon = (techName: string): string | null => {
  return techIcons[techName] || null;
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "Mikołaj Migacz",
    title: "Software Engineer",
    location: "Warsaw, Poland",
    shortBio:
      "Dedicated Software Engineer with a passion for software development, continuously improving skills beyond professional commitments.",
    longBio: `Dedicated Software Engineer with a passion for software development. Fell in love with TypeScript (React & Node.js). Eager to contribute innovative solutions. Growing Full Stack skills through modern projects and preparing for CompTIA Security+ to deepen cybersecurity knowledge.`,
    interests: ["Football", "Cybersecurity", "New Technologies", "Traveling"],
    socials: {
      github: "https://github.com/mikolajmigacz",
      linkedin: "https://www.linkedin.com/in/mikolaj-migacz/",
      cv: "https://drive.google.com/file/d/1rHpmxBS0ICz3pprTkFy0E4HHDp2P9TG8/view",
      email: "mig.mikolaj@gmail.com",
    },
  },
  experience: [
    {
      id: "visa",
      company: "Visa Inc.",
      role: "Software Engineer",
      startDate: "April 2025",
      endDate: "Present",
      description:
        "Currently involved in the development of a decision service. Previously designed and implemented a reporting module leveraging AWS cloud services. Regularly responsible for feature development and performance optimization.",
      technologies: ["React", "Node.js", "Go", "AWS", "gRPC"],
      logo: getAssetPath("/logos/visa.webp"),
    },
    {
      id: "ant",
      company: "ANT Solutions Sp. z o.o.",
      role: "Fullstack Developer",
      startDate: "February 2023",
      endDate: "March 2025",
      description:
        "Implemented a real-time production scheduling module to improve operational efficiency. Built a responsive user interface using Ant Design and Redux, ensuring smooth interaction with complex production data.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "gRPC",
        "Redux",
        "Ant Design",
      ],
      logo: getAssetPath("/logos/ant.webp"),
    },
    {
      id: "kryptos",
      company: "Kryptos72 Sp. z o.o.",
      role: "Junior Fullstack Developer",
      startDate: "October 2022",
      endDate: "January 2023",
      description:
        "Created a customer panel with features for order tracking, chat, and invoices. Worked on backend and MongoDB optimizations to reduce response times and improve overall system performance.",
      technologies: ["React", "Node.js", "MongoDB", "REST"],
      logo: getAssetPath("/logos/kryptos.webp"),
    },
    {
      id: "comarch",
      company: "COMARCH S.A",
      role: "Junior .NET Developer",
      startDate: "July 2022",
      endDate: "September 2022",
      description:
        "Optimized the WMS module by improving SQL queries and implementing caching. Developed automated reporting features to reduce manual workload for end-users.",
      technologies: [".NET", "ASP.NET", "SQLite"],
      logo: getAssetPath("/logos/comarch.webp"),
    },
  ],
  projects: [
    {
      id: "jobmatch",
      title: "JobMatch",
      description:
        'A cutting-edge job matching platform built with a Microservices architecture and Microfrontends. Features an AI-powered CV analysis engine (deep learning via Gemini API) to provide candidates with instant, personalized feedback. The UX is designed for seamless interaction, featuring real-time "It\'s a Match!" notifications, smart filters, and a secure, role-based dashboard for both employers and job seekers. Fully type-safe from database to UI.',
      technologies: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "React",
        "AWS",
        "Docker",
        "Microservices",
      ],
      repoUrl: "https://github.com/mikolajmigacz/JobMatch",
    },
  ],
  skills: [
    {
      category: "Advanced",
      items: [
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "AWS",
        "Azure",
        "PostgreSQL",
        "MongoDB",
        "REST",
        "gRPC",
        "Jest",
        "Cypress",
        "Ant Design",
        "Material-UI",
        "HTML/CSS",
      ],
    },
    {
      category: "Intermediate",
      items: [
        "Java",
        "Spring",
        "Go",
        ".NET",
        "ASP.NET",
        "Angular",
        "Dart",
        "Flutter",
        "Tailwind",
        "Firebase",
      ],
    },
    {
      category: "Beginner",
      items: ["Kotlin", "Android"],
    },
  ],
  education: [
    {
      school: "Warsaw University of Technology",
      degree: "Master of Science in Computer Science",
      startDate: "February 2023",
      endDate: "March 2025",
      logo: getAssetPath("/logos/pw.webp"),
    },
    {
      school: "AGH University of Science and Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: "October 2019",
      endDate: "January 2023",
      logo: getAssetPath("/logos/agh.webp"),
    },
  ],
  certifications: [
    {
      name: "AZ-900: Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      id: "179B069D7B6B7A19",
      logo: getAssetPath("/logos/microsoft.webp"),
    },
  ],
  languages: [
    { language: "Polish", level: "Native" },
    { language: "English", level: "B2" },
  ],
};
