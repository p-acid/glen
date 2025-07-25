import { ComponentProps } from "react";

import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-800",
  {
    variants: {
      size: {
        xs: "size-7",
        sm: "size-8",
        md: "size-9",
        lg: "size-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type Props = ComponentProps<"div"> & VariantProps<typeof avatarVariants>;

export function Avatar({ className, children, size, ...props }: Props) {
  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
}
