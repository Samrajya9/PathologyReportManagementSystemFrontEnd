import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testUnitClient } from "../../api/testUnitClient";
import { testUnitQueryKeys } from "../../constants/testUnitQueryKeys";

const useDeleteTestUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => testUnitClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testUnitQueryKeys.all });
    },
  });
};

export default useDeleteTestUnit;
