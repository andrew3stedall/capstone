import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { questions } from "@/content/questions";
import { PracticeSession } from "@/features/practice/PracticeSession";

export const metadata = { title: "Practice" };
export default function PracticePage() { return <div className="page-container"><PageHeader eyebrow="Practice" title="Retrieve, explain and apply." description="Practice targets reasoning and misconceptions rather than answer-pattern recognition." action={<Link className="button secondary" href="/practice/calculators">Open calculators</Link>} /><PracticeSession questions={questions} /><SourceNotice compact /></div>; }
