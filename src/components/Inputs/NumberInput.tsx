import { forwardRef } from "react";
import { Input, type InputProps } from "../ui/input";
import { cn } from "@/lib/utils";

const NumberInput = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { className, label, type, step, id: customId, ...rest } = props;

    return (
      <Input
        type="number"
        step={step ? step : "any"}
        id={customId}
        label={label}
        ref={forwardedRef}
        {...rest}
        className={cn(
          "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
          className
        )}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";
export default NumberInput;
