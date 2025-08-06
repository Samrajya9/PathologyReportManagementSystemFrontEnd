import { FormProvider, type SubmitHandler } from "react-hook-form";
import { useUpdateResultValueType } from "../hooks/mutations/useUpdateResultValueType";
import { useResultValueTypeForm } from "../hooks/useResultValueTypeForm";
import type { ResultValueType } from "../types/resultValueType.types";
import type { TResultValueTypeForm } from "../types/resultValueTypeForm.types";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import ResultValueTypeForm from "./ResultValueTypeForm";

interface EditResultValueTypeProps {
  resultValueType: ResultValueType;
  onSuccess: () => void;
}

const EditResultValueType: React.FC<EditResultValueTypeProps> = ({
  resultValueType,
  onSuccess,
}) => {
  const { createdAt, updatedAt, id, ...formData } = resultValueType;
  const initialValues: TResultValueTypeForm = {
    ...formData,
  };

  const methods = useResultValueTypeForm({ initialValues });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  const { mutateAsync, isPending } = useUpdateResultValueType();

  const onSubmit: SubmitHandler<TResultValueTypeForm> = async (formData) => {
    try {
      await mutateAsync({ id: String(id), formData });
      toast.success("Result value type updated successfully");
      onSuccess();
    } catch (error) {
      console.error("Error updating result value type:", error);
      toast.error("Failed to update result value type");
    }
  };

  const handleCancel = () => {
    onSuccess();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ResultValueTypeForm />

        <div className="flex gap-2 justify-end pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending || !isDirty}>
            {isPending ? "Updating..." : "Update Result Value Type"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditResultValueType;
