import toast from "react-hot-toast";
import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SpecimenForm from "@/features/Admin/Specimen/components/SpecimenForm";
import { useCreateSpecimen } from "@/features/Admin/Specimen/hooks/mutations/useCreateSpecimen";
import { useSpecimenForm } from "@/features/Admin/Specimen/hooks/useSpecimenForm";
import type { TSpecimenForm } from "@/features/Admin/Specimen/types/specimenForm.types";

import { FormProvider, type SubmitHandler } from "react-hook-form";
const CreateSpecimenModal = ({ onSuccess }: { onSuccess: () => void }) => {
  const methods = useSpecimenForm();
  const { handleSubmit, reset } = methods;
  const { mutateAsync, isPending } = useCreateSpecimen();

  const onSubmit: SubmitHandler<TSpecimenForm> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Specimen created successfully!");
      onSuccess();
      reset();
    } catch (error) {
      console.error("Error creating specimen:", error);
      toast.error("Failed to create specimen");
    }
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Specimen</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <SpecimenForm />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Specimen"}
          </Button>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CreateSpecimenModal;
