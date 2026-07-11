import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, moduleById } from "@/content/modules";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function generateStaticParams() { return modules.map((module) => ({ module: module.id })); }

export default async function LearningModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleId } = await params;
  const learningModule = moduleById.get(moduleId);
  if (!learningModule) notFound();
  const related = learningModule.relatedModules.map((id) => moduleById.get(id)).filter(Boolean);

  return (
    <article className="page-container lesson-layout">
      <div className="lesson-main">
        <Link className="back-link" href="/learn">← All learning paths</Link>
        <header className="lesson-header"><div className="module-meta"><span>{learningModule.capabilityRange}</span><StatusBadge tone={learningModule.safetyCritical ? "warning" : "neutral"}>{learningModule.safetyCritical ? "Safety-critical" : "Supporting"}</StatusBadge><StatusBadge tone="info">{learningModule.contentStatus}</StatusBadge></div><h1>{learningModule.title}</h1><p>{learningModule.summary}</p></header>
        <SourceNotice />
        <section><h2>What you will learn</h2><ul className="check-list">{learningModule.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></section>
        <section><h2>Why it matters</h2><p>This path connects conceptual knowledge to the decisions, observations and explanations expected during electrical work and assessment preparation. It deliberately directs learners to current authorised sources for exact requirements.</p></section>
        <section className="semantic-callout concept"><span aria-hidden="true">i</span><div><strong>Learning model</strong><p>Study the concept, retrieve it without prompts, then apply it in a fresh scenario. One correct answer is evidence—not mastery.</p></div></section>
        <section><h2>Common errors to challenge</h2><ul>{learningModule.commonErrors.map((error) => <li key={error}>{error}</li>)}</ul></section>
        <section><h2>Practice activity</h2><p>Use the adaptive practice route to answer an original scenario mapped to this capability group. Explanations identify the misconception being tested.</p><Link className="button primary" href={`/practice?module=${learningModule.id}`}>Practise this path</Link></section>
        <section><h2>References and currency</h2>{learningModule.references.map((reference) => <div className="reference-record" key={reference.label}><strong>{reference.label}</strong><span>{reference.edition} · {reference.reference}</span><span>Reviewed {reference.reviewedOn}</span>{reference.url ? <a href={reference.url} target="_blank" rel="noreferrer">Official source ↗</a> : null}</div>)}</section>
      </div>
      <aside className="lesson-aside"><nav aria-label="On this page"><strong>On this page</strong><a href="#main-content">Overview</a><span>Learning objectives</span><span>Common errors</span><span>Practice activity</span><span>References</span></nav><div><strong>Related paths</strong>{related.map((item) => item ? <Link key={item.id} href={`/learn/${item.id}`}>{item.title}</Link> : null)}</div></aside>
    </article>
  );
}
