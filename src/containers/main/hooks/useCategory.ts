"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export function useCategory() {
  const router = useRouter();
  const categoryArr = ["밥", "국", "반찬", "후식", "일품"];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    const value = searchParams.get("category"); // "반찬"
    setActiveCategory(value);
  }, [searchParams]);

  const goToCategory = (category: string) => {
    router.push(`/?category=${category}&page=1`, { scroll: false });
  };
  const goToHome = () => {
    router.push("/", { scroll: false });
  };

  return {
    categoryArr,
    activeCategory,
    setActiveCategory,
    goToCategory,
    goToHome,
  };
}
