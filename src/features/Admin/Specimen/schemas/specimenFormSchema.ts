import { z } from "zod";

export const specimenFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
