import { UserRound } from "lucide-react";

export function Profile() {
  return (
    <button className="avatar size-9 items-center justify-center bg-neutral-800">
      <UserRound className="stroke-3 size-4.5 stroke-white" />
    </button>
  );
}
