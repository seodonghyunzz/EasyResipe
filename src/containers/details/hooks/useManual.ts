"use client";
import { RecipeType } from "@/src/libs/types/recipe";

export function useManual(props: RecipeType) {
  const manual: { step: number; text?: string; img?: string }[] = [];

  for (let i = 1; i <= 20; i++) {
    const textKey = `MANUAL${String(i).padStart(2, "0")}` as keyof RecipeType;
    const imgKey = `MANUAL_IMG${String(i).padStart(
      2,
      "0"
    )}` as keyof RecipeType;

    const text = props[textKey] as string | undefined;
    const img = props[imgKey] as string | undefined;

    // 둘 다 없으면 반복 종료
    if (!text && !img) break;

    manual.push({ step: i, text, img });
  }

  return manual;
}
