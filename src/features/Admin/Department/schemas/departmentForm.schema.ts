//src/features/Admin/Department/schemas/departmentForm.schema.ts

import { z } from "zod";

export const departmentFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(), // allow null too
});
