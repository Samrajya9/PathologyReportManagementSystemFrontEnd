//src/features/Admin/Container/hooks/mutations/useDeleteContainer.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { containerClient } from "../../api/container.api";
import { containerQueryKeys } from "../../constants/container.queryKeys";

const useDeleteContainer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => containerClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: containerQueryKeys.all });
    },
  });
};

export default useDeleteContainer;
