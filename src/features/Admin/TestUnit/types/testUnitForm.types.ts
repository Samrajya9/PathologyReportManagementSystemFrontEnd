import { z } from "zod";
import type { testUnitFormSchema } from "../schemas/testUnitForm.schema";

export type TestUnitForm = z.infer<typeof testUnitFormSchema>;
