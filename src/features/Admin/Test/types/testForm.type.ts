import { z } from "zod";
import type { testFormSchema } from "../schemas/testForm.schema";

export type TtestForm = z.infer<typeof testFormSchema>;
