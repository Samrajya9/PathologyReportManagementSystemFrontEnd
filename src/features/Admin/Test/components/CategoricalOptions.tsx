import { Controller, useFieldArray, useWatch } from "react-hook-form";
import { useTestFormContext } from "../context/useTestFormContext";
import { ResultValueTypeEnum } from "../schemas/testForm.schema";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const CategoricalOptions = () => {
  const { control, setValue, getValues } = useTestFormContext();

  const resultValueType = useWatch({
    control,
    name: "resultValueType",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "resultValueOptions",
  });

  if (resultValueType !== ResultValueTypeEnum.enum.Categorical) {
    return null;
  }

  const handleDefaultChange = (index: number) => {
    const options = getValues("resultValueOptions") || [];
    const updated = options.map((opt: any, i: number) => ({
      ...opt,
      isDefault: i === index,
    }));
    setValue("resultValueOptions", updated);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Result Value Options</h3>
      {fields.map((field, index) => (
        <div className="flex gap-2 items-center" key={field.id}>
          <Controller
            control={control}
            name={`resultValueOptions.${index}.value`}
            render={({ field }) => (
              <Input {...field} placeholder="Option value" className="flex-1" />
            )}
          />

          <Controller
            control={control}
            name={`resultValueOptions.${index}.isDefault`}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={field.value || false}
                  onCheckedChange={() => handleDefaultChange(index)}
                />
                <span>Is Default?</span>
              </div>
            )}
          />

          <Button variant="destructive" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}

      <Button
        variant={"outline"}
        onClick={() => append({ value: "", isDefault: fields.length === 0 })}
      >
        Add result value
      </Button>
    </div>
  );
};

export default CategoricalOptions;
