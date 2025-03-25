import { 
  ClipboardList, Code, Brain, Target, 
  Users, Trophy, Atom, Sparkles, Lock 
} from "lucide-react";
import { TimelineEvent, Testimonial, TeamMember, TechFeature } from "../types";

export const EVENT_DATE = "April 05, 2025 00:00:00";
export const EVENT_LOCATION = "Rabat, Morocco";

export const timelineEvents: TimelineEvent[] = [
  {
    date: "April 5th, 2025",
    title: "Phase 1: Opening Ceremony & Kickoff",
    description: [
      "Welcome address and event overview",
      "Team formation and registration",
      "Revealing the theme ",
      "Technical resources distribution",
    ],
    icon: ClipboardList,
    color: "from-[#1E3A8A]/20 to-[#93C5FD]/20",
    time: "09:00 AM",
  },
  {
    date: "April 5th, 2025",
    title: "Phase 2: Development Sprint",
    description: [
      "Intensive coding and development",
      "Mentorship sessions",
      "Technical workshops",
      "Progress check-ins",
    ],
    icon: Code,
    color: "from-[#1E3A8A]/20 to-[#93C5FD]/30",
    time: "11:00 AM",
  },
  {
    date: "April 5th, 2025",
    title: "Phase 3: Expert Sessions",
    description: ["AI/ML masterclass", "Industry expert talks", "Technical guidance", "Networking opportunities"],
    icon: Brain,
    color: "from-[#010084]/30 to-[#C4E2ED]/20",
    time: "03:00 PM",
  },
  {
    date: "April 6th, 2025",
    title: "Phase 4: Project Refinement",
    description: ["Code refinement", "Documentation completion", "Presentation preparation", "Final mentorship"],
    icon: Target,
    color: "from-[#010084]/20 to-[#C4E2ED]/30",
    time: "09:00 AM",
  },
  {
    date: "April 6th, 2025",
    title: "Phase 5: Final Presentations",
    description: ["Project demonstrations", "Technical Q&A sessions", "Jury evaluation", "Community showcase"],
    icon: Users,
    color: "from-[#C4E2ED]/20 to-[#010084]/30",
    time: "02:00 PM",
  },
  {
    date: "April 6th, 2025",
    title: "Phase 6: Awards Ceremony",
    description: ["Winner announcements", "Prize distribution", "Networking session", "Closing ceremony"],
    icon: Trophy,
    color: "from-[#C4E2ED]/30 to-[#010084]/20",
    time: "05:00 PM",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Kamiya OUDGHIRI",
    text: "Thank you to all the trainers and participants for this exciting training day on AI. Can't wait to apply all this new knowledge in my daily work.",
    stars: 5,
  },
  {
    name: "Ahmed REHANE",
    text: "A big thank you to the entire CODE-ESI team for their professionalism and the quality of the content shared. I attended a Masterclass on advanced technology, and it's safe to say that it was well worth getting up on a Saturday to attend. Highly recommended.",
    stars: 5,
  },
  {
    name: "Hassan NAITALI",
    text: "CODE-ESI delivered an exceptional masterclass last month! Their expertise and engaging teaching style made complex concepts easily understandable. Grateful for the valuable insights gained—a truly enriching experience!",
    stars: 5,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Morad EL MAZYANI",
    role: "Tech entrepreneur and digital expert with 16+ years of experience in Blockchain, Generative AI, and UX design. Collaborated with multinational organizations and government entities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Youssef ELYAMANI",
    role: "Technical Director at CODE-ESI with 16+ years in digital transformation. Simplifies AI for large organizations as an entrepreneur, trainer, and coach.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Meryem NAIRI",
    role: "Software Engineer, AI Developer at Crafters Lab, and Trainer at AIcorner. Combines software engineering and advanced AI to craft innovative solutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
];

export const techFeatures: TechFeature[] = [
  {
    name: "Advanced Tech",
    icon: Atom,
    description: "Cutting-edge technology and innovation platform",
  },
  {
    name: "Data Analysis",
    icon: Code,
    description: "Advanced data processing and analytics",
  },
  {
    name: "Innovation",
    icon: Sparkles,
    description: "Creative solutions for real-world challenges",
  },
  {
    name: "AI & ML",
    icon: Brain,
    description: "State-of-the-art artificial intelligence",
  },
  {
    name: "Mystery",
    icon: Lock,
    description: "Unlock the secrets of future technology",
  },
];

export const backgroundImages = [
  "/images/img/sec.jpeg",
  "/api/placeholder/1920/1080",
  "/api/placeholder/1920/1080",
];

export const evaluationCriteria = [
  {
    title: "Functionality",
    description: "Functional prototypes aligned with the mystery challenge.",
    icon: Code,
  },
  {
    title: "Innovation",
    description: "Original ideas and differentiating solutions.",
    icon: Sparkles,
  },
  {
    title: "Impact",
    description: "Real-world applicability and potential to transform the industry.",
    icon: Target,
  },
  {
    title: "Technical Quality",
    description: "Clean, well-documented, and efficient code.",
    icon: Brain,
  },
];

export const opportunityPoints = [
  "Learn cutting-edge technologies with AI, voice recognition, and advanced data processing.",
  "Collaborate with like-minded innovators and experienced technology mentors.",
  "Compete for a chance to turn your prototype into a market-ready solution.",
  "Network with industry leaders and top technology companies.",
];

export const participationBenefits = [
  { icon: Trophy, text: "Win amazing prizes worth 18,000 Dhs" },
  { icon: Brain, text: "Access to cutting-edge AI resources" },
  { icon: Users, text: "Network with industry experts" },
  { icon: Target, text: "Launch your tech career" },
];

export const prizes = [
  {
    title: "Cash Prize Pool",
    details: ["1st Place", "2nd Place", "3rd Place"],
  },
  {
    title: "Business Support",
    details: ["Technical mentorship", "Market access support", "Business development"],
  },
  {
    title: "Launch Your Solution",
    details: ["Transform your prototype", "Market-ready product", "Industry connections"],
  },
];
