import Link from "next/link";
import { PropsWithChildren } from "react";

import { Button } from "@/components/Button";
import { SelectableLink } from "@/components/SelectableLink";

export default function NavigationLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full">
      <header className="container sticky left-0 right-0 top-0 z-50 flex items-center justify-between py-5">
        <Link href="/">
          <h1 className="text-2xl font-extrabold tracking-tighter text-white">
            Glen
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <SelectableLink className="text-base font-semibold" href="/search">
            바 찾아보기
          </SelectableLink>
          <SelectableLink className="text-base font-semibold" href="/review">
            리뷰
          </SelectableLink>
          <SelectableLink className="text-base font-semibold" href="community">
            커뮤니티
          </SelectableLink>
        </nav>
        <Button size="sm">앱 추가하기</Button>
      </header>
      {children}
    </div>
  );
}
