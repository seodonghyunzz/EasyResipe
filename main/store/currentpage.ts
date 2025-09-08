import { create } from "zustand";

interface PaginationState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  startPage: number;
  setStartPage: (page: number) => void;
}

export const useCurrentPageStore = create<PaginationState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  startPage: 1,
  setStartPage: (page) => set({ startPage: page }),
}));
