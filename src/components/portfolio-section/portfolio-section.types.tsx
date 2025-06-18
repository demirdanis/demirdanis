export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string | null;
}

export interface PortfolioSectionProps {
  projects: Project[];
}
