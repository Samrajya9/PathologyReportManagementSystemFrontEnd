import { Button } from "@/components/ui/button";
import ResultValueTypeForm from "@/features/Admin/ResultValueTypes/components/ResultValueTypeForm";
import { useCreateResultValueType } from "@/features/Admin/ResultValueTypes/hooks/mutations/useCreateResultValueType";
import { useResultValueTypeForm } from "@/features/Admin/ResultValueTypes/hooks/useResultValueTypeForm";
import type { TResultValueTypeForm } from "@/features/Admin/ResultValueTypes/types/resultValueTypeForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateResultValueType = () => {
  const methods = useResultValueTypeForm();
  const { handleSubmit, reset } = methods;
  const { mutateAsync, isPending } = useCreateResultValueType();

  const onSubmit: SubmitHandler<TResultValueTypeForm> = async (formData) => {
    try {
      await mutateAsync(formData);
      toast.success("Result value type created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating result value type:", error);
      toast.error("Failed to create result value type");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        <ResultValueTypeForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Result Value Type"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateResultValueType;
