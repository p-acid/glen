import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-xs hover:bg-foreground/90",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      },
      size: {
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type Props = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ size, variant, className, ...props }: Props) {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
}
