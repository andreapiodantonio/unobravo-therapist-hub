
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageCircle, 
  AlertTriangle, 
  AlertOctagon, 
  Info 
} from "lucide-react";
import { TicketStatus } from "./SupportTickets";

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  category: string;
  createdAt: string;
  lastUpdated: string;
  priority: "low" | "medium" | "high";
}

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  const getStatusInfo = (status: TicketStatus) => {
    switch (status) {
      case "open":
        return {
          icon: AlertCircle,
          color: "bg-amber-100 text-amber-800 border-amber-200",
          label: "Open"
        };
      case "in-progress":
        return {
          icon: Clock,
          color: "bg-blue-100 text-blue-800 border-blue-200",
          label: "In Progress"
        };
      case "resolved":
        return {
          icon: CheckCircle2,
          color: "bg-green-100 text-green-800 border-green-200",
          label: "Resolved"
        };
    }
  };
  
  const getPriorityInfo = (priority: Ticket["priority"]) => {
    switch (priority) {
      case "low":
        return {
          icon: Info,
          color: "bg-blue-100 text-blue-800 border-blue-200",
          label: "Low"
        };
      case "medium":
        return {
          icon: AlertTriangle,
          color: "bg-amber-100 text-amber-800 border-amber-200",
          label: "Medium"
        };
      case "high":
        return {
          icon: AlertOctagon,
          color: "bg-red-100 text-red-800 border-red-200",
          label: "High"
        };
    }
  };
  
  const statusInfo = getStatusInfo(ticket.status);
  const priorityInfo = getPriorityInfo(ticket.priority);
  const StatusIcon = statusInfo.icon;
  const PriorityIcon = priorityInfo.icon;
  
  return (
    <Card className="hover:border-primary/20 transition-colors">
      <CardContent className="p-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">{ticket.id}</span>
          <div className="flex gap-2">
            <Badge variant="outline" className={statusInfo.color}>
              <StatusIcon size={12} className="mr-1" /> {statusInfo.label}
            </Badge>
            <Badge variant="outline" className={priorityInfo.color}>
              <PriorityIcon size={12} className="mr-1" /> {priorityInfo.label}
            </Badge>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-1">{ticket.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{ticket.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground">
          <div>
            <span className="font-medium">Category:</span> {ticket.category}
          </div>
          <div>
            <span className="font-medium">Created:</span> {ticket.createdAt}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Last Updated:</span> {ticket.lastUpdated}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" size="sm" className="gap-1">
            <MessageCircle size={14} /> Comment
          </Button>
          
          {ticket.status !== "resolved" ? (
            <Button variant="default" size="sm">
              View Details
            </Button>
          ) : (
            <Button variant="outline" size="sm">
              Reopen
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
