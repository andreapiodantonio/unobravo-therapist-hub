
import { MainLayout } from "@/components/layout/MainLayout";
import { SmartSupportChat } from "@/components/chat/SmartSupportChat";

export default function ChatPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <SmartSupportChat />
      </div>
    </MainLayout>
  );
}
