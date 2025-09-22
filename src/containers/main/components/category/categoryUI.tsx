type CategoryType = {
  categoryArr: string[];
  activeCategory: string | null;
  setActiveCategory: (val: string | null) => void;
  goToCategory: (val: string) => void;
  goToHome: () => void;
};

export function CategoryUi({
  categoryArr,
  activeCategory,
  setActiveCategory,
  goToCategory,
  goToHome,
}: CategoryType) {
  return (
    <div className="size-full">
      <div className="flex items-center gap-4 text-body1 text-label-500">
        <button
          className="cursor-pointer"
          onClick={() => {
            goToHome();
            setActiveCategory(null);
          }}
        >
          <span
            className={`${
              activeCategory === null ? "font-bold text-label-900" : ""
            }`}
          >
            전체
          </span>
        </button>
        {categoryArr.map((category, i) => (
          <button
            className="flex flex-col items-center cursor-pointer"
            key={i}
            onClick={() => {
              goToCategory(category);
              setActiveCategory(category);
            }}
          >
            <span
              className={`${
                activeCategory === category ? "font-bold text-label-900" : ""
              }`}
            >
              {category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
