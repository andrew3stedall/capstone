import { modules } from "@/content/modules";
import { calculateReadiness } from "@/lib/learning-engine.mjs";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function ProgressDashboard() {
  const readiness = calculateReadiness(modules.map((module) => ({ mastery: module.progress, safetyCritical: module.safetyCritical })));
  return <><section className="progress-overview"><article className="panel progress-primary"><span className="eyebrow">Readiness evidence</span><strong>{readiness}%</strong><h2>Useful direction, not a competency judgement.</h2><p>Testing, special installations and earthing currently deserve the most deliberate review.</p></article><article className="panel progress-stats"><div><span>Questions answered</span><strong>284</strong></div><div><span>Study sessions</span><strong>21</strong></div><div><span>Safety errors to revisit</span><strong>3</strong></div></article></section><section className="panel mastery-table"><div className="panel-heading"><div><span className="eyebrow">Capability groups</span><h2>Evidence by learning path</h2></div><span className="step-count">Updated today</span></div>{modules.map((module) => <div className="mastery-row" key={module.id}><span><strong>{module.title}</strong><small>{module.capabilityRange}</small></span><ProgressBar value={module.progress} label={`${module.title} mastery`} /><strong>{module.progress}%</strong><span>{module.progress < 60 ? "Prioritise" : module.progress < 75 ? "Develop" : "Maintain"}</span></div>)}</section></>;
}
