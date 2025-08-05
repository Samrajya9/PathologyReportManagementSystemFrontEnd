import { useFormContext } from "react-hook-form";
import type { TTestUnitForm } from "../types/testUnitForm.types";

const useTestUnitFormContext = () => {
  return useFormContext<TTestUnitForm>();
};

export default useTestUnitFormContext;
