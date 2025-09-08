"use client";
import { UsePagination } from "@/main/hooks/usePagination";
import { PageButton } from "./pageButton";

interface PageButtonType {
  total_count: number;
}

export default function Pagination({ total_count }: PageButtonType) {
  const pagination = UsePagination(total_count);
  return <PageButton {...pagination} />;
}
