
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Star, ArrowRight, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  updatedAt: string;
  isPopular: boolean;
}

interface KnowledgeArticleCardProps {
  article: Article;
}

export function KnowledgeArticleCard({ article }: KnowledgeArticleCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "clinical":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "operational":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "policies":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };
  
  const getCategoryName = (category: string) => {
    switch (category) {
      case "clinical":
        return "Clinical";
      case "operational":
        return "Operational";
      case "policies":
        return "Policy";
      default:
        return category;
    }
  };
  
  return (
    <Card className="hover:border-primary/20 transition-colors">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className={getCategoryColor(article.category)}>
              {getCategoryName(article.category)}
            </Badge>
            {article.isPopular && (
              <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                <Star className="h-3 w-3 mr-1 fill-amber-500 text-amber-500" /> Popular
              </Badge>
            )}
          </div>
          <span className="text-xs text-muted-foreground">Updated {article.updatedAt}</span>
        </div>
        
        <div className="flex gap-3 mb-3">
          <div className="mt-1 bg-unobravo-purple-light text-unobravo-purple p-2 rounded h-fit">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-lg">{article.title}</h3>
            <p className="text-sm text-muted-foreground">{article.excerpt}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
              <ThumbsUp className="h-3 w-3 mr-1" /> Helpful
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            Read Article <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
