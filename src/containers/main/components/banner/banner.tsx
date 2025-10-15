import Link from "next/link";
import { bannerImages } from "./bannerImage";
import { BannerCarousel } from "./bannerMobileCarousel";
import Image from "next/image";

export async function Banner() {
  return (
    <>
      <div className="hidden gap-6 md:flex">
        {bannerImages.map((bannerimg, i) => (
          <Link href={bannerimg.href} key={i} className="grow">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-line-200">
              <Image
                src={bannerimg.src}
                alt={bannerimg.alt}
                width={800}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
              />
            </div>
          </Link>
        ))}
      </div>
      <BannerCarousel />
    </>
  );
}
