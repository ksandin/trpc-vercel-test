import { createTRPCReact } from "@trpc/react-query";
import type { ApiRouter } from "../api/createRouter";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

export const trpc = createTRPCReact<ApiRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_API_BASE_URL + "/api/trpc",
    }),
  ],
});