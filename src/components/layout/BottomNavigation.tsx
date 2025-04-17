
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, MessageCircle, Phone, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNavigation() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  if (!isMobile) return null;

  const items = [
    {
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      label: "Chat",
      icon: MessageCircle,
      path: "/chat",
    },
    {
      label: "Call Room",
      icon: Phone,
      path: "/call-room",
    },
    {
      label: "Knowledge",
      icon: BookOpen,
      path: "/knowledge",
    },
    {
      label: "Community",
      icon: Users,
      path: "/community",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t h-16 flex items-center justify-around px-2">
      {items.map((item) => (
        <Button
          key={item.label}
          variant={isActive(item.path) ? "default" : "ghost"}
          size="sm"
          className={`flex flex-col items-center justify-center h-14 w-full gap-1 rounded-lg ${
            isActive(item.path) ? "bg-primary text-primary-foreground" : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          <item.icon size={20} />
          <span className="text-xs">{item.label}</span>
        </Button>
      ))}
    </div>
  );
}
