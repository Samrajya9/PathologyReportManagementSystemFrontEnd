// import { cn } from "@/lib/utils";
// import { cva, type VariantProps } from "class-variance-authority";

// function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="input-group"
//       role="group"
//       className={cn(
//         "relative group",
//         "has-[>[data-align=inline-start]]:[&>input]:pl-11",
//         "has-[>[data-align=inline-end]]:[&>input]:pr-12",

//         className
//       )}
//       {...props}
//     />
//   );
// }

// const inputGroupAddonVariants = cva(
//   "absolute inset-y-0 flex justify-center items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900 transition-colors",
//   {
//     variants: {
//       align: {
//         "inline-start":
//           "order-first  pl-4 left-0 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
//         "inline-end":
//           "order-last pr-4 right-0 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
//       },
//     },
//     defaultVariants: {
//       align: "inline-start",
//     },
//   }
// );

// interface InputGroupAddonProps
//   extends React.ComponentProps<"div">,
//     VariantProps<typeof inputGroupAddonVariants> {}

// function InputGroupAddon({
//   className,
//   align = "inline-start",
//   ...props
// }: InputGroupAddonProps) {
//   return (
//     <div
//       data-slot="input-group-addon"
//       data-align={align}
//       className={cn(
//         inputGroupAddonVariants({ align }),

//         className
//       )}
//       onClick={(e) => {
//         if ((e.target as HTMLElement).closest("button")) {
//           return;
//         }
//         e.currentTarget.parentElement?.querySelector("input")?.focus();
//       }}
//       {...props}
//     />
//   );
// }

// function InputGroupButton({
//   className,
//   ...props
// }: React.ComponentProps<"button">) {
//   return (
//     <button
//       type="button"
//       className={cn(
//         "absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none",
//         "cursor-pointer",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function InputGroupInput({
//   className,
//   ...props
// }: React.ComponentProps<"input">) {
//   return (
//     <input
//       data-slot="input-group-control"
//       className={cn(
//         "w-full px-4  py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all font-medium",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput };

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

/* -------------------------------------------------------------------------- */
/*                              InputGroup Root                               */
/* -------------------------------------------------------------------------- */

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="input-group"
      role="group"
      className={cn(
        "relative group",
        "has-[>[data-align=inline-start]]:[&>input]:pl-11",
        "has-[>[data-align=inline-end]]:[&>input]:pr-12",
        className
      )}
      {...props}
    />
  );
});

InputGroup.displayName = "InputGroup";

/* -------------------------------------------------------------------------- */
/*                              Addon Variants                                */
/* -------------------------------------------------------------------------- */

const addonStyles = cva(
  "absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-focus-within:text-slate-900",
  {
    variants: {
      align: {
        "inline-start":
          "left-0 pl-4 order-first has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "right-0 pr-4 order-last has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

type InputGroupAddonProps = React.ComponentProps<"div"> &
  VariantProps<typeof addonStyles>;

/* -------------------------------------------------------------------------- */
/*                              InputGroupAddon                               */
/* -------------------------------------------------------------------------- */

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align = "inline-start", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="input-group-addon"
        data-align={align}
        className={cn(addonStyles({ align }), className)}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          e.currentTarget.parentElement?.querySelector("input")?.focus();
        }}
        {...props}
      />
    );
  }
);

InputGroupAddon.displayName = "InputGroupAddon";

/* -------------------------------------------------------------------------- */
/*                              InputGroupButton                              */
/* -------------------------------------------------------------------------- */

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <InputGroupAddon align="inline-end" className="pointer-events-auto p-0">
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex items-center cursor-pointer text-slate-400 hover:text-slate-600 transition-colors focus:outline-none pr-4",
          className
        )}
        {...props}
      />
    </InputGroupAddon>
  );
});

InputGroupButton.displayName = "InputGroupButton";

/* -------------------------------------------------------------------------- */
/*                               InputGroupInput                              */
/* -------------------------------------------------------------------------- */

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl",
        "text-slate-900 placeholder-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900",
        "transition-all font-medium",
        className
      )}
      {...props}
    />
  );
});

InputGroupInput.displayName = "InputGroupInput";

/* -------------------------------------------------------------------------- */

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput };
