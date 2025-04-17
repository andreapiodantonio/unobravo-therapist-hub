
import { MainLayout } from "@/components/layout/MainLayout";
import { BadgesRecognition } from "@/components/badges/BadgesRecognition";

export default function BadgesPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <BadgesRecognition />
      </div>
    </MainLayout>
  );
}
