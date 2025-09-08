"use client";

import { Link2 } from "lucide-react";
import UseCopyToClipboard from "../hooks/useCopyToClipboard";
import ToastBox from "@/shared/component/toastbox";
export default function ReturnButton() {
  const { handleCopy, showToast, routeToHome } = UseCopyToClipboard();

  return (
    <div className="size-full">
      <div className="flex items-center justify-center gap-2 text-body3">
        <button
          className="border h-[48px] rounded-md px-6 cursor-pointer inline-flex items-center justify-center hover:bg-background-alternative border-line-400"
          onClick={routeToHome}
        >
          <span className="font-semibold text-label-800 text-body1">
            목록으로 돌아가기
          </span>
        </button>
        <button
          className="border h-[48px] rounded-md px-6 text-body1 text-secondary-400 hover:bg-background-alternative cursor-pointer inline-flex items-center justify-center gap-2"
          onClick={handleCopy}
        >
          <Link2 width={20} height={20} />
          <span>공유하기</span>
        </button>
        {showToast && <ToastBox msg="링크가 복사되었어요." />}
      </div>
    </div>
  );
}
