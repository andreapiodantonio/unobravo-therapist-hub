
import { MainLayout } from "@/components/layout/MainLayout";
import { KnowledgeBase } from "@/components/knowledge/KnowledgeBase";

export default function KnowledgePage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-13rem)]">
        <KnowledgeBase />
      </div>
    </MainLayout>
  );
}
