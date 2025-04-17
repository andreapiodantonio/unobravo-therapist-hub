
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserBadge, BadgeType } from "../user/UserBadge";
import { MessageSquare, ThumbsUp, TrendingUp, Pin, Reply } from "lucide-react";
import { useState } from "react";

interface PostAuthor {
  name: string;
  badge?: BadgeType;
}

interface Post {
  id: string;
  author: PostAuthor;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  replies: number;
  timeAgo: string;
  isTrending: boolean;
}

interface CommunityPostCardProps {
  post: Post;
}

export function CommunityPostCard({ post }: CommunityPostCardProps) {
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(post.upvotes);
  
  const handleUpvote = () => {
    if (upvoted) {
      setUpvoteCount(prev => prev - 1);
    } else {
      setUpvoteCount(prev => prev + 1);
    }
    setUpvoted(!upvoted);
  };
  
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "clinical":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "operational":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "documentation":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "anxiety":
      case "trauma":
      case "eating disorders":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "CBT":
      case "resources":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      case "scheduling":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };
  
  return (
    <Card className="overflow-hidden hover:border-primary/20 transition-colors">
      {post.isTrending && (
        <div className="bg-unobravo-purple p-1">
          <div className="flex items-center px-3">
            <TrendingUp size={14} className="text-white mr-1" />
            <span className="text-xs font-medium text-white">Trending Discussion</span>
          </div>
        </div>
      )}
      
      <CardContent className={`p-4 ${post.isTrending ? 'pt-3' : ''}`}>
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="" alt={post.author.name} />
              <AvatarFallback className="text-xs">
                {post.author.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
            {post.author.badge && <UserBadge type={post.author.badge} />}
          </div>
          <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className={getTagColor(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 gap-1"
              onClick={handleUpvote}
            >
              <ThumbsUp 
                size={14} 
                className={upvoted ? "fill-primary text-primary" : ""} 
              />
              <span className={upvoted ? "text-primary" : ""}>{upvoteCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <MessageSquare size={14} />
              <span>{post.replies}</span>
            </Button>
          </div>
          
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Reply size={14} /> Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
