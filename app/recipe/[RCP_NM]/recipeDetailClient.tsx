"use client";
import { ReCipeDetailContent } from "../../../details/component/recipeDetailContent";
import { useQuery } from "@tanstack/react-query";
import { getRecipeDetailList } from "../../../details/api/getRecipeDetailList";
import { RecipeType } from "@/lib/type/recipe";

export function RecipeDetailClient({ name }: { name: string }) {
  const { data } = useQuery<RecipeType>({
    queryKey: ["recipes", name],
    queryFn: () => getRecipeDetailList({ name }),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  if (!data) return null;
  return <ReCipeDetailContent {...data} />;
}
