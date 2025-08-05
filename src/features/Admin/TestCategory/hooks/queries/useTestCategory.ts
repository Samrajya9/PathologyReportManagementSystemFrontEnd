import { useSuspenseQuery } from "@tanstack/react-query";
import { testCategoryClient } from "../../api/testCategory.api";
import type { testCategoryResponse } from "../../types/testCategory.types";
import testCategoryQueryKeys from "../../constants/department.queryKeys";

const useTestCategory = () => {
  return useSuspenseQuery({
    queryKey: testCategoryQueryKeys.all,
    queryFn: () => testCategoryClient.get<testCategoryResponse>(),
  });
};
export default useTestCategory;
