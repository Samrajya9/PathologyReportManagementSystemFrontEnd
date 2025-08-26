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
import useDepartments from "../../Department/hooks/queries/useDepartments";
import { cn } from "@/lib/utils";

interface DepartmentSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  // you can add more custom props here if needed
}
const DepartmentSelect: React.FC<DepartmentSelectProps> = ({
  className,
  ...rest
}) => {
  const { control } = useTestFormContext();
  const { data } = useDepartments();
  return (
    <Controller
      name="medicalDepartmentId"
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={cn("flex flex-col gap-1", className)} {...rest}>
            <Label htmlFor="department">Department</Label>
            <Select
              value={field.value ? String(field.value) : undefined}
              onValueChange={(val) => field.onChange(Number(val))} // convert to number
            >
              <SelectTrigger id="department">
                <SelectValue placeholder="Select a Department" />
              </SelectTrigger>
              <SelectContent>
                {data.data.map((department) => (
                  <SelectItem key={department.id} value={String(department.id)}>
                    {department.name}
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

export default DepartmentSelect;
