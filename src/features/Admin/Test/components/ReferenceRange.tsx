import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FC } from "react";
import { Controller } from "react-hook-form";
import { useTestFormContext } from "../context/useTestFormContext";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import NumberInput from "@/components/Inputs/NumberInput";
import { Textarea } from "@/components/ui/textarea";

interface ReferenceRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

const ReferenceRange: FC<ReferenceRangeProps> = ({ index }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useTestFormContext();

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("flex flex-col gap-1")}>
        <Label htmlFor={`gender-${index}`}>Gender</Label>
        <Controller
          name={`referenceRanges.${index}.gender`}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <Select
                  value={field.value ? String(field.value) : undefined}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id={`gender-${index}`}>
                    <SelectValue placeholder="Select a Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={String("any")}>Any</SelectItem>
                    <SelectItem value={String("male")}>Male</SelectItem>
                    <SelectItem value={String("female")}>Female</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-red-500"> {error?.message}</p>
              </>
            );
          }}
        />
      </div>

      <div className="flex-1 flex gap-2 items-center ">
        <NumberInput
          label="Minimum Age"
          {...register(`referenceRanges.${index}.age_min_years`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.age_min_years?.message}
        />
        <NumberInput
          label="Maximum Age"
          {...register(`referenceRanges.${index}.age_max_years`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.age_max_years?.message}
        />
      </div>

      <div className="flex-1 flex gap-2 items-center ">
        <NumberInput
          label="Nomral Minimum"
          {...register(`referenceRanges.${index}.normal_min`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.normal_min?.message}
        />
        <NumberInput
          label="Nomral Maximum"
          {...register(`referenceRanges.${index}.normal_max`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.normal_max?.message}
        />
      </div>

      <div className="flex-1 flex gap-2 items-center ">
        <NumberInput
          label="Critical Minimum"
          {...register(`referenceRanges.${index}.critical_min`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.critical_min?.message}
        />
        <NumberInput
          label="Critical Maximum"
          {...register(`referenceRanges.${index}.critical_max`, {
            valueAsNumber: true,
          })}
          error={errors.referenceRanges?.[index]?.critical_max?.message}
        />
      </div>

      <Textarea
        className="flex-1"
        placeholder="Notes"
        {...register(`referenceRanges.${index}.notes`)}
        error={errors.referenceRanges?.[index]?.notes?.message}
      />
    </div>
  );
};

export default ReferenceRange;
