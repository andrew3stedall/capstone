import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressDashboard } from "@/features/progress/ProgressDashboard";

export const metadata = { title: "Progress" };
export default function ProgressPage() { return <div className="page-container"><PageHeader eyebrow="Progress" title="Measure the evidence behind the score." description="Coverage, retrieval, accuracy, recency and safety errors should remain visible instead of collapsing competence into one unexplained percentage." /><ProgressDashboard /></div>; }
