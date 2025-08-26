import { Input } from "@/components/ui/input";
import { useTestFormContext } from "../context/useTestFormContext";
import NumberInput from "@/components/Inputs/NumberInput";
import UnitSelect from "./UnitSelect";
import DepartmentSelect from "./DepartmentSelect";
import { useFieldArray } from "react-hook-form";
import SpecimenSelect from "./SpecimenSelect";
import ContainerSelect from "./ContainerSelect";
import { Button } from "@/components/ui/button";
import ReferenceRange from "./ReferenceRange";
import ResultValueSelect from "./ResultValueSelect";

const TestForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useTestFormContext();
  const { fields, append } = useFieldArray({
    control: control,
    name: "specimenRequirements",
  });
  const { fields: referenceRangesFields, append: appendReferenceRanges } =
    useFieldArray({
      control: control,
      name: "referenceRanges",
    });
  return (
    <>
      <Input
        {...register("name")}
        label="Name"
        placeholder="Enter Test Name"
        error={errors.name?.message}
      />

      <NumberInput
        label="Price"
        {...register("price", { valueAsNumber: true })}
      />
      <p>{errors.price?.message}</p>

      <div className="flex gap-2 items-center ">
        <UnitSelect className="flex-1" />
        <DepartmentSelect className="flex-1" />
      </div>

      <ResultValueSelect />

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Specimen Requirement</h3>
        {fields.map((field, index) => (
          <div className="flex gap-2 items-center" key={field.id}>
            <SpecimenSelect
              key={`specimen-${field.id}`}
              index={index}
              className="flex-1"
            />
            <ContainerSelect
              key={`container-${field.id}`}
              index={index}
              className="flex-1"
            />
          </div>
        ))}

        <Button
          variant={"outline"}
          onClick={() => append({ specimenId: 0, containerId: 0 })}
        >
          Add Specimen
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Reference Ranges</h3>
        {referenceRangesFields.map((field, index) => (
          <ReferenceRange key={field.id} index={index} />
        ))}

        <Button
          variant="outline"
          onClick={() =>
            appendReferenceRanges({
              gender: "any",
              age_min_years: 0,
              age_max_years: 0,
              normal_min: 0,
              normal_max: 0,
              critical_min: 0,
              critical_max: 0,
              notes: "",
            })
          }
        >
          Add Reference Range
        </Button>
      </div>
    </>
  );
};

export default TestForm;
