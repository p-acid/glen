import { PropsWithChildren } from "react";

export default function NavigationLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-3xl">{children}</div>;
}
