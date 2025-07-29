"use client";

import { PropsWithChildren } from "react";
import { OverlayProvider as TossOverlayProvider } from "overlay-kit";

export function OverlayProvider({ children }: PropsWithChildren) {
  return <TossOverlayProvider>{children}</TossOverlayProvider>;
}
