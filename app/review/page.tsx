import { PageHeader } from "@/components/ui/PageHeader";
import { ReviewHub } from "@/features/review/ReviewHub";

export const metadata = { title: "Review" };
export default function ReviewPage() { return <div className="page-container"><PageHeader eyebrow="Review" title="Return before knowledge fades." description="The review route separates retrieval evidence from simple content completion. Current items demonstrate the future semantic notebook and scheduling model." /><ReviewHub /></div>; }
