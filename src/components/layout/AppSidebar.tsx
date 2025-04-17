
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Home, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  Award, 
  Phone, 
  Ticket, 
  LifeBuoy 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function AppSidebar() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  // Hide sidebar completely on mobile as we use bottom navigation
  if (isMobile) return null;

  const mainItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      title: "Smart Chat",
      icon: MessageCircle,
      path: "/chat",
    },
    {
      title: "Call Room",
      icon: Phone,
      path: "/call-room",
    },
    {
      title: "Knowledge Base",
      icon: BookOpen,
      path: "/knowledge",
    },
    {
      title: "Community",
      icon: Users,
      path: "/community",
    },
    {
      title: "Support Tickets",
      icon: Ticket,
      path: "/tickets",
    },
  ];

  const resourcesItems = [
    {
      title: "Badges & Recognition",
      icon: Award,
      path: "/badges",
    },
    {
      title: "Help & Support",
      icon: LifeBuoy,
      path: "/help",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title} active={isActive(item.path)}>
                  <SidebarMenuButton onClick={() => navigate(item.path)} asChild>
                    <div className="flex items-center gap-2 w-full">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourcesItems.map((item) => (
                <SidebarMenuItem key={item.title} active={isActive(item.path)}>
                  <SidebarMenuButton onClick={() => navigate(item.path)} asChild>
                    <div className="flex items-center gap-2 w-full">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
