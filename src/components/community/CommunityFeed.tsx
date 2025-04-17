
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquarePlus, Filter, TrendingUp, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommunityPostCard } from "./CommunityPostCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { CreatePostDialog } from "./CreatePostDialog";

// Sample data for community posts
const communityPosts = [
  {
    id: "1",
    author: {
      name: "Dr. Marco",
      badge: "super-tp" as const,
    },
    title: "Recommendations for therapy-resistant anxiety?",
    content: "I have a client who's not responding well to standard CBT for anxiety. Anyone have experience with alternative approaches that might be worth trying?",
    tags: ["clinical", "anxiety", "CBT"],
    upvotes: 12,
    replies: 8,
    timeAgo: "2 hours ago",
    isTrending: true,
  },
  {
    id: "2",
    author: {
      name: "Dr. Anna",
      badge: "mentor" as const,
    },
    title: "Documentation templates for complex trauma",
    content: "I'm looking for efficient documentation templates specifically for complex trauma cases. Anyone willing to share their approach?",
    tags: ["documentation", "trauma"],
    upvotes: 5,
    replies: 3,
    timeAgo: "5 hours ago",
    isTrending: false,
  },
  {
    id: "3",
    author: {
      name: "Dr. Sofia",
    },
    title: "Managing scheduling during holiday season",
    content: "With the holidays approaching, I'm struggling to manage client expectations around availability. How are others handling this?",
    tags: ["operational", "scheduling"],
    upvotes: 8,
    replies: 10,
    timeAgo: "1 day ago",
    isTrending: true,
  },
  {
    id: "4",
    author: {
      name: "Dr. Luca",
      badge: "team-player" as const,
    },
    title: "Resources for clients with eating disorders",
    content: "Does anyone have recommended resources or worksheets for clients with eating disorders that have been particularly helpful?",
    tags: ["clinical", "resources", "eating disorders"],
    upvotes: 7,
    replies: 4,
    timeAgo: "2 days ago",
    isTrending: false,
  },
];

export function CommunityFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  
  const filteredPosts = communityPosts.filter(post => {
    if (activeTab === "trending" && !post.isTrending) return false;
    
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return true;
  });
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="text-xl">Community</CardTitle>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => setIsCreatePostOpen(true)} className="gap-1">
              <MessageSquarePlus size={16} /> New Post
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="trending" className="gap-1">
                <TrendingUp size={14} /> Trending
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Filter size={14} /> Filter
            </Button>
          </div>
          
          <ScrollArea className="h-[calc(100vh-15rem)]">
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <CommunityPostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <MessageSquarePlus className="h-12 w-12 text-muted-foreground opacity-20 mb-2" />
                  <h3 className="text-lg font-medium">No posts found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {searchQuery 
                      ? "Try adjusting your search" 
                      : "Be the first to start a discussion!"}
                  </p>
                  <Button onClick={() => setIsCreatePostOpen(true)}>
                    Create a Post
                  </Button>
                </div>
              )}
            </div>
          </ScrollArea>
        </Tabs>
      </CardContent>
      
      <CreatePostDialog 
        open={isCreatePostOpen} 
        onOpenChange={setIsCreatePostOpen} 
      />
    </Card>
  );
}
