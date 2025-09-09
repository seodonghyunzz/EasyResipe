"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function NoResult() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center h-[360px]">
      <div className="flex flex-col items-center justify-center gap-6 whitespace-nowrap">
        <Image
          src="/logo/empty-box.webp"
          alt="예시 이미지"
          width={80}
          height={80}
          className="max-md:size-[40px]"
        />
        <p className="font-bold">검색결과가 없어요</p>
      </div>
      <div className="flex justify-center mt-2 whitespace-nowrap">
        <p className="text-body2 text-label-500">
          아래와 같은 단어로 다시 검색해보세요.
        </p>
      </div>
      <div className="flex items-center justify-center gap-1 mt-2 font-bold text-body2 text-primary whitespace-nowrap">
        <button
          className="cursor-pointer"
          onClick={() => {
            router.push("/?category=밥");
          }}
        >
          <span>밥</span>
        </button>
        <span>,</span>
        <button
          className="cursor-pointer"
          onClick={() => {
            router.push("/?category=국");
          }}
        >
          <span>국</span>
        </button>
        <span>,</span>
        <button
          className="cursor-pointer"
          onClick={() => {
            router.push("/?category=반찬");
          }}
        >
          <span>반찬</span>
        </button>
        <span>,</span>
        <button
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <span>홈</span>
        </button>
      </div>
    </div>
  );
}
