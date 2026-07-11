export function buildSearchText(module) {
  return [module.title, module.summary, module.capabilityRange, ...(module.tags || []), ...(module.objectives || []), ...(module.sections || []).flatMap((section) => [section.title, ...section.paragraphs, ...section.points])].join(" ").toLowerCase();
}

export function searchModules(modules, query) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return modules;
  return modules.filter((module) => {
    const text = buildSearchText(module);
    return terms.every((term) => text.includes(term));
  });
}

export function backlinksFor(modules, id) {
  return modules.filter((module) => module.relatedModules.includes(id) || (module.prerequisites || []).includes(id));
}
