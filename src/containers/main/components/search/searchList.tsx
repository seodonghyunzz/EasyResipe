"use client";

import { useSearch } from "@/src/containers/main/hooks/useSearch";
import { SearchBar } from "./searchBar";

export function SearchList() {
  const search = useSearch();

  return <SearchBar {...search} />;
}
