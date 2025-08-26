import { useSuspenseQuery } from "@tanstack/react-query";
import { resultValueTypeQueryKeys } from "../../constants/resultValueType.queryKeys";
import { resultValueTypeClient } from "../../api/resultValueType.api";
import type { ResultValueTypeResponse } from "../../types/resultValueType.types";

export const useResultValueTypes = () => {
  return useSuspenseQuery({
    queryKey: resultValueTypeQueryKeys.all,
    queryFn: () => resultValueTypeClient.get<ResultValueTypeResponse>(),
  });
};
