import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TResultValueTypeForm } from "../../types/resultValueTypeForm.types";
import type { ResultValueType } from "../../types/resultValueType.types";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";

interface UseUpdateResultValueTypeInput {
  id: string;
  formData: TResultValueTypeForm;
}

export const useUpdateResultValueType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }: UseUpdateResultValueTypeInput) =>
      resultValueTypeClient.patch<ResultValueType>(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: resultValueTypeQueryKeys.all });
    },
    onError: (error) => {
      console.error("Failed to update result value type:", error);
    },
  });
};
