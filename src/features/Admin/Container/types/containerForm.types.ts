//src/features/Admin/Container/types/containerForm.types.ts
import { z } from "zod";
import type { containerFormSchema } from "../schemas/containerFormSchema";

export type TContainerForm = z.infer<typeof containerFormSchema>;
