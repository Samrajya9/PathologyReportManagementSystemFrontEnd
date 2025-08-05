import { Button } from "@/components/ui/button";
import TestUnitForm from "@/features/Admin/TestUnit/components/TestUnitForm";
import { useCreateTestUnit } from "@/features/Admin/TestUnit/hooks/mutations/useCreateTestUnit";
import useTestUnitForm from "@/features/Admin/TestUnit/hooks/useTestUnitForm";
import type { TTestUnitForm } from "@/features/Admin/TestUnit/types/testUnitForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateTestUnit = () => {
  const methods = useTestUnitForm();
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useCreateTestUnit();

  const onSubmit: SubmitHandler<TTestUnitForm> = async (data) => {
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
        <TestUnitForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateTestUnit;
