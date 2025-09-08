export async function getRecipeDetailList({ name }: { name: string }) {
  const keyid = process.env.NEXT_PUBLIC_API_KEY as string;
  const url = `http://openapi.foodsafetykorea.go.kr/api/${keyid}/COOKRCP01/json/1/1/RCP_NM=${name}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data.COOKRCP01.row[0] ?? "";
  } catch (err) {
    console.error("api 요청 실패: ", err);
    return null;
  }
}
