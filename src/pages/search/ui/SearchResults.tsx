import { PlaceList } from "@/features/place";

export function SearchResults() {
  return (
    <section className="flex h-[82vh] gap-3 max-sm:h-full">
      <PlaceList />
      <div>Map</div>
    </section>
  );
}
