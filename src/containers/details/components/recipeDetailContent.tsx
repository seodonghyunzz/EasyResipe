"use client";
import ReturnButton from "./returnButton";
import { RecipeType } from "@/src/libs/types/recipe";
import { ContentHeader } from "../ui/contentHeader";
import { ContentImg } from "../ui/contentImg";
import { MainContent } from "../ui/mainContent";
import { ContentNav } from "../ui/contentNav";

export function ReCipeDetailContent(props: RecipeType) {
  return (
    <main className="pb-13 pt-[24px] md:py-[40px] lg:py-[80px] min-h-screen mx-5">
      <article className="max-md:container max-md:mx-auto">
        <div className="max-w-[768px] mx-auto">
          <header>
            <ContentNav RCP_PAT2={props.RCP_PAT2} />
            <ContentHeader RCP_NM={props.RCP_NM} HASH_TAG={props.HASH_TAG} />
          </header>
          <section className="mt-7 md:mt-10 lg:mt-14">
            <ContentImg
              ATT_FILE_NO_MK={props.ATT_FILE_NO_MK}
              RCP_NM={props.RCP_NM}
              RCP_PARTS_DTLS={props.RCP_PARTS_DTLS}
            />
            <MainContent {...props} />
          </section>
        </div>
        <section className="mt-8 md:mt-10">
          <ReturnButton />
        </section>
      </article>
    </main>
  );
}
