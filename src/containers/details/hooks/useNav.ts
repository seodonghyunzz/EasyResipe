"use client";
import { useRouter } from "next/navigation";
export function useNav() {
  const router = useRouter();
  const goToCategory = (RCP_PAT2: string) => {
    router.push(`/?category=${RCP_PAT2}`, { scroll: false });
  };
  const goToHome = () => {
    router.push("/", { scroll: false });
  };
  return {
    goToCategory,
    goToHome,
  };
}
