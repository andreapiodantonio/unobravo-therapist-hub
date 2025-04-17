
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { ReactNode } from "react";

export type BadgeType = 
  | "super-tp" 
  | "mentor" 
  | "connector" 
  | "knowledge" 
  | "compassionate" 
  | "team-player";

interface BadgeInfo {
  name: string;
  color: string;
  bgColor: string;
  icon: ReactNode;
}

const badgeInfo: Record<BadgeType, BadgeInfo> = {
  "super-tp": {
    name: "Super TP",
    color: "text-unobravo-purple-dark",
    bgColor: "bg-unobravo-purple-light",
    icon: <Award size={12} className="mr-1" />,
  },
  "mentor": {
    name: "Mentor",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    icon: <Award size={12} className="mr-1" />,
  },
  "connector": {
    name: "Connector",
    color: "text-green-700",
    bgColor: "bg-green-100",
    icon: <Award size={12} className="mr-1" />,
  },
  "knowledge": {
    name: "Knowledge",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    icon: <Award size={12} className="mr-1" />,
  },
  "compassionate": {
    name: "Compassionate",
    color: "text-pink-700",
    bgColor: "bg-pink-100",
    icon: <Award size={12} className="mr-1" />,
  },
  "team-player": {
    name: "Team Player",
    color: "text-indigo-700",
    bgColor: "bg-indigo-100",
    icon: <Award size={12} className="mr-1" />,
  }
};

interface UserBadgeProps {
  type: BadgeType;
  className?: string;
}

export function UserBadge({ type, className }: UserBadgeProps) {
  const badge = badgeInfo[type];
  
  return (
    <span className={cn(
      "badge inline-flex items-center justify-center text-xs font-medium transition-colors rounded-full py-1 px-2",
      badge.bgColor,
      badge.color,
      className
    )}>
      {badge.icon} {badge.name}
    </span>
  );
}
