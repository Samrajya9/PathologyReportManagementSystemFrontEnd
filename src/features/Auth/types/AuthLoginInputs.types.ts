//src/features/Admin/Container/types/containerForm.types.ts
import { z } from "zod";
import type { authLoginSchema } from "../schemas/authLoginSchema";

export type AuthLoginInputs = z.infer<typeof authLoginSchema>;
