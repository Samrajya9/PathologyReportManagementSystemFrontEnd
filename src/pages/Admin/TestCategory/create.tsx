import { Button } from "@/components/ui/button";
import TestCategoryForm from "@/features/Admin/TestCategory/components/TestCategoryForm";
import useCreateTestCategory from "@/features/Admin/TestCategory/hooks/mutations/useCreateTestCategory";
import { useTestCategoryForm } from "@/features/Admin/TestCategory/hooks/useTestCategoryForm";
import type { testCategoryForm } from "@/features/Admin/TestCategory/types/testCategoryForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateTestCategory = () => {
  const moduleName = "Test category";
  const methods = useTestCategoryForm();
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useCreateTestCategory();

  const onSubmit: SubmitHandler<testCategoryForm> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success(`${moduleName} created successfully!`);
      reset();
    } catch (error) {
      console.error("Error creating department:", error);
      toast.error(`Failed to create ${moduleName} `);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        <TestCategoryForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateTestCategory;
