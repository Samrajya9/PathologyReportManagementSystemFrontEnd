import { useSuspenseQuery } from "@tanstack/react-query";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import type { ResultValueType } from "../../types/resultValueType.types";

export const useResultValueType = (id: string) => {
  return useSuspenseQuery({
    queryKey: resultValueTypeQueryKeys.detail(id),
    queryFn: () =>
      resultValueTypeClient.get<{ status: "success"; data: ResultValueType }>(
        id
      ),
  });
};
