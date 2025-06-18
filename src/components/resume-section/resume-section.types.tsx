export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  location: string;
  description: string;
}

export interface ResumeSectionProps {
  experience: Experience[];
  education: Education[];
}
