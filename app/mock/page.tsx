import { PageHeader } from "@/components/ui/PageHeader";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { MockAssessmentHub } from "@/features/mock/MockAssessmentHub";

export const metadata = { title: "Mock assessments" };
export default function MockPage() { return <div className="page-container"><PageHeader eyebrow="Mock assessment" title="Rehearse the conditions, not a fictional universal exam." description="Formats and pass requirements vary. Confirm your assessment details with your RTO and regulator." /><MockAssessmentHub /><SourceNotice /></div>; }
