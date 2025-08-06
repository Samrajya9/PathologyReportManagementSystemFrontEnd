//src/pages/Admin/Container/create.tsx
import { Button } from "@/components/ui/button";
import ContainerForm from "@/features/Admin/Container/components/ContainerForm";
import { useCreateContainer } from "@/features/Admin/Container/hooks/mutations/useCreateContainer";
import { useContainerForm } from "@/features/Admin/Container/hooks/useContainerForm";
import type { TContainerForm } from "@/features/Admin/Container/types/containerForm.types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateContainer = () => {
  const methods = useContainerForm();
  const { handleSubmit, reset } = methods;
  const { mutateAsync, isPending } = useCreateContainer();

  const onSubmit: SubmitHandler<TContainerForm> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Container created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating container:", error);
      toast.error("Failed to create container");
    }
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

export default CreateContainer;
