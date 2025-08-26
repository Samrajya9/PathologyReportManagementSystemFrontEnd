import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testUnitQueryKeys } from "../../constants/testUnitQueryKeys";
import { testUnitClient } from "../../api/testUnitClient";
import type { TTestUnitForm } from "../../types/testUnitForm.types";
import type { TestUnitResponse } from "../../types/testUnit.types";

export const useCreateTestUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TTestUnitForm) =>
      testUnitClient.post<TestUnitResponse, TTestUnitForm>("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testUnitQueryKeys.all });
    },
  });
};
