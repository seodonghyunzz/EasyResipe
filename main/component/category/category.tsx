"use client";

import { UseCategory } from "@/main/hooks/useCategory";
import { CategoryUi } from "./categoryUI";

export default function Category() {
  const category = UseCategory();

  return <CategoryUi {...category} />;
}
