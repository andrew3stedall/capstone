import Link from "next/link";
import { modules } from "@/content/modules";
import { calculateReadiness, prioritiseTopics } from "@/lib/learning-engine.mjs";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SourceNotice } from "@/components/ui/SourceNotice";

const evidence = modules.map((module, index) => ({ id: module.id, mastery: module.progress, safetyCritical: module.safetyCritical, daysSinceReview: index + 1 }));
const readiness = calculateReadiness(evidence);
const priorities = prioritiseTopics(evidence).slice(0, 3).map((record) => modules.find((module) => module.id === record.id)!);

export function Dashboard() {
  return (
    <div className="page-container dashboard-page">
      <section className="readiness-hero">
        <div>
          <span className="eyebrow">Today&apos;s study plan</span>
          <h1>Focus on the evidence that needs work.</h1>
          <p>A readiness signal is useful only when it leads to a specific learning action. It is not a claim of competence or an assessment prediction.</p>
          <div className="button-row"><Link className="button primary" href="/practice">Start adaptive practice</Link><Link className="button secondary" href="/learn">Browse learning paths</Link></div>
        </div>
        <div className="readiness-score" aria-label={`Readiness signal ${readiness} percent`}>
          <span>Readiness signal</span><strong>{readiness}%</strong><small>Weighted toward safety-critical evidence</small>
        </div>
      </section>

      <section className="dashboard-grid" aria-label="Study plan and priority topics">
        <article className="panel today-plan">
          <div className="panel-heading"><div><span className="eyebrow">36 minutes</span><h2>Today&apos;s plan</h2></div><span className="step-count">3 activities</span></div>
          <ol>
            <li><span>1</span><div><strong>Isolation decision drill</strong><small>Critical evidence · 8 min</small></div><Link href="/practice">Begin</Link></li>
            <li><span>2</span><div><strong>Three-phase calculation set</strong><small>Worked examples · 16 min</small></div><Link href="/practice/calculators">Open</Link></li>
            <li><span>3</span><div><strong>Mixed recall checkpoint</strong><small>8 questions · 12 min</small></div><Link href="/practice">Begin</Link></li>
          </ol>
        </article>

        <article className="panel priorities">
          <div className="panel-heading"><div><span className="eyebrow">Evidence queue</span><h2>Priority topics</h2></div><Link href="/progress">Full report</Link></div>
          <ul>
            {priorities.map((module) => <li key={module.id}><div><Link href={`/learn/${module.id}`}>{module.title}</Link><span>{module.progress}%</span></div><ProgressBar value={module.progress} label={`${module.title} mastery`} /></li>)}
          </ul>
        </article>
      </section>

      <section className="capability-summary">
        <div><span className="eyebrow">Structured coverage</span><h2>11 learning paths across the 2024 EPC framework</h2><p>Content is organised around learner tasks and misconceptions rather than reproducing the sequence or wording of a standard.</p></div>
        <div className="summary-stats"><span><strong>11</strong>paths</span><span><strong>48</strong>capabilities mapped</span><span><strong>8</strong>original practice items</span></div>
      </section>
      <SourceNotice />
    </div>
  );
}
