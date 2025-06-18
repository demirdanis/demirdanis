import {
  Education,
  Experience,
} from "../components/resume-section/resume-section.types";

import { PersonalInfo } from "../components/hero-section/hero-section.types";
import { Project } from "../components/portfolio-section/portfolio-section.types";
import { Service } from "../components/services-section/services-section.types";
import { Skill } from "../components/about-section/about-section.types";
import { SocialMediaItem } from "../components/hero-section/hero-section.types";
import { Stat } from "../components/hero-section/hero-section.types";

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: string[];
  socialMedia: SocialMediaItem[];
  skills: Skill[];
  services: Service[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  stats: Stat[];
}
