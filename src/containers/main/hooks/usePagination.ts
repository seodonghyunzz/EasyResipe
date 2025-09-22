"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export function usePagination(total_count: number) {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const pagesPerGroup = 5;
  const recipePerPage = 12;
  const totalPages = Math.ceil(total_count / recipePerPage);
  const pageArr = useMemo(() => {
    const newStart =
      Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
    setStartPage(newStart);
    return Array.from(
      { length: Math.min(pagesPerGroup, totalPages - newStart + 1) },
      (_, i) => newStart + i
    );
  }, [currentPage, totalPages, pagesPerGroup]);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [searchParams, totalPages, setCurrentPage]);

  const getNextPageGroup = () => {
    const nextStart = startPage + pagesPerGroup;
    if (nextStart <= totalPages) {
      setStartPage(nextStart);
      setCurrentPage(nextStart);
    }
    params.set("page", String(nextStart));
    router.push(`/?${params.toString()}`);
  };

  const getPrevPageGroup = () => {
    const prevStart = startPage - pagesPerGroup;
    if (prevStart >= 1) {
      setStartPage(prevStart);
      setCurrentPage(prevStart);
    }
    params.set("page", String(prevStart));
    router.push(`/?${params.toString()}`);
  };

  const getNextPage = () => {
    if (currentPage < totalPages) {
      if (currentPage >= startPage + 4) {
        setStartPage(startPage + pagesPerGroup);
      }
      setCurrentPage(currentPage + 1);

      params.set("page", String(currentPage + 1));
      router.push(`/?${params.toString()}`);
    }
  };

  const getPrevPage = () => {
    if (currentPage > 1) {
      if (currentPage === startPage) {
        setStartPage(currentPage - pagesPerGroup);
      }
      setCurrentPage(currentPage - 1);

      params.set("page", String(currentPage - 1));
      router.push(`/?${params.toString()}`);
    }
  };
  const getButtonPage = (page: number) => {
    setCurrentPage(page);
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };
  return {
    getButtonPage,
    getPrevPage,
    getNextPage,
    getPrevPageGroup,
    getNextPageGroup,
    pageArr,
    currentPage,
    startPage,
  };
}
