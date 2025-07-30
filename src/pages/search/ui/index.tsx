import { InlineSearchForm } from "@/features/search";
import { SearchResults } from "./SearchResults";

export function SearchPage() {
  return (
    <div className="container space-y-6 py-2">
      <InlineSearchForm />
      <SearchResults />
    </div>
  );
}
