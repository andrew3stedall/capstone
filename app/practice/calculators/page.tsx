import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { Calculators } from "@/features/practice/Calculators";

export const metadata = { title: "Calculators" };
export default function CalculatorsPage() { return <div className="page-container"><PageHeader eyebrow="Practice tools" title="Check the method, not only the number." description="These simple tools rehearse core relationships. They do not perform installation design or compliance assessment." action={<Link className="button secondary" href="/practice">Back to questions</Link>} /><Calculators /><SourceNotice /></div>; }
