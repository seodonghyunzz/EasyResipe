import { Search } from "lucide-react";
type searchBarType = {
  setName: (val: string) => void;
  SearchRecipe: () => void;
};
export function SearchBar({ setName, SearchRecipe }: searchBarType) {
  return (
    <header className="flex flex-col max-md:gap-8 md:flex-row md:items-center md:justify-between">
      <h2 className="font-bold text-title3 text-label-800 md:text-title2 lg:text-title1 ">
        Recipe
      </h2>
      <div className="relative">
        <Search
          className="absolute -translate-y-1/2 cursor-pointer top-1/2 left-4 text-label-700"
          width={16}
          height={16}
          onClick={SearchRecipe}
        />
        <input
          type="text"
          className="ring-offset-background file:text-sm flex rounded-md border bg-background-default px-6 py-[12.5px] file:border-0 file:bg-transparent file:font-medium placeholder:text-body2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:border-0 disabled:bg-background-alternative disabled:text-status-disable disabled:placeholder:text-status-disable focus:ring-1 focus:ring-component-dark h-[48px] border-line-200 pl-11 text-body-1 placeholder:font-normal placeholder:text-label-500 w-full md:w-[400px] lg:w-[468px]"
          placeholder="검색어를 입력해주세요"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              SearchRecipe();
              setName("");
            }
          }}
        />
      </div>
    </header>
  );
}
