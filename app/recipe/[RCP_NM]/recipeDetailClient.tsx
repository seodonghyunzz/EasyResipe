"use client";
import { ReCipeDetailContent } from "../../../details/component/recipeDetailContent";
import { useQuery } from "@tanstack/react-query";
import { getRecipeDetailList } from "../../../details/api/getRecipeDetailList";
import { RecipeType } from "@/lib/type/recipe";
import { Loading } from "@/shared/component/loading";

export function RecipeDetailClient({ name }: { name: string }) {
  const { data, isLoading } = useQuery<RecipeType>({
    queryKey: ["recipes", name],
    queryFn: () => getRecipeDetailList({ name }),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (!data) return null;

  return (
    <div>
      {isLoading && (
        <div className="h-[500px]">
          <Loading />
        </div>
      )}
      <ReCipeDetailContent {...data} />;
    </div>
  );
}
