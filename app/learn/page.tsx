import { PageHeader } from "@/components/ui/PageHeader";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { modules } from "@/content/modules";
import { LearnLibrary } from "@/features/learn/LearnLibrary";

export const metadata = { title: "Learn" };

export default function LearnPage() {
  return <div className="page-container"><PageHeader eyebrow="Learn" title="Build connected knowledge." description="Learning paths connect concise explanations, misconceptions, calculations and practical application. Current modules are structured outlines awaiting qualified technical review." /><LearnLibrary modules={modules} /><SourceNotice compact /></div>;
}
