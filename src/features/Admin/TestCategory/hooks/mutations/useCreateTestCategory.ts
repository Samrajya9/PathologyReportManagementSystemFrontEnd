import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testCategoryClient } from "../../api/testCategory.api";
import testCategoryQueryKeys from "../../constants/department.queryKeys";
import type { testCategoryResponse } from "../../types/testCategory.types";
import type { testCategoryForm } from "../../types/testCategoryForm.types";

const useCreateTestCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: testCategoryForm) =>
      testCategoryClient.post<testCategoryResponse, testCategoryForm>("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testCategoryQueryKeys.all });
    },
  });
};

export default useCreateTestCategory;
