import { QueryClient } from "@tanstack/react-query";
import { createQueryClient } from "./queryclient";

let browserQueryClient: QueryClient | null = null;

export function getBrowserQueryClient(): QueryClient {
  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }
  return browserQueryClient;
}
