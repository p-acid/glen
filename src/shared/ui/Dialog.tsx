"use client";

import { ComponentProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OverlayControllerComponent } from "overlay-kit";

import { cn } from "../utils/cn";

type Props = Pick<
  ComponentProps<OverlayControllerComponent>,
  "isOpen" | "unmount"
> &
  ComponentProps<"div">;

export function Dialog({
  children,
  isOpen,
  unmount,
  className,
  ...props
}: Props) {
  console.log(isOpen);
  return (
    <AnimatePresence onExitComplete={unmount}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-background/50 fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            className={cn(
              "bg-surface w-full max-w-md rounded-2xl p-6 opacity-100 shadow-xl",
              "max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:max-w-full max-md:rounded-b-none",
              className,
            )}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
