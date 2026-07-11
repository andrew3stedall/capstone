const reviewItems = [
  { type: "Warning", title: "Isolation must account for alternate supplies", due: "Due now", context: "Energy systems" },
  { type: "Formula", title: "Balanced three-phase real power", due: "Today", context: "Electrical fundamentals" },
  { type: "Concept", title: "RCD and overcurrent protection have different roles", due: "Tomorrow", context: "Switchgear and control" },
];

export function ReviewHub() {
  return <div className="review-grid"><section className="panel review-queue"><div className="panel-heading"><div><span className="eyebrow">Spaced retrieval foundation</span><h2>Due review</h2></div><span className="step-count">3 items</span></div>{reviewItems.map((item) => <article key={item.title}><span className={`review-type ${item.type.toLowerCase()}`}>{item.type}</span><div><strong>{item.title}</strong><small>{item.context}</small></div><span>{item.due}</span><button className="button secondary" type="button">Review</button></article>)}</section><aside className="panel notebook-preview"><span className="eyebrow">Personal notebook</span><h2>Highlight-to-learn is planned for Milestone 4.</h2><p>The route and semantic review categories are established now so future highlights, notes and flashcards have a stable home.</p><ul><li>Key rules</li><li>Concepts</li><li>Procedures</li><li>Warnings</li><li>Formulae</li><li>Questions</li></ul></aside></div>;
}
