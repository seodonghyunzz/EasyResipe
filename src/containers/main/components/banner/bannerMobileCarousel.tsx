"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { bannerImages } from "./bannerImage";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export function BannerCarousel() {
  return (
    <div className="md:hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {bannerImages.map((bannerimg, i) => (
          <SwiperSlide key={i}>
            <Link href={bannerimg.href}>
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
                <Image
                  src={bannerimg.src}
                  alt={bannerimg.alt}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-2xl"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
