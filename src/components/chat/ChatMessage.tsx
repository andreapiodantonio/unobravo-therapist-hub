
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeType, UserBadge } from "../user/UserBadge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ExternalLink, Flag } from "lucide-react";
import { ReactNode } from "react";

export type MessageSender = "ai" | "human" | "self";

export interface MessageSource {
  title: string;
  url: string;
}

export interface ChatMessageProps {
  content: string | ReactNode;
  sender: MessageSender;
  timestamp: string;
  senderName?: string;
  senderBadge?: BadgeType;
  sources?: MessageSource[];
  isLiked?: boolean;
  onLike?: () => void;
}

export function ChatMessage({
  content,
  sender,
  timestamp,
  senderName,
  senderBadge,
  sources,
  isLiked,
  onLike,
}: ChatMessageProps) {
  const isFromSelf = sender === "self";
  const isFromAI = sender === "ai";
  const isFromHuman = sender === "human";

  const getAvatarInfo = () => {
    if (isFromSelf) {
      return {
        image: "/placeholder.svg",
        fallback: "ME",
        name: "You"
      };
    } else if (isFromAI) {
      return {
        image: "",
        fallback: "AI",
        name: "AI Assistant"
      };
    } else {
      return {
        image: "",
        fallback: senderName ? senderName[0] : "TP",
        name: senderName || "Team Leader"
      };
    }
  };

  const avatarInfo = getAvatarInfo();

  return (
    <div
      className={`flex gap-3 mb-4 ${
        isFromSelf ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Avatar className="h-8 w-8 mt-1">
        <AvatarImage src={avatarInfo.image} alt={avatarInfo.name} />
        <AvatarFallback className={`${isFromAI ? "bg-primary text-primary-foreground" : isFromHuman ? "bg-unobravo-bright-blue text-white" : "bg-secondary text-secondary-foreground"}`}>
          {avatarInfo.fallback}
        </AvatarFallback>
      </Avatar>
      <div className={`flex flex-col max-w-[80%] ${isFromSelf ? "items-end" : "items-start"}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{avatarInfo.name}</span>
          {timestamp && <span className="text-xs text-muted-foreground">{timestamp}</span>}
          {senderBadge && <UserBadge type={senderBadge} />}
        </div>
        <div
          className={`p-3 rounded-lg ${
            isFromSelf
              ? "bg-primary text-primary-foreground"
              : isFromAI
              ? "bg-secondary text-secondary-foreground"
              : "bg-unobravo-bright-blue text-white"
          }`}
        >
          <div className="whitespace-pre-wrap">{content}</div>
          
          {sources && sources.length > 0 && (
            <div className="mt-2 border-t border-primary-foreground/20 pt-2">
              <p className="text-xs font-semibold mb-1">Sources:</p>
              <div className="flex flex-col gap-1">
                {sources.map((source, index) => (
                  <a 
                    key={index} 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs flex items-center hover:underline"
                  >
                    <ExternalLink size={12} className="mr-1" /> {source.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {!isFromSelf && (
          <div className="flex gap-2 mt-1">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-6 w-6"
              onClick={onLike}
            >
              <ThumbsUp 
                size={14} 
                className={isLiked ? "fill-unobravo-purple text-unobravo-purple" : ""}
              />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-6 w-6"
            >
              <Flag size={14} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
