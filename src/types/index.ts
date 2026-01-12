export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  cv: string;
  email: string;
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  shortBio: string;
  longBio: string;
  avatarUrl?: string;
  interests: string[];
  socials: SocialLinks;
}

export interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  id?: string;
  logo?: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface PortfolioData {
  profile: UserProfile;
  projects: Project[];
  experience: Job[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
}

