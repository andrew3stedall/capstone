import type { LearningModule } from "./schema";

const officialSources = {
  erac: { label: "ERAC Essential Performance Capabilities for Electricians", sourceType: "framework" as const, edition: "2024", reference: "Capability mapping only", url: "https://www.erac.gov.au/licensing/essential-performance-capabilities-for-electricians/", reviewedOn: "2026-07-11" },
  swa: { label: "Safe Work Australia — Managing electrical risks in the workplace", sourceType: "official-public" as const, edition: "Current public edition", reference: "Safety context; check local adoption", url: "https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-electrical-risks-workplace", reviewedOn: "2026-07-11" },
  tga: { label: "training.gov.au — UEE30820", sourceType: "official-public" as const, edition: "Current register entry", reference: "Qualification scope", url: "https://training.gov.au/training/details/UEE30820", reviewedOn: "2026-07-11" },
  wiring: { label: "AS/NZS 3000", sourceType: "standard-reference" as const, edition: "2018 including applicable amendments", reference: "Reference only — consult an authorised copy", reviewedOn: "2026-07-11" },
};

export const knowledgeModules: Partial<Record<string, Pick<LearningModule, "contentStatus" | "updatedOn" | "reviewer" | "prerequisites" | "tags" | "sections" | "references">>> = {
  "safety-electrical-risk": {
    contentStatus: "review-required", updatedOn: "2026-07-11", reviewer: null, prerequisites: [], tags: ["risk", "isolation", "stop work", "energised work"], references: [officialSources.erac, officialSources.swa],
    sections: [
      { id: "why-risk-controls-matter", title: "Why risk controls matter", kind: "concept", paragraphs: ["Electrical work can expose people to shock, arc, fire and secondary injury. A capable apprentice slows the task down long enough to identify every energy source, the people who may be affected and the controls that must remain effective throughout the job."], points: ["Treat plans and labels as useful information, not proof", "Include alternate supplies and stored energy", "Stop when conditions differ from the plan"] },
      { id: "a-controlled-decision", title: "A controlled decision process", kind: "process", paragraphs: ["Begin by defining the task and its boundaries. Identify hazards, eliminate exposure where reasonably practicable, then select stronger controls before relying on administrative steps or personal protective equipment. Confirm who is responsible, how the state will be maintained and what would trigger a stop."], points: ["Define", "Identify", "Eliminate or minimise", "Confirm", "Monitor and stop if conditions change"] },
      { id: "scenario", title: "Scenario: the unexpected second source", kind: "scenario", paragraphs: ["You arrive to alter a circuit that the drawing shows as supplied from one board. A battery system is present but absent from the drawing. The correct response is not to continue cautiously: pause, protect the area and escalate until the complete source arrangement and an authorised safe method are established."], points: [] },
      { id: "recall", title: "Recall check", kind: "recall", paragraphs: ["Without looking back, name the five parts of the decision process. Then explain why a switched-off load is not evidence of effective isolation."], points: [] },
    ],
  },
  "electrical-fundamentals": {
    contentStatus: "review-required", updatedOn: "2026-07-11", reviewer: null, prerequisites: [], tags: ["voltage", "current", "resistance", "power", "units"], references: [officialSources.erac, officialSources.tga],
    sections: [
      { id: "relationships-not-formulas", title: "Relationships, not loose formulas", kind: "concept", paragraphs: ["Voltage, current, resistance and power describe different features of circuit behaviour. A formula is useful only after you identify the circuit quantity, choose a consistent unit system and test whether the result is plausible."], points: ["Write the known quantities with units", "Choose the relationship", "Rearrange before substituting", "Check scale, sign and units"] },
      { id: "worked-example", title: "Original example: a resistive load", kind: "example", paragraphs: ["A 48 V source supplies a 12 ohm resistive load. Using I = V/R gives 4 A. Power can be checked two ways: V × I and I²R both give 192 W. Agreement is a useful arithmetic check, not proof that the real installation is safe or suitable."], points: [] },
      { id: "measurement-thinking", title: "Measurement thinking", kind: "process", paragraphs: ["Before selecting an instrument function, state what quantity you expect, whether the circuit must be energised for that observation, and how the connection could affect the circuit. Use only instruments and methods authorised for the task and environment."], points: [] },
      { id: "recall", title: "Recall check", kind: "recall", paragraphs: ["Explain in words what happens to current in a fixed resistance if applied voltage increases. Then calculate the power of a 24 V load drawing 2.5 A."], points: [] },
    ],
  },
  "switchgear-control": {
    contentStatus: "review-required", updatedOn: "2026-07-11", reviewer: null, prerequisites: ["electrical-fundamentals"], tags: ["section 2", "switching", "isolation", "protection", "coordination"], references: [officialSources.erac, officialSources.wiring],
    sections: [
      { id: "three-jobs", title: "Three different jobs", kind: "concept", paragraphs: ["Control, switching, isolation and protection are related but not interchangeable ideas. Start by naming the job a device must perform. Only then assess whether its characteristics, installation and coordination make it suitable for that job."], points: ["Control manages operation", "Isolation supports separation from supply", "Protection responds to defined abnormal conditions"] },
      { id: "decision-sequence", title: "Plan, control, protect", kind: "process", paragraphs: ["Map the supply and circuit, identify loads and operating conditions, decide the control and isolation needs, identify foreseeable fault conditions, then coordinate conductors and protective devices. Exact selection requirements must come from the current authorised standard and local rules."], points: [] },
      { id: "common-trap", title: "Common trap: one device does everything", kind: "warning", paragraphs: ["A device name alone does not prove all required functions are provided. For example, residual-current protection addresses a particular type of risk but must not be assumed to replace every overcurrent, isolation or switching requirement."], points: [] },
      { id: "recall", title: "Recall check", kind: "recall", paragraphs: ["For a new final subcircuit, list the questions you would ask before choosing any device. Do not quote a table; focus on function, environment and coordination."], points: [] },
    ],
  },
  "isolation-testing-faults": {
    contentStatus: "review-required", updatedOn: "2026-07-11", reviewer: null, prerequisites: ["safety-electrical-risk", "switchgear-control"], tags: ["verification", "inspection", "testing", "evidence", "commissioning"], references: [officialSources.erac, officialSources.wiring, officialSources.swa],
    sections: [
      { id: "verification-is-evidence", title: "Verification is an evidence chain", kind: "concept", paragraphs: ["Verification is more than producing readings. It combines inspection, appropriate tests, interpretation and records to support a conclusion about completed work. Each result must be tied to the circuit, method, instrument and acceptance source."], points: [] },
      { id: "before-during-after", title: "Before, during and after", kind: "process", paragraphs: ["Before testing, define the installation boundary, sources, safe state and required evidence. During testing, control the area and record results without changing the method to chase a preferred answer. After testing, interpret the complete evidence set, resolve defects and restore the installation only through the authorised process."], points: ["Plan the evidence", "Inspect first", "Test safely", "Interpret as a set", "Record and hand over"] },
      { id: "result-without-context", title: "Scenario: a number without context", kind: "scenario", paragraphs: ["A worksheet contains a value but no circuit identity, instrument, method or acceptance reference. The number cannot carry the conclusion by itself. Reconstruct the missing context or repeat the activity through the authorised process."], points: [] },
      { id: "recall", title: "Recall check", kind: "recall", paragraphs: ["Describe why inspection belongs in verification and name four pieces of context that make a recorded result meaningful."], points: [] },
    ],
  },
};
