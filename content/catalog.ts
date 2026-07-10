import { learningCatalogSchema } from "./schema";
import { modules } from "./modules";
import { questions } from "./questions";

export const catalog = learningCatalogSchema.parse({ modules, questions });
