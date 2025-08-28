//src/features/Admin/Test/types/test.types.ts
import type z from "zod";
import type { Department } from "../../Department/types";
import type { TestUnit } from "../../TestUnit/types/testUnit.types";
import type { ResultValueTypeEnum } from "../schemas/testForm.schema";
import type { Specimen } from "../../Specimen/types/specimen.types";
import type { Container } from "react-dom/client";
import type { Response } from "@/types/Respose.types";

export type ResultValueTypeEnumType = z.infer<typeof ResultValueTypeEnum>;

export type Test = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  price: string;
  resultValueType: ResultValueTypeEnumType;
  testUnit: TestUnit;
  medicalDepartment: Department;
  referenceRanges: {
    id: number;
    createdAt: string;
    updatedAt: string;
    age_min_years: string;
    age_max_years: string;
    gender: "male" | "female" | "any";
    normal_min: string;
    normal_max: string;
    critical_min: string;
    critical_max: string;
    notes: string;
  }[];
  resultValueOptions: {
    value?: string;
    isDefault?: boolean;
  }[];
  specimenRequirements: {
    id: number;
    createdAt: string;
    updatedAt: string;
    specimen: Specimen;
    container: Container;
  }[];
};

export type TestResponse = Response & {
  data: Test;
};
