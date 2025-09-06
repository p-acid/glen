import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputVariants = cva(
  "placeholder:text-muted-foreground flex w-full rounded-lg border transition-colors duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input bg-background hover:bg-accent/50 focus-visible:ring-ring focus-visible:ring-1",
        ghost: "hover:bg-accent/50 border-transparent bg-transparent",
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm",
        md: "h-9 px-3 py-2 text-sm",
        lg: "h-10 px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type Props = ComponentProps<"input"> & VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ size, variant, className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
