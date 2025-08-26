import { useMutation, useQueryClient } from "@tanstack/react-query";
import { specimenClient } from "../../api/specimen.api";
import { specimenQueryKeys } from "../../constants/specimen.queryKeys";

export const useDeleteSpecimen = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => specimenClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: specimenQueryKeys.all });
    },
  });
};
