import Link from "next/link";
import type { LearningModule } from "@/content/schema";
import { modules } from "@/content/modules";
import { backlinksFor } from "@/lib/knowledge-search.mjs";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function KnowledgeArticle({ module }: { module: LearningModule }) {
  const related = module.relatedModules.map((id) => modules.find((item) => item.id === id)).filter(Boolean);
  const backlinks = backlinksFor(modules, module.id);
  return <article className="page-container lesson-layout"><div className="lesson-main">
    <Link className="back-link" href="/learn">← Knowledge library</Link>
    <header className="lesson-header"><div className="module-meta"><span>{module.capabilityRange}</span><StatusBadge tone="warning">{module.safetyCritical ? "Safety-critical" : "Supporting"}</StatusBadge><StatusBadge tone="info">Review required</StatusBadge></div><h1>{module.title}</h1><p>{module.summary}</p><p className="lesson-byline">Original learning content · Updated {module.updatedOn ?? "2026-07-11"} · No technical reviewer assigned</p></header>
    <SourceNotice />
    <section id="objectives"><h2>Learning objectives</h2><ul className="check-list">{module.objectives.map((item) => <li key={item}>{item}</li>)}</ul></section>
    {module.sections.map((section) => <section id={section.id} key={section.id} className={section.kind === "warning" ? "lesson-section warning-section" : "lesson-section"}><span className="section-kicker">{section.kind}</span><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points.length ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}
    <section id="common-errors"><h2>Common errors to challenge</h2><ul>{module.commonErrors.map((error) => <li key={error}>{error}</li>)}</ul></section>
    <section id="practice"><h2>Put it into practice</h2><p>Answer an original scenario and use the explanation to identify the decision behind the answer.</p><Link className="button primary" href={`/practice?module=${module.id}`}>Practise this module</Link></section>
    <section id="sources"><h2>Sources and currency</h2><p className="source-currency">These references support topic scope and currency. Exact requirements must be checked in authorised current sources and applicable jurisdictional rules.</p>{module.references.map((reference) => <div className="reference-record" key={reference.label}><strong>{reference.label}</strong><span>{reference.edition} · {reference.reference}</span><span>Source checked {reference.reviewedOn}</span>{reference.url ? <a href={reference.url} target="_blank" rel="noreferrer">Official source ↗</a> : null}</div>)}</section>
  </div><aside className="lesson-aside"><nav aria-label="On this page"><strong>On this page</strong><a href="#objectives">Objectives</a>{module.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#sources">Sources</a></nav><div><strong>Connected knowledge</strong>{related.map((item) => item ? <Link key={item.id} href={`/learn/${item.id}`}>{item.title}</Link> : null)}{backlinks.map((item: LearningModule) => <Link key={`back-${item.id}`} href={`/learn/${item.id}`}>Referenced by: {item.title}</Link>)}<Link href="/reference/glossary">Open glossary</Link></div></aside></article>;
}
