import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { testFormSchema } from "../schemas/testForm.schema";
import type { testForm } from "../types/testForm.type";

const defaultValue: testForm = {
  name: "",
  price: 0,
  testUnitId: 0,
  medicalDepartmentId: 0,
  resultValueType: "Text",
  resultValueOptions: [{ value: "", isDefault: false }],
  specimenRequirements: [{ specimenId: 0, containerId: 0 }],
  referenceRanges: [
    {
      gender: "male",
      age_min_years: 0,
      age_max_years: 0,
      normal_min: 0,
      normal_max: 0,
      critical_min: 0,
      critical_max: 0,
      notes: "",
    },
  ],
};

interface useTestFormProps {
  initialValue?: testForm;
}
export const useTestForm = ({ initialValue }: useTestFormProps = {}) => {
  return useForm<testForm>({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(testFormSchema),
  });
};
