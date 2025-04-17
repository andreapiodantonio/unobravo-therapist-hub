
import { UserNav } from "../user/UserNav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MessageCircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="border-b bg-background sticky top-0 z-30">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {!isMobile && <SidebarTrigger />}
          <div className="flex items-center gap-2">
            <MessageCircleHelp size={32} className="text-primary" />
            <h1 className="text-xl font-semibold text-primary">Unobravo Support</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Report Issue
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
