"use client";

import { Suspense } from "react";
import { useCategory } from "@/src/containers/main/hooks/useCategory";
import { CategoryUi } from "./categoryUI";
import { Loading } from "@/src/shared/components/loading";

function CategoryContent() {
  const category = useCategory();
  return <CategoryUi {...category} />;
}

export function Category() {
  return (
    <Suspense
      fallback={
        <div className="h-[60px] flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <CategoryContent />
    </Suspense>
  );
}
