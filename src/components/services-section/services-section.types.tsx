export interface Service {
  icon: "users" | "code" | "target" | "briefcase";
  title: string;
  description: string;
}

export interface ServicesSectionProps {
  services: Service[];
}
