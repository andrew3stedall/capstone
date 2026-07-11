import { notFound } from "next/navigation";
import { modules, moduleById } from "@/content/modules";
import { KnowledgeArticle } from "@/components/knowledge/KnowledgeArticle";

export function generateStaticParams() { return modules.map((module) => ({ module: module.id })); }

export default async function LearningModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleId } = await params;
  const learningModule = moduleById.get(moduleId);
  if (!learningModule) notFound();
  return <KnowledgeArticle module={learningModule} />;
}
