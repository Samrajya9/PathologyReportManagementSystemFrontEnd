//src/features/Admin/Department/hooks/mutations/useDeleteDepartment.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import departmentClient from "../../api/department.api";
import departmentQueryKeys from "../../constants/department.queryKeys";

export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => departmentClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: departmentQueryKeys.all });
    },
  });
};
