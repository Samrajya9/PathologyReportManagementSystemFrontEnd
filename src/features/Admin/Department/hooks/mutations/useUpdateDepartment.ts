//src/features/Admin/Department/hooks/mutations/useUpdateDepartment.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import departmentClient from "../../api/department.api";
import type { TDepartmentForm } from "../../types/departmentForm.types";
import departmentQueryKeys from "../../constants/department.queryKeys";
import type { Department } from "../../types/department.types";

interface UpdateDepartmentInput {
  id: string;
  data: TDepartmentForm;
}
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateDepartmentInput) =>
      departmentClient.patch<Department, TDepartmentForm>(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: departmentQueryKeys.all });
    },
  });
};
