import { z } from "zod";
import type { specimenFormSchema } from "../schemas/specimenFormSchema";

export type TSpecimenForm = z.infer<typeof specimenFormSchema>;
