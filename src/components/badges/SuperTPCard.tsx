
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeType, UserBadge } from "../user/UserBadge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuperTPLeader {
  name: string;
  avatar: string;
  role: string;
  badges: BadgeType[];
  helpfulness: number;
  responses: number;
  isCurrentUser?: boolean;
}

interface SuperTPCardProps {
  leader: SuperTPLeader;
  rank: number;
}

export function SuperTPCard({ leader, rank }: SuperTPCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-colors",
      leader.isCurrentUser ? "border-primary/30 bg-primary/5" : ""
    )}>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full font-bold",
            rank === 1 ? "bg-amber-100 text-amber-800" :
            rank === 2 ? "bg-slate-100 text-slate-800" :
            rank === 3 ? "bg-orange-100 text-orange-800" :
            "bg-muted text-muted-foreground"
          )}>
            {rank}
          </div>
          
          <Avatar className="h-12 w-12">
            <AvatarImage src={leader.avatar} alt={leader.name} />
            <AvatarFallback className="bg-unobravo-purple-light text-unobravo-purple-dark">
              {leader.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">
                {leader.name}
                {leader.isCurrentUser && (
                  <span className="text-xs font-normal text-muted-foreground ml-2">
                    (You)
                  </span>
                )}
              </h3>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {leader.role}
            </div>
            
            <div className="flex flex-wrap gap-1 mt-1">
              {leader.badges.map((badge) => (
                <UserBadge key={badge} type={badge} />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium">
              {leader.helpfulness}% Helpful
            </div>
            <div className="text-xs text-muted-foreground">
              {leader.responses} responses
            </div>
            
            {!leader.isCurrentUser && (
              <Button variant="outline" size="sm" className="mt-2 gap-1">
                <MessageCircle size={14} /> Message
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
