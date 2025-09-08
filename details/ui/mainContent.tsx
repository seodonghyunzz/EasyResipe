import { RecipeType } from "@/lib/type/recipe";
import { Manual } from "../hooks/useManual";
import Image from "next/image";
export function MainContent(props: RecipeType) {
  const manual = Manual(props);

  return (
    <div className="flex flex-col gap-8">
      {manual.map((recipe, i) => (
        <div key={i} className="flex  gap-4 items-center max-md:flex-col p-4">
          <div className="w-[300px] aspect-[3/2] relative shrink-0">
            <Image
              src={recipe.img ?? ""}
              width={300}
              height={200}
              alt={recipe.img ?? ""}
              className="rounded-md"
            />
          </div>
          <div className="grow">
            <p className="text-label-800">{recipe.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
