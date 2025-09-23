"use client";
import { ReCipeDetailContent } from "../../../src/containers/details/components/recipeDetailContent";
import { useQuery } from "@tanstack/react-query";
import { getRecipeDetailList } from "../../../src/containers/details/api/getRecipeDetailList";
import { RecipeType } from "@/src/libs/types/recipe";
import { Loading } from "@/src/shared/components/loading";

export function RecipeDetailClient({ name }: { name: string }) {
  const { data, isLoading } = useQuery<RecipeType>({
    queryKey: ["recipes", name],
    queryFn: () => getRecipeDetailList({ name }),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!data) return null;

  return <ReCipeDetailContent {...data} />;
}
