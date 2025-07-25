import { UserRound } from "lucide-react";

import { Avatar } from "@/shared/ui";

export function CurrentUser() {
  return (
    <Avatar>
      <UserRound className="size-5" />
    </Avatar>
  );
}
