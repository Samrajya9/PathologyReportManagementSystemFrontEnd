import { Input } from "@/components/ui/input";
import useTestCategoryFormContext from "../context/useTestCategoryFormContext";

const TestCategoryForm = () => {
  const { register } = useTestCategoryFormContext();
  return (
    <div className="flex flex-col gap-4">
      <Input id="name" {...register("name")} label="Name" />
    </div>
  );
};

export default TestCategoryForm;
