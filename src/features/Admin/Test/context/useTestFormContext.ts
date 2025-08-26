import { useFormContext } from "react-hook-form";
import type { testForm } from "../types/testForm.type";

export const useTestFormContext = () => {
  return useFormContext<testForm>();
};
