//src/features/Admin/Container/context/useContainerFormContext.ts
import { useFormContext } from "react-hook-form";
import type { TContainerForm } from "../types/containerForm.types";

export const useContainerFormContext = () => {
  return useFormContext<TContainerForm>();
};
