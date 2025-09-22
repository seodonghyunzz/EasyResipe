import { QueryClient } from "@tanstack/react-query";

// 서버 사이드에서 사용할 QueryClient 팩토리
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5분
        gcTime: 1000 * 60 * 10, // 10분
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

// 서버 사이드 전용 QueryClient 인스턴스
let serverQueryClient: QueryClient | undefined;

export function getServerQueryClient() {
  if (!serverQueryClient) {
    serverQueryClient = createQueryClient();
  }
  return serverQueryClient;
}
