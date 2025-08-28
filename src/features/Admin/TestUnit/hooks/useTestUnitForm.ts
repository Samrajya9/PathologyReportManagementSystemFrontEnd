import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TestUnitForm } from "../types/testUnitForm.types";
import { testUnitFormSchema } from "../schemas/testUnitForm.schema";

const defaultValue: TestUnitForm = {
  name: "",
};

interface useTestUnitFormProps {
  initialValue?: TestUnitForm;
}

const useTestUnitForm = ({ initialValue }: useTestUnitFormProps = {}) => {
  const methods = useForm<TestUnitForm>({
    defaultValues: initialValue || defaultValue,
    resolver: zodResolver(testUnitFormSchema),
  });
  return methods;
};

export default useTestUnitForm;
