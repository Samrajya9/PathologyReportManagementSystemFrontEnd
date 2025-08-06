import { useSpecimenFormContext } from "../context/useSpecimenFormContext";
import { Input } from "@/components/ui/input";

const SpecimenForm = () => {
  const { register } = useSpecimenFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        {...register("name")}
        label="Specimen Name"
        placeholder="Enter specimen name"
      />
    </div>
  );
};

export default SpecimenForm;
