import { Suspense } from "react";
import { Loading } from "@/src/shared/components/loading";
import { RecipeListWithParams } from "./recipeListWithParams";

export function RecipeListWrapper() {
  return (
    <Suspense
      fallback={
        <div className="h-[400px] flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <RecipeListWithParams />
    </Suspense>
  );
}
