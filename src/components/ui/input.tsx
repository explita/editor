import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "explitaeditor:flex explitaeditor:h-9 explitaeditor:w-full explitaeditor:rounded-md explitaeditor:border explitaeditor:border-[#C7C7C7] explitaeditor:bg-transparent explitaeditor:px-3 explitaeditor:py-1 explitaeditor:text-base explitaeditor:shadow-sm explitaeditor:transition-colors explitaeditor:file:border-0 explitaeditor:file:bg-transparent explitaeditor:file:text-sm explitaeditor:file:font-medium explitaeditor:file:text-neutral-700 explitaeditor:placeholder:text-neutral-500 explitaeditor:text-neutral-700 explitaeditor:focus-visible:outline-none explitaeditor:focus-visible:ring-1 explitaeditor:focus-visible:ring-ring explitaeditor:disabled:cursor-not-allowed explitaeditor:disabled:opacity-50 explitaeditor:md:text-sm",
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
