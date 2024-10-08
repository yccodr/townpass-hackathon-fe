import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-0 border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-text-decorative file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:placeholder:text-[#ADB8BE]",
          { "border-destructive": props.isError },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
