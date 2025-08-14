import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import DepartmentForm from "./DepartmentForm";
import type { TDepartmentForm } from "@/features/Admin/Department/types";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
  useCreateDepartment,
  useDepartmentForm,
} from "@/features/Admin/Department/hooks";
import { Button } from "@/components/ui/button";

const CreateDepartmentModal = ({ onSuccess }: { onSuccess: () => void }) => {
  const methods = useDepartmentForm();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { mutateAsync, isPending } = useCreateDepartment();

  const onSubmit: SubmitHandler<TDepartmentForm> = async (data) => {
    try {
      if (errors.name) {
        toast.error(errors.name?.message || "Required field are missing");
      }
      await mutateAsync(data);
      toast.success("Department created successfully!");
      onSuccess();
      reset();
    } catch (error) {
      console.error("Error creating department:", error);
      toast.error("Failed to create department");
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Department</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <DepartmentForm />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CreateDepartmentModal;
