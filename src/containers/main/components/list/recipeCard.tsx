"use client";
import Link from "next/link";
import Image from "next/image";

type RecipeCardType = {
  RCP_NM: string;
  ATT_FILE_NO_MAIN: string;
  RCP_PAT2: string;
};
export function RecipeCard({
  RCP_NM,
  ATT_FILE_NO_MAIN,
  RCP_PAT2,
}: RecipeCardType) {
  return (
    <div>
      <Link href={`/recipe/${RCP_NM}`}>
        <div className="flex flex-col gap-6">
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
            <Image
              src={ATT_FILE_NO_MAIN ?? ""}
              alt={RCP_NM}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="absolute inset-0 size-full"
              loading="lazy"
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

export function RecipeCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col gap-6">
        <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-5 w-3/4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
