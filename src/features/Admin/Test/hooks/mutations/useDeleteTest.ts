import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testClient } from "../../api/TestClient";
import { testQueryKeys } from "../../constants/test.queryKeys";

export const useDeleteTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => testClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testQueryKeys.all });
    },
  });
};
