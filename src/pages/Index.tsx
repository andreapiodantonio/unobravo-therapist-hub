
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { SmartSupportChat } from "@/components/chat/SmartSupportChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KnowledgeArticleCard } from "@/components/knowledge/KnowledgeArticleCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MessageCirclePlus, Phone, BookOpen, Clock, Award, Bell } from "lucide-react";
import { CallRoomSchedule } from "@/components/call-room/CallRoomSchedule";
import { useNavigate } from "react-router-dom";

const upcomingCall = {
  id: "upcoming-1",
  title: "Clinical Case Discussion: Anxiety",
  category: "clinical",
  excerpt: "Let's discuss approaches for treating therapy-resistant anxiety",
  updatedAt: "In 30 minutes",
  isPopular: true,
};

const popularArticle = {
  id: "popular-1",
  title: "Emergency Response Protocol",
  category: "clinical",
  excerpt: "Procedures for responding to client emergencies and crisis situations",
  updatedAt: "1 week ago",
  isPopular: true,
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Unobravo Therapist Support</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-unobravo-purple to-unobravo-purple-dark hover-scale">
              <CardContent className="flex items-center p-6 text-white">
                <div className="mr-4 bg-white/20 p-3 rounded-full">
                  <MessageCirclePlus className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-white">Smart Support Chat</CardTitle>
                  <CardDescription className="text-white/80">
                    Get help with clinical or operational questions
                  </CardDescription>
                  <Button 
                    variant="secondary" 
                    className="mt-3"
                    onClick={() => navigate("/chat")}
                  >
                    Start Chat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-unobravo-sky-blue to-unobravo-bright-blue hover-scale">
              <CardContent className="flex items-center p-6 text-white">
                <div className="mr-4 bg-white/20 p-3 rounded-full">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-white">Call Room</CardTitle>
                  <CardDescription className="text-white/80">
                    Join peer support calls and discussions
                  </CardDescription>
                  <Button 
                    variant="secondary" 
                    className="mt-3"
                    onClick={() => navigate("/call-room")}
                  >
                    View Calls <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Upcoming Peer Calls</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  className="gap-1"
                  onClick={() => navigate("/call-room")}
                >
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <KnowledgeArticleCard article={upcomingCall} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>Popular Resources</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  className="gap-1"
                  onClick={() => navigate("/knowledge")}
                >
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <KnowledgeArticleCard article={popularArticle} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle>Recent Activity</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="py-2 px-4 border-b flex items-center gap-3">
                <div className="bg-blue-100 text-blue-800 p-2 rounded">
                  <Award className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">You earned the <span className="font-medium">Mentor Badge</span></p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              
              <div className="py-2 px-4 border-b flex items-center gap-3">
                <div className="bg-green-100 text-green-800 p-2 rounded">
                  <MessageCirclePlus className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">Dr. Sofia replied to your question</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              
              <div className="py-2 px-4 flex items-center gap-3">
                <div className="bg-purple-100 text-purple-800 p-2 rounded">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">New peer call scheduled: <span className="font-medium">CBT Techniques</span></p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="h-[600px]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <MessageCirclePlus className="h-5 w-5 text-primary" />
                <CardTitle>Quick Support</CardTitle>
              </div>
              <CardDescription>Get instant help with your questions</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-5rem)]">
              <SmartSupportChat />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
