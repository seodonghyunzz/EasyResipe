"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { getBrowserQueryClient } from "@/src/libs/queryclient/browserClient";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getBrowserQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
