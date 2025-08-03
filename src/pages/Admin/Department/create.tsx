import { Button } from "@/components/ui/button";
import DepartmentForm from "@/features/Admin/Department/components/DepartmentForm";
import {
  useCreateDepartment,
  useDepartmentForm,
} from "@/features/Admin/Department/hooks";
import type { TDepartmentForm } from "@/features/Admin/Department/types";

import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateDepartment = () => {
  const methods = useDepartmentForm();
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useCreateDepartment();

  const onSubmit: SubmitHandler<TDepartmentForm> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Department created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating department:", error);
      toast.error("Failed to create department");
    }
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

export default CreateDepartment;
