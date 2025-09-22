import { RecipeDetailClient } from "./recipeDetailClient";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getRecipeDetailList } from "../../../src/containers/details/api/getRecipeDetailList";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const name = decodeURIComponent(id).replace(/\s+/g, "");
  const queryClient = new QueryClient();

  await queryClient.fetchQuery({
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const name = decodeURIComponent(id).replace(/\s+/g, "");
  const data = await getRecipeDetailList({ name });

  return {
    title: `${data.id} 레시피`,
    description: `${data.RCP_PAT2}카테고리의 ${data.id}레시피`,
    openGraph: {
      title: data.id,
      description: `${data.RCP_PAT2}카테고리의 ${data.id}레시피`,
      images: [data.ATT_FILE_NO_MAIN],
    },
    twitter: {
      title: data.id,
      description: `${data.RCP_PAT2}카테고리의 ${data.id}레시피`,
      images: [data.ATT_FILE_NO_MAIN],
      card: [data.ATT_FILE_NO_MK],
    },
  };
}
