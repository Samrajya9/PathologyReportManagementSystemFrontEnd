import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TSpecimenForm } from "../../types/specimenForm.types";
import type { Specimen } from "../../types/specimen.types";
import { specimenClient } from "../../api/specimen.api";
import { specimenQueryKeys } from "../../constants/specimen.queryKeys";

interface UseUpdateSpecimenInput {
  id: string;
  data: TSpecimenForm;
}

export const useUpdateSpecimen = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: UseUpdateSpecimenInput) =>
      specimenClient.patch<Specimen>(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: specimenQueryKeys.all });
    },
  });
};
