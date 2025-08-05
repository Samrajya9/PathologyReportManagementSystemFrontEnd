import { useForm } from "react-hook-form";
import type { testCategoryForm } from "../types/testCategoryForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { testCategoryFormSchema } from "../schemas/testCategoryForm.schema";

const defaultValue: testCategoryForm = {
  name: "",
};

interface Props {
  initialValue?: testCategoryForm;
}

export const useTestCategoryForm = ({ initialValue }: Props = {}) => {
  return useForm({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(testCategoryFormSchema),
  });
};
