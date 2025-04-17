
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earned?: boolean;
  earnedDate?: string;
}

interface BadgeCardProps {
  badge: Badge;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-colors",
      badge.earned ? "border-primary/20" : ""
    )}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-xl",
            badge.color
          )}>
            {badge.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{badge.name}</h3>
              {badge.earned && (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              )}
            </div>
            
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {badge.description}
            </p>
            
            {badge.earned && badge.earnedDate && (
              <p className="text-xs text-primary mt-1">
                Earned on {badge.earnedDate}
              </p>
            )}
            
            {!badge.earned && (
              <Button variant="ghost" size="sm" className="gap-1 mt-1 h-7 px-2">
                <InfoIcon className="h-3 w-3" /> How to earn
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
