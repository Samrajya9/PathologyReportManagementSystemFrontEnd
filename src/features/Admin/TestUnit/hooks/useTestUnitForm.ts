import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TTestUnitForm } from "../types/testUnitForm.types";
import { testUnitFormSchema } from "../schemas/testUnitForm.schema";

const defaultValue: TTestUnitForm = {
  name: "",
};

interface useTestUnitFormProps {
  initialValue?: TTestUnitForm;
}

const useTestUnitForm = ({ initialValue }: useTestUnitFormProps = {}) => {
  const methods = useForm<TTestUnitForm>({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(testUnitFormSchema),
  });
  return methods;
};

export default useTestUnitForm;
