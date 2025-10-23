import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-[120px]">
      <div className="fixed top-0 left-0 z-40 w-full h-[120px] bg-background-default">
        <div className="flex justify-center size-full">
          <div className="container flex items-center justify-between h-full">
            <div className="flex items-center h-full gap-11 justify-center max-sm:mx-auto">
              <Link href="/">
                <Image
                  src="/logo/myrecipebook.svg"
                  alt="로고"
                  width={182}
                  height={60}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
