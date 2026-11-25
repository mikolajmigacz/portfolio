import type { PortfolioData } from "../types";

export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
};

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
  Neo4j:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  AWS: getAssetPath("/logos/aws.svg"),
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
};

export const getTechIcon = (techName: string): string | null => {
  return techIcons[techName] || null;
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "Mikołaj Migacz",
    title: "Full Stack Engineer",
    location: "Warsaw, Poland",
    shortBio:
      "Full Stack Engineer in Warsaw. I build TypeScript systems with Node.js, React and AWS, and work with distributed teams across Poland and the US.",
    longBio:
      "I'm a Full Stack Engineer based in Warsaw. Most of my work sits in TypeScript (Node.js and React), with AWS in the mix for production systems that need to stay up. I like owning a feature from design through to something that actually ships, and I'm used to working asynchronously with teams in Poland and the US. Lately I also help teammates get real use out of AI coding tools without treating them as magic.",
    interests: ["Football", "Traveling"],
    socials: {
      github: "https://github.com/mikolajmigacz",
      linkedin: "https://www.linkedin.com/in/mikolaj-migacz/",
      cv: "https://drive.google.com/file/d/1mHc7J7Q7iwBCv23MQXVr60PBHZg8G4ao/view?usp=sharing",
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
      summary:
        "Real-time payment decisioning in a high-availability environment.",
      highlights: [
        "Own backend architecture end to end: microservices and gRPC/REST APIs with Node.js, Go and AWS, plus React on the product side when needed.",
        "Built a multi-tenant data module that stores tenant data in Neo4j or PostgreSQL, and ran migrations covering millions of records.",
        "Added caching on two high-traffic endpoints that cut unnecessary DB calls by about 30%.",
        "Shipped a reporting module on AWS.",
        "Help the team adopt Copilot, Claude and Cursor in a practical way.",
      ],
      technologies: [
        "Node.js",
        "React",
        "Go",
        "AWS",
        "gRPC",
        "PostgreSQL",
        "Neo4j",
      ],
      logo: getAssetPath("/logos/visa.webp"),
    },
    {
      id: "ant",
      company: "ANT Solutions",
      role: "Full Stack Software Engineer (Remote)",
      startDate: "February 2023",
      endDate: "March 2025",
      summary:
        "Real-time production scheduling used daily on the shop floor.",
      highlights: [
        "Architected and built a scheduling system used daily by about 15 operators (React, Redux, Node.js, PostgreSQL and gRPC).",
        "Cut manual scheduling from roughly three hours to under one hour per shift.",
        "Owned features end to end across REST and gRPC services.",
        "Raised test coverage from about 20% to 65% as part of a code quality push.",
        "Worked in an agile team with Docker-based CI/CD.",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "gRPC",
        "Redux",
        "Ant Design",
        "Docker",
      ],
      logo: getAssetPath("/logos/ant.webp"),
    },
    {
      id: "kryptos",
      company: "Kryptos72",
      role: "Junior Full Stack Developer",
      startDate: "October 2022",
      endDate: "January 2023",
      summary:
        "Customer portal with tracking, chat and invoicing for business clients.",
      highlights: [
        "Built a customer portal with order tracking, live chat and invoicing for around 30 business clients.",
        "Stack: React, Node.js, MongoDB and REST.",
        "Tuned MongoDB queries and backend logic so key endpoints went from roughly 600ms to about 150ms.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "REST"],
      logo: getAssetPath("/logos/kryptos.webp"),
    },
    {
      id: "comarch",
      company: "Comarch S.A.",
      role: "Junior .NET Developer",
      startDate: "July 2022",
      endDate: "September 2022",
      summary: "WMS performance work and automated reporting in .NET.",
      highlights: [
        "Improved a WMS module through SQL tuning and caching, bringing report generation down from about 45 seconds to 10.",
        "Built an automated reporting module in ASP.NET that replaced a manual process taking roughly two to three hours a day.",
      ],
      technologies: [".NET", "ASP.NET", "SQLite"],
      logo: getAssetPath("/logos/comarch.webp"),
    },
  ],
  projects: [
    {
      id: "jobmatch",
      title: "JobMatch",
      summary: "Full-stack job matching platform with microservices and AI CV analysis.",
      status: "In development",
      highlights: [
        "Seven NestJS/Express services behind an API Gateway, with Webpack Module Federation on the frontend.",
        "End-to-end type safety through tRPC and shared Zod schemas.",
        "Event-driven notifications on AWS (SQS, DynamoDB, S3), with LocalStack for local work.",
        "Google Gemini for CV analysis.",
        "JWT auth with RBAC; Docker and GitHub Actions for CI/CD.",
      ],
      technologies: [
        "TypeScript",
        "NestJS",
        "React",
        "AWS",
        "Docker",
        "tRPC",
        "gRPC",
      ],
      repoUrl: "https://github.com/mikolajmigacz/JobMatch",
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "TypeScript",
        "JavaScript",
        "Node.js",
        "React",
        "Redux",
        "NestJS",
        "Go",
        ".NET",
        "ASP.NET",
      ],
    },
    {
      category: "Backend & Architecture",
      items: ["Microservices", "gRPC", "REST", "System Design"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "Git", "Azure"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "Neo4j", "MongoDB"],
    },
    {
      category: "Testing",
      items: ["Jest", "Cypress"],
    },
    {
      category: "AI Tools",
      items: ["GitHub Copilot", "Cursor", "Claude"],
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
    {
      language: "Polish",
      level: "Native",
      flag: "https://flagcdn.com/w80/pl.png",
    },
    {
      language: "English",
      level: "Professional Working Proficiency",
      flag: "https://flagcdn.com/w80/gb.png",
    },
  ],
};
