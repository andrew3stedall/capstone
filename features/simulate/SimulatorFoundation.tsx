"use client";

import { useState } from "react";

const terminals = ["Supply active", "Switch common", "Load active", "Neutral return"];

export function SimulatorFoundation() {
  const [source, setSource] = useState<string | null>(null);
  const [connections, setConnections] = useState<string[]>([]);

  function selectTerminal(terminal: string) {
    if (!source) { setSource(terminal); return; }
    if (source === terminal) { setSource(null); return; }
    setConnections((items) => [...items, `${source} → ${terminal}`]);
    setSource(null);
  }

  return (
    <section className="simulator-foundation">
      <div className="simulator-canvas panel">
        <div className="simulator-toolbar"><div><span className="eyebrow">Learning mode</span><strong>Connectivity interaction prototype</strong></div><button className="button secondary" type="button" onClick={() => { setConnections([]); setSource(null); }}>Reset</button></div>
        <p>Select a source terminal, then a destination. This validates the documented mobile-friendly interaction model; it does not simulate electrical behaviour.</p>
        <div className="terminal-grid">{terminals.map((terminal) => <button type="button" key={terminal} aria-pressed={source === terminal} onClick={() => selectTerminal(terminal)}><span aria-hidden="true" />{terminal}</button>)}</div>
        <div className="connection-log" aria-live="polite"><strong>Activity log</strong>{connections.length ? <ol>{connections.map((connection, index) => <li key={`${connection}-${index}`}>{connection}</li>)}</ol> : <p>No learner connections yet.</p>}</div>
      </div>
      <aside className="panel simulator-notes"><h2>Milestone 2 boundary</h2><p>The route, interaction shell and accessibility contract are now separated from the future graph engine.</p><ul><li>Tap-based terminal selection</li><li>Visible selected state</li><li>Easy reset</li><li>Activity logging</li><li>Keyboard-operable controls</li></ul><p>Electrical rules, readings and fault behaviour belong to later validated milestones.</p></aside>
    </section>
  );
}
