import { useSuspenseQuery } from "@tanstack/react-query";
import { testClient } from "../../api/TestClient";
import { testQueryKeys } from "../../constants/test.queryKeys";
import type { TestResponse } from "../../types/test.types";

export const useTest = () => {
  return useSuspenseQuery({
    queryKey: testQueryKeys.all,
    queryFn: () => testClient.get<TestResponse>(),
  });
};
