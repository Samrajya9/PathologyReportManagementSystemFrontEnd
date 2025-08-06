import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";
import type { TResultValueTypeForm } from "../../types/resultValueTypeForm.types";

export const useCreateResultValueType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TResultValueTypeForm) =>
      resultValueTypeClient.post("", formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: resultValueTypeQueryKeys.all });
    },
    onError: (error) => {
      console.error("Failed to create result value type:", error);
    },
  });
};
