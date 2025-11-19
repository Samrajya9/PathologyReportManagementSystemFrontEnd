import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TestResponse } from "../../types/test.types";
import { testClient } from "../../api/TestClient";
import { testQueryKeys } from "../../constants/test.queryKeys";
import type { TtestForm } from "../../types/testForm.type";

const useUpdateTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TtestForm }) => {
      const payload = {
        ...data,
        price: String(data.price),
        resultValueOptions:
          data.resultValueType === "Categorical"
            ? data.resultValueOptions
            : undefined,
        referenceRanges: data.referenceRanges.map((range) => ({
          ...range,
          age_min_years: String(range.age_min_years),
          age_max_years: String(range.age_max_years),
          normal_min: String(range.normal_min),
          normal_max: String(range.normal_max),
          critical_min: String(range.critical_min),
          critical_max: String(range.critical_max),
        })),
      };
      return testClient.patch<TestResponse>(id, payload);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: testQueryKeys.all }),
  });
};

export default useUpdateTest;
