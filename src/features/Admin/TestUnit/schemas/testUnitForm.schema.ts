import { z } from "zod";

export const testUnitFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
