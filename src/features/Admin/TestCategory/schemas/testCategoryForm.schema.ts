import { z } from "zod";

export const testCategoryFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
