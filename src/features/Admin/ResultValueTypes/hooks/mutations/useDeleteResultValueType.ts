import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";

export const useDeleteResultValueType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => resultValueTypeClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: resultValueTypeQueryKeys.all });
    },
    onError: (error) => {
      console.error("Failed to delete result value type:", error);
    },
  });
};
