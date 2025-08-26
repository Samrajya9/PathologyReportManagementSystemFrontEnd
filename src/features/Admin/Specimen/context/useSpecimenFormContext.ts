import { useFormContext } from "react-hook-form";
import type { TSpecimenForm } from "../types/specimenForm.types";

export const useSpecimenFormContext = () => {
  return useFormContext<TSpecimenForm>();
};
