export interface PersonalInfo {
  name: string;
}

export interface SocialMediaItem {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "mail";
}

export interface FooterProps {
  personal: PersonalInfo;
  socialMedia: SocialMediaItem[];
}
