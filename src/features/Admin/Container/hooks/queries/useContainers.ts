import { useSuspenseQuery } from "@tanstack/react-query";
import { containerQueryKeys } from "../../constants/container.queryKeys";
import { containerClient } from "../../api/container.api";
import type { ContainerRespoonse } from "../../types/ContainerResponse";

export const useContainers = () => {
  return useSuspenseQuery({
    queryKey: containerQueryKeys.all,
    queryFn: () => containerClient.get<ContainerRespoonse>(),
  });
};
