import { useForm } from "react-hook-form";
import type { TSpecimenForm } from "../types/specimenForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { specimenFormSchema } from "../schemas/specimenFormSchema";

const defaultValues: TSpecimenForm = {
  name: "",
};

interface UseSpecimenFormProps {
  initialValues?: TSpecimenForm;
}

export const useSpecimenForm = ({
  initialValues,
}: UseSpecimenFormProps = {}) => {
  const methods = useForm<TSpecimenForm>({
    defaultValues: initialValues || defaultValues,
    resolver: zodResolver(specimenFormSchema),
  });
  return methods;
};
