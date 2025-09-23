import { Category } from "@/src/containers/main/components/category/category";
import { Banner } from "../src/containers/main/components/banner/banner";
import { RecipeListWrapper } from "@/src/containers/main/components/list/recipeListWrapper";
import { SearchList } from "../src/containers/main/components/search/searchList";

export default async function Home() {
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
          <RecipeListWrapper />
        </section>
      </article>
    </main>
  );
}
