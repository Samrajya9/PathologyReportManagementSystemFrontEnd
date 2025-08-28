import z from "zod";

const specimenRequirementSchema = z.object({
  specimenId: z.number().int().min(1, "Specimen ID is required"),
  containerId: z.number().int().min(1, "Container ID is required"),
});

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

const resultValueOptionSchema = z.object({
  value: z.string(),
  isDefault: z.boolean(),
});

export const ResultValueTypeEnum = z.enum(["Numeric", "Text", "Categorical"]);

export const testFormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    price: z.number().min(0, "Price must be a positive number"),
    testUnitId: z.number().int().min(1, "Unit ID is required"),
    medicalDepartmentId: z.number().int().min(1, "Department ID is required"),
    resultValueType: ResultValueTypeEnum,
    resultValueOptions: z.array(resultValueOptionSchema).optional(),
    specimenRequirements: z
      .array(specimenRequirementSchema)
      .nonempty("At least one specimen requirement is required"),
    referenceRanges: z
      .array(referenceRangeSchema)
      .nonempty("At least one reference range is required"),
  })
  .superRefine((data, ctx) => {
    if (data.resultValueType === "Categorical") {
      if (!data.resultValueOptions || data.resultValueOptions.length === 0) {
        ctx.addIssue({
          path: ["resultValueOptions"],
          code: "custom",
          message: "resultValueOptions is required for categorical tests",
        });
      }
    }
  });
