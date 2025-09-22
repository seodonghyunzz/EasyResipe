"use client";
import { ChevronRight } from "lucide-react";
import { UseNav } from "../../../../details/hooks/useNav";

export function ContentNav({ RCP_PAT2 }: { RCP_PAT2: string }) {
  const { goToHome, goToCategory } = UseNav();
  if (!RCP_PAT2) return;

  return (
    <div className="flex items-center gap-1 text-title4 text-label-700">
      <span onClick={goToHome} className="cursor-pointer">
        홈
      </span>
      <span>
        <ChevronRight />
      </span>
      <span onClick={() => goToCategory(RCP_PAT2)} className="cursor-pointer">
        {RCP_PAT2}
      </span>
    </div>
  );
}
