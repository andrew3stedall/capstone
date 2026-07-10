/**
 * Calculate a weighted readiness score without presenting it as competence.
 * Safety-critical records receive additional weight.
 * @param {{ mastery: number, safetyCritical?: boolean }[]} records
 */
export function calculateReadiness(records) {
  if (!records.length) return 0;
  const totals = records.reduce(
    (result, record) => {
      const weight = record.safetyCritical ? 1.5 : 1;
      return { weighted: result.weighted + record.mastery * weight, weight: result.weight + weight };
    },
    { weighted: 0, weight: 0 },
  );
  return Math.round(totals.weighted / totals.weight);
}

/**
 * Order topics for review using weakness, recency and safety relevance.
 * @param {{ id: string, mastery: number, daysSinceReview: number, safetyCritical?: boolean }[]} records
 */
export function prioritiseTopics(records) {
  return [...records]
    .map((record) => ({
      ...record,
      priority: Math.max(0, 100 - record.mastery) + Math.min(record.daysSinceReview, 30) * 2 + (record.safetyCritical ? 15 : 0),
    }))
    .sort((a, b) => b.priority - a.priority || a.id.localeCompare(b.id));
}
