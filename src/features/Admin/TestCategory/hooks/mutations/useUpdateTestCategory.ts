import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testCategoryClient } from "../../api/testCategory.api";
import testCategoryQueryKeys from "../../constants/department.queryKeys";
import type { testCategoryForm } from "../../types/testCategoryForm.types";
import type { testCategoryResponse } from "../../types/testCategory.types";

interface Inputs {
  id: string;
  data: testCategoryForm;
}

const useUpdateTestCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: Inputs) =>
      testCategoryClient.patch<testCategoryResponse, testCategoryForm>(
        id,
        data
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: testCategoryQueryKeys.all }),
  });
};

export default useUpdateTestCategory;
