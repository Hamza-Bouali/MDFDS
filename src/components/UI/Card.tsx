import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  iconColor?: string;
  hoverEffect?: boolean;
  className?: string;
}

export const Card = ({ 
  title, 
  children, 
  icon: Icon, 
  iconColor = "text-[#C4E2ED]", 
  hoverEffect = true,
  className = "" 
}: CardProps) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-[#010084]/40 to-[#010084]/40 p-6 rounded-xl backdrop-blur-sm border border-[#C4E2ED]/20 
      ${hoverEffect ? 'hover:border-[#C4E2ED]/40 transition-all duration-300' : ''} ${className}`}
    >
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#C4E2ED]/20 to-[#C4E2ED]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {Icon && (
        <div className="w-12 h-12 bg-[#C4E2ED]/20 rounded-full flex items-center justify-center mb-4">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-[#C4E2ED]">{title}</h3>
      {children}
    </div>
  );
};
