
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { BadgeCard } from "./BadgeCard";
import { SuperTPCard } from "./SuperTPCard";
import { Award, Users, ArrowUp } from "lucide-react";

// Badge definitions
const badges = [
  {
    id: "super-tp",
    name: "Super TP",
    description: "Awarded to therapists who consistently provide outstanding support to their colleagues",
    icon: "👑",
    color: "bg-unobravo-purple-light text-unobravo-purple-dark",
    earned: true,
    earnedDate: "October 15, 2024"
  },
  {
    id: "mentor",
    name: "Helpful Mentor",
    description: "Awarded for regularly providing guidance and mentorship to fellow therapists",
    icon: "🧠",
    color: "bg-blue-100 text-blue-800",
    earned: true,
    earnedDate: "September 3, 2024"
  },
  {
    id: "connector",
    name: "Community Connector",
    description: "For therapists who regularly host or participate in peer support calls",
    icon: "🔗",
    color: "bg-green-100 text-green-800",
    earned: false
  },
  {
    id: "knowledge",
    name: "Knowledge Guru",
    description: "For sharing valuable resources and insights in the knowledge base",
    icon: "📚",
    color: "bg-amber-100 text-amber-800",
    earned: false
  },
  {
    id: "compassionate",
    name: "Compassionate Communicator",
    description: "For consistently offering empathetic and supportive communication",
    icon: "❤️",
    color: "bg-pink-100 text-pink-800",
    earned: false
  },
  {
    id: "team-player",
    name: "Team Player",
    description: "For actively collaborating and supporting team initiatives",
    icon: "🤝",
    color: "bg-indigo-100 text-indigo-800",
    earned: false
  }
];

// SuperTP leaderboard
const superTPLeaders = [
  {
    name: "Dr. Laura Bianchi",
    avatar: "",
    role: "Clinical Psychologist",
    badges: ["super-tp", "mentor", "compassionate"],
    helpfulness: 98,
    responses: 156
  },
  {
    name: "Dr. Marco Rossi",
    avatar: "",
    role: "Psychotherapist",
    badges: ["super-tp", "knowledge", "connector"],
    helpfulness: 95,
    responses: 142
  },
  {
    name: "Dr. Sofia Esposito",
    avatar: "",
    role: "Clinical Psychologist",
    badges: ["super-tp", "team-player"],
    helpfulness: 93,
    responses: 120
  },
  {
    name: "Dr. Maria Rossi",
    avatar: "",
    role: "Psychiatrist",
    badges: ["super-tp", "mentor"],
    helpfulness: 91,
    responses: 118,
    isCurrentUser: true
  }
];

export function BadgesRecognition() {
  const earnedBadges = badges.filter(badge => badge.earned);
  const unearnedBadges = badges.filter(badge => !badge.earned);
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl">Badges & Recognition</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <Tabs defaultValue="my-badges">
          <TabsList className="mb-4">
            <TabsTrigger value="my-badges" className="gap-1">
              <Award size={14} /> My Badges
            </TabsTrigger>
            <TabsTrigger value="super-tps" className="gap-1">
              <Users size={14} /> Super TPs
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-badges" className="h-full">
            <div className="flex flex-col gap-4">
              <div className="bg-unobravo-purple-light text-unobravo-purple-dark p-4 rounded-lg flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Award className="h-8 w-8 text-unobravo-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Your Badge Progress</h3>
                  <div className="text-sm">{earnedBadges.length} of {badges.length} badges earned</div>
                </div>
                <Badge className="bg-white text-unobravo-purple-dark gap-1">
                  <ArrowUp size={12} /> Level 2
                </Badge>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Earned Badges</h3>
                <p className="text-sm text-muted-foreground">
                  Badges you've earned through your contributions
                </p>
              </div>
              
              <ScrollArea className="h-[200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {earnedBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </ScrollArea>
              
              <div className="space-y-1 pt-2">
                <h3 className="font-medium text-lg">Badges to Earn</h3>
                <p className="text-sm text-muted-foreground">
                  Contribute to the community to earn these badges
                </p>
              </div>
              
              <ScrollArea className="h-[200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {unearnedBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="super-tps" className="h-full">
            <div className="space-y-1 mb-4">
              <h3 className="font-medium text-lg">Super TP Program</h3>
              <p className="text-sm text-muted-foreground">
                Super TPs are experienced therapists who provide additional support to their colleagues
              </p>
            </div>
            
            <ScrollArea className="h-[500px]">
              <div className="space-y-4">
                {superTPLeaders.map((leader, index) => (
                  <SuperTPCard 
                    key={leader.name} 
                    leader={leader} 
                    rank={index + 1} 
                  />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
