import { z } from "zod";
import type { testCategoryFormSchema } from "../schemas/testCategoryForm.schema";

export type testCategoryForm = z.infer<typeof testCategoryFormSchema>;
