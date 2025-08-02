import { Button } from "@/components/ui/button";
import DepartmentForm from "@/features/Admin/Department/components/DepartmentForm";
import useCreateDepartment from "@/features/Admin/Department/hooks/mutations/useCreateDepartment";
import useDepartmentForm from "@/features/Admin/Department/hooks/useDepartmentForm";
import type { TDepartmentForm } from "@/features/Admin/Department/types/departmentForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";

const CreateDepartment = () => {
  const methods = useDepartmentForm();
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useCreateDepartment();

  const onSubmit: SubmitHandler<TDepartmentForm> = async (data) => {
    try {
      console.log(data);
      await mutateAsync(data);
      reset();
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

export default CreateDepartment;
