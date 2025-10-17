import type { Metadata } from "next";
import { Header } from "../src/shared/layout/header";
import { Footer } from "../src/shared/layout/footer";
import "./globals.css";
import Providers from "@/app/provider";

export const metadata: Metadata = {
  title: "밥먹자",
  description: "한식레시피 모음",
  metadataBase: new URL("https://easy-resipe.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "밥먹자",
    locale: "ko_KR",
    title: "밥먹자",
    description: "한식레시피 모음",
  },
  alternates: { canonical: "/" },
  verification: { google: "goQIMOu7pJHAebaNL2Hnabo1chO2PmfReaapWLp2gck" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className={"h-full min-h-screen font-pretendard"}>
        <div className="mx-auto md:container md:min-h-[calc(100dvh-388px-60px)]">
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
