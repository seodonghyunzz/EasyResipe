import { RecipeDetailClient } from "./recipeDetailClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getServerQueryClient } from "@/src/libs/queryclient/queryclient";
import { getRecipeDetailList } from "@/src/containers/details/api/getRecipeDetailList";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ RCP_NM: string }>;
}) {
  const { RCP_NM } = await params;
  const name = decodeURIComponent(RCP_NM).replace(/\s+/g, "");
  const queryClient = getServerQueryClient();

  // 메타데이터에서 이미 가져온 데이터가 있는지 확인
  const existingData = queryClient.getQueryData(["recipes", name]);

  if (!existingData) {
    await queryClient.fetchQuery({
      queryKey: ["recipes", name],
      queryFn: () => getRecipeDetailList({ name }),
      staleTime: 1000 * 60 * 5,
    });
  }

  const dehydrateState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydrateState}>
      <RecipeDetailClient name={name} />
    </HydrationBoundary>
  );
}

// 캐시된 데이터 공유를 위한 함수
async function fetchRecipeData(name: string) {
  const queryClient = getServerQueryClient();
  const existingData = queryClient.getQueryData(["recipes", name]);

  if (existingData) {
    return existingData;
  }

  const data = await getRecipeDetailList({ name });
  queryClient.setQueryData(["recipes", name], data);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ RCP_NM: string }>;
}) {
  const { RCP_NM } = await params;
  const name = decodeURIComponent(RCP_NM).replace(/\s+/g, "");
  const data = await fetchRecipeData(name);

  return {
    title: `${data.RCP_NM} 레시피`,
    description: `${data.RCP_PAT2}카테고리의 ${data.RCP_NM}레시피`,
    openGraph: {
      title: data.RCP_NM,
      description: `${data.RCP_PAT2}카테고리의 ${data.RCP_NM}레시피`,
      images: [data.ATT_FILE_NO_MAIN],
    },
    twitter: {
      title: data.RCP_NM,
      description: `${data.RCP_PAT2}카테고리의 ${data.RCP_NM}레시피`,
      images: [data.ATT_FILE_NO_MAIN],
      card: [data.ATT_FILE_NO_MK],
    },
  };
}
