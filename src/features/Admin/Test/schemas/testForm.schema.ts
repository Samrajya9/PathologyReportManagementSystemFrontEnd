import z from "zod";

const specimenRequirementSchema = z.object({
  specimenId: z.number().int().min(1, "Specimen ID is required"),
  containerId: z.number().int().min(1, "Container ID is required"),
});

// Sub-schema for referenceRanges
const referenceRangeSchema = z.object({
  age_min_years: z.number(),
  age_max_years: z.number(),
  gender: z.enum(["any", "male", "female"]),
  normal_min: z.number(),
  normal_max: z.number(),
  critical_min: z.number(),
  critical_max: z.number(),
  notes: z.string().optional(),
});

export const testFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(0, "Price must be a positive number"),
  testUnitId: z.number().int().min(1, "Unit ID is required"),
  medicalDepartmentId: z.number().int().min(1, "Department ID is required"),
  resultValueTypeId: z
    .number()
    .int()
    .min(1, "Result Value Type ID is required"),
  specimenRequirements: z
    .array(specimenRequirementSchema)
    .nonempty("At least one specimen requirement is required"),
  referenceRanges: z
    .array(referenceRangeSchema)
    .nonempty("At least one reference range is required"),
});
