import { Link2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="lg:gap-20 container flex flex-wrap-reverse items-start gap-8 p-10 md:flex-nowrap md:gap-11 lg:py-[60px] mx-auto">
        <div className="grow">
          <div className="flex flex-col gap-6 mt-6 md:mt-9">
            <div className="font-normal text-body3 text-label-500">
              <p>© 2025. Chunmyo. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="font-medium text-body2 text-label-700">@Contact</h3>
          <div className="flex  gap-2 font-medium text-body3 text-label-700 max-md:flex-col">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-label-500">E-mail</h3>
              <div className="font-normal text-label-900">
                <p>tjsdbgus1117@naver.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-label-500">github</h3>
              <div className="font-normal text-label-900">
                <div className="flex gap-2">
                  <Link2 stroke="#2fadff" />
                  <Link href="https://github.com/seodonghyunzz">
                    seodonghyunzz
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-label-500">blog</h3>
              <div className="font-normal text-label-900">
                <div className="flex gap-2">
                  <Link2 stroke="#2fadff" />
                  <Link href="https://velog.io/@chunmyo">velog/@chunmyo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
