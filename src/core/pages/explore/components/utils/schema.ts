import { z } from "zod";

export const exploreSchema = z.object({
  query: z.string().min(1, "El nombre de personaje es obligatorio"),
});

export type ExploreFormType = z.infer<typeof exploreSchema>;
