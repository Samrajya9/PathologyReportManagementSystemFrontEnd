import type { AuthLoginInputs } from "../types/AuthLoginInputs.types";
import { authLoginSchema } from "../schemas/authLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useLoginForm = () => {
  return useForm<AuthLoginInputs>({
    resolver: zodResolver(authLoginSchema),
    defaultValues: { email: "", password: "" },
  });
};

export default useLoginForm;
