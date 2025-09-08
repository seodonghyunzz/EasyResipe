import Category from "@/main/component/category/category";
import Banner from "../main/component/banner/banner";
import RecipeList from "../main/component/list/recipeList";
import SearchList from "../main/component/search/searchList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const name = params.name;
  const category = params.category;
  const page = parseInt(params.page || "1", 10);

  return (
    <main className="pb-13 pt-[24px] mx-4 md:py-[40px] lg:py-[80px] min-h-screen">
      <article className="mx-auto max-md:container">
        <SearchList />
        <section className="mt-8">
          <Banner />
        </section>
        <section className="mt-8 md:mt-10 lg:mt-11">
          <Category />
        </section>
        <section className="mt-8 md:mt-10">
          <section>
            <RecipeList
              name={name ?? ""}
              category={category ?? ""}
              page={page}
            />
          </section>
        </section>
      </article>
    </main>
  );
}
