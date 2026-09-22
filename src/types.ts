/**
 * TypeScript Type Definitions for Prashant Kumar Baranwal Portfolio
 */

export type Theme = 'dark' | 'light';

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  subtext: string;
  icon: string;
  accent: 'blue' | 'emerald' | 'purple' | 'cyan' | 'amber';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'mern' | 'python' | 'frontend' | 'all';
  categoryLabel: string;
  badge: string;
  metric: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture: {
    overview: string;
    highlights: string[];
    techStack: string[];
    metrics: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  colorClass: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  downloadName: string;
  tag: string;
  icon: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  university: string;
  duration: string;
  location: string;
  highlights: string[];
}
