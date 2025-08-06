//src/features/Admin/Container/components/ContainerForm.tsx
import { useContainerFormContext } from "../context/useContainerFormContext";
import { Input } from "@/components/ui/input";

const ContainerForm = () => {
  const methods = useContainerFormContext();
  const { register } = methods;

  return (
    <div className="flex flex-col gap-4">
      <Input id="name" {...register("name")} label="Name" />
    </div>
  );
};

export default ContainerForm;
