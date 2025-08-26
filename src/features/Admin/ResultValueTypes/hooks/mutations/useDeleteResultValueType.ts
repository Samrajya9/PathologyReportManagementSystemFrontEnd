import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";

export const useDeleteResultValueType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => resultValueTypeClient.delete(id),
    onMutate: () => {
      return { meta: { invalidateQueries: resultValueTypeQueryKeys.all } };
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: resultValueTypeQueryKeys.all,
      });
    },
  });
};
