export interface Stat {
  number: string;
  label: string;
}

export interface SocialMediaItem {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "mail";
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  age: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  longBio: string;
  profileImage: string;
}

export interface HeroSectionProps {
  personal: PersonalInfo;
  socialMedia: SocialMediaItem[];
  stats: Stat[];
}
