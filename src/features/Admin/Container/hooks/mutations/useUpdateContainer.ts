import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TContainerForm } from "../../types/containerForm.types";
import type { Container } from "../../types/ContainerResponse";
import { containerClient } from "../../api/container.api";
import { containerQueryKeys } from "../../constants/container.queryKeys";

interface useUpdateContainerInput {
  id: string;
  data: TContainerForm;
}

const useUpdateContainer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: useUpdateContainerInput) =>
      containerClient.patch<Container>(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: containerQueryKeys.all });
    },
  });
};

export default useUpdateContainer;
