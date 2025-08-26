import { Controller } from "react-hook-form";
import { useContainers } from "../../Container/hooks/queries/useContainers";
import { useTestFormContext } from "../context/useTestFormContext";
import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContainerSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

const ContainerSelect: FC<ContainerSelectProps> = ({
  className,
  index,
  ...rest
}) => {
  const { control } = useTestFormContext();
  const { data: containers } = useContainers();
  return (
    <Controller
      name={`specimenRequirements.${index}.containerId`}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={cn("flex flex-col gap-1", className)} {...rest}>
          <Label htmlFor={`container-${index}`}>Container</Label>
          <Select
            value={field.value ? String(field.value) : undefined}
            onValueChange={(val) => field.onChange(Number(val))} // convert to number
          >
            <SelectTrigger id={`container-${index}`}>
              <SelectValue placeholder="Select a Container" />
            </SelectTrigger>
            <SelectContent>
              {containers.data.map((container) => (
                <SelectItem key={container.id} value={String(container.id)}>
                  {container.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-red-500"> {error?.message}</p>
        </div>
      )}
    />
  );
};

export default ContainerSelect;
