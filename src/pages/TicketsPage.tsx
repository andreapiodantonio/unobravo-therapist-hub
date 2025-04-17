
import { MainLayout } from "@/components/layout/MainLayout";
import { SupportTickets } from "@/components/tickets/SupportTickets";

export default function TicketsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <SupportTickets />
      </div>
    </MainLayout>
  );
}
