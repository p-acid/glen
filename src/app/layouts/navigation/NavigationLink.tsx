"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";
import { usePathname } from "next/navigation";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & LinkProps;

export function NavigationLink({ className, href, ...props }: Props) {
  const pathname = usePathname();

  const isSelected = pathname?.includes(href.toString());

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 hover:text-foreground text-base font-medium transition-colors duration-300",
        {
          "text-foreground": isSelected,
        },
        className,
      )}
      {...props}
    />
  );
}
