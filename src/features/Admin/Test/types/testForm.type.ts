import { z } from "zod";
import type { testFormSchema } from "../schemas/testForm.schema";

export type testForm = z.infer<typeof testFormSchema>;
