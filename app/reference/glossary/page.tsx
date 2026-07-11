import Link from "next/link";
import { glossary } from "@/content/glossary";
import { moduleById } from "@/content/modules";

export default function GlossaryPage() {
  return <main className="page-container reference-page"><Link className="back-link" href="/reference">← Reference library</Link><header className="page-header"><div><span className="eyebrow">Knowledge library</span><h1>Electrical glossary</h1><p>Plain-language definitions written for retrieval practice. Use authorised sources for formal definitions and requirements.</p></div></header><div className="glossary-list">{glossary.map((item) => <article id={item.term.toLowerCase().replaceAll(" ", "-")} key={item.term}><h2>{item.term}</h2><p>{item.definition}</p><div>{item.relatedModules.map((id) => { const learningPath = moduleById.get(id); return learningPath ? <Link key={id} href={`/learn/${id}`}>{learningPath.title}</Link> : null; })}</div></article>)}</div></main>;
}
