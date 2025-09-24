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
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </Link>
        ))}
      </div>
      <BannerCarousel />
    </>
  );
}
