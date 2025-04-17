
import { UserNav } from "../user/UserNav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

export function Header() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="border-b bg-background sticky top-0 z-30">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {!isMobile && <SidebarTrigger />}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleLogoClick}
            aria-label="Go to home page"
          >
            <img 
              src="/lovable-uploads/29757e5a-afb8-49a9-9593-dd42b0a13f4a.png" 
              alt="Unobravo Logo" 
              className="h-8 w-auto" 
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex" onClick={() => navigate("/help")}>
            Report Issue
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
