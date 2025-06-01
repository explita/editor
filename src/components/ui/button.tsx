import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "explitaeditor:inline-flex explitaeditor:items-center explitaeditor:justify-center explitaeditor:gap-2 explitaeditor:whitespace-nowrap explitaeditor:rounded-md explitaeditor:text-sm explitaeditor:font-medium explitaeditor:transition-colors explitaeditor:focus-visible:outline-none explitaeditor:focus-visible:ring-1 explitaeditor:focus-visible:ring-ring explitaeditor:disabled:pointer-events-none explitaeditor:disabled:opacity-50 explitaeditor:[&_svg]:pointer-events-none explitaeditor:[&_svg]:size-4 explitaeditor:[&_svg]:shrink-0 explitaeditor:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "explitaeditor:bg-white explitaeditor:text-black explitaeditor:shadow explitaeditor:hover:bg-gray-100",
        destructive:
          "explitaeditor:bg-destructive explitaeditor:text-destructive-foreground explitaeditor:shadow-sm explitaeditor:hover:bg-destructive/90",
        outline:
          "explitaeditor:border explitaeditor:border-input explitaeditor:bg-background explitaeditor:shadow-sm explitaeditor:hover:bg-accent explitaeditor:hover:text-accent-foreground",
        secondary:
          "explitaeditor:bg-secondary explitaeditor:text-secondary-foreground explitaeditor:shadow-sm explitaeditor:hover:bg-secondary/80",
        ghost:
          "explitaeditor:hover:bg-accent explitaeditor:hover:text-accent-foreground",
        link: "explitaeditor:text-primary explitaeditor:underline-offset-4 explitaeditor:hover:underline",
      },
      size: {
        default: "explitaeditor:h-9 explitaeditor:px-4 explitaeditor:py-2",
        sm: "explitaeditor:h-8 explitaeditor:rounded-md explitaeditor:px-3 explitaeditor:text-xs",
        lg: "explitaeditor:h-10 explitaeditor:rounded-md explitaeditor:px-8",
        icon: "explitaeditor:h-9 explitaeditor:w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
