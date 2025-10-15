"use client";
import { RecipeType } from "@/src/libs/types/recipe";
import { RecipeCard } from "./recipeCard";
import { useQuery } from "@tanstack/react-query";
import { getRecipeList } from "@/src/containers/main/api/getRecipeList";
import { Pagination } from "./pagination";
import { Loading } from "@/src/shared/components/loading";
import { NoResult } from "@/src/shared/components/noResult";

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
  const { data, isLoading, isFetching } = useQuery<RecipeListResponse>({
    queryKey: ["recipes", name, category, page],
    queryFn: async () => {
      const result = await getRecipeList({ name, category, page });
      return result ?? { total_count: 0, recipes: [] };
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
  });
  if (isLoading && !data) {
    return (
      <div className="h-[400px] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (!data?.recipes || data.recipes.length === 0) return <NoResult />;
  return (
    <div>
      {isFetching && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50 animate-pulse" />
      )}
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.recipes.map((r: RecipeType) => (
          <RecipeCard
            key={r.RCP_SEQ}
            RCP_NM={r.RCP_NM}
            ATT_FILE_NO_MAIN={r.ATT_FILE_NO_MAIN}
            RCP_PAT2={r.RCP_PAT2}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-9 text-body2">
        <Pagination total_count={data?.total_count ?? 0} />
      </div>
    </div>
  );
}
