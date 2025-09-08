"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UseSearch() {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const SearchRecipe = () => {
    router.push(`/?name=${name}`);
  };
  return {
    name,
    setName,
    SearchRecipe,
  };
}
