//src/features/Admin/Department/types/departmentForm.types.ts
import type { departmentFormSchema } from "../schemas/departmentForm.schema";
import { z } from "zod";

export type TDepartmentForm = z.infer<typeof departmentFormSchema>;
