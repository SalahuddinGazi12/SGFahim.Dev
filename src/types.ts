// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  webGLUrl?: string;
}

// Experience types
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  current?: boolean;
}

// Education types
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  description?: string;
  startYear: string;
  endYear: string;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  level: number; // 1-10
  icon?: string;
}

// Social link types
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// Video types
export interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  platform: 'youtube' | 'linkedin';
  thumbnailUrl?: string;
}