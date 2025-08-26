import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ResultValueTypeForm from "@/features/Admin/ResultValueTypes/components/ResultValueTypeForm";
import { useCreateResultValueType } from "@/features/Admin/ResultValueTypes/hooks/mutations/useCreateResultValueType";
import { useResultValueTypeForm } from "@/features/Admin/ResultValueTypes/hooks/useResultValueTypeForm";
import type { TResultValueTypeForm } from "@/features/Admin/ResultValueTypes/types/resultValueTypeForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateResultValueTypeModal = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const methods = useResultValueTypeForm();
  const { handleSubmit, reset } = methods;
  const { mutateAsync, isPending } = useCreateResultValueType();

  const onSubmit: SubmitHandler<TResultValueTypeForm> = async (formData) => {
    try {
      await mutateAsync(formData);
      toast.success("Result value type created successfully!");
      reset();
      onSuccess();
    } catch (error) {
      console.error("Error creating result value type:", error);
      toast.error("Failed to create result value type");
    }
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Test category</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <ResultValueTypeForm />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Result Value Type"}
          </Button>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CreateResultValueTypeModal;
