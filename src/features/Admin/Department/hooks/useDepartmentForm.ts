// src/features/Admin/Department/hooks/useDepartmentForm.ts

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { departmentFormSchema } from "../schemas/departmentForm.schema";
import type { TDepartmentForm } from "../types/departmentForm.types";

const defaultValue: TDepartmentForm = {
  name: "",
  description: "",
};

interface UseDepartmentFormProps {
  initialValue?: TDepartmentForm;
}

export const useDepartmentForm = ({
  initialValue,
}: UseDepartmentFormProps = {}) => {
  const methods = useForm<TDepartmentForm>({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(departmentFormSchema),
  });

  return methods;
};
