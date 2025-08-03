import { useMutation, useQueryClient } from "@tanstack/react-query";
import departmentClient from "../../api/department.api";
import type { TDepartmentForm } from "../../types/departmentForm.types";
import departmentQueryKeys from "../../constants/department.queryKeys";
import type { Department } from "../../types/department.types";

interface UpdateDepartmentInput {
  id: string;
  data: TDepartmentForm;
}
const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateDepartmentInput) =>
      departmentClient.patch<Department>(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: departmentQueryKeys.all });
    },
  });
};

export default useUpdateDepartment;
