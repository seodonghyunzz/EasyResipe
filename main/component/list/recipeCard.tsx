import Link from "next/link";
import Image from "next/image";
import { RecipeType } from "@/lib/type/recipe";

export function RecipeCard({ RCP_NM, ATT_FILE_NO_MAIN, RCP_PAT2 }: RecipeType) {
  return (
    <div>
      <Link href={`/recipe/${RCP_NM}`}>
        <div className="flex flex-col gap-6">
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
            <Image
              src={ATT_FILE_NO_MAIN}
              alt={RCP_NM}
              className="absolute inset-0 size-full"
              fill
            />
          </div>
          <div>
            <p className="font-medium text-body3 text-secondary-400">
              {RCP_PAT2}
            </p>
            <h3 className="mt-1 font-medium line-clamp-2 text-title4">
              {RCP_NM}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
