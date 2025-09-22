import { getRecipeList } from "@/src/containers/main/api/getRecipeList";
import { HydrationBoundary } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { RecipeListClient } from "./recipeListClient";
import { getServerQueryClient } from "@/src/libs/queryclient/queryclient";
export async function RecipeList({
  name,
  category,
  page,
}: {
  name: string;
  category: string;
  page: number;
}) {
  const queryClient = getServerQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["recipes", name, category, page],
    queryFn: () => getRecipeList({ name, category, page }),
    staleTime: 1000 * 60,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrateState}>
      <RecipeListClient name={name} category={category} page={page} />
    </HydrationBoundary>
  );
}
