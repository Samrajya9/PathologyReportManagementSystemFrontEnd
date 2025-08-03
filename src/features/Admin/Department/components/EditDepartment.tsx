import type React from "react";

import useDepartmentForm from "../hooks/useDepartmentForm";
import type { Department } from "../types/department.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import type { TDepartmentForm } from "../types/departmentForm.types";
import DepartmentForm from "./DepartmentForm";
import { Button } from "@/components/ui/button";
import useUpdateDepartment from "../hooks/mutations/useUpdateDepartment";
import toast from "react-hot-toast";

interface EditDepartmentProps {
  data: Department;
  onSuccess: () => void;
}

const EditDepartment: React.FC<EditDepartmentProps> = ({ data, onSuccess }) => {
  const { createdAt, updatedAt, id, ...rest } = data;
  const initialValue = {
    ...rest,
    description: rest.description ?? undefined,
  };
  const methods = useDepartmentForm({ initialValue });
  const { handleSubmit } = methods;
  const { mutateAsync, isPending } = useUpdateDepartment();

  const onSubmit: SubmitHandler<TDepartmentForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Updated Sucessfully");
      onSuccess();
    } catch (error) {}
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        <DepartmentForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditDepartment;
