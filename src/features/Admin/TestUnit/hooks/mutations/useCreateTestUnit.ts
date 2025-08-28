import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testUnitQueryKeys } from "../../constants/testUnitQueryKeys";
import { testUnitClient } from "../../api/testUnitClient";
import type { TestUnitForm } from "../../types/testUnitForm.types";
import type { TestUnitResponse } from "../../types/testUnit.types";

export const useCreateTestUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TestUnitForm) =>
      testUnitClient.post<TestUnitResponse, TestUnitForm>("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testUnitQueryKeys.all });
    },
  });
};
