import { useMutation, useQueryClient } from "@tanstack/react-query";
import departmentClient from "../../api/department.api";
import departmentQueryKeys from "../../constants/department.queryKeys";
import type { TDepartmentForm } from "../../types/departmentForm.types";

const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TDepartmentForm) => departmentClient.post("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: departmentQueryKeys.all });
    },
  });
};

export default useCreateDepartment;

// const onSubmit = (formData) => {
//   mutate(formData);
// };
