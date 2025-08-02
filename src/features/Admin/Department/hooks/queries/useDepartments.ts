import { useQuery } from "@tanstack/react-query";
import departmentQueryKeys from "../../constants/department.queryKeys";
import departmentClient from "../../api/department.api";

const useDepartments = () => {
  return useQuery({
    queryKey: departmentQueryKeys.all,
    queryFn: () => departmentClient.get(),
  });
};

export default useDepartments;
