import { useMutation, useQueryClient } from "@tanstack/react-query";
import { specimenClient } from "../../api/specimen.api";
import { specimenQueryKeys } from "../../constants/specimen.queryKeys";
import type { TSpecimenForm } from "../../types/specimenForm.types";

export const useCreateSpecimen = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TSpecimenForm) => specimenClient.post("", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: specimenQueryKeys.all });
    },
  });
};
