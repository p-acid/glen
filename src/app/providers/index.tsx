import { PropsWithChildren } from "react";
import { OverlayProvider } from "./OverlayProvider";

export function Providers({ children }: PropsWithChildren) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
