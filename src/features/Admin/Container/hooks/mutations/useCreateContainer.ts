//src/features/Admin/Container/hooks/mutations/useCreateContainer.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { containerClient } from "../../api/container.api";
import { containerQueryKeys } from "../../constants/container.queryKeys";
import type { TContainerForm } from "../../types/containerForm.types";

export const useCreateContainer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TContainerForm) => containerClient.post("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: containerQueryKeys.all });
    },
  });
};
