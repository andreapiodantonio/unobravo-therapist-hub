
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileSearch,
  ArrowUpDown,
  Filter
} from "lucide-react";
import { TicketCard } from "./TicketCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { CreateTicketDialog } from "./CreateTicketDialog";

export type TicketStatus = "open" | "in-progress" | "resolved";

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

const ticketsData: Ticket[] = [
  {
    id: "TICKET-001",
    title: "Video call disconnecting repeatedly",
    description: "During sessions, the video call drops every 10-15 minutes requiring restart",
    status: "in-progress",
    category: "Technical",
    createdAt: "2 days ago",
    lastUpdated: "5 hours ago",
    priority: "high"
  },
  {
    id: "TICKET-002",
    title: "Calendar sync issue with Google Calendar",
    description: "New appointments aren't appearing in my Google Calendar despite sync being enabled",
    status: "open",
    category: "Technical",
    createdAt: "1 day ago",
    lastUpdated: "1 day ago",
    priority: "medium"
  },
  {
    id: "TICKET-003",
    title: "Client billing error",
    description: "Client reported being charged twice for their last session",
    status: "resolved",
    category: "Billing",
    createdAt: "1 week ago",
    lastUpdated: "2 days ago",
    priority: "high"
  },
  {
    id: "TICKET-004",
    title: "Need access to assessment tools",
    description: "Request for access to the new psychological assessment tools",
    status: "open",
    category: "Access",
    createdAt: "3 days ago",
    lastUpdated: "3 days ago",
    priority: "low"
  },
];

export function SupportTickets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isCreateTicketOpen, setIsCreateTicketOpen] = useState(false);
  
  const filteredTickets = ticketsData.filter(ticket => {
    if (activeTab !== "all" && 
        (activeTab === "open" ? ticket.status !== "open" : 
         activeTab === "in-progress" ? ticket.status !== "in-progress" : 
         ticket.status !== "resolved")) {
      return false;
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return ticket.title.toLowerCase().includes(query) || 
             ticket.description.toLowerCase().includes(query) ||
             ticket.category.toLowerCase().includes(query) ||
             ticket.id.toLowerCase().includes(query);
    }
    
    return true;
  });
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="text-xl">Support Tickets</CardTitle>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => setIsCreateTicketOpen(true)} className="gap-1">
              <PlusCircle size={16} /> New Ticket
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="all">All Tickets</TabsTrigger>
              <TabsTrigger value="open" className="gap-1">
                <AlertCircle size={14} /> Open
              </TabsTrigger>
              <TabsTrigger value="in-progress" className="gap-1">
                <Clock size={14} /> In Progress
              </TabsTrigger>
              <TabsTrigger value="resolved" className="gap-1">
                <CheckCircle2 size={14} /> Resolved
              </TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <ArrowUpDown size={14} /> Sort
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter size={14} /> Filter
              </Button>
            </div>
          </div>
          
          <ScrollArea className="h-[calc(100vh-15rem)]">
            <div className="space-y-4">
              {filteredTickets.length > 0 ? (
                filteredTickets.map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <FileSearch className="h-12 w-12 text-muted-foreground opacity-20 mb-2" />
                  <h3 className="text-lg font-medium">No tickets found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery 
                      ? "Try adjusting your search" 
                      : "All your support tickets will appear here"}
                  </p>
                  <Button onClick={() => setIsCreateTicketOpen(true)}>
                    Create a Ticket
                  </Button>
                </div>
              )}
            </div>
          </ScrollArea>
        </Tabs>
      </CardContent>
      
      <CreateTicketDialog 
        open={isCreateTicketOpen} 
        onOpenChange={setIsCreateTicketOpen} 
      />
    </Card>
  );
}
