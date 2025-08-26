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
import useTestUnit from "../../TestUnit/hooks/queries/useTestUnit";
import { cn } from "@/lib/utils";

interface UnitSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  // you can add more custom props here if needed
}

const UnitSelect: React.FC<UnitSelectProps> = ({ className, ...rest }) => {
  const { control } = useTestFormContext();
  const { data } = useTestUnit();
  return (
    <Controller
      name="testUnitId"
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={cn("flex flex-col gap-1", className)} {...rest}>
            <Label htmlFor="unit">Unit</Label>
            <Select
              value={field.value ? String(field.value) : undefined}
              onValueChange={(val) => field.onChange(Number(val))} // convert to number
            >
              <SelectTrigger id="unit">
                <SelectValue placeholder="Select a Unit" />
              </SelectTrigger>
              <SelectContent>
                {data.data.map((unit) => (
                  <SelectItem key={unit.id} value={String(unit.id)}>
                    {unit.name}
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

export default UnitSelect;
