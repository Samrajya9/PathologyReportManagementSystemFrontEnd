import { z } from "zod";
import type { containerFormSchema } from "../schemas/containerFormSchema";

export type TContainerForm = z.infer<typeof containerFormSchema>;
