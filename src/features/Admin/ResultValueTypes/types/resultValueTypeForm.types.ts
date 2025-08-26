import { z } from "zod";
import type { resultValueTypeFormSchema } from "../schemas/resultValueTypeFormSchema";

export type TResultValueTypeForm = z.infer<typeof resultValueTypeFormSchema>;
