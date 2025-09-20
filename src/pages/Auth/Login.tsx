import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useLoginMutation } from "@/features/Auth/hooks/mutations/useLoginMutation";
import useLoginForm from "@/features/Auth/hooks/useLoginForm";
import type { AuthLoginInputs } from "@/features/Auth/types/AuthLoginInputs.types";
import { useEffect } from "react";
import { type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useLoginForm();

  const { mutateAsync, isPending } = useLoginMutation();

  const { setIsLoggedIn } = useAuth();

  const onSubmit: SubmitHandler<AuthLoginInputs> = (data) => {
    data.role = "admin";
    mutateAsync(data, {
      onSuccess: () => {
        setIsLoggedIn(true);
        navigate("/");
      },
    });
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="min-h-lvh grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-4 justify-center items-center "
      >
        <Input
          {...register("email")}
          placeholder="Enter your email"
          error={errors.email ? errors.email.message : undefined}
        />

        <Input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          error={errors.password ? errors.password.message : undefined}
        />
        <Button
          disabled={isPending}
          type="submit"
          size={"lg"}
          variant="default"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
