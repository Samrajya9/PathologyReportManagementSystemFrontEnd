import { useSuspenseQuery } from "@tanstack/react-query";
import { specimenQueryKeys } from "../../constants/specimen.queryKeys";
import { specimenClient } from "../../api/specimen.api";
import type { SpecimenResponse } from "../../types/specimen.types";

export const useSpecimens = () => {
  return useSuspenseQuery({
    queryKey: specimenQueryKeys.all,
    queryFn: () => specimenClient.get<SpecimenResponse>(),
  });
};
