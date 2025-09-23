"use client";

import { Suspense } from "react";
import { useSearch } from "@/src/containers/main/hooks/useSearch";
import { SearchBar } from "./searchBar";
import { Loading } from "@/src/shared/components/loading";

function SearchListContent() {
  const search = useSearch();
  return <SearchBar {...search} />;
}

export function SearchList() {
  return (
    <Suspense
      fallback={
        <div className="h-[60px] flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <SearchListContent />
    </Suspense>
  );
}
