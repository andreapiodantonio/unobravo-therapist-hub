
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  Plus, 
  Video, 
  Phone as PhoneIcon,
  UserPlus 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserBadge } from "../user/UserBadge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateCallDialog } from "./CreateCallDialog";

interface ScheduledCall {
  id: string;
  title: string;
  description: string;
  datetime: Date;
  host: {
    name: string;
    avatar?: string;
    badge?: "super-tp" | "mentor";
  };
  participants: number;
  isVideo: boolean;
}

export function CallRoomSchedule() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scheduledCalls, setScheduledCalls] = useState<ScheduledCall[]>([
    {
      id: "1",
      title: "Clinical Case Discussion: Anxiety",
      description: "Let's discuss approaches for treating therapy-resistant anxiety",
      datetime: new Date(Date.now() + 1000 * 60 * 30), // 30 minutes from now
      host: {
        name: "Dr. Marco",
        badge: "super-tp"
      },
      participants: 5,
      isVideo: false
    },
    {
      id: "2",
      title: "Documentation Best Practices",
      description: "Sharing efficient methods for clinical documentation",
      datetime: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
      host: {
        name: "Dr. Sofia",
        badge: "mentor"
      },
      participants: 3,
      isVideo: true
    },
    {
      id: "3",
      title: "Ethical Dilemmas in Practice",
      description: "Discussion on handling complex ethical situations",
      datetime: new Date(Date.now() + 1000 * 60 * 60 * 24), // Tomorrow
      host: {
        name: "Dr. Laura",
        badge: "super-tp"
      },
      participants: 7,
      isVideo: true
    }
  ]);

  const handleCreateCall = (call: Omit<ScheduledCall, "id" | "participants">) => {
    const newCall: ScheduledCall = {
      ...call,
      id: Math.random().toString(36).substring(7),
      participants: 1,
    };
    
    setScheduledCalls([...scheduledCalls, newCall]);
    setDialogOpen(false);
  };

  const isHappeningSoon = (date: Date) => {
    return date.getTime() - Date.now() < 1000 * 60 * 60; // Within the next hour
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Peer Support Calls</CardTitle>
        <Button 
          onClick={() => setDialogOpen(true)}
          className="gap-1"
        >
          <Plus size={16} /> Schedule Call
        </Button>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <ScrollArea className="h-[calc(100vh-15rem)]">
          <div className="space-y-4">
            {scheduledCalls.map((call) => (
              <Card key={call.id} className="overflow-hidden">
                <div className="bg-unobravo-purple p-1">
                  <div className="flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-white" />
                      <span className="text-xs font-medium text-white">
                        {formatDistanceToNow(call.datetime, { addSuffix: true })}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {call.isVideo ? <Video size={10} className="mr-1" /> : <PhoneIcon size={10} className="mr-1" />}
                      {call.isVideo ? "Video" : "Audio"}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1">{call.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{call.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7">
                        <AvatarImage src="" alt={call.host.name} />
                        <AvatarFallback className="bg-unobravo-purple-light text-unobravo-purple-dark text-xs">
                          {call.host.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs">{call.host.name}</span>
                        {call.host.badge && (
                          <UserBadge type={call.host.badge} />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users size={14} />
                        <span className="text-xs">{call.participants}</span>
                      </div>
                      
                      {isHappeningSoon(call.datetime) ? (
                        <Button size="sm" className="gap-1">
                          <Video size={14} /> Join Now
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="gap-1">
                          <UserPlus size={14} /> RSVP
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{call.datetime.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      
      <CreateCallDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        onSubmit={handleCreateCall}
      />
    </Card>
  );
}
