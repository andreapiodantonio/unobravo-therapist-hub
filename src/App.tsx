
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatPage from "./pages/ChatPage";
import CallRoomPage from "./pages/CallRoomPage";
import KnowledgePage from "./pages/KnowledgePage";
import CommunityPage from "./pages/CommunityPage";
import TicketsPage from "./pages/TicketsPage";
import BadgesPage from "./pages/BadgesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/call-room" element={<CallRoomPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
