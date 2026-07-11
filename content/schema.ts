import { z } from "zod";

export const sourceReferenceSchema = z.object({
  label: z.string().min(1),
  sourceType: z.enum(["framework", "official-public", "standard-reference"]),
  edition: z.string().min(1),
  reference: z.string().min(1),
  url: z.string().url().optional(),
  reviewedOn: z.string().date(),
});

export const learningModuleSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(3),
  summary: z.string().min(20),
  domain: z.enum([
    "safety",
    "fundamentals",
    "design",
    "energy",
    "conductors",
    "protection",
    "equipment",
    "earthing",
    "machines",
    "verification",
    "specialist",
  ]),
  level: z.enum(["foundation", "intermediate", "capstone"]),
  jurisdiction: z.enum(["AU", "state-specific", "general"]),
  sourceStatus: z.enum(["original-summary", "official-public", "licensed-reference"]),
  contentStatus: z.enum(["seed", "outline", "draft-unverified", "review-required", "technically-reviewed"]),
  safetyCritical: z.boolean(),
  capabilityRange: z.string().min(1),
  estimatedMinutes: z.number().int().positive(),
  progress: z.number().min(0).max(100),
  objectives: z.array(z.string().min(5)).min(2),
  commonErrors: z.array(z.string().min(5)).min(1),
  relatedModules: z.array(z.string()),
  references: z.array(sourceReferenceSchema).min(1),
  prerequisites: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  updatedOn: z.string().date().optional(),
  reviewer: z.string().nullable().optional(),
  sections: z.array(z.object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(3),
    kind: z.enum(["concept", "process", "example", "scenario", "recall", "warning"]),
    paragraphs: z.array(z.string().min(20)).min(1),
    points: z.array(z.string().min(5)).default([]),
  })).default([]),
});

export const practiceQuestionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  moduleId: z.string().min(1),
  prompt: z.string().min(15),
  options: z.array(z.string().min(1)).length(4),
  answerIndex: z.number().int().min(0).max(3),
  explanation: z.string().min(20),
  misconception: z.string().min(5),
  safetyCritical: z.boolean(),
  contentStatus: z.literal("draft-unverified"),
});

export const learningCatalogSchema = z.object({
  modules: z.array(learningModuleSchema).min(1),
  questions: z.array(practiceQuestionSchema).min(1),
});

export type LearningModule = z.infer<typeof learningModuleSchema>;
export type PracticeQuestion = z.infer<typeof practiceQuestionSchema>;
export type SourceReference = z.infer<typeof sourceReferenceSchema>;
