import { Input } from "@/components/ui/input";
import useTestUnitFormContext from "../context/useTestUnitFormContext";

const TestUnitForm = () => {
  const { register } = useTestUnitFormContext();
  return (
    <div className="flex flex-col gap-4">
      <Input id="name" {...register("name")} label="Name" />
    </div>
  );
};

export default TestUnitForm;
