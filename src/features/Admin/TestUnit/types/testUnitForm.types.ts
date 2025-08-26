import { z } from "zod";
import type { testUnitFormSchema } from "../schemas/testUnitForm.schema";

export type TTestUnitForm = z.infer<typeof testUnitFormSchema>;
