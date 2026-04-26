export interface TroubleShootingItem {
  title: string;
  trouble: string;
  solution: string;
  result: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  period: string;
  techStack: string[];
  role: string;
  overview: string;
  keyFeatures: string[];
  github?: string;
  demo?: string;
  troubleShooting: TroubleShootingItem[];
}
