import { useFormContext } from "react-hook-form";
import type { TestUnitForm } from "../types/testUnitForm.types";

const useTestUnitFormContext = () => {
  return useFormContext<TestUnitForm>();
};

export default useTestUnitFormContext;
