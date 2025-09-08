export async function getRecipeDetailList({ name }: { name: string }) {
  const keyid = process.env.NEXT_PUBLIC_API_KEY as string;

  const url = `http://openapi.foodsafetykorea.go.kr/api/${keyid}/COOKRCP01/json/1/1/RCP_NM=${name}`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  const recipes = data.COOKRCP01.row[0];
  return recipes ?? "";
}
