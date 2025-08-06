//src/features/Admin/Container/hooks/queries/useContainers.ts
import { useSuspenseQuery } from "@tanstack/react-query";
import { containerQueryKeys } from "../../constants/container.queryKeys";
import { containerClient } from "../../api/container.api";
import type { ContainerRespoonse } from "../../types/container.types";

export const useContainers = () => {
  return useSuspenseQuery({
    queryKey: containerQueryKeys.all,
    queryFn: () => containerClient.get<ContainerRespoonse>(),
  });
};
