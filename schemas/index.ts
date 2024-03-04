import { z } from "zod";
export const navSchema = z.object({
  search: z.string(),
});
