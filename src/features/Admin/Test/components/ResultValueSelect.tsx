import React, { type FC } from "react";
import { useTestFormContext } from "../context/useTestFormContext";
import { useResultValueTypes } from "../../ResultValueTypes/hooks/queries/useResultValueTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ResultValueSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  // you can add more custom props here if needed
}
const ResultValueSelect: FC<ResultValueSelectProps> = ({
  className,
  ...rest
}) => {
  const { control } = useTestFormContext();
  const { data } = useResultValueTypes();

  return (
    <Controller
      name="resultValueType"
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={cn("flex flex-col gap-1", className)} {...rest}>
            <Label htmlFor="resultValue">Result Value</Label>
            <Select
              value={field.value ? String(field.value) : ""}
              onValueChange={(val) => field.onChange(val)}
            >
              <SelectTrigger id="resultValue">
                <SelectValue placeholder="Select a Result Value" />
              </SelectTrigger>
              <SelectContent>
                {data.data.map((resultValue) => (
                  <SelectItem
                    key={resultValue.id}
                    value={String(resultValue.name)}
                  >
                    {resultValue.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-red-500"> {error?.message}</p>
          </div>
        );
      }}
    />
  );
};

export default ResultValueSelect;
