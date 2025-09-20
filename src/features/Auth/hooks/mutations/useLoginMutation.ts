import { useMutation } from "@tanstack/react-query";
import type { AuthLoginInputs } from "../../types/AuthLoginInputs.types";
import { authClient } from "../../api/auth.api";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: AuthLoginInputs) => {
      return await authClient.login(data);
    },
  });
};
