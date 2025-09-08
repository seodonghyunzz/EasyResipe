"use client";

import { UseSearch } from "@/main/hooks/useSearch";
import { SearchBar } from "./searchBar";

export default function SearchList() {
  const search = UseSearch();

  return <SearchBar {...search} />;
}
