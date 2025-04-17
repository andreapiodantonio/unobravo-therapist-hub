
import { useState, useEffect, useRef } from "react";
import { ChatMessage, ChatMessageProps, MessageSource } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Loader2, Bot, LifeBuoy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Example knowledge base articles for source links
const knowledgeArticles: MessageSource[] = [
  { title: "Client No-Show Policy", url: "#policy-no-show" },
  { title: "Appointment Rescheduling Guide", url: "#guide-rescheduling" },
  { title: "Clinical Documentation Requirements", url: "#requirements-documentation" },
  { title: "Emergency Response Protocol", url: "#protocol-emergency" },
  { title: "Therapy Session Recording Guidelines", url: "#guidelines-recording" },
];

export function SmartSupportChat() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      content: "👋 Welcome to Unobravo Support! How can I help you today? You can ask me about clinical guidelines, operational procedures, or any other support you need.",
      sender: "ai",
      timestamp: "Just now",
      sources: []
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isHumanJoining, setIsHumanJoining] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmitMessage = (message: string) => {
    const newMessage: ChatMessageProps = {
      content: message,
      sender: "self",
      timestamp: "Just now"
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Check if we should simulate a human intervention
      if (message.toLowerCase().includes("emergency") || 
          message.toLowerCase().includes("urgent") ||
          message.toLowerCase().includes("help")) {
        setIsHumanJoining(true);
        
        // Simulate TL joining the chat
        setTimeout(() => {
          setIsHumanJoining(false);
          setMessages(prev => [
            ...prev, 
            {
              content: "I noticed this conversation might need additional support. I'm Dr. Laura, Team Leader for the clinical support team. Let me help with this situation.",
              sender: "human",
              timestamp: "Just now",
              senderName: "Dr. Laura",
              senderBadge: "super-tp"
            }
          ]);
        }, 3000);
      }
    }, 1500);
  };

  const generateAIResponse = (message: string): ChatMessageProps => {
    let response = "";
    let sources: MessageSource[] = [];
    
    // Simple response logic based on keywords
    if (message.toLowerCase().includes("no-show") || message.toLowerCase().includes("cancel")) {
      response = "According to Unobravo's no-show policy, if a client doesn't attend a scheduled session without providing at least 24 hours notice, they are still responsible for the full session fee. You should document this in the client record and follow up with a message to reschedule if appropriate.";
      sources = [knowledgeArticles[0], knowledgeArticles[1]];
    } 
    else if (message.toLowerCase().includes("emergency") || message.toLowerCase().includes("crisis")) {
      response = "For client emergencies, please follow our Emergency Response Protocol. This includes assessing immediate danger, contacting emergency services if needed (112 in Italy), and documenting all steps taken. A Team Leader will join this conversation shortly to provide further assistance.";
      sources = [knowledgeArticles[3]];
    }
    else if (message.toLowerCase().includes("record") || message.toLowerCase().includes("documentation")) {
      response = "Clinical documentation should be completed within 24 hours of each session. Notes should be objective, concise, and focus on therapeutic goals and progress. Avoid subjective interpretations and ensure all documentation complies with privacy regulations.";
      sources = [knowledgeArticles[2]];
    }
    else {
      response = "I'm here to help! Could you provide more details about your question? I can assist with clinical guidelines, operational procedures, scheduling, or technical issues.";
    }
    
    return {
      content: response,
      sender: "ai",
      timestamp: "Just now",
      sources: sources
    };
  };

  const handleLikeMessage = (index: number) => {
    setMessages(prev => 
      prev.map((msg, i) => 
        i === index ? { ...msg, isLiked: !msg.isLiked } : msg
      )
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl">Smart Support Chat</CardTitle>
            <Badge variant="outline" className="bg-unobravo-purple-light text-unobravo-purple-dark">
              <Bot size={12} className="mr-1" /> AI Powered
            </Badge>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <LifeBuoy size={14} /> Request TL
          </Button>
        </div>
        <CardDescription>
          Ask any question about clinical or operational matters
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto pt-0">
        <div className="space-y-4">
          <div className="flex flex-col">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                {...message}
                onLike={() => handleLikeMessage(index)}
              />
            ))}
            
            {isTyping && (
              <div className="flex gap-3 mb-4">
                <div className="h-8 w-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">AI Assistant is typing...</span>
                </div>
              </div>
            )}
            
            {isHumanJoining && (
              <div className="flex gap-3 mb-4">
                <div className="h-8 w-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-unobravo-bright-blue rounded-full opacity-20 animate-pulse"></div>
                  <LifeBuoy size={16} className="text-unobravo-bright-blue" />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Team Leader is joining the chat...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </CardContent>
      <div className="p-4 pt-0">
        <ChatInput onSubmit={handleSubmitMessage} disabled={isHumanJoining} />
      </div>
    </Card>
  );
}
