import { RecipeDetailClient } from "./recipeDetailClient";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getRecipeDetailList } from "../../../details/api/getRecipeDetailList";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ RCP_NM: string }>;
}) {
  const { RCP_NM } = await params;
  const name = decodeURIComponent(RCP_NM).replace(/\s+/g, "");
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes", name],
    queryFn: () => getRecipeDetailList({ name }),
    staleTime: 1000 * 60,
  });
  const dehydrateState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydrateState}>
      <RecipeDetailClient name={name} />
    </HydrationBoundary>
  );
}
