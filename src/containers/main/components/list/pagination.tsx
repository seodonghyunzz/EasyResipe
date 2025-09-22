"use client";
import { usePagination } from "@/src/containers/main/hooks/usePagination";
import { PageButton } from "./pageButton";

interface PageButtonType {
  total_count: number;
}

export function Pagination({ total_count }: PageButtonType) {
  const pagination = usePagination(total_count);
  return <PageButton {...pagination} />;
}
