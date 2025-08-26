//src/features/Admin/Department/context/useDepartmentFormContext.ts
import { useFormContext } from "react-hook-form";
import type { TDepartmentForm } from "../types/departmentForm.types";

const useDepartmentFormContext = () => {
  return useFormContext<TDepartmentForm>();
};

export default useDepartmentFormContext;
