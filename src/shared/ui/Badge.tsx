import { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-1.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background [a&]:hover:bg-primary/90 border-transparent",
        primary:
          "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent",
        outline: "text-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
