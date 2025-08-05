import { FormProvider, type SubmitHandler } from "react-hook-form";
import { useTestCategoryForm } from "../hooks/useTestCategoryForm";
import type { TestCategory } from "../types/testCategory.types";
import { Button } from "@/components/ui/button";
import type { testCategoryForm } from "../types/testCategoryForm.types";
import toast from "react-hot-toast";
import TestCategoryForm from "./TestCategoryForm";
import useUpdateTestCategory from "../hooks/mutations/useUpdateTestCategory";

interface Props {
  data: TestCategory;
  onSuccess: () => void;
}
const EditTestCategoryForm = ({ data, onSuccess }: Props) => {
  const { createdAt, updatedAt, id, ...rest } = data;
  const initialValue = {
    ...rest,
  };

  const methods = useTestCategoryForm({ initialValue });
  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useUpdateTestCategory();
  const onSubmit: SubmitHandler<testCategoryForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Updated Sucessfully");
      onSuccess();
    } catch (error) {}
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

export default EditTestCategoryForm;
