import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string; // 👈 new prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { className, label, type, id: customId, error, ...rest } = props;
    const generatedId = React.useId();
    const id = customId ?? generatedId;
    return (
      <div className="w-full inline-flex flex-col gap-1.5">
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          id={id}
          type={type}
          className={cn(
            "flex-1 flex min-h-10 rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-input bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            className
          )}
          ref={forwardedRef}
          {...rest}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
