import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useAuth } from "@/context/AuthContext";
import { useLoginMutation } from "@/features/Auth/hooks/mutations/useLoginMutation";
import useLoginForm from "@/features/Auth/hooks/useLoginForm";
import type { AuthLoginInputs } from "@/features/Auth/types/AuthLoginInputs.types";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Activity } from "lucide-react";
import { useState } from "react";
import { type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        toast.success("Logged in successfully");
        setIsLoggedIn(true);
        navigate("/");
      },
    });
  };

  return (
    <div className="min-h-screen  w-full  flex flex-col items-center justify-center px-8 sm:px-12 md:px-24 lg:px-32 relative z-10 border">
      {/* Mobile-only background hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 lg:hidden -z-10" />

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
            <Activity size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            {"PRMS"}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
          Welcome back
        </h1>
        <p className="text-slate-500 text-lg">
          Please enter your details to access the admin dashboard.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-md w-full"
      >
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700 ml-1"
            htmlFor="email"
          >
            Email Address
          </label>

          <InputGroup>
            <InputGroupAddon align={"inline-start"}>
              <Mail size={20} />
            </InputGroupAddon>
            <InputGroupInput
              id="email"
              type="email"
              placeholder="admin@prms.health"
              {...register("email")}
            />
          </InputGroup>
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700 ml-1"
            htmlFor="password"
          >
            Password
          </label>
          <InputGroup>
            <InputGroupAddon align={"inline-start"}>
              <Lock size={20} />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
            />
            <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </InputGroupButton>
          </InputGroup>

          {errors.password && (
            <p className="text-xs text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all" />
              <div className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6L5 8.5L9.5 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
              Remember for 30 days
            </span>
          </label>
          <a
            href="#"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700 hover:underline transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl shadow-slate-900/10 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <span>Sign in to Dashboard</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </>
          )}
        </button>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-400 font-medium">
              Secure Connection
            </span>
          </div>
        </div>

        {/* Simple footer for form side */}
        <div className="flex justify-center gap-6 text-xs text-gray-400 font-medium mt-auto">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Terms of Service
          </a>
          <span>© 2024 PRMS Inc.</span>
        </div>
      </form>
    </div>
  );
};

export default Login;

// <Card className="min-h-lvh grid place-items-center ">
//     <CardContent>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-80 aspect-square flex flex-col gap-4 justify-center items-center p-5"
//       >
//         <Input
//           {...register("email")}
//           placeholder="Enter your email"
//           error={errors.email ? errors.email.message : undefined}
//         />

//         <Input
//           type="password"
//           {...register("password")}
//           placeholder="Enter your password"
//           error={errors.password ? errors.password.message : undefined}
//         />
//         <Button
//           disabled={isPending}
//           type="submit"
//           size={"lg"}
//           variant="default"
//         >
//           Login
//         </Button>
//       </form>
//     </CardContent>
//   </Card>
