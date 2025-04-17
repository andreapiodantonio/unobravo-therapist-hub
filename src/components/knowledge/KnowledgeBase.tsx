
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, FileText, Star, Clock, ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { KnowledgeArticleCard } from "./KnowledgeArticleCard";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const categories = [
  { id: "all", name: "All", icon: BookOpen },
  { id: "clinical", name: "Clinical Guidelines", icon: FileText },
  { id: "operational", name: "Operational", icon: FileText },
  { id: "policies", name: "Policies", icon: FileText },
];

const articles = [
  {
    id: "1",
    title: "Client No-Show Policy",
    category: "policies",
    excerpt: "Guidelines for handling client no-shows and late cancellations",
    updatedAt: "2 days ago",
    isPopular: true,
  },
  {
    id: "2",
    title: "Emergency Response Protocol",
    category: "clinical",
    excerpt: "Procedures for responding to client emergencies and crisis situations",
    updatedAt: "1 week ago",
    isPopular: true,
  },
  {
    id: "3",
    title: "Documentation Requirements",
    category: "operational",
    excerpt: "Standards for clinical documentation and record-keeping",
    updatedAt: "3 days ago",
    isPopular: false,
  },
  {
    id: "4",
    title: "Scheduling Best Practices",
    category: "operational",
    excerpt: "Guidelines for efficient scheduling and calendar management",
    updatedAt: "5 days ago",
    isPopular: true,
  },
  {
    id: "5",
    title: "Therapeutic Boundaries",
    category: "clinical",
    excerpt: "Maintaining professional boundaries in the therapeutic relationship",
    updatedAt: "1 month ago",
    isPopular: false,
  },
];

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || article.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="text-xl">Knowledge Base</CardTitle>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search knowledge base..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsList className="grid grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-4 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Recent Updates</span>
            </div>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <KnowledgeArticleCard key={article.id} article={article} />
              ))}
              
              {filteredArticles.length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground opacity-20 mb-2" />
                  <h3 className="text-lg font-medium">No articles found</h3>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}
