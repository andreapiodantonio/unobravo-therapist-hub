import React, { ReactNode } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Medal } from "lucide-react";

// Define the BadgeType interface if it doesn't exist
interface BadgeType {
  id: string;
  name: string;
  icon?: ReactNode;
  description?: string;
}

interface SuperTPLeader {
  name: string;
  avatar: string;
  role: string;
  badges: BadgeType[]; // Changed from string[] to BadgeType[]
  helpfulness: number;
  responses: number;
  isCurrentUser?: boolean;
}

const leaders: SuperTPLeader[] = [
  {
    name: "Dr. Maria Rossi",
    avatar: "/lovable-uploads/6c86e4b1-da69-4a36-8d4b-06895a4f03c6.png",
    role: "Psicoterapeuta",
    badges: [
      { id: "1", name: "Super Helper" },
      { id: "2", name: "Knowledge Expert" },
      { id: "3", name: "Top Contributor" }
    ],
    helpfulness: 98,
    responses: 1245,
    isCurrentUser: true,
  },
  {
    name: "Dr. Marco Bianchi",
    avatar: "/lovable-uploads/06cb6868-fc57-4ecc-9890-cfa93db95d84.png",
    role: "Psicoterapeuta",
    badges: [
      { id: "1", name: "Super Helper" },
      { id: "4", name: "Rising Star" }
    ],
    helpfulness: 96,
    responses: 1120,
  },
  {
    name: "Dr. Giulia Verdi",
    avatar: "/lovable-uploads/44ef2f87-b9ac-4261-857c-f9cb6d2df84f.png",
    role: "Psicoterapeuta",
    badges: [
      { id: "1", name: "Super Helper" },
      { id: "5", name: "Response Champion" }
    ],
    helpfulness: 94,
    responses: 980,
  },
];

const BadgesRecognition = () => {
  return (
    <Card className="col-span-4 md:col-span-1">
      <CardHeader>
        <CardTitle>Super TP Recognition</CardTitle>
        <CardDescription>Top contributors this month</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[450px] w-full">
          <div className="space-y-4 p-4">
            {leaders.map((leader, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={leader.avatar} alt={leader.name} />
                  {leader.isCurrentUser && (
                    <div className="absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-unobravo-purple border-2 border-background">
                      <span className="animate-ping h-full w-full rounded-full bg-unobravo-purple opacity-75"></span>
                    </div>
                  )}
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{leader.name}</p>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                  <div className="flex gap-1">
                    {leader.badges.map((badge) => (
                      <Badge key={badge.id} variant="secondary">
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center space-x-1">
                    <Medal className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{leader.helpfulness}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{leader.responses} responses</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default BadgesRecognition;
