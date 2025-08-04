import { useForm } from "react-hook-form";
import type { TContainerForm } from "../types/containerForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { containerFormSchema } from "../schemas/containerFormSchema";

const defaultValue: TContainerForm = {
  name: "",
};

interface useContainerFormProps {
  initialValue?: TContainerForm;
}

export const useContainerForm = ({
  initialValue,
}: useContainerFormProps = {}) => {
  const methods = useForm<TContainerForm>({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(containerFormSchema),
  });
  return methods;
};
