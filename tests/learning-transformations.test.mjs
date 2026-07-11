import assert from "node:assert/strict";
import test from "node:test";
import { calculateReadiness, prioritiseTopics } from "../lib/learning-engine.mjs";

test("calculateReadiness weights safety-critical evidence", () => {
  const score = calculateReadiness([
    { mastery: 40, safetyCritical: true },
    { mastery: 100, safetyCritical: false },
  ]);
  assert.equal(score, 64);
});

test("calculateReadiness returns zero for no evidence", () => {
  assert.equal(calculateReadiness([]), 0);
});

test("prioritiseTopics combines weakness, recency and safety relevance", () => {
  const prioritised = prioritiseTopics([
    { id: "strong-old", mastery: 90, daysSinceReview: 20, safetyCritical: false },
    { id: "weak-recent-critical", mastery: 45, daysSinceReview: 1, safetyCritical: true },
    { id: "weak-recent", mastery: 45, daysSinceReview: 1, safetyCritical: false },
  ]);
  assert.deepEqual(prioritised.map((item) => item.id), ["weak-recent-critical", "weak-recent", "strong-old"]);
  assert.ok(prioritised[0].priority > prioritised[2].priority);
});
