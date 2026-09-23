export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  role: string;
  status: string;
}

export type SkillCategory = 'Programming' | 'Web Development' | 'AI & ML' | 'Database & Cloud' | 'Tools & Platforms';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: string;
  experienceYears?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  dateSortOrder: number;
  points: string[];
  skills?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  category: 'Academic' | 'Hackathon' | 'Freelance' | 'Leadership' | 'Arts & Culture';
  period: string;
  dateSortOrder?: number;
  summary: string;
  highlights: string[];
  technologies?: string[];
  clientOrOrg?: string;
  impactMetrics?: string[];
}

export interface EducationItem {
  id: string;
  level: string; // 'Undergraduate' | 'Junior College (Class 12)' | 'High School (Class 10)'
  degree: string;
  institution: string;
  location: string;
  boardOrUniversity: string;
  period: string;
  status: string;
  expectedGraduation?: string;
  courseworkOrTech: string[];
  description: string;
  highlights?: string[];
}
