import { PortfolioData } from "../../types/portfolio-data.types";

export interface NavigationProps {
  data: PortfolioData;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}
