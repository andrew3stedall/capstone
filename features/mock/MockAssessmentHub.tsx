"use client";

import { useEffect, useState } from "react";

const options = [
  { name: "Quick circuit", minutes: 30, questions: 20, note: "A focused mixed-domain check" },
  { name: "Theory rehearsal", minutes: 90, questions: 60, note: "Long-form pacing practice" },
  { name: "Safety evidence", minutes: 45, questions: 30, note: "Safety-weighted review" },
];

export function MockAssessmentHub() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => { if (remaining === null || remaining <= 0) return; const timer = window.setInterval(() => setRemaining((value) => value === null ? null : value - 1), 1000); return () => window.clearInterval(timer); }, [remaining]);
  if (remaining !== null) return <section className="panel mock-running"><span className="eyebrow">Rehearsal timer</span><strong>{String(Math.floor(remaining / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}</strong><h2>Assessment-mode shell is active</h2><p>This milestone preserves timing and mode concepts without claiming a universal RTO format or pass mark.</p><button className="button secondary" type="button" onClick={() => setRemaining(null)}>Save and exit</button></section>;
  return <div className="mock-grid">{options.map((option) => <article className="panel mock-option" key={option.name}><span aria-hidden="true" className="mock-icon">◷</span><h2>{option.name}</h2><p>{option.note}</p><dl><div><dt>Time</dt><dd>{option.minutes} min</dd></div><div><dt>Questions</dt><dd>{option.questions}</dd></div></dl><ul><li>Mixed capability coverage</li><li>Flag and review</li><li>Reasoning report</li></ul><button className="button primary" type="button" onClick={() => setRemaining(option.minutes * 60)}>Start rehearsal</button></article>)}</div>;
}
