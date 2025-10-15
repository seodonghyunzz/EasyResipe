import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 이미지 포맷 최적화 (WebP/AVIF 자동 변환)
    formats: ["image/avif", "image/webp"],
    // 디바이스 크기별 최적화
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.foodsafetykorea.go.kr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.foodsafetykorea.go.kr",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
