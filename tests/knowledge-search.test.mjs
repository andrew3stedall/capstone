import test from "node:test";
import assert from "node:assert/strict";
import { backlinksFor, searchModules } from "../lib/knowledge-search.mjs";

const modules = [
  { id: "safety", title: "Safety", summary: "Electrical risk", capabilityRange: "EPC 1", tags: ["isolation"], objectives: [], sections: [], relatedModules: [], prerequisites: [] },
  { id: "verify", title: "Verification", summary: "Evidence chain", capabilityRange: "EPC 2", tags: ["testing"], objectives: [], sections: [{ title: "Inspect first", paragraphs: ["Observe before measurement"], points: [] }], relatedModules: ["safety"], prerequisites: ["safety"] },
];

test("search indexes tags and structured lesson content", () => {
  assert.deepEqual(searchModules(modules, "isolation").map((item) => item.id), ["safety"]);
  assert.deepEqual(searchModules(modules, "observe measurement").map((item) => item.id), ["verify"]);
});

test("backlinks include related and prerequisite relationships", () => {
  assert.deepEqual(backlinksFor(modules, "safety").map((item) => item.id), ["verify"]);
});
