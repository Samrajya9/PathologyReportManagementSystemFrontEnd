import { useFormContext } from "react-hook-form";
import type { TResultValueTypeForm } from "../types/resultValueTypeForm.types";

export const useResultValueTypeFormContext = () => {
  return useFormContext<TResultValueTypeForm>();
};
