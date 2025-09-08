import { getRecipeList } from "@/main/api/getRecipeList";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { RecipeListClient } from "./recipeListClient";

export default async function RecipeList({
  name,
  category,
  page,
}: {
  name: string;
  category: string;
  page: string;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
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
