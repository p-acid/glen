import Link from "next/link";
import { PropsWithChildren } from "react";

import { NavigationLink, Button } from "@/components";
import { Profile } from "@/components/Profile";

export default function NavigationLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full">
      <header className="container sticky left-0 right-0 top-0 z-50 flex items-center justify-between py-5">
        <div className="flex items-center gap-14">
          <Link href="/">
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">
              Glen
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <NavigationLink className="text-base font-semibold" href="/search">
              바 찾아보기
            </NavigationLink>
            <NavigationLink
              className="text-base font-semibold"
              href="community"
            >
              커뮤니티
            </NavigationLink>
            <NavigationLink className="text-base font-semibold" href="/review">
              리뷰
            </NavigationLink>
          </nav>
        </div>
        <Profile />
      </header>
      {children}
    </div>
  );
}
