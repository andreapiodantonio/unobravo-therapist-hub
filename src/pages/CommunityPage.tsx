
import { MainLayout } from "@/components/layout/MainLayout";
import { CommunityFeed } from "@/components/community/CommunityFeed";

export default function CommunityPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <CommunityFeed />
      </div>
    </MainLayout>
  );
}
