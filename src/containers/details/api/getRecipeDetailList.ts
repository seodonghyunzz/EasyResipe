import { ONE_DAY_SECONDS } from "@/src/shared/const";

export async function getRecipeDetailList({ name }: { name: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_KEY}/COOKRCP01/json/1/1/RCP_NM=${name}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: ONE_DAY_SECONDS },
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
