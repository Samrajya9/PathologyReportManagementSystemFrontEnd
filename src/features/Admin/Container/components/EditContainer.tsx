import { FormProvider, type SubmitHandler } from "react-hook-form";
import useUpdateContainer from "../hooks/mutations/useUpdateContainer";
import { useContainerForm } from "../hooks/useContainerForm";
import type { Container } from "../types/container.types";
import type { TContainerForm } from "../types/containerForm.types";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import ContainerForm from "./ContainerForm";

interface EditContainerProps {
  data: Container;
  onSuccess: () => void;
}

const EditContainer: React.FC<EditContainerProps> = ({ data, onSuccess }) => {
  const { createdAt, updatedAt, id, ...rest } = data;
  const initialValue = {
    ...rest,
  };
  const methods = useContainerForm({ initialValue });
  const { handleSubmit } = methods;
  const { mutateAsync, isPending } = useUpdateContainer();

  const onSubmit: SubmitHandler<TContainerForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Updated Sucessfully");
      onSuccess();
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        <ContainerForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditContainer;
