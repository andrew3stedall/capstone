export type GlossaryTerm = { term: string; definition: string; relatedModules: string[] };

export const glossary: GlossaryTerm[] = [
  { term: "Active conductor", definition: "A conductor intended to be energised during normal operation. Treat conductor identity as something to verify, not assume.", relatedModules: ["safety-electrical-risk", "electrical-fundamentals"] },
  { term: "Circuit protection", definition: "Measures intended to limit harmful effects from conditions such as overcurrent or earth fault. The required protection depends on the circuit and installation context.", relatedModules: ["switchgear-control"] },
  { term: "Effective isolation", definition: "A controlled state in which identified energy sources are disconnected, secured against reconnection and proven before work begins.", relatedModules: ["safety-electrical-risk", "isolation-testing-faults"] },
  { term: "Fault current", definition: "Current that flows because of an abnormal connection or insulation failure. Its path and magnitude influence protective-device operation.", relatedModules: ["electrical-fundamentals", "switchgear-control"] },
  { term: "Polarity", definition: "The relationship of conductors and terminals that ensures switching and connection occur in the intended part of a circuit.", relatedModules: ["isolation-testing-faults"] },
  { term: "Protective earthing", definition: "A fault-protection measure that provides a conductive path associated with exposed conductive parts and protective devices.", relatedModules: ["switchgear-control", "isolation-testing-faults"] },
  { term: "Verification", definition: "The evidence-building process used to establish that completed electrical work is suitable and safe before it is placed into service.", relatedModules: ["isolation-testing-faults"] },
];
