"use client";
import { useSearchParams } from "next/navigation";
import { RecipeListClient } from "./recipeListClient";

export function RecipeListWithParams() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const category = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  return <RecipeListClient name={name} category={category} page={page} />;
}
