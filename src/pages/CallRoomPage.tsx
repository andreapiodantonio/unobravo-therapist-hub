
import { MainLayout } from "@/components/layout/MainLayout";
import { CallRoomSchedule } from "@/components/call-room/CallRoomSchedule";

export default function CallRoomPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <CallRoomSchedule />
      </div>
    </MainLayout>
  );
}
