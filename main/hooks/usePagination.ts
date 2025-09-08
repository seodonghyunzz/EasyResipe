import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function UsePagination(total_count: number) {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesPerGroup = 5;
  const recipePerPage = 12;
  const totalPages = Math.ceil(total_count / recipePerPage);
  const pageArr = Array.from(
    { length: Math.min(pagesPerGroup, totalPages - startPage + 1) },
    (_, i) => startPage + i
  );
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [searchParams, totalPages]);

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
      setCurrentPage((prev) => prev + 1);

      params.set("page", String(currentPage + 1));
      router.push(`/?${params.toString()}`);
    }
  };

  const getPrevPage = () => {
    if (currentPage > 1) {
      if (currentPage === startPage) {
        setStartPage(currentPage - pagesPerGroup);
      }
      setCurrentPage((prev) => prev - 1);

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
