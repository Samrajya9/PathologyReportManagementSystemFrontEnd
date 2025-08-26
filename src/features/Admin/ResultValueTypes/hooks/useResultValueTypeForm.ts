import { useForm } from "react-hook-form";
import type { TResultValueTypeForm } from "../types/resultValueTypeForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { resultValueTypeFormSchema } from "../schemas/resultValueTypeFormSchema";

const defaultValues: TResultValueTypeForm = {
  name: "",
};

interface UseResultValueTypeFormProps {
  initialValues?: TResultValueTypeForm;
}

export const useResultValueTypeForm = ({
  initialValues,
}: UseResultValueTypeFormProps = {}) => {
  const methods = useForm<TResultValueTypeForm>({
    defaultValues: initialValues || defaultValues,
    resolver: zodResolver(resultValueTypeFormSchema),
  });
  return methods;
};
