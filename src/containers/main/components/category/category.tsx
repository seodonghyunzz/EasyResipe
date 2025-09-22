"use client";

import { useCategory } from "@/src/containers/main/hooks/useCategory";
import { CategoryUi } from "./categoryUI";

export function Category() {
  const category = useCategory();

  return <CategoryUi {...category} />;
}
