"use client";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

type pageButtonType = {
  getPrevPageGroup: () => void;
  getPrevPage: () => void;
  pageArr: number[];
  currentPage: number;
  getButtonPage: (page: number) => void;
  getNextPage: () => void;
  getNextPageGroup: () => void;
};

export function PageButton({
  getPrevPageGroup,
  getPrevPage,
  pageArr,
  currentPage,
  getButtonPage,
  getNextPage,
  getNextPageGroup,
}: pageButtonType) {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="flex gap-2">
        <div className="cursor-pointer" onClick={getPrevPageGroup}>
          <ChevronsLeft />
        </div>
        <div className="cursor-pointer" onClick={getPrevPage}>
          <ChevronLeft />
        </div>
      </div>
      <div className="flex items-center">
        {pageArr.map((page) => (
          <button
            className={`inline-flex justify-center items-center size-8 rounded-[100%] hover:bg-background-alternative cursor-pointer ${
              currentPage === page ? "bg-background-alternative" : ""
            }`}
            key={page}
            onClick={() => {
              getButtonPage(page);
            }}
          >
            <span className={currentPage === page ? "font-bold" : ""}>
              {page}
            </span>
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer" onClick={getNextPage}>
          <ChevronRight />
        </div>
        <div className="cursor-pointer" onClick={getNextPageGroup}>
          <ChevronsRight />
        </div>
      </div>
    </div>
  );
}
