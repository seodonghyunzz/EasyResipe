"use client";
import { RecipeType } from "@/lib/type/recipe";
import { RecipeCard } from "./recipeCard";
import { useQuery } from "@tanstack/react-query";
import { getRecipeList } from "@/main/api/getRecipeList";
import Pagination from "./pagination";

type RecipeListResponse = {
  total_count: number;
  recipes: RecipeType[];
};

export function RecipeListClient({
  category,
  name,
  page,
}: {
  category: string;
  name: string;
  page: number;
}) {
  const { data } = useQuery<RecipeListResponse>({
    queryKey: ["recipes", name, category, page],
    queryFn: async () => {
      const result = await getRecipeList({ name, category, page });
      return result ?? { total_count: 0, recipes: [] };
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.recipes.map((r: RecipeType) => (
          <RecipeCard key={r.RCP_SEQ} {...r} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-9 text-body2">
        <Pagination total_count={data?.total_count ?? 0} />
      </div>
    </div>
  );
}
