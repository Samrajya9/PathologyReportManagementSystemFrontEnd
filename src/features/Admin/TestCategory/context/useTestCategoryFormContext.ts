import { useFormContext } from "react-hook-form";
import type { testCategoryForm } from "../types/testCategoryForm.types";

const useTestCategoryFormContext = () => {
  return useFormContext<testCategoryForm>();
};

export default useTestCategoryFormContext;
