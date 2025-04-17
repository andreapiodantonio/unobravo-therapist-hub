
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Award, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function UserNav() {
  const navigate = useNavigate();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-secondary text-secondary-foreground">TP</AvatarFallback>
          </Avatar>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-unobravo-purple border-2 border-background">
            <span className="animate-pulse-gentle h-full w-full rounded-full bg-unobravo-purple"></span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Dr. Maria Rossi</p>
            <p className="text-xs leading-none text-muted-foreground">
              maria.rossi@unobravo.it
            </p>
            <div className="flex gap-1 mt-1">
              <span className="badge bg-unobravo-purple-light text-unobravo-purple-dark">
                <Award size={12} className="mr-1" /> Super TP
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Profile Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/badges")}>
            <Award className="mr-2 h-4 w-4" />
            <span>My Badges</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
