"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { LuX } from "react-icons/lu";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "explitaeditor:fixed explitaeditor:inset-0 explitaeditor:z-50 explitaeditor:bg-black/0  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "explitaeditor:fixed explitaeditor:z-50 explitaeditor:gap-4 explitaeditor:bg-white explitaeditor:p-6 explitaeditor:shadow-lg explitaeditor:transition explitaeditor:ease-in-out explitaeditor:data-[state=closed]:duration-300 explitaeditor:data-[state=open]:duration-500 explitaeditor:data-[state=open]:animate-in explitaeditor:data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "explitaeditor:inset-x-0 explitaeditor:top-0 explitaeditor:border-b explitaeditor:data-[state=closed]:slide-out-to-top explitaeditor:data-[state=open]:slide-in-from-top",
        bottom:
          "explitaeditor:inset-x-0 explitaeditor:bottom-0 explitaeditor:border-t explitaeditor:data-[state=closed]:slide-out-to-bottom explitaeditor:data-[state=open]:slide-in-from-bottom",
        left: "explitaeditor:inset-y-0 explitaeditor:left-0 explitaeditor:h-full explitaeditor:w-3/4 explitaeditor:border-r explitaeditor:data-[state=closed]:slide-out-to-left explitaeditor:data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "explitaeditor:inset-y-0 explitaeditor:right-0 explitaeditor:h-full explitaeditor:w-3/4 explitaeditor:border-l explitaeditor:data-[state=closed]:slide-out-to-right explitaeditor:data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="explitaeditor:absolute explitaeditor:right-4 explitaeditor:top-4 explitaeditor:rounded-sm explitaeditor:opacity-70 explitaeditor:ring-offset-background explitaeditor:transition-opacity explitaeditor:hover:opacity-100 explitaeditor:focus:outline-none explitaeditor:focus:ring-2 explitaeditor:focus:ring-ring explitaeditor:focus:ring-offset-2 explitaeditor:disabled:pointer-events-none explitaeditor:data-[state=open]:bg-white explitaeditor:text-gray-700">
        <LuX className="explitaeditor:h-4 explitaeditor:w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "explitaeditor:flex explitaeditor:flex-col explitaeditor:space-y-2 explitaeditor:text-center sm:text-left explitaeditor:text-gray-700",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "explitaeditor:flex explitaeditor:flex-col-reverse explitaeditor:sm:flex-row explitaeditor:sm:justify-end explitaeditor:sm:space-x-2 explitaeditor:text-gray-700",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "explitaeditor:text-lg explitaeditor:font-semibold explitaeditor:text-gray-700",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(
      "explitaeditor:text-sm explitaeditor:text-gray-700",
      className
    )}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
