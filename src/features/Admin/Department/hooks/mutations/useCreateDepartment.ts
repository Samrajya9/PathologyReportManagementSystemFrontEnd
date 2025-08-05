//src/features/Admin/Department/hooks/mutations/useCreateDepartment.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import departmentClient from "../../api/department.api";
import departmentQueryKeys from "../../constants/department.queryKeys";
import type { TDepartmentForm } from "../../types";

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TDepartmentForm) => departmentClient.post("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: departmentQueryKeys.all });
    },
  });
};
