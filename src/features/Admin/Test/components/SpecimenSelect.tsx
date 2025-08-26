import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { useTestFormContext } from "../context/useTestFormContext";
import { cn } from "@/lib/utils";
import { useSpecimens } from "../../Specimen/hooks/queries/useSpecimens";

interface SpecimenSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

const SpecimenSelect: React.FC<SpecimenSelectProps> = ({
  className,
  index,
  ...rest
}) => {
  const { control } = useTestFormContext();
  const { data: specimens } = useSpecimens();
  return (
    <Controller
      name={`specimenRequirements.${index}.specimenId`}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={cn("flex flex-col gap-1", className)} {...rest}>
            <Label htmlFor={`specimen-${index}`}>Specimen</Label>
            <Select
              value={field.value ? String(field.value) : undefined}
              onValueChange={(val) => field.onChange(Number(val))} // convert to number
            >
              <SelectTrigger id={`specimen-${index}`}>
                <SelectValue placeholder="Select a Specimen" />
              </SelectTrigger>
              <SelectContent>
                {specimens.data.map((specimen) => (
                  <SelectItem key={specimen.id} value={String(specimen.id)}>
                    {specimen.name}
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

export default SpecimenSelect;
