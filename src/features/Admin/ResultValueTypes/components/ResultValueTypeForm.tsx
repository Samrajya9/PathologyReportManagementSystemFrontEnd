import { useResultValueTypeFormContext } from "../context/useResultValueTypeFormContext";
import { Input } from "@/components/ui/input";

const ResultValueTypeForm = () => {
  const { register } = useResultValueTypeFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Input
          id="name"
          {...register("name")}
          label="Result Value Type Name"
          placeholder="Enter result value type name (e.g., Positive, Negative, Numeric)"
        />
      </div>
    </div>
  );
};

export default ResultValueTypeForm;
