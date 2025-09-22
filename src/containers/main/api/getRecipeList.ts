export async function getRecipeList({
  name,
  category,
  page,
}: {
  name: string;
  category: string;
  page: number;
}) {
  const { startIdx, endIdx } = getRange(page);
  const params = new URLSearchParams();

  if (name) {
    //이름 검색
    params.append("RCP_NM", name);
  }
  if (category) {
    //카테고리
    params.append("RCP_PAT2", category);
  }
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${
    process.env.NEXT_PUBLIC_API_KEY
  }/COOKRCP01/json/${startIdx}/${endIdx}/${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const total_count = data.COOKRCP01.total_count;
    const recipes = data.COOKRCP01.row;

    return { total_count, recipes };
  } catch (err) {
    console.log("api 요청 실패: ", err);
    return null;
  }
}
function getRange(page: number, perPage = 12) {
  const startIdx = (page - 1) * perPage + 1;
  let endIdx = page * perPage;
  //48번째 인덱스 오류
  if (page === 4 && endIdx === 48) {
    endIdx = 47;
  }

  return { startIdx, endIdx };
}
