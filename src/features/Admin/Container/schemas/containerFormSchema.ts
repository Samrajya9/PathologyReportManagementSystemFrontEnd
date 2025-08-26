//src/features/Admin/Container/schemas/containerFormSchema.ts
import { z } from "zod";

export const containerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
