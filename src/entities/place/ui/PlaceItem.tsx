import { Badge } from "@/shared/ui";

type Badge = {
  label: string;
};

type PlaceItemProps = {
  imageUrl: string;
  name: string;
  description: string;
  isOpen: boolean;
  reviewCount: number;
  address: string;
  badges?: Badge[];
};

export function PlaceItem({
  imageUrl,
  name,
  description,
  isOpen,
  reviewCount,
  address,
  badges = [],
}: PlaceItemProps) {
  return (
    <li className="bg-background hover:bg-muted flex cursor-pointer items-center gap-4 rounded-xl py-2 pl-3 pr-2 transition-colors duration-300 max-sm:p-1">
      <div className="w-full max-w-[300px]">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-muted-foreground mt-1.5 text-sm">{description}</p>
        <div className="text-muted-foreground mt-0.5 flex items-center gap-1">
          <span className="text-muted-foreground/70 whitespace-pre text-sm">
            {isOpen ? "영업중" : "마감됨"}
          </span>
          ·
          <span className="text-muted-foreground/70 whitespace-pre text-sm">
            리뷰 {reviewCount}개
          </span>
          ·
          <span className="text-muted-foreground/70 overflow-hidden overflow-ellipsis whitespace-pre text-sm">
            {address}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {badges.map((badge, idx) => (
            <Badge key={idx} variant="outline">
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={name}
        className="aspect-square h-28 rounded-lg object-cover max-sm:hidden"
      />
    </li>
  );
}
