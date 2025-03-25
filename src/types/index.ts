import { LucideIcon } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string[];
  icon: LucideIcon;
  color: string;
  time: string;
}

export interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TechFeature {
  name: string;
  icon: LucideIcon;
  description: string;
}
