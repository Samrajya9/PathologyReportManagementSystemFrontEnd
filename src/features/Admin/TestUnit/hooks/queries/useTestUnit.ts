import { useSuspenseQuery } from "@tanstack/react-query";
import { testUnitClient } from "../../api/testUnitClient";
import type { TestUnitResponse } from "../../types/testUnit.types";
import { testUnitQueryKeys } from "../../constants/testUnitQueryKeys";

const useTestUnit = () => {
  return useSuspenseQuery({
    queryKey: testUnitQueryKeys.all,
    queryFn: () => testUnitClient.get<TestUnitResponse>(),
  });
};

export default useTestUnit;
