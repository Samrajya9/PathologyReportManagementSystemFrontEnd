import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testCategoryClient } from "../../api/testCategory.api";
import testCategoryQueryKeys from "../../constants/department.queryKeys";

const useDeleteTestCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => testCategoryClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testCategoryQueryKeys.all });
    },
  });
};

export default useDeleteTestCategory;
