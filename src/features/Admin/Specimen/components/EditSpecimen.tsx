import { FormProvider, type SubmitHandler } from "react-hook-form";
import { useUpdateSpecimen } from "../hooks/mutations/useUpdateSpecimen";
import { useSpecimenForm } from "../hooks/useSpecimenForm";
import type { Specimen } from "../types/specimen.types";
import type { TSpecimenForm } from "../types/specimenForm.types";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import SpecimenForm from "./SpecimenForm";

interface EditSpecimenProps {
  specimen: Specimen;
  onSuccess: () => void;
}

const EditSpecimen: React.FC<EditSpecimenProps> = ({ specimen, onSuccess }) => {
  const { createdAt, updatedAt, id, ...formData } = specimen;
  const initialValues = {
    ...formData,
  };

  const methods = useSpecimenForm({ initialValues });
  const { handleSubmit } = methods;
  const { mutateAsync, isPending } = useUpdateSpecimen();

  const onSubmit: SubmitHandler<TSpecimenForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Specimen updated successfully");
      onSuccess();
    } catch (error) {
      console.error("Error updating specimen:", error);
      toast.error("Failed to update specimen");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <SpecimenForm />
        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onSuccess}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Update Specimen"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditSpecimen;
