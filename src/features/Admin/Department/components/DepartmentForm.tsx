import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useDepartmentFormContext from "../context/useDepartmentFormContext";

const DepartmentForm = () => {
  const methods = useDepartmentFormContext();

  const { register } = methods;

  return (
    <div className="flex flex-col gap-4">
      <Input id="name" {...register("name")} label="Name" />

      <Textarea
        id="description"
        {...register("description")}
        label="Description"
      />
    </div>
  );
};

export default DepartmentForm;
