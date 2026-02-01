
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  isFeatured?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  topic: string;
}
