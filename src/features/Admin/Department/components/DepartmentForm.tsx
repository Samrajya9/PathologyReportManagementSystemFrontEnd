import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useDepartmentFormContext from "../context/useDepartmentFormContext";

const DepartmentForm = () => {
  const methods = useDepartmentFormContext();

  const { register } = methods;

  return (
    <div className="flex flex-col gap-4">
      <Input {...register("name")} />
      <Textarea {...register("description")} />
    </div>
  );
};

export default DepartmentForm;
