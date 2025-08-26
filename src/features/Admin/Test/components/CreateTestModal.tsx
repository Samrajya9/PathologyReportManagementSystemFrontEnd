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

const CreateTestModal = ({}: { onSuccess: () => void }) => {
  const methods = useTestForm();

  const onSubmit: SubmitHandler<testForm> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error creating container:", error);
      toast.error("Failed to create container");
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
          <Button type="submit">
            {methods.formState.isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CreateTestModal;
