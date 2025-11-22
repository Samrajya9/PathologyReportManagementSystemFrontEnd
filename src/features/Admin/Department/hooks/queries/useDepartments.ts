import departmentQueryKeys from "../../constants/department.queryKeys";
import departmentClient from "../../api/department.api";
import type { DepartmentResponse } from "../../types/department.types";
import { useSuspenseQuery } from "@tanstack/react-query";

const useDepartments = () => {
  return useSuspenseQuery({
    queryKey: departmentQueryKeys.all,
    queryFn: () => {
      return departmentClient.get<DepartmentResponse>();
    },
  });
};

export default useDepartments;
