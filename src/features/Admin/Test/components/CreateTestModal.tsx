import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import TestForm from "./TestForm";
import { useTestForm } from "../hooks/useTestForm";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import type { testForm } from "../types/testForm.type";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import useCreateTest from "../hooks/mutations/useCreateTest";

const CreateTestModal = ({ onSuccess }: { onSuccess: () => void }) => {
  const methods = useTestForm();

  const { mutateAsync, isPending } = useCreateTest();

  const onSubmit: SubmitHandler<testForm> = async (data) => {
    try {
      if (data.resultValueType !== "Categorical") {
        delete data.resultValueOptions;
      }
      await mutateAsync(data);
      onSuccess();
      methods.reset();
    } catch (error) {
      console.error("Error creating Test:", error);
      toast.error("Failed to create Test");
    }
  };
  return (
    <DialogContent className="max-h-4/5 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Create Test</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <TestForm />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CreateTestModal;
