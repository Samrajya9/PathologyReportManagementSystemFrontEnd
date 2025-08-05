import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testUnitClient } from "../../api/testUnitClient";
import { testUnitQueryKeys } from "../../constants/testUnitQueryKeys";
import type { TestUnitResponse } from "../../types/testUnit.types";
import type { TTestUnitForm } from "../../types/testUnitForm.types";

interface UpdateTestUnitInputs {
  id: string;
  data: TTestUnitForm;
}

const useUpdateTestUnit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: UpdateTestUnitInputs) =>
      testUnitClient.patch<TestUnitResponse>(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: testUnitQueryKeys.all }),
  });
};

export default useUpdateTestUnit;
