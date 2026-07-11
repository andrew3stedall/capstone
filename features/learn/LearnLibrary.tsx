"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LearningModule } from "@/content/schema";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { searchModules } from "@/lib/knowledge-search.mjs";

export function LearnLibrary({ modules }: { modules: LearningModule[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "critical" | "priority">("all");
  const filtered: LearningModule[] = useMemo(() => searchModules(modules, query).filter((module: LearningModule) => {
    return filter === "all" || (filter === "critical" && module.safetyCritical) || (filter === "priority" && module.progress < 60);
  }), [modules, query, filter]);

  return (
    <>
      <div className="library-controls">
        <label className="search-field"><span>Search modules and lesson content</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try isolation, power or verification" /></label>
        <div className="segmented" aria-label="Filter learning paths">
          {(["all", "critical", "priority"] as const).map((option) => <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>{option === "all" ? "All paths" : option === "critical" ? "Safety-critical" : "Needs attention"}</button>)}
        </div>
      </div>
      <div className="module-grid">
        {filtered.map((module) => (
          <article className="module-card" key={module.id}>
            <div className="module-meta"><span>{module.capabilityRange}</span>{module.safetyCritical ? <StatusBadge tone="warning">Safety-critical</StatusBadge> : <StatusBadge>Supporting</StatusBadge>}</div>
            {module.sections.length ? <div className="review-ribbon">Full lesson · {module.contentStatus === "review-required" ? "technical review required" : module.contentStatus}</div> : null}
            <h2><Link href={`/learn/${module.id}`}>{module.title}</Link></h2>
            <p>{module.summary}</p>
            <div className="module-progress"><div><span>Current evidence</span><strong>{module.progress}%</strong></div><ProgressBar value={module.progress} label={`${module.title} progress`} /></div>
            <footer><span>{module.estimatedMinutes} min path</span><Link href={`/learn/${module.id}`}>Open path <span aria-hidden="true">→</span></Link></footer>
          </article>
        ))}
      </div>
      {!filtered.length ? <div className="empty-state"><h2>No learning paths match</h2><p>Try a broader search or clear the current filter.</p><button className="button secondary" onClick={() => { setQuery(""); setFilter("all"); }}>Clear filters</button></div> : null}
    </>
  );
}
