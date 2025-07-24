import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export function SelectableLink({ className, ...props }: Props) {
  return (
    <Link
      className={cn(
        "text-foreground/70 hover:text-foreground text-base font-medium transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}
